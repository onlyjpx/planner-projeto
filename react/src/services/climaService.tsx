import { api } from './api';

export interface JogadorDTO {
  nome: string;
}

export const criarJogador = async (jogador: JogadorDTO) => {
  try {
    const response = await api.post('/jogadores', jogador);
    return response.data; 
  } catch (error) {
    console.error('Erro ao criar jogador:', error);
    throw error;
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
