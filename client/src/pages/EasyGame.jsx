import React from 'react';
import TileMatchingGame from './TileMatchingGame';

export default function EasyGame() {
  return (
    <TileMatchingGame
      gridSize={6}
      level="easy"
      time={240} // 120 seconds
      onStart={() => {}}
      onWin={() => {}}
    />
  );
}
