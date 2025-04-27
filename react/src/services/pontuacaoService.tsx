import { api } from './api'; // sua instância do axios

export const enviarPontuacao = async (dados: {
  jogadorId: number;
  pontuacaoBase: number;
  velocidade: number;
  tempoSobrevivido: number;
}) => {
  try {
    const response = await api.post('/pontuacoes', dados);
    return response.data; // deve retornar a pontuação final calculada
  } catch (error) {
    console.error("Erro ao enviar pontuação:", error);
    throw error;
  }
};
