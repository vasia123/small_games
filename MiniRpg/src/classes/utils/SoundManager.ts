// import { Loader } from "pixi.js";
import { Sound } from "@pixi/sound";
import { appSounds, assets } from "../assets";

export class SoundManager {
    private static sounds: { [key: string]: Sound } = {};

    // Play a sound by name
    public static playSound(name: appSounds, volume: number = 1): void {
        SoundManager.sounds[name] = Sound.from({
            url: assets.sounds[name],
            volume
        });
        SoundManager.sounds[name].play()
    }

    // Stop a sound by name
    public static stopSound(name: appSounds): void {
        const sound = SoundManager.sounds[name];
        if (sound) {
            sound.stop();
        } else {
            console.warn(`Sound ${name} not found.`);
        }
    }
}

