import Phaser from "phaser";
import option from "../option";
import { Button } from "../ui/button";

export class startScene extends Phaser.Scene {
    constructor() {
        super({ key: "start" })
    }

    create(): void {
        const bg = this.add.graphics();
        bg.fillStyle(0xbbdefb);
        bg.fillRect(0, 0, option.width, option.height);
        bg.setScrollFactor(0);

        // this.add
        //   .bitmapText(option.width / 2, 150, "pixelFont", "Meow Meow Fuzzyface", 40)
        //   .setOrigin(0.5);

        // this.add.image(option.width / 2, option.height / 2, "cat");

        new Button(
            option.width / 2,
            option.height / 2 + 150,
            "Start Game",
            this,
            () => this.scene.start("main")
        );
    }
}