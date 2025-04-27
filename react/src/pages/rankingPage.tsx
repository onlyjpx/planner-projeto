import Ranking from '../components/Ranking';

const RankingPage = () => {
  return (
    <div>
      <h1>Ranking Geral</h1>
      <Ranking jogadorId={1} /> {/* Altere o ID conforme necessário */}
    </div>
  );
};

export default RankingPage;
