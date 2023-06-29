import { Texture } from "pixi.js"
import { GameAssets } from "../constants/gameSettings"

export type IAssetsBundle = {
    [key in keyof typeof GameAssets]: Texture
}