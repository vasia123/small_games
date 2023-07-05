import { Container } from 'pixi.js';
import { DialogBox } from './DialogBox';
import { Manager } from '../Manager';
import { SoundManager } from '../utils/SoundManager';
import { appSounds } from '../../constants/assets';

export class DialogManager {
    private stage: Container;
    private currentDialog!: DialogBox;

    constructor(stage: Container) {
        this.stage = stage;
    }

    public showDialog(message: string, options: string[] = []): Promise<string> {
        return new Promise((resolve) => {
            this.currentDialog = new DialogBox(message, options, async (optionIndex: string) => {
                let sound: appSounds = "check";
                SoundManager.playSound(sound);
                await this.hideDialog()
                resolve(optionIndex);
            });
            this.currentDialog.position.set((Manager.width - this.currentDialog.width) / 2, (Manager.height - this.currentDialog.height) / 2);
            this.stage.addChild(this.currentDialog);
            if (import.meta.env.DEV) {
                this.currentDialog.show(0)
            } else {
                this.currentDialog.show(40)
            }
        });
    }
    public async hideDialog() {
        if (import.meta.env.DEV) {
            await this.currentDialog.hide(0);
        } else {
            await this.currentDialog.hide(20);
        }
        this.stage.removeChild(this.currentDialog);
    }
}
