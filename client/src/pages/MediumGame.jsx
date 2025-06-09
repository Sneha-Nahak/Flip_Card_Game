import React from 'react';
import TileMatchingGame from './TileMatchingGame';

export default function MediumGame() {
  return (
    <TileMatchingGame
      gridSize={6}
      level="medium"
      time={180} // 90 seconds
      onStart={() => {}}
      onWin={() => {}}
    />
  );
}
