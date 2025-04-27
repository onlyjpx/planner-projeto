import { Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Jogar from './pages/jogar';
import RankingPage from './pages/rankingPage';
import Game from './pages/game';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jogar" element={<Jogar />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}
