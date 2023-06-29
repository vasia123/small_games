import { IAssetsBundle } from "../../interfaces/IAssetsBundle";
import { Enemy } from "./Enemy";

export class Rat extends Enemy {
    constructor(x: number, y: number, assets: IAssetsBundle) {
        const texture = assets.rat_1
        super(x, y, texture, 10); // Example damage value
    }

    update(delta: number): void {
        // Update rat-specific logic here
    }
}
