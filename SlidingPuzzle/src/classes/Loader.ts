import { Assets } from 'pixi.js';
import { IAssetsBundle } from '../types/IAssetsBundle';

type ProgressCallback = (progress: number) => void;

export class Loader {
    private readonly onProgressCallbacks: ProgressCallback[] = [];


    public async load(): Promise<IAssetsBundle> {
        Assets.addBundle('puzzle', {
            puzzle: 'images/puzzle.jpg',
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
