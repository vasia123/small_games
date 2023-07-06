
import { Actor } from "./Actor";

export abstract class Enemy extends Actor {
    damage: number;

    constructor(x: number, y: number, texture: string, damage: number) {
        super(x, y, texture);
        this.damage = damage;
    }

    attack(target: Actor): void {
        // Logic to attack target actor
        target.health -= this.damage;
    }
}
