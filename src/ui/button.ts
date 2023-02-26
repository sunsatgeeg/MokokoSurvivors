import Phaser, { Scene } from "phaser";

export class Button extends Phaser.GameObjects.Text {
    constructor(x: integer, y: integer, label: string, scene: Scene, callback: Function) {
        super(scene, x, y, label, { backgroundColor: "#8aacc8" });

        this.setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: "#8aacc8" })
            .setInteractive({ useHandCursor: true })
            .on("pointerdown", () => callback())
            .on("pointerover", () => this.setStyle({ fill: "#000" }))
            .on("pointerout", () => this.setStyle({ fill: "#fff" }));

        scene.add.existing(this);
    }
}