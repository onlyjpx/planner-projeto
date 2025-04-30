import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Phaser from "phaser";
import DinoScene from "../scenes/DinoScene";
import GameOverOverlay from "../components/GameOverOverlay";
import HUD from "../components/HUD";
import { enviarPontuacao } from "../services/pontuacaoService";
import { useJogador } from "../context/useJogador";
import { buscarClima } from "../services/climaService";

const Game: React.FC = () => {
  const gameRef = useRef<HTMLDivElement>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const phaserInstance = useRef<Phaser.Game | null>(null);
  const navigate = useNavigate();
  const { jogador } = useJogador();

  const handleRetry = () => {
    setIsGameOver(false);
    setScore(0);
    if (phaserInstance.current) {
      phaserInstance.current.scene.stop("DinoScene");
      phaserInstance.current.scene.start("DinoScene");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const iniciarJogo = async () => {
      const corDeFundo = "#f4f4f4";
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: corDeFundo,
        physics: {
          default: "arcade",
          arcade: {
            gravity: { x: 0, y: 600 },
            debug: false,
          },
        },
        scene: DinoScene,
        parent: gameRef.current!,
      };

      const game = new Phaser.Game(config);
      phaserInstance.current = game;

      const loadClima = async () => {
        const clima = await buscarClima();
        if (!("erro" in clima)) {
          const scene = game.scene.getScene("DinoScene") as DinoScene;
          scene.mudarCenarioBaseadoNoClima(clima.condicao.toLowerCase());
        }
      };
      loadClima();

      game.events.on("ready", () => {
        const scene = game.scene.getScene("DinoScene");

        scene.events.on(
          "game-over",
          (data: { score: number; speed: number; timeAlive: number }) => {
            const finalScore = Number.isFinite(data.score) ? data.score : 0;
            setScore(finalScore);
            setHighScore((prev) => Math.max(prev, finalScore));
            setIsGameOver(true);

            console.log("Pontuação final:", finalScore);
            console.log("Velocidade:", data.speed);
            console.log("Tempo de sobrevivência:", data.timeAlive);
            console.log("ID do jogador:", jogador?.id);

            if (jogador) {
              enviarPontuacao({
                jogadorId: jogador.id,
                basePontos: finalScore,
                velocidade: data.speed,
                tempoSobrevivido: data.timeAlive,
              });
            }
          }
        );

        scene.events.on("score-changed", (value: number) => {
          setScore(value);
        });
      });
    };

    iniciarJogo();

    return () => {
      phaserInstance.current?.destroy(true);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <HUD score={score} highScore={highScore} />
      <div ref={gameRef} className="w-full h-full" />
      {isGameOver && (
        <GameOverOverlay
          score={score}
          highScore={highScore}
          onRetry={handleRetry}
          onHome={handleHome}
        />
      )}
    </div>
  );
};

export default Game;