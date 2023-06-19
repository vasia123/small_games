import { Graphics } from 'pixi.js';

export class ProgressBar extends Graphics {
    private readonly maxWidth: number;

    constructor(maxWidth: number, height: number) {
        super();
        this.maxWidth = maxWidth;
        this.height = height;
        this.beginFill(0x00ff00); // green color for progress bar
        this.drawRect(0, 0, 0, height);
        this.endFill();
    }

    public updateProgress(percentage: number): void {
        this.clear();
        this.beginFill(0x00ff00);
        this.drawRect(0, 0, this.maxWidth * percentage, this.height);
        this.endFill();
    }
}
