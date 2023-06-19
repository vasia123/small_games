import { Assets, Texture } from 'pixi.js';

type ProgressCallback = (progress: number) => void;

export class Loader {
    private readonly onProgressCallbacks: ProgressCallback[] = [];


    public async load(): Promise<{puzzle: Texture}> {
        Assets.addBundle('puzzle', {
            puzzle: '/public/images/puzzle.jpg',
        });

        return Assets.loadBundle('puzzle', this.handleProgress.bind(this));
    }

    public onProgress(callback: ProgressCallback): void {
        this.onProgressCallbacks.push(callback);
    }

    private handleProgress(progress: number): void {
        this.onProgressCallbacks.forEach(callback => callback(progress));
    }
}
