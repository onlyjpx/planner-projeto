import { api } from './api';
import axios from 'axios';

export interface JogadorDTO {
  nome: string;
}

export const criarJogador = async (jogador: JogadorDTO) => {
  try {
    const response = await api.post('/jogadores', jogador);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return { erro: 'Nome já está em uso. Tente outro.' };
      }
    }
    return { erro: 'Erro ao criar jogador. Tente novamente mais tarde.' };
  }
};

export const buscarJogadorPorId = async (id: number) => {
  try {
    const response = await api.get(`/jogadores/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar jogador:', error);
    throw error;
  }
};
