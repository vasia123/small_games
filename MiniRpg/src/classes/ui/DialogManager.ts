import { Container } from 'pixi.js';
import { DialogBox } from './DialogBox';
import { Manager } from '../Manager';

export class DialogManager {
    private stage: Container;

    constructor(stage: Container) {
        this.stage = stage;
    }

    public showDialog(message: string, options: string[] = []): Promise<string> {
        return new Promise((resolve) => {
            const dialogBox = new DialogBox(message, options, async (optionIndex: string) => {
                resolve(optionIndex);
                await dialogBox.hide(20);
                this.stage.removeChild(dialogBox);
            });

            dialogBox.position.set((Manager.width - dialogBox.width) / 2, (Manager.height - dialogBox.height) / 2);
            this.stage.addChild(dialogBox);
            dialogBox.show(40)
        });
    }
}
