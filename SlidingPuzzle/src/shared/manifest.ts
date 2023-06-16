import type { ResolverManifest } from "pixi.js";

export const manifest: ResolverManifest = {
    bundles: [
        // {
        //     name: "sound",
        //     assets: {
        //         // "forklift-effect": "sound/forklift-effect.wav"
        //     }
        // },
        {
            name: "images",
            assets: {
                "puzzle": "images/puzzle.jpg"
            }
        }
    ]
}