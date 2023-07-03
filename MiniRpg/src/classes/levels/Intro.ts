import { Container, Sprite } from 'pixi.js';
import { IScene } from '../../interfaces/IScene';
// import { assets } from '../assets';
// import { Manager } from '../Manager';
import { DialogManager } from '../ui/DialogManager';
import { Manager } from '../Manager';
import { assets } from '../assets';

export class Intro extends Container implements IScene {
    private background!: Sprite;
    private dialogManager!: DialogManager;

    constructor() {
        super()
        // Load background based on level name
        this.background = Sprite.from(assets.backgrounds.bg_1);
        this.background.anchor.set(0.5, 0.5);
        this.background.position.set(Manager.width / 2, Manager.height / 2)
        this.addChildAt(this.background, 0); // Add background as the first child so it's rendered behind everything else

        this.dialogManager = new DialogManager(this);

        this.dialogManager.showDialog(
            "Do you want to continue? Do you want to to to continue Do you want to continue Do you want to continue Do you want to continue",
            [
                // "Do you want to continue Do you want to continue ",
                "Do  you want to continue",
                "Do you want to continue",
                // "Do you want to continue Do you want to continue"
            ]
            // [
            //     "Yes",
            //     "No",
            //     "No",
            //     "No"
            // ]
        ).then((selectedOption) => {
            console.log('selectedOption', selectedOption)
            if (selectedOption === 0) {
                // Continue the game
            } else {
                // Quit the game
            }
        });

    }


    public update(_delta: number): void {
    }
}
