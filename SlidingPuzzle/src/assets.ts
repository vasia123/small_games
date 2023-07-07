import type { ResolverManifest } from "pixi.js";

export type appSounds = keyof typeof assets['sounds']

export const assets = {
    common: {
        puzzle: 'images/puzzle.jpg',
    },
    sounds: {
        witness_4: 'sounds/witness_4.wav',
        main_theme: 'sounds/main_theme.mp3',
        click: 'sounds/click.mp3',
    }
}

export const manifest: ResolverManifest = {
    bundles: [
        {
            name: "common",
            assets: assets.common
        },
        {
            name: "sounds",
            assets: assets.sounds
        },
    ]
}