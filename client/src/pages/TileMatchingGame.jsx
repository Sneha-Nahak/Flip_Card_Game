import React, { useEffect, useState, useRef, useContext } from 'react';
import Tile from '../components/Tile';
import WinModal from '../components/WinModal';
import api from '../api';
import '../styles/TileMatchingGame.css';
import { iconSet } from '../iconSet';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  // import AuthContext
import axios from 'axios';

const VITE_SCORE_URL = import.meta.env.VITE_SCORE_URL;

const generateTiles = (size) => {
  const totalTiles = size * size;
  const pairsNeeded = totalTiles / 2;
  const selectedIcons = iconSet
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, pairsNeeded);
  return [...selectedIcons, ...selectedIcons]
    .map((icon, idx) => ({ id: idx, icon, isFlipped: false, isMatched: false }))
    .sort(() => Math.random() - 0.5);
};

const TileMatchingGame = ({ gridSize, level, time, onStart, onWin }) => {
  const { user } = useContext(AuthContext); // get logged-in user
  const [tiles, setTiles] = useState(generateTiles(gridSize));
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [disableClick, setDisableClick] = useState(false);
  const [moves, setMoves] = useState(0);
  const [started, setStarted] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);
  // remove playerName state since not needed for submission now
  const [timer, setTimer] = useState(time);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef(null);
  const totalTimeRef = useRef(time);

  useEffect(() => {
    if (selectedTiles.length === 2) {
      setDisableClick(true);
      const [first, second] = selectedTiles;
      setMoves((prev) => prev + 1);

      if (first.icon === second.icon) {
        setTiles((prev) =>
          prev.map((tile) =>
            tile.icon === first.icon ? { ...tile, isMatched: true } : tile
          )
        );
        resetSelection();
      } else {
        setTimeout(() => {
          setTiles((prev) =>
            prev.map((tile) =>
              tile.id === first.id || tile.id === second.id
                ? { ...tile, isFlipped: false }
                : tile
            )
          );
          resetSelection();
        }, 800);
      }
    }
  }, [selectedTiles]);

  useEffect(() => {
    const allMatched = tiles.every((tile) => tile.isMatched);
    if (allMatched && tiles.length > 0) {
      clearInterval(intervalRef.current);
      setShowWinModal(true);
      onWin?.();
      if (user) {
        // Automatically submit score when the game is won and user is logged in
        handleSubmitScore();
      }
    }
  }, [tiles]);

  useEffect(() => {
    if (started && timer > 0 && !gameOver && !showWinModal) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setGameOver(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [started, gameOver, showWinModal]);

  const resetSelection = () => {
    setSelectedTiles([]);
    setDisableClick(false);
  };

  const handleClick = (tile) => {
    if (gameOver || disableClick || tile.isFlipped || tile.isMatched) return;
    if (!started) {
      setStarted(true);
      onStart?.();
    }
    if (selectedTiles.length === 1 && selectedTiles[0].id === tile.id) return;

    const flippedTile = { ...tile, isFlipped: true };
    setTiles((prev) =>
      prev.map((t) => (t.id === tile.id ? flippedTile : t))
    );
    setSelectedTiles((prev) => [...prev, flippedTile]);
  };

  const handlePlayAgain = () => {
    clearInterval(intervalRef.current);
    setTiles(generateTiles(gridSize));
    setSelectedTiles([]);
    setMoves(0);
    setShowWinModal(false);
    setStarted(false);
    setGameOver(false);
    setTimer(time); // Reset timer to initial
    totalTimeRef.current = time; // update total time ref as well
  };

  const handleSubmitScore = async () => {
    if (!user) return; // no user, no submission
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        VITE_SCORE_URL,
        {
          level,
          moves,
          timeTaken: totalTimeRef.current - timer,
         
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
    } catch (err) {
      alert('Score submission failed. Please login again.');
    }
  };

  return (
    <div className="text-center p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          ⬅ Back
        </button>
        <div>
          <strong>Moves:</strong> {moves} | <strong>Time Left:</strong> {timer}s
        </div>
        <div style={{ width: '70px' }} />
      </div>

      <div className="tile-grid" style={{ '--grid-size': gridSize }}>
        {tiles.map((tile) => (
          <Tile key={tile.id} tile={tile} onClick={() => handleClick(tile)} />
        ))}
      </div>

      <WinModal
        gameOver={gameOver}
        showWinModal={showWinModal}
        moves={moves}
        timeTaken={Math.max(0, time - timer)}
        // Remove playerName and setPlayerName props since no input needed now
        onSubmit={handleSubmitScore}
        onReplay={handlePlayAgain}
      />
    </div>
  );
};

export default TileMatchingGame;
