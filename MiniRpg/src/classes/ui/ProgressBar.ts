import { Container, Graphics } from 'pixi.js';
import { ProgressBar } from "@pixi/ui";
import { Game } from '../Game';

export class ProgressBarUi extends ProgressBar {
    private xOffset: number
    private app: Game

    constructor(app: Game) {
        const xOffset = 100
        const params = {
            fillColor: '#fe6048',
            borderColor: '#FFFFFF',
            backgroundColor: '#00b1dd',
            width: app.WIDTH - xOffset,
            height: 35,
            radius: 25,
            border: 3,
        };

        const bg = new Graphics()
            .beginFill(params.borderColor)
            .drawRoundedRect(0, 0, params.width, params.height, params.radius)
            .beginFill(params.backgroundColor)
            .drawRoundedRect(params.border, params.border, params.width - (params.border * 2), params.height - (params.border * 2), params.radius);

        const fill = new Graphics()
            .beginFill(params.borderColor)
            .drawRoundedRect(0, 0, params.width, params.height, params.radius)
            .beginFill(params.fillColor)
            .drawRoundedRect(params.border, params.border, params.width - (params.border * 2), params.height - (params.border * 2), params.radius);
        super({
            bg,
            fill,
            progress: 0
        });
        this.xOffset = xOffset
        this.app = app
    }

    public onStart(container: Container, offsetX: number, offsetY: number): void {
        this.x = this.xOffset / 2 - offsetX; // vertically center the progress bar
        this.y = this.app.HEIGHT / 2 - this.height / 2 - offsetY; // vertically center the progress bar
        const scale = this.app.getScale()
        this.scale.set(scale, scale);
        container.addChild(this)
    }
    public updateProgress(percentage: number): void {
        this.progress = percentage
    }
}
