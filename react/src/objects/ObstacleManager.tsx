import Phaser from 'phaser';

export default class ObstacleManager {
  private scene: Phaser.Scene;
  private group: Phaser.Physics.Arcade.Group;
  private groundY: number;
  private speed: number;

  constructor(scene: Phaser.Scene, groundY: number, initialSpeed: number) {
    this.scene = scene;
    this.groundY = groundY;
    this.speed = initialSpeed;

    this.group = this.scene.physics.add.group();
    const ground = this.scene.physics.world.staticBodies.entries[0];
    this.scene.physics.add.collider(this.group, ground);
  }

  setSpeed(newSpeed: number) {
    this.speed = newSpeed;
  }

  getGroup() {
    return this.group;
  }

  spawn() {
    const screenWidth = this.scene.scale.width;
    const obstacleHeight = Phaser.Math.Between(30, 60);

    const obstacle = this.group.create(
      screenWidth + 20,
      this.groundY - obstacleHeight / 2,
      ''
    )
      .setDisplaySize(20, obstacleHeight)
      .setTint(0xff0000)
      .setVelocityX(this.speed)
      .setImmovable(true);

    (obstacle.body as Phaser.Physics.Arcade.Body).setAllowGravity(false);
  }

  cleanup() {
   this.group.getChildren().forEach(obstacle => {
     const obs = obstacle as Phaser.Physics.Arcade.Sprite;
     if (obs.x < -50) {
       this.group.remove(obs, true, true);
     }
   });
  }
}
