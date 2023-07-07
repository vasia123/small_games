import type { ResolverManifest } from "pixi.js";

export type appSounds = keyof typeof assets['sounds']

export const assets = {
    locations: {
        intro_1: 'images/intro_1.jpg',
        intro_2: 'images/intro_2.jpg',
        chief: 'images/chief.jpg',
    },
    fonts: {
        Roboto: {
            src: 'fonts/Roboto-Regular.ttf',
            data: { family: 'Roboto Regular' },
        }
    },
    sounds: {
        main_theme: 'sounds/main_theme.mp3',
        check: 'sounds/check.mp3',
        win: 'sounds/win.mp3',
        witness_3: 'sounds/witness_3.wav',
    }
}

export const manifest: ResolverManifest = {
    bundles: [
        {
            name: "locations",
            assets: assets.locations
        },
        {
            name: "fonts",
            assets: assets.fonts
        },
        {
            name: "sounds",
            assets: assets.sounds
        },
    ]
}