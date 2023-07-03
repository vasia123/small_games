import type { ResolverManifest } from "pixi.js";

export const assets = {
    common: {
        player: 'images/player_2.png',
        player_hand: 'images/player_2_hand.png',
        flashlight: 'images/flashlight.png',
    },
    backgrounds: {
        bg_1: 'images/background_1.jpeg',
        bg_2: 'images/background_2.jpeg',
        bg_3: 'images/background_3.jpeg',
        bg_4: 'images/background_4.jpeg',
        bg_5: 'images/background_5.jpeg',
        dialog_box: 'images/dialog_box.png',
    },
    rats: {
        rat_1: 'images/rat_1.png',
        rat_2: 'images/rat_2.png',
        rat_3: 'images/rat_3.png',
        rat_4: 'images/rat_4.png',
    },
    bats: {
        bat_1: 'images/bat_1.png',
        bat_2: 'images/bat_2.png',
        bat_3: 'images/bat_3.png',
        bat_4: 'images/bat_4.png',
        bat_5: 'images/bat_5.png',
        bat_6: 'images/bat_6.png',
    }
}

export const manifest: ResolverManifest = {
    bundles: [
        {
            name: "common",
            assets: assets.common
        },
        {
            name: "rats",
            assets: assets.rats
        },
        {
            name: "backgrounds",
            assets: assets.backgrounds
        },
        {
            name: "bats",
            assets: assets.bats
        },
    ]
}