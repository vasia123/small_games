import { Application } from 'pixi.js';
import { Board } from './Board';
import { Loader } from './Loader';
import { ProgressBar } from './ProgressBar';
import { WinScene } from './WIn';

export class Game {
    public app: Application;
    private board!: Board;
    private loader!: Loader;
    private progressBar!: ProgressBar;

    constructor() {
        this.app = new Application({
            view: document.getElementById("game") as HTMLCanvasElement,
            width: 720, // Change this based on your preferences
            height: 1280, // Change this based on your preferences
            resizeTo: window,
            autoDensity: true,
            backgroundColor: 0x1099bb,
        });

        this.initializeLoader();
    }

    private async initializeLoader(): Promise<void> {
        this.progressBar = new ProgressBar(this.app.view.width - 20, 10); // 10 is height of progress bar
        this.progressBar.y = this.app.view.height / 2 - this.progressBar.height / 2; // vertically center the progress bar
        this.app.stage.addChild(this.progressBar);

        this.loader = new Loader();
        this.loader.onProgress(this.onLoadProgress.bind(this));
        await this.loader.load();
        this.onLoadComplete()
    }

    private onLoadProgress(progress: number): void {
        this.progressBar.updateProgress(progress);
    }

    private onLoadComplete(): void {
        this.app.stage.removeChild(this.progressBar);
        this.initializeBoard();
        this.app.stage.addChild(this.board);
        this.onWin()
    }
    public onWin(): void {
        this.app.stage.removeChild(this.board);
        this.app.stage.addChild(new WinScene(this));
    }

    private initializeBoard(): void {
        this.board = new Board(this);
        this.app.stage.addChild(this.board);
    }
}
