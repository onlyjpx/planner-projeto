import React, { useEffect, useState } from 'react';
import { rankingService, PontuacaoRanking } from '../services/rankingService';

const Ranking: React.FC = () => {
  const [ranking, setRanking] = useState<PontuacaoRanking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const carregarRanking = async () => {
      try {
        setLoading(true);
        const dados = await rankingService.getRankingGeral();
        setRanking(dados);
        setLoading(false);
      } catch (err) {
        setError('Falha ao carregar o ranking. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    carregarRanking();
  }, []);

  if (loading) return (
    <div className="text-center py-5 italic text-gray-600">
      Carregando ranking...
    </div>
  );

  if (error) return (
    <div className="text-center py-5 text-red-600 font-bold">
      {error}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Ranking Geral</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Posição
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jogador
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pontuação
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ranking.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.nomeJogador}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.pontos}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;