import React from 'react';

interface GameOverOverlayProps {
  score: number;
  highScore: number;
  onRetry: () => void;
  onHome: () => void;
}

const GameOverOverlay: React.FC<GameOverOverlayProps> = ({
  score,
  highScore,
  onRetry,
  onHome,
}) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white z-50">
      <h1 className="text-5xl font-bold text-red-500 mb-6">💀 Game Over</h1>
      <p className="text-xl mb-2">Score: <span className="font-semibold">{Math.floor(score)}</span></p>
      <p className="text-xl mb-6">High Score: <span className="font-semibold">{Math.floor(highScore)}</span></p>

      <div className="flex gap-4">
        <button
          onClick={onRetry}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-lg font-semibold transition"
        >
          🔁 Jogar Novamente
        </button>
        <button
          onClick={onHome}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold transition"
        >
          🏠 Início
        </button>
      </div>
    </div>
  );
};

export default GameOverOverlay;
