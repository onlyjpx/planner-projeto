import { createContext } from 'react';

export type Jogador = {
   id: number;
   nome: string;
};

export type JogadorContextType = {
   jogador: Jogador | null;
   setJogador: (jogador: Jogador | null) => void;
};

export const JogadorContext = createContext<JogadorContextType | undefined>(undefined);
