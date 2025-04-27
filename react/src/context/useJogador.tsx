import { useContext } from 'react';
import { JogadorContext } from '../context/JogadorContext';

export const useJogador = () => {
   const context = useContext(JogadorContext);
   if (!context) {
      throw new Error("useJogador deve ser usado dentro de um JogadorProvider");
   }
   return context;
};
