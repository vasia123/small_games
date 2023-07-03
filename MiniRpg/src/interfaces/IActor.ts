import { Sprite } from "pixi.js";

export interface IActor {
    // x: number;
    // y: number;
    health: number;
    sprite: Sprite;
    update(delta: number): void;
}
