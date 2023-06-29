import { Assets } from 'pixi.js';
import { IAssetsBundle } from '../../interfaces/IAssetsBundle';
import { GameAssets } from '../../constants/gameSettings';

type ProgressCallback = (progress: number) => void;

export class Loader {
    private readonly onProgressCallbacks: ProgressCallback[] = [];


    public async load(): Promise<IAssetsBundle> {
        Assets.addBundle('main', GameAssets);

        return Assets.loadBundle('main', this.handleProgress.bind(this));
    }

    public onProgress(callback: ProgressCallback): void {
        this.onProgressCallbacks.push(callback);
    }

    private handleProgress(progress: number): void {
        this.onProgressCallbacks.forEach(callback => callback(progress));
    }
}
