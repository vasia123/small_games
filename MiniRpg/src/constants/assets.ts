import type { ResolverManifest } from "pixi.js";

export type appSounds = keyof typeof assets['sounds']

export const assets = {
    common: {
        player: 'images/player_2.png',
        player_hand: 'images/player_2_hand.png',
        flashlight: 'images/flashlight.png',
    },
    locations: {
        intro: 'images/intro.jpg',
        bg_1: 'images/background_1.jpeg',
        bg_2: 'images/background_2.jpeg',
        bg_3: 'images/background_3.jpeg',
        bg_3_dark: 'images/background_3_dark.jpg',
        bg_4: 'images/background_4.jpeg',
        bg_5: 'images/background_5.jpeg',
        crowbar: 'images/crowbar_bg.jpg',
        crowbar_taken: 'images/crowbar_taken.jpg',
        bg_cultists: 'images/background_cultists.jpg',
        bg_cultists_empty: 'images/background_cultists_empty.jpg',
        bg_stalkers: 'images/background_stalkers.jpg',
        bg_stalkers_empty: 'images/background_stalkers_empty_nofire.jpg',
        bg_giant_rat: 'images/background_giant_rat.jpg',
        bg_giant_rat_empty: 'images/background_giant_rat_empty.jpg',
        bg_empty_tunnel: 'images/bg_empty_tunnel.jpg',
        bg_crocodile: 'images/bg_crocodile.jpg',
        bg_bats: 'images/bg_bats.jpg',
        bg_harry: 'images/bg_harry.jpg',
        bg_tunnel_web: 'images/bg_tunnel_web.jpg',
        bg_tunnel_start: 'images/bg_tunnel_start.jpg',
        bg_tunnel_start_dark: 'images/bg_tunnel_start_dark.jpg',
        bg_tunnel_1: 'images/bg_tunnel_1.jpg',
        bg_tunnel_2: 'images/bg_tunnel_2.jpg',
        bg_tunnel_4: 'images/bg_tunnel_4.jpg',
        bg_homeless: 'images/bg_homeless.jpg',
    },
    fonts: {
        Roboto: {
            src: 'fonts/Roboto-Regular.ttf',
            data: { family: 'Roboto Regular' },
        }
    },
    ui: {
        dialog_box_1: 'images/dialog_box_1.png',
        dialog_box_2: 'images/dialog_box_2.png',
        dialog_box_3: 'images/dialog_box_3.png',
        button_1: 'images/button_1.png',
        button_2: 'images/button_2.png',
        button_3: 'images/button_3.png',
        button_4: 'images/button_4.png',
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
    },
    sounds: {
        main_theme: 'sounds/Darkness-Approaches_Looping.mp3',
        monsters: 'sounds/Monsters-Underground.mp3',
        witches: 'sounds/blud-i-vinishche.mp3',
        igra_na_vijivanie: 'sounds/kladbishe-serdec-igra-na-vijivanie.mp3',
        nimbus_2000: 'sounds/nimbus-2000.mp3',
        check: 'sounds/check.mp3',
        battle: 'sounds/Theyre-Closing-In_Looping.mp3',
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
            name: "locations",
            assets: assets.locations
        },
        {
            name: "fonts",
            assets: assets.fonts
        },
        {
            name: "ui",
            assets: assets.ui
        },
        {
            name: "bats",
            assets: assets.bats
        },
        {
            name: "sounds",
            assets: assets.sounds
        },
    ]
}