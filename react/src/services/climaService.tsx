import { api } from "./api";
import axios from "axios";

export interface ClimaResponse {
  temperatura: number;
  condicao: string;
}

export const buscarClima = async (
): Promise<ClimaResponse | { erro: string }> => {
  try {
    const response = await api.get(
      `/clima/atual`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return { erro: "Cidade não encontrada." };
      }
    }
    return { erro: "Erro ao buscar clima. Tente novamente mais tarde." };
  }
};