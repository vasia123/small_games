import { Player } from '../actors/Player';
import { Rat } from '../actors/Rat';
import { HUD } from '../ui/HUD';
import { Container, Sprite } from 'pixi.js';
import { IScene } from '../../interfaces/IScene';
import { assets } from '../assets';
import { Manager } from '../Manager';
import { Enemy } from '../actors/Enemy';
import { Flashlight } from '../actors/Flashlight';
// import { Flashlight } from '../actors/Flashlight';

export class Location1 extends Container implements IScene {
    private background!: Sprite;
    private player!: Player;
    private enemy!: Enemy;
    private hud!: HUD;
    private flashlight!: Flashlight;
    // public levelName: string;

    constructor() {
        super()
        // Load background based on level name
        this.background = Sprite.from(assets.backgrounds.bg_1);
        this.background.anchor.set(0.5);
        this.background.position.set(Manager.width / 2, Manager.height / 2)

        // Initialize player
        this.player = new Player(400, 650);

        // Initialize enemies (example with one Rat)
        this.enemy = new Rat(850, 650, assets.rats.rat_1);
        this.enemy.sprite.scale.set(0.6)

        const container = new Container();
        container.addChildAt(this.background, 0); // Add background as the first child so it's rendered behind everything else
        container.addChild(this.enemy.sprite)


        // Create a mask for the flashlight using graphics
        this.flashlight = new Flashlight(480, 530)
        // Apply the mask
        container.addChild(this.flashlight);
        this.flashlight.updateFlashlight(80)
        // container.mask = this.flashlight;

        // Initialize HUD
        this.addChild(container);
        this.addChild(this.player.sprite);
        this.addChild(this.flashlight.flashlightObject);
        this.hud = new HUD();
        this.addChild(this.hud.container);

    }


    public update(delta: number): void {
        // Update logic for player, enemies, hud...
        this.player.update(delta);
        this.enemy.update(delta)
        this.flashlight.update(delta)
        // this.enemies.forEach(enemy => enemy.update(delta));
        // this.hud.update(delta);
        this.hud.update(this.player.health, this.player.xp);
    }
}
