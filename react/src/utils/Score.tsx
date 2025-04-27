import Phaser from 'phaser';

export default class ScoreManager {
  private scene: Phaser.Scene;
  private score = 0;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.score = 0;
  }

  update(delta: number) {
    this.score += delta / 1000;
  }

  reset() {
    this.score = 0;
  }

  getScore(): number {
    return Math.floor(this.score);
  }
}
