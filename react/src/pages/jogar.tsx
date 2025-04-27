import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarJogador } from "../services/jogadorService";
import { motion } from "framer-motion";

const Jogar = () => {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');
  const [criado, setCriado] = useState(false);
  const navigate = useNavigate();

  const handleCriar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    const resultado = await criarJogador({ nome });
    localStorage.setItem("jogador", JSON.stringify(resultado));
    if (resultado?.erro) {
      setErro(resultado.erro);
    } else {
      setCriado(true);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0d1117] text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#161b22] border border-[#30363d] p-8 rounded-2xl shadow-xl text-center max-w-md w-full"
      >
        <h1 className="text-4xl font-bold text-gray-100 mb-2">Runner Ball 2D</h1>
        <p className="text-gray-400 mb-6">Você está pronto para correr por sua vida?</p>

        <div className="flex flex-col gap-4">
          <button
            className={`transition py-3 px-6 rounded-lg text-lg font-semibold w-full
              ${!criado
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-gray-800 hover:bg-gray-600 hover:text-gray-800 hover:cursor-pointer"}
            `}
            disabled={!criado}
            onClick={() => navigate("/game")}
          >
            Iniciar Jogo
          </button>

          <button
            onClick={() => navigate("/ranking")}
            className="w-full border border-[#30363d] text-blue-400 hover:text-blue-300 transition py-2 rounded-md"
          >
            Ver Ranking
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full border border-[#30363d] text-gray-500 hover:text-gray-300 transition py-2 rounded-md text-sm"
          >
            Voltar para a Home
          </button>

          <div className="pt-6">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className="bg-[#0d1117] border border-[#30363d] text-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {erro && (
              <p className="text-red-500 text-sm mt-2">{erro}</p>
            )}

            <motion.button
              onClick={handleCriar}
              className={`mt-4 transition py-2 px-4 rounded-lg text-white font-semibold w-full 
                ${criado
                  ? "bg-green-600"
                  : "bg-cyan-800 hover:bg-cyan-950"}
              `}
              animate={{ scale: criado ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {criado ? "✔ Criado!" : "Criar Jogador"}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jogar;
