import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    backgroundColor: 0xfff,
};

new Phaser.Game(config);