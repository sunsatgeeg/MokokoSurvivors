import Phaser from "phaser";
import { MainScene } from "./scenes/mainScene";
import { startScene } from "./scenes/startScene";
import option from "./option";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: option.width,
    height: option.height,
    backgroundColor: 0xcfc,
    scene: [startScene, MainScene],
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};
  
new Phaser.Game(config);