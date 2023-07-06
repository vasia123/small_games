import { Sprite, Texture } from "pixi.js";
import { IActor } from "../../interfaces/IActor";

export abstract class Actor implements IActor {
    // x: number;
    // y: number;
    health!: number;
    sprite: Sprite;

    constructor(x: number, y: number, texture: string | Texture) {
        // this.x = x;
        // this.y = y;
        this.sprite = Sprite.from(texture);
        this.sprite.anchor.set(0.5, 1)
        this.sprite.x = x;
        this.sprite.y = y;
    }

    update(_delta: number): void {
        // Logic to update actor state
    }
}
