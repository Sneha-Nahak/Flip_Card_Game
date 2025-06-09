import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TileMatchingGame from './TileMatchingGame';

export default function GamePage() {
  const { level } = useParams();
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const gridSize = level === 'easy' ? 4 : level === 'medium' ? 6 : 8;

  useEffect(() => {
    if (started && !intervalId) {
      const id = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
      setIntervalId(id);
    }

    return () => clearInterval(intervalId);
  }, [started]);

  const stopTimer = () => clearInterval(intervalId);

  return (
    <div className="container text-center mt-3">
      <h2>{level.charAt(0).toUpperCase() + level.slice(1)} Mode</h2>
      <p>Time: {time}s</p>
      <TileMatchingGame
        gridSize={gridSize}
        level={level}
        time={time}
        onStart={() => setStarted(true)}
        onWin={() => stopTimer()}
      />
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        🔙 Back
      </button>
    </div>
  );
}
