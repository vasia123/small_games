import { Container, Sprite } from 'pixi.js';
import { IScene } from '../../interfaces/IScene';
import { DialogManager } from '../ui/DialogManager';
import { Manager } from '../Manager';
import { appSounds, assets } from '../assets';
import { validateOptions } from '../utils/checkDialogs';
import { dialogs } from './texts';
import { SoundManager } from '../utils/SoundManager';

export class Intro extends Container implements IScene {
    private background!: Sprite;
    private dialogManager!: DialogManager;

    constructor() {
        super()
        // Load background based on level name
        this.background = Sprite.from(assets.ui.bg_1);
        this.background.anchor.set(0.5, 0.5);
        this.background.position.set(Manager.width / 2, Manager.height / 2)
        this.addChildAt(this.background, 0); // Add background as the first child so it's rendered behind everything else

        this.dialogManager = new DialogManager(this);
        const valid = validateOptions(dialogs)
        if (!valid) {
            throw new Error("Dialogs not valid!");
        }
        this.gotoDialog('ep1', false)
        SoundManager.playSound('main_theme', 0.25);
    }

    public gotoDialog(name: string, playSound = true) {
        if (playSound) {
            let sound: appSounds = "check"
            if (dialogs[name].sound) {
                sound = dialogs[name].sound!
            }
            SoundManager.playSound(sound);
        }
        this.dialogManager.showDialog(
            dialogs[name].message,
            Object.keys(dialogs[name].options)
        ).then((selectedOption) => {
            this.gotoDialog(dialogs[name].options[selectedOption])
        });
    }


    public update(_delta: number): void { }
}
