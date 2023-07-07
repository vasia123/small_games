import { Container, Sprite } from 'pixi.js';
import { IScene } from '../../interfaces/IScene';
import { DialogManager } from '../ui/DialogManager';
import { Manager } from '../Manager';
import { assets } from '../../constants/assets';
import { validateOptions } from '../utils/checkDialogs';
import { dialogs, startScene } from '../data/Texts';
import { SoundManager } from '../utils/SoundManager';
import sleep from '../utils/sleep';
import { gsap } from "gsap";
import { EndGameScene } from './EndGameScene';

export class Locations extends Container implements IScene {
    private background?: Sprite;
    private currentLocation: string = "";
    public dialogManager!: DialogManager;

    constructor() {
        super();

        this.dialogManager = new DialogManager(this);
        const valid = validateOptions(dialogs);
        if (!valid) {
            throw new Error("Dialogs not valid!");
        }

        if (import.meta.env.DEV) {
            this.gotoDialog(startScene);
        } else {
            this.gotoDialog("ep0");
        }
    }

    public async setBackground(background: keyof typeof assets.locations) {
        const oldBackground = this.background;
        this.background = Sprite.from(background);
        this.background.alpha = 0; // Initially set to transparent
        this.background.anchor.set(0.5, 0.5);
        this.background.position.set(Manager.width / 2, Manager.height / 2);
        this.addChildAt(this.background, 0);

        if (!import.meta.env.DEV) {
            if (oldBackground) {
                // Fade out the old background
                gsap.to(oldBackground, {
                    alpha: 0,
                    duration: 1, // 1 second
                    onComplete: () => {
                        this.removeChild(oldBackground);
                        oldBackground.destroy();
                    }
                });
            }

            // Fade in the new background
            await gsap.to(this.background, {
                alpha: 1,
                duration: 1 // 1 second
            });
        } else {
            if (oldBackground) {
                this.removeChild(oldBackground);
                oldBackground.destroy();
            }
            this.background.alpha = 1; // Initially set to transparent

        }
    }

    public async gotoDialog(name: string) {
        if (name === "game_end") {
            Manager.changeScene(new EndGameScene());
            return;
        }
        if (name === "witness_2") {
            SoundManager.stopAll();
            SoundManager.playSound("witness_2");
            this.gotoDialog("good_end");
            return;
        }
        this.currentLocation = name
        const guard = dialogs[name].guard;
        if (guard) {
            const newName = guard(this)
            if (newName !== "") {
                name = newName
            }
        }
        const sound = dialogs[name].sound;
        if (sound) {
            if (!SoundManager.alreadyPlayed(sound)) {
                SoundManager.stopAll();
                SoundManager.playSound(sound);
            }
        }
        const background = dialogs[name].location;
        if (background !== "") {
            await this.setBackground(background);
        }
        if (!import.meta.env.DEV) {
            await sleep(1000);
        }
        this.dialogManager.showDialog(
            dialogs[name].message,
            Object.keys(dialogs[name].options)
        ).then((selectedOption) => {
            this.gotoDialog(dialogs[name].options[selectedOption]);
        });
    }

    public getCurrentLocation() {
        return this.currentLocation
    }

    public update(_delta: number): void { }
}
