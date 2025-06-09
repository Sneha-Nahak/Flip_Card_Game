import React from 'react';
import TileMatchingGame from './TileMatchingGame';

export default function HardGame() {
  return (
    <TileMatchingGame
      gridSize={6}
      level="hard"
      time={120} // 80 seconds
      onStart={() => {}}
      onWin={() => {}}
    />
  );
}
