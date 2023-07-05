import { BlurFilter, Container, Graphics, Sprite } from "pixi.js";
import { Manager } from "../Manager";
import { assets } from "../../constants/assets";

export class Flashlight extends Container {
    public flashlightOverlay: Graphics;
    public flashlightObject: Sprite;
    public targetAngle: number;
    public currentAngle: number;
    public angleSpeed: number;
    public startX!: number
    public startY!: number

    constructor(x: number, y: number) {
        super();

        this.currentAngle = 80;
        this.targetAngle = 80;
        this.angleSpeed = 0.5; // You can adjust the speed

        this.flashlightOverlay = new Graphics();
        const blurFilter = new BlurFilter();
        blurFilter.blur = 5; // You can adjust the blur amount
        this.flashlightOverlay.filters = [blurFilter];
        // Add them to the stage or parent container
        this.addChild(this.flashlightOverlay);

        this.flashlightObject = Sprite.from(assets.common.flashlight)
        this.flashlightObject.anchor.set(0.5, 1);
        this.flashlightObject.scale.set(0.5)

        this.setFlashlightPosition(x, y)

    }
    public setFlashlightPosition(x: number, y: number) {
        this.startX = x
        this.startY = y
        // Update the flashlight sprite's position
        this.flashlightObject.x = x;
        this.flashlightObject.y = y;

    }
    public updateFlashlight(angle: number) {
        // Convert the angle to radians
        const radians = (angle - 90) * (Math.PI / 180); // subtract 90 to make 0 degrees point upwards

        // Define the size of the flashlight cone
        const distance = 400;
        const halfCone = 200;

        // Calculate the new positions based on the angle
        const x2 = this.startX + distance * Math.cos(radians);
        const y2 = this.startY + distance * Math.sin(radians);

        const x3 = this.startX + distance * Math.cos(radians - Math.atan2(halfCone, distance));
        const y3 = this.startY + distance * Math.sin(radians - Math.atan2(halfCone, distance));

        const x4 = this.startX + distance * Math.cos(radians + Math.atan2(halfCone, distance));
        const y4 = this.startY + distance * Math.sin(radians + Math.atan2(halfCone, distance));

        // Calculate the circle's radius based on the vertices
        const circleRadius = Math.sqrt((x4 - x3) * (x4 - x3) + (y4 - y3) * (y4 - y3)) / 2;

        // Clear the previous drawing
        this.flashlightOverlay.clear();

        // Draw the dark overlay covering the whole screen
        this.flashlightOverlay.beginFill(0x000000, 0.6); // Semi-transparent black
        this.flashlightOverlay.drawRect(0, 0, Manager.width, Manager.height);

        // Begin the hole
        this.flashlightOverlay.beginHole();

        // Move to starting position
        this.flashlightOverlay.moveTo(this.startX, this.startY);

        // Draw left side of flashlight
        this.flashlightOverlay.lineTo(x3, y3);
        this.flashlightOverlay.arc(x2, y2, circleRadius, Math.atan2(y3 - y2, x3 - x2), Math.atan2(y4 - y2, x4 - x2), false);

        // Draw right side of flashlight
        this.flashlightOverlay.lineTo(x4, y4);
        this.flashlightOverlay.lineTo(this.startX, this.startY);

        // End the hole
        this.flashlightOverlay.endHole();

        // End the fill
        this.flashlightOverlay.endFill();
    }

    public update(_delta: number) {
        // Lerp towards the target angle
        this.currentAngle += (this.targetAngle - this.currentAngle) * 0.05;
        this.flashlightObject.rotation = (this.currentAngle - 80) * (Math.PI / 180);

        // Update the flashlight with the current angle
        this.updateFlashlight(this.currentAngle);

        // Randomly change the target angle
        if (Math.random() < 0.02) { // 3% chance to change angle every frame
            this.targetAngle = 60 + Math.random() * 40; // New target angle between 0 and 360
        }

        // Request the next animation frame
        // requestAnimationFrame(() => this.animate());
    }


}