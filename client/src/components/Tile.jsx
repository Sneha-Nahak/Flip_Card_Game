// Tile.jsx
import React from 'react';
import '../styles/TileMatchingGame.css';

const Tile = ({ tile, onClick }) => {
  const Icon = tile.icon;
  const isFlipped = tile.isFlipped || tile.isMatched;

  return (
    <div
      className={`tile-inner tile ${isFlipped ? 'flipped' : ''} ${
        tile.isMatched ? 'disabled' : ''
      }`}
      onClick={onClick}
    >
      <div className="tile-front">
        <Icon />
      </div>
      <div className="tile-back">?</div>
    </div>
  );
};

export default Tile;
