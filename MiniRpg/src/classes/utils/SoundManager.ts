// import { Loader } from "pixi.js";
import { Sound } from "@pixi/sound";
import { appSounds, assets } from "../assets";

export class SoundManager {
    private static sounds: { [key: string]: Sound } = {};

    // Play a sound by name
    public static playSound(name: appSounds, volume: number = 1, infinitely = false): void {
        SoundManager.sounds[name] = Sound.from({
            url: assets.sounds[name],
            volume
        });

        SoundManager.sounds[name].play((sound: Sound) => {
            if (infinitely && SoundManager.sounds[name]) {
                sound.play()
            }
        })
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
}

