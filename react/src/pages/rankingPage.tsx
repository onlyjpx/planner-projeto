import Ranking from '../components/Ranking';
import { useNavigate } from 'react-router-dom';

const RankingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <button onClick={() => navigate('/')} className="mb-4 bg-gray-700 hover:bg-green-800 text-white px-4 py-2 rounded-md">
        Voltar para o Início
      </button>
      <Ranking jogadorId={1} />
    </div>
  );
};

export default RankingPage;
