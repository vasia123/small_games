// src/classes/levels/Level.ts

import * as PIXI from 'pixi.js';
import { Player } from '../actors/Player';
import { Rat } from '../actors/Rat';
import { HUD } from '../ui/HUD';
import { IAssetsBundle } from '../../interfaces/IAssetsBundle';

export class Level extends PIXI.Container {
    private background!: PIXI.Sprite;
    private player!: Player;
    private enemies!: Rat[];
    private hud!: HUD;
    private assets: IAssetsBundle;
    public levelName: string;
    public parentContainer: PIXI.Container;

    constructor(levelName: string, parentContainer: PIXI.Container, assets: IAssetsBundle) {
        super()
        this.parentContainer = parentContainer
        this.assets = assets
        this.levelName = levelName
    }
    public onStart(container: PIXI.Container, offsetX: number, offsetY: number) {
        this.parentContainer.addChild(this);
        // Load background based on level name
        this.background = new PIXI.Sprite(this.assets.background);
        console.log('offsetX, offsetY', offsetX, offsetY)
        this.background.x = offsetX
        this.background.y = offsetY
        this.addChildAt(this.background, 0); // Add background as the first child so it's rendered behind everything else

        // Initialize player
        this.player = new Player(400, 250, this.assets);
        this.addChild(this.player.sprite);

        // Initialize enemies (example with one Rat)
        this.enemies = [new Rat(200, 200, this.assets)];
        this.enemies.forEach(enemy => this.addChild(enemy.sprite));

        // Initialize HUD
        this.hud = new HUD(this);
        container.addChild(this)

    }

    public update(delta: number): void {
        // Update logic for player, enemies, hud...
        this.player.update(delta);
        this.enemies.forEach(enemy => enemy.update(delta));
        // this.hud.update(delta);
        this.hud.update(this.player.health, this.player.xp);
    }
}
