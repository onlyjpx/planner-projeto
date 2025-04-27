import Phaser from 'phaser';
import { Player } from '../objects/Player';
import ObstacleManager from '../objects/ObstacleManager';
import Score from '../utils/Score';

export default class DinoScene extends Phaser.Scene {
  private player!: Player;
  private obstacles!: ObstacleManager;
  private groundY!: number;
  private score!: Score;
  private spawnTimer = 0;
  private obstacleSpeed = -200;
  private difficultyTimer = 0;

  constructor() {
    super('DinoScene');
  }

  create() {
    const screenWidth = this.scale.width;
    const screenHeight = this.scale.height;
    this.groundY = screenHeight - 100;

    const groundVisual = this.add.rectangle(
      screenWidth / 2,
      this.groundY + 10,
      screenWidth,
      20,
      0x888888
    );
    this.physics.add.existing(groundVisual, true);

    this.player = new Player(this, 100, this.groundY - 20, groundVisual);
    this.obstacles = new ObstacleManager(this, this.groundY, this.obstacleSpeed);
    this.score = new Score(this);

    // Colisão entre jogador e obstáculos
    this.physics.add.overlap(
      this.player.getGameObject(),
      this.obstacles.getGroup(),
      () => {
        this.scene.pause();
        this.obstacles.setSpeed(this.obstacleSpeed); // Resetando a velocidade dos obstáculos
        this.scene.scene.events.emit('game-over', {
          score: this.score.getScore(),
          speed: Math.abs(this.obstacleSpeed),
          timeAlive: Math.floor(this.difficultyTimer / 1000) // em segundos
        });
        this.physics.pause();
      }
    );
  }

  update(time: number, delta: number) {
    this.player.update(delta);
    this.score.update(delta);
    this.scene.scene.events.emit('score-changed', this.score.getScore());

    if (time > this.spawnTimer) {
      this.obstacles.spawn();
      const minDelay = 1000;
      const extraDelay = Phaser.Math.Between(0, 800);
      this.spawnTimer = time + minDelay + extraDelay;
    }

    this.difficultyTimer += delta;
    if (this.difficultyTimer > 5000) {
      this.difficultyTimer = 0;
      this.obstacleSpeed -= 20;
      this.obstacles.setSpeed(this.obstacleSpeed);
    }

    this.obstacles.cleanup();
  }
}
