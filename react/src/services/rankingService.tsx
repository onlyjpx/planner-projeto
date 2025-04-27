import { api } from './api';

export interface PontuacaoRanking {
  id: number;
  jogadorId: number;
  nomeJogador: string;
  pontos: number;
}

export const rankingService = {
  async getRankingGeral(): Promise<PontuacaoRanking[]> {
    try {
      const response = await api.get('/pontuacoes/ranking');
      console.log('Dados recebidos:', response.data);
      return response.data.map((item: { id: number; pontos: number; jogador: { id: number; nome: string } }) => ({
        id: item.id,
        jogadorId: item.jogador.id,
        nomeJogador: item.jogador.nome,
        pontos: item.pontos,
      }));
    } catch (error) {
      console.error('Erro ao obter ranking geral:', error);
      throw error;
    }
  }
};