import { Container } from 'pixi.js';
import { DialogBox } from './DialogBox';
import { Manager } from '../Manager';

export class DialogManager {
    private stage: Container;

    constructor(stage: Container) {
        this.stage = stage;
    }

    public showDialog(message: string, options: string[] = []): Promise<number> {
        return new Promise((resolve) => {
            const dialogBox = new DialogBox(message, options, (optionIndex: number) => {
                this.stage.removeChild(dialogBox);
                resolve(optionIndex);
            });

            dialogBox.position.set((Manager.width - dialogBox.width) / 2, (Manager.height - dialogBox.height) / 2);
            this.stage.addChild(dialogBox);
        });
    }
}
