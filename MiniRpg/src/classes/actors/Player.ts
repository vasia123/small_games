import { IAssetsBundle } from "../../interfaces/IAssetsBundle";
import { Actor } from "./Actor";
// import * as PIXI from 'pixi.js';

export class Player extends Actor {
    xp: number = 0;

    constructor(x: number, y: number, assets: IAssetsBundle) {
        const texture = assets.player
        super(x, y, texture);
        this.health = 100; // Example starting health
        this.sprite.scale.x *= -1;
    }

    update(delta: number): void {
        // Update player-specific logic here
        // such as movement, collision, etc.
    }
}
