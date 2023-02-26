// Player
import playerArcherMokokoSrc from "../assets/images/playerArcherMokoko.png";
import playerGreenMokokoSrc from "../assets/images/playerGreenMokoko.png";

// enemy
import enemySrc from "../assets/images/enemy.png";

export class MainScene extends Phaser.Scene {

    constructor() {
        super({ key: "main" })
    }

    preload(): void {
        this.load.image("playerArcherMokoko", playerArcherMokokoSrc);
        this.load.image("playerGreenMokoko", playerGreenMokokoSrc);
        this.load.image("enemy", enemySrc);
    }

    create(): void {
        // const platforms = this.physics.add.staticGroup();
        this.physics.add.staticGroup();

        this.add.sprite(100, 450, "playerArcherMokoko").setName("player");

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("playerArcherMokoko", { start: 0, end: 3 }),
            frameRate: 60,
            repeat: -1
        });

        this.anims.create({
            key: "turn",
            frames: [ { key: "playerArcherMokoko", frame: 4 } ],
            frameRate: 60
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("playerArcherMokoko", { start: 5, end: 8 }),
            frameRate: 60,
            repeat: -1
        });
    }

    update(_time: number, _delta: number): void {
        const playerDefaltSpeed = 2.5;

        const arrowCursors = this.input.keyboard.createCursorKeys();
        const wasdCursor = this.input.keyboard.addKeys({
          up: Phaser.Input.Keyboard.KeyCodes.W,
          down: Phaser.Input.Keyboard.KeyCodes.S,
          left: Phaser.Input.Keyboard.KeyCodes.A,
          right: Phaser.Input.Keyboard.KeyCodes.D,
        });
        const player = this.children.getByName("player") as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

        // @ts-expect-error
        if (arrowCursors.left.isDown || wasdCursor.left.isDown) {
            player.x -= playerDefaltSpeed;
            // player.anims.play("left", true);
        }
        // @ts-expect-error
        else if (arrowCursors.right.isDown || wasdCursor.right.isDown) {
            player.x += playerDefaltSpeed;
            // player.anims.play("right", true);
        }
        else {
            // player.anims.play("turn");
        }

        // @ts-expect-error
        if (arrowCursors.up.isDown || wasdCursor.up.isDown) {
            player.y -= playerDefaltSpeed;
        }
        // @ts-expect-error
        else if (arrowCursors.down.isDown || wasdCursor.down.isDown){
            player.y += playerDefaltSpeed;
        }
        else{

        }
    }
}