import React from 'react';
import { useNavigate } from 'react-router-dom';
const WinModal = ({
  gameOver,
  showWinModal,
  moves,
  timeTaken,
  onReplay,
}) => {
  if (!showWinModal && !gameOver) return null;

const navigate = useNavigate();

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {gameOver ? '⏱️ Time Up!' : '🎉 You Win!'}
            </h5>
          </div>
          <div className="modal-body">
            {gameOver ? (
              <p>Try again! Time ran out.</p>
            ) : (
              <>
                <p>
                  You completed the game in <strong>{moves}</strong> moves and{' '}
                  <strong>{Math.max(0, timeTaken)}</strong> seconds.
                </p>
                <p>Score submitted automatically.</p>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onReplay}>
              Play Again
            </button>
          <button onClick={() => navigate('/leaderboard')} className="btn btn-primary">See Leaderboard</button>  
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  );
};

export default WinModal;
