// src/main.ts

import { Manager } from "./classes/Manager";
import { LoaderScene } from "./classes/scenes/LoaderScene";

const screenWidth = 1280
const screenHeight = 720

Manager.initialize(screenWidth, screenHeight, 0x1099bb)
const loader = new LoaderScene()
Manager.changeScene(loader)

