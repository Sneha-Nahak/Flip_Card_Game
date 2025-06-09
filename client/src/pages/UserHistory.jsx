import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const VITE_SCORE_URL = import.meta.env.VITE_SCORE_URL;

const difficultyOrder = ["easy", "medium", "hard"];

const UserHistory = () => {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState({});

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(`${VITE_SCORE_URL}/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = res.data;

        // Group by level and sort by date
        const grouped = {};
        data.forEach((score) => {
          if (!grouped[score.level]) grouped[score.level] = [];
          grouped[score.level].push(score);
        });

        // Sort each level's scores by most recent
        for (const level in grouped) {
          grouped[level].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        }

        setHistory(grouped);
      } catch (err) {
        console.error("Failed to fetch user history:", err);
        setHistory({});
      }
    };

    if (user?.name) fetchHistory();

  }, [user]);

  return (
    <div className="container">
      <h2 className="my-4">🎮 Your Game History</h2>
      {difficultyOrder.map(
        (level) =>
          history[level]?.length > 0 && (
            <div key={level} className="mb-4">
              <h4 className="text-capitalize">{level} Level</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Moves</th>
                    <th>Time Taken (s)</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {history[level].map((s, i) => (
                    <tr key={i}>
                      <td>{s.moves}</td>
                      <td>{s.timeTaken}</td>
                      <td>{new Date(s.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
      )}
      {!Object.keys(history).length && (
        <p>You haven’t completed any games yet.</p>
      )}
    </div>
  );
};

export default UserHistory;
