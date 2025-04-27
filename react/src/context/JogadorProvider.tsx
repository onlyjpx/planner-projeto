import { useState, useEffect, ReactNode } from 'react';
import { JogadorContext, Jogador } from '../context/JogadorContext';

export const JogadorProvider = ({ children }: { children: ReactNode }) => {
   const [jogador, setJogador] = useState<Jogador | null>(null);

   useEffect(() => {
      const jogadorSalvo = localStorage.getItem("jogador");
      if (jogadorSalvo) {
         setJogador(JSON.parse(jogadorSalvo));
      }
   }, []);

   return (
      <JogadorContext.Provider value={{ jogador, setJogador }}>
         {children}
      </JogadorContext.Provider>
   );
};
