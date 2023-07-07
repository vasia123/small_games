import { Assets } from 'pixi.js';
import { manifest } from '../assets';

type ProgressCallback = (progress: number) => void;

export class Loader {
    private readonly onProgressCallbacks: ProgressCallback[] = [];


    public async load(): Promise<void> {
        await Assets.init({ manifest: manifest });

        const bundleIds = manifest.bundles.map(bundle => bundle.name);

        await Assets.loadBundle(bundleIds, this.handleProgress.bind(this));
    }

    public onProgress(callback: ProgressCallback): void {
        this.onProgressCallbacks.push(callback);
    }

    private handleProgress(progress: number): void {
        this.onProgressCallbacks.forEach(callback => callback(progress));
    }
}
