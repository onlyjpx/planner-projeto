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
    <div className="flex justify-center items-center h-64">
      <div className="animate-pulse text-2xl font-bold text-cyan-400">
        Carregando ranking...
      </div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-2xl font-bold text-red-500">
        {error}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-green-700 mb-2 drop-shadow-lg">
          Ranking Geral
        </h2>
        <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
      </div>

      <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-2xl overflow-hidden border border-cyan-500 border-opacity-30">
        <table className="min-w-full divide-y divide-cyan-900">
          <thead className="bg-gradient-to-r from-cyan-900 to-gray-900">
            <tr>
              <th className="px-8 py-5 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                Posição
              </th>
              <th className="px-8 py-5 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                Jogador
              </th>
              <th className="px-8 py-5 text-left text-sm font-bold text-cyan-300 uppercase tracking-wider">
                Pontuação
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyan-900">
            {ranking.map((item, index) => (
              <tr
                key={item.id}
                className={`transition-all hover:bg-cyan-900 hover:bg-opacity-30 ${index % 2 === 0 ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-800 bg-opacity-70'
                  }`}
              >
                <td className="px-8 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {index < 3 ? (
                      <span className={`text-2xl font-bold ${index === 0 ? 'text-yellow-400' :
                        index === 1 ? 'text-gray-300' :
                          'text-amber-600'
                        }`}>
                        {index + 1}
                      </span>
                    ) : (
                      <span className="text-lg font-medium text-gray-300">
                        {index + 1}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-8 py-4 whitespace-nowrap">
                  <div className="text-lg font-medium text-gray-100">
                    {item.nomeJogador}
                  </div>
                </td>
                <td className="px-8 py-4 whitespace-nowrap">
                  <div className="text-lg font-bold text-cyan-400">
                    {item.pontos.toLocaleString()} pts
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {ranking.length === 0 && !loading && (
        <div className="text-center py-10 text-gray-400 italic">
          Nenhum registro encontrado no ranking
        </div>
      )}
    </div>
  );
};

export default Ranking;