import React from 'react';
import { useJogador } from '../context/useJogador';

type HUDProps = {
  score: number;
  highScore: number;
};

const HUD: React.FC<HUDProps> = ({ score, highScore }) => {
  const { jogador } = useJogador();
  console.log('Jogador:', jogador); // Adicionei o console.log aqui para verificar o jogador
  const nome = jogador ? jogador.nome : 'Jogador Desconhecido';

  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex justify-between gap-8 text-gray-800 font-semibold text-lg z-50">
      <div className="bg-white/70 px-4 py-2 rounded-lg shadow-md">
        Jogador: <span className="font-bold">{nome}</span>
      </div>
      <div className="bg-white/70 px-4 py-2 rounded-lg shadow-md">
        🏁 Score: <span className="font-bold">{score}</span>
      </div>
      <div className="bg-white/70 px-4 py-2 rounded-lg shadow-md">
        🏆 High Score: <span className="font-bold">{highScore}</span>
      </div>
    </div>
  );
};

export default HUD;
