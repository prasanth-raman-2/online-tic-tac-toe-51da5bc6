import React from 'react';

// PUBLIC_INTERFACE
const Board = ({ squares, onClick }) => {
  return (
    <div className="game-board">
      {squares.map((square, i) => (
        <button
          key={i}
          className={`square ${square}`}
          onClick={() => onClick(i)}
          disabled={square}
          aria-label={`Square ${i + 1}`}
        >
          {square}
        </button>
      ))}
    </div>
  );
};

export default Board;
