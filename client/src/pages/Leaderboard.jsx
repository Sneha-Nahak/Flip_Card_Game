import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const VITE_SCORE_URL = import.meta.env.VITE_SCORE_URL;

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [level, setLevel] = useState('easy');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${VITE_SCORE_URL}/leaderboard/${level}`)
      .then(res => {
        const rawScores = res.data;

        // Keep only the latest score for each user
        const latestScoresMap = new Map();

        rawScores.forEach(score => {
          const existing = latestScoresMap.get(score.name);
          if (!existing || new Date(score.createdAt) > new Date(existing.createdAt)) {
            latestScoresMap.set(score.name, score);
          }
        });

        setScores(Array.from(latestScoresMap.values()));
      })
      .catch(() => setScores([]));
  }, [level]);

  return (
    <div className="container">
      <h2 className="my-4">🏆 Leaderboard - {level.toUpperCase()}</h2>
      <div className="mb-3">
        <select value={level} onChange={e => setLevel(e.target.value)} className="form-select w-50">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      {scores.length === 0 ? (
        <p>No scores yet!</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Player</th>
              <th>Moves</th>
              <th>Time Taken (s)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s, i) => (
              <tr key={i}>
                <td>{s._id}</td>
                <td>{s.moves}</td>
                <td>{s.timeTaken}</td>
                <td>{new Date(s.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
