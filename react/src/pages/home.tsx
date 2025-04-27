import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Settings } from "lucide-react";

const Home = () => {
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d1117] text-white px-4 relative overflow-hidden">
      {/* Linha neon no topo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-green-500 blur-sm opacity-30 animate-pulse" />

      {/* Container principal SEM motion.div (removemos a animação de layout aqui) */}
      <div className="max-w-2xl w-full text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-100 mb-4"
        >
          Runner Ball 2D
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10"
        >
          Pule os obstáculos e colete os pontos. Aumente sua pontuação... se conseguir acompanhar a velocidade!
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <Link to="/jogar" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ boxShadow: "0 0 10px #2ea043", scale: 1.03 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
              className="w-full sm:w-auto bg-[#238636] hover:bg-[#2ea043] text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              Jogar
            </motion.button>
          </Link>

          <Link to="/ranking" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-transparent border border-[#30363d] text-gray-300 hover:bg-[#21262d] px-6 py-3 rounded-lg font-medium transition-all">
              Ranking
            </button>
          </Link>

          <button
            onClick={() => setShowConfig(prev => !prev)}
            className="bg-[#161b22] border border-[#30363d] hover:bg-[#21262d] px-4 py-3 rounded-lg text-gray-400 transition-all flex items-center gap-2"
          >
            <Settings size={18} />
            Configurações
          </button>
        </div>

        {/* Configurações com AnimatePresence */}
        <AnimatePresence>
          {showConfig && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#161b22] border border-[#30363d] overflow-hidden rounded-lg text-left text-sm w-full sm:w-80 mx-auto mb-4 shadow-md"
            >
              <div className="p-4">
                <p className="text-gray-300 mb-2">⚙️ Em breve:</p>
                <ul className="text-gray-400 list-disc pl-5 space-y-1">
                  <li>Modo escuro/claro</li>
                  <li>Som ambiente</li>
                  <li>Skins para bola</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Rodapé */}
      <div className="absolute bottom-4 text-sm text-gray-500">
        Runner Ball 2D v1.0 — Desenvolvido por João Pedro :)
      </div>
    </div>
  );
};

export default Home;