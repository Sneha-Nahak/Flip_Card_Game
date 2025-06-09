import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100  text-white">
      <div className="card bg-secondary text-white p-5 shadow-lg" style={{ maxWidth: '500px', borderRadius: '15px' }}>
        <div className="card-body text-center">
          <h1 className="card-title mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>Tile Matcher</h1>
          <p className="card-text mb-5" style={{ fontSize: '1.2rem' }}>Test your memory and speed!</p>
          <div className="d-grid gap-3 col-10 mx-auto">
            <Link 
              to="/easy" 
              className="btn btn-success btn-lg game-button"
              style={{ transition: 'all 0.2s ease-in-out' }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Easy
            </Link>
            <Link 
              to="/medium" 
              className="btn btn-warning btn-lg game-button"
              style={{ transition: 'all 0.2s ease-in-out' }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Medium
            </Link>
            <Link 
              to="/hard" 
              className="btn btn-danger btn-lg game-button"
              style={{ transition: 'all 0.2s ease-in-out' }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Hard
            </Link>
            <Link 
              to="/leaderboard" 
              className="btn btn-info btn-lg game-button mt-4"
              style={{ transition: 'all 0.2s ease-in-out' }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}