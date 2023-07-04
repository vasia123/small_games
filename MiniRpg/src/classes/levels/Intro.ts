import { Container, Sprite } from 'pixi.js';
import { IScene } from '../../interfaces/IScene';
import { DialogManager } from '../ui/DialogManager';
import { Manager } from '../Manager';
import { appSounds, assets } from '../assets';
import { validateOptions } from '../utils/checkDialogs';
import { dialogs } from './texts';
import { SoundManager } from '../utils/SoundManager';
import sleep from '../utils/sleep';
import { gsap } from "gsap";

export class Intro extends Container implements IScene {
    private background?: Sprite;
    private dialogManager!: DialogManager;

    constructor() {
        super();

        this.dialogManager = new DialogManager(this);
        const valid = validateOptions(dialogs);
        if (!valid) {
            throw new Error("Dialogs not valid!");
        }
        this.gotoDialog('ep0');
    }

    public async setBackground(background: keyof typeof assets.locations) {
        const oldBackground = this.background;
        this.background = Sprite.from(background);
        this.background.alpha = 0; // Initially set to transparent
        this.background.anchor.set(0.5, 0.5);
        this.background.position.set(Manager.width / 2, Manager.height / 2);
        this.addChildAt(this.background, 0);

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
    }

    public async gotoDialog(name: string) {
        const sound = dialogs[name].sound;
        if (sound) {
            if (!SoundManager.alreadyPlayed(sound)) {
                SoundManager.stopAll();
                SoundManager.playSound(sound, 0.25, true);
            }
        }
        const background = dialogs[name].location;
        if (background !== "") {
            await this.setBackground(background);
        }
        await sleep(1000);
        this.dialogManager.showDialog(
            dialogs[name].message,
            Object.keys(dialogs[name].options)
        ).then((selectedOption) => {
            let sound: appSounds = "check";
            SoundManager.playSound(sound);
            this.gotoDialog(dialogs[name].options[selectedOption]);
        });
    }

    public update(_delta: number): void { }
}
