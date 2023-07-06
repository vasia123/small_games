import { Enemy } from "./Enemy";

export class Bat extends Enemy {
    constructor(x: number, y: number, texture: string) {
        super(x, y, texture, 10); // Example damage value
    }

    update(_delta: number): void {
        // Update rat-specific logic here
    }
}
