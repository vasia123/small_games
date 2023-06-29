import { Container, Graphics, Text } from "pixi.js";
import { Game } from "../Game";

export class ErrorMessage {
    private message: string
    private app: Game

    constructor(app: Game, message: string) {
        this.message = message
        this.app = app
    }

    public onStart(container: Container, offsetX: number, offsetY: number): void {

        const errorMessage = new Text(this.message, {
            fontFamily: 'Arial',
            fontSize: 28,
            fill: 0xff0000, // red color
            align: 'center',
            padding: 10, // padding around the text
        });

        // Create a background rectangle
        const background = new Graphics();
        background.beginFill(0xffffff, 0.5); // semi-transparent black
        background.drawRect(
            -10, // x position, slightly offset to cover padding
            -10, // y position, slightly offset to cover padding
            errorMessage.width + 20, // width, with added offset
            errorMessage.height + 20  // height, with added offset
        );
        background.endFill();

        background.addChild(errorMessage);

        // Position the error message
        background.x = (this.app.WIDTH - background.width) / 2 + offsetX;
        background.y = (this.app.HEIGHT - background.height) / 2 + offsetY;

        container.addChild(background)
    }
}
