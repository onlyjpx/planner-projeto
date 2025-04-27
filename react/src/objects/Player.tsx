import Phaser from 'phaser';

export class Player {
  private scene: Phaser.Scene;
  public sprite: Phaser.GameObjects.Arc;
  public body: Phaser.Physics.Arcade.Body;

  private isJumping = false;
  private jumpTime = 0;
  private maxJumpTime = 300;

  constructor(scene: Phaser.Scene, x: number, y: number, ground: Phaser.GameObjects.Rectangle) {
    this.scene = scene;
    const radius = 20;

    this.sprite = this.scene.add.circle(x, y, radius, 0x00ff00);
    this.scene.physics.add.existing(this.sprite);
    this.body = this.sprite.body as Phaser.Physics.Arcade.Body;
    this.scene.physics.add.collider(this.sprite, ground);

    this.body.setCollideWorldBounds(true);
    this.body.setGravityY(700);
    this.body.setBounce(0);
    this.body.setCircle(radius);
    this.body.setOffset(0, 0);

    this.scene.input.keyboard.on('keydown-UP', () => {
      if (this.body.blocked.down) {
        this.body.setVelocityY(-250);
        this.isJumping = true;
        this.jumpTime = 0;
      }
    });

    this.scene.input.keyboard.on('keyup-UP', () => {
      this.isJumping = false;
    });
  }

  update(delta: number) {
    if (this.isJumping) {
      this.jumpTime += delta;
      if (this.jumpTime < this.maxJumpTime) {
        this.body.setVelocityY(this.body.velocity.y - 10);
      } else {
        this.isJumping = false;
      }
    }
  }

  getGameObject() {
    return this.sprite;
  }

  getBody() {
    return this.body;
  }
}
