import { Application, EventSystem, IPointData, Ticker, extensions } from "pixi.js";
import { IScene } from "../interfaces/IScene";


class CustomEventSystem extends EventSystem {
    mapPositionToPoint(point: IPointData, x: number, y: number) {
        const rect = this.domElement.getBoundingClientRect();
        const resolutionMultiplier = 1.0 / this.resolution;

        if (window.matchMedia("(orientation: portrait)").matches) {
            // Adjust coordinates for portrait mode with rotated canvas (-90 degrees or 270 degrees clockwise)
            point.x = ((y - rect.top) * ((this.domElement as any).width / rect.height)) * resolutionMultiplier;
            point.y = ((rect.right - x) * ((this.domElement as any).height / rect.width)) * resolutionMultiplier;
        } else {
            // Default behavior for landscape mode
            point.x = ((x - rect.left) * ((this.domElement as any).width / rect.width)) * resolutionMultiplier;
            point.y = ((y - rect.top) * ((this.domElement as any).height / rect.height)) * resolutionMultiplier;
        }
    }
}

export class Manager {

    private static app: Application;
    private static currentScene: IScene;

    private static _width: number;
    private static _height: number;

    public static get width(): number {
        return Manager._width;
    }
    public static get height(): number {
        return Manager._height;
    }
    public static get ticker(): Ticker {
        return Manager.app.ticker;
    }
    public static get canvas(): HTMLCanvasElement {
        return document.getElementById("game") as HTMLCanvasElement;
    }

    public static initialize(width: number, height: number, background: number): void {

        Manager._width = width;
        Manager._height = height;


        extensions.remove(EventSystem)
        extensions.add(CustomEventSystem)

        Manager.app = new Application({
            view: Manager.canvas,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: background,
            width: width,
            height: height
        });

        Manager.app.ticker.add(Manager.update)

        // listen for the browser telling us that the screen size changed
        window.addEventListener("resize", Manager.resize);

        // call it manually once so we are sure we are the correct size after starting
        Manager.resize();

    }

    public static resize(): void {
        // current screen size
        const screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        // Check if the screen is in portrait mode
        const isPortrait = (window.matchMedia("(orientation: portrait)").matches);

        // Set the reference dimensions based on orientation
        const refWidth = isPortrait ? screenHeight : screenWidth;
        const refHeight = isPortrait ? screenWidth : screenHeight;

        // uniform scale for our game
        const scale = Math.min(refWidth / Manager.width, refHeight / Manager.height);

        // the "uniformly enlarged" size for our game
        const enlargedWidth = Math.floor(scale * Manager.width);
        const enlargedHeight = Math.floor(scale * Manager.height);

        // margins for centering our game
        const horizontalMargin = (screenWidth - (isPortrait ? enlargedHeight : enlargedWidth)) / 2;
        const verticalMargin = (screenHeight - (isPortrait ? enlargedWidth : enlargedHeight)) / 2;

        // now we use css trickery to set the sizes and margins
        Manager.canvas.style.width = `${enlargedWidth}px`;
        Manager.canvas.style.height = `${enlargedHeight}px`;
        Manager.canvas.style.marginLeft = Manager.canvas.style.marginRight = `${horizontalMargin}px`;
        Manager.canvas.style.marginTop = Manager.canvas.style.marginBottom = `${verticalMargin}px`;
    }


    // Call this function when you want to go to a new scene
    public static changeScene(newScene: IScene): void {
        // Remove and destroy old scene... if we had one..
        if (Manager.currentScene) {
            Manager.app.stage.removeChild(Manager.currentScene);
            Manager.currentScene.destroy();
        }

        // Add the new one
        Manager.currentScene = newScene;
        Manager.app.stage.addChild(Manager.currentScene);
    }

    // This update will be called by a pixi ticker and tell the scene that a tick happened
    private static update(framesPassed: number): void {
        // Let the current scene know that we updated it...
        // Just for funzies, sanity check that it exists first.
        if (Manager.currentScene) {
            Manager.currentScene.update(framesPassed);
        }

        // as I said before, I HATE the "frame passed" approach. I would rather use `Manager.app.ticker.deltaMS`
    }
}