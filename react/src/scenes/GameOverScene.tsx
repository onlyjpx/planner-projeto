export default class GameOverScene extends Phaser.Scene {
  onGameOver?: (score: number) => void;

  create(data: { score: number }) {
    if (this.onGameOver) {
      this.onGameOver(data.score);
    }
  }
}
