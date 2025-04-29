import { api } from './api';

export const enviarPontuacao = async (dados: {
  jogadorId: number;
  basePontos: number;
  velocidade: number;
  tempoSobrevivido: number;
}) => {
  try {
    const response = await api.post('/pontuacoes', dados);
    console.log("Pontuação enviada com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar pontuação:", error);
    throw error;
  }
};
