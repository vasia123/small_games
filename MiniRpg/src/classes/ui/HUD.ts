// src/classes/ui/HUD.ts

import * as PIXI from 'pixi.js';

export class HUD {
    private container: PIXI.Container;
    private healthText: PIXI.Text;
    private xpText: PIXI.Text;
    // private mapButton: PIXI.Sprite;

    constructor(parentContainer: PIXI.Container) {
        this.container = new PIXI.Container();
        parentContainer.addChild(this.container);

        // Health Text
        this.healthText = new PIXI.Text('Health: 100', { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff });
        this.healthText.x = 10;
        this.healthText.y = 10;
        this.container.addChild(this.healthText);

        // XP Text
        this.xpText = new PIXI.Text('XP: 0', { fontFamily: 'Arial', fontSize: 24, fill: 0xffffff });
        this.xpText.x = 10;
        this.xpText.y = 40;
        this.container.addChild(this.xpText);

        // Map Button
        // const buttonTexture = PIXI.Texture.from('assets/map_button.png'); // Assuming you have an image asset for the map button
        // this.mapButton = new PIXI.Sprite(buttonTexture);
        // this.mapButton.x = this.container.width - this.mapButton.width - 10;
        // this.mapButton.y = 10;
        // this.mapButton.interactive = true;
        // // this.mapButton.buttonMode = true;
        // this.mapButton.on('pointerdown', () => {
        //     // Handle map button click here (e.g., open the map screen)
        //     console.log('mapButton clicked')
        // });
        // this.container.addChild(this.mapButton);
    }

    public update(health: number, xp: number): void {
        // Update UI elements if needed
        this.healthText.text = `Health: ${health}`;
        this.xpText.text = `XP: ${xp}`;
    }
}
