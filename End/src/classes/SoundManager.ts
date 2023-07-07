// import { Loader } from "pixi.js";
import { Sound, IMediaInstance } from "@pixi/sound";
import { appSounds, assets } from "../assets";

function isPromise(variable: any): variable is Promise<any> {
    return variable instanceof Promise;
}

export class SoundManager {
    private static sounds: { [key: string]: Sound } = {};
    private static cachedPlays: { [key: string]: IMediaInstance } = {};
    private static fullDurations: { [key: string]: number } = {};
    private static playedDurations: { [key: string]: number } = {};

    // Play a sound by name
    public static async playSound(name: appSounds, volume: number = 1): Promise<void> {
        if (!SoundManager.sounds.hasOwnProperty(name)) {
            SoundManager.sounds[name] = Sound.from({
                url: assets.sounds[name],
            });
        }
        const play = SoundManager.sounds[name].play((sound) => {
            if (name === "main_theme" && SoundManager.sounds[name]) {
                sound.play()
            }
        })
        if (isPromise(play)) {
            const result = await play
            if (result) {
                result.on("progress", (progress, duration) => {
                    if (!SoundManager.fullDurations.hasOwnProperty(name)) {
                        SoundManager.fullDurations[name] = duration
                    }
                    SoundManager.playedDurations[name] = progress * duration
                })
            }
            SoundManager.cachedPlays[name] = result
        } else {
            SoundManager.cachedPlays[name] = play
        }
        if (SoundManager.cachedPlays[name])
            SoundManager.cachedPlays[name].volume = volume
    }

    // Stop a sound by name
    public static stopSound(name: appSounds): void {
        const sound = SoundManager.sounds[name];
        if (sound) {
            delete SoundManager.sounds[name]
            sound.stop();
        } else {
            console.warn(`Sound ${name} not found.`);
        }
    }

    // Stop a sound by name
    public static stopAll(): void {
        for (const [name, sound] of Object.entries(SoundManager.sounds)) {
            delete SoundManager.sounds[name]
            sound.stop();
        }
    }
    public static alreadyPlayed(name: appSounds): boolean {
        return !!SoundManager.sounds[name];
    }

    public static getDuration(name: appSounds): number {
        return SoundManager.fullDurations[name] - (SoundManager.playedDurations[name] || 0);
    }
}

