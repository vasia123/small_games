import { IActor } from "../../interfaces/IActor";
import * as PIXI from 'pixi.js';

export abstract class Actor implements IActor {
    x: number;
    y: number;
    health!: number;
    sprite: PIXI.Sprite;

    constructor(x: number, y: number, texture: PIXI.Texture) {
        this.x = x;
        this.y = y;
        this.sprite = new PIXI.Sprite(texture);
        this.sprite.x = x;
        this.sprite.y = y;
    }

    update(_delta: number): void {
        // Logic to update actor state
    }
}
