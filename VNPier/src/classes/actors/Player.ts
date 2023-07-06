// import { Sprite } from "pixi.js";
import { assets } from "../../constants/assets";
import { Actor } from "./Actor";

export class Player extends Actor {
    xp: number = 0;

    constructor(x: number, y: number) {

        super(x, y, assets.common.player);
        this.health = 100;
    }

    update(_delta: number): void {
        // Update player-specific logic here
        // such as movement, collision, etc.
    }
}
