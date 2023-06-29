import { Level } from './levels/Level';
import { ProgressBarUi } from './ui/ProgressBar';
import { Loader } from './utils/Loader';
import { IAssetsBundle } from '../interfaces/IAssetsBundle';
import { ErrorMessage } from './ui/ErrorMessage';
import { Application, Container } from 'pixi.js';

type Scenes = Level | ProgressBarUi | ErrorMessage

export class Game {
    private app: Application;
    private progressBar!: ProgressBarUi;
    private loader!: Loader;
    private assets!: IAssetsBundle;
    private currentScene!: Scenes;

    constructor() {
        this.app = new Application({
            view: document.getElementById("game") as HTMLCanvasElement,
            width: this.WIDTH,
            height: this.HEIGHT,
            resizeTo: window,
            autoDensity: true,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
        });
        // Listen for window resize events (which include orientation changes)
        window.addEventListener('resize', () => {
            this.app.resize();
        });

        this.initializeLoader();
    }
    private async initializeLoader(): Promise<void> {
        this.progressBar = new ProgressBarUi(this); // 10 is height of progress bar
        // const scale = this.getScale()
        // this.progressBar.scale.set(scale, scale);
        this.gotoScene(this.progressBar)
        // await sleep(10000)

        this.loader = new Loader();
        this.loader.onProgress(this.onLoadProgress.bind(this));
        try {
            this.assets = await this.loader.load();
            this.onLoadComplete()
        } catch (error) {
            // Log the error to the console
            console.error(error);

            // Show an error message to the user
            this.displayErrorMessage("Не удалось загрузить файлы игры :(");
        }
    }

    private displayErrorMessage(message: string): void {
        this.hideProgressBar();
        // Add the error message (which contains the background) to the stage
        this.gotoScene(new ErrorMessage(this, message));
    }


    private onLoadProgress(progress: number): void {
        this.progressBar.updateProgress(progress);
    }

    private onLoadComplete(): void {
        this.hideProgressBar();
        this.initializeLevel();
    }

    private hideProgressBar(): void {
        this.app.stage.removeChild(this.progressBar);
    }

    private initializeLevel(): void {
        // Initialize the main game scene
        this.gotoScene(new Level('sewer', this.app.stage, this.assets));
        // this.app.stage.addChild(this.currentLevel);

        // Start the game loop
        // this.app.ticker.add(delta => this.gameLoop(delta));
    }

    // private gameLoop(delta: number): void {
    //     // Update the current level
    //     // this.currentLevel.update(delta);
    // }
    // Replace the current scene with the new one
    gotoScene(newScene: Scenes) {
        if (this.currentScene !== undefined) {
            // await this.currentScene.onFinish();
            this.app.stage.removeChildren();
        }

        // This is the stage for the new scene
        const container = new Container();
        container.width = this.WIDTH;
        container.height = this.HEIGHT;
        const scale = this.getScale()
        container.scale.set(scale, scale);
        const offsetX = (this.app.screen.width - this.WIDTH * scale) / 2;
        const offsetY = (this.app.screen.height - this.HEIGHT * scale) / 2;
        // Start the new scene and add it to the stage
        newScene.onStart(container, offsetX, offsetY);
        this.app.stage.addChild(container);
        this.currentScene = newScene;
    }


    get WIDTH() {
        return 1280;
    }
    get HEIGHT() {
        return 720;
    }
    getScale(): number {
        const scaleX = this.actualWidth() / this.WIDTH;
        const scaleY = this.actualHeight() / this.HEIGHT;
        const scale = Math.max(scaleX, scaleY);
        return scale
    }
    actualWidth() {
        const { width, height } = this.app.screen;
        const isWidthConstrained = width < height * 9 / 16;
        return isWidthConstrained ? width : height * 9 / 16;
    }
    actualHeight() {
        const { width, height } = this.app.screen;
        const isHeightConstrained = width * 16 / 9 > height;
        return isHeightConstrained ? height : width * 16 / 9;
    }
}
