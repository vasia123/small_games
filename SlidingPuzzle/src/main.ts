// import * as ex from 'excalibur';
// import { Resources } from "./resources";
// import { GameScene } from './scenes/GameScene';

// class Game extends ex.Engine {
//     constructor() {
//       super({
//         canvasElementId: 'game',
//         width: 720,
//         height: 1280,
//         displayMode: ex.DisplayMode.FillContainer,
//         backgroundColor: ex.Color.fromHex('#176BAA')
//       });
//     }
//     initialize() {
//       const gameScene = new GameScene();
//       this.addScene('game', gameScene);
//       this.goToScene('game');
      
//       const loader = new ex.Loader([Resources.Puzzle]);
//       // The loaders button text can simply modified using this
//       // loader.playButtonText = 'Start game';
//       // The logo can be changed by inserting a base64 image string here
//       // loader.logo = '';
//       // loader.logoWidth = 15;
//       // loader.logoHeight = 14;
//       // The background color can be changed like so by supplying a valid CSS color string
//       // loader.backgroundColor = 'red'
//       loader.backgroundColor = '#176BAA'
//       loader.suppressPlayButton  = true

//       this.start(loader);
//     }
//   }
  
//   export const game = new Game();
//   game.initialize();

import { SceneManager } from './shared/scene-manager';
import { LoaderScene } from './scenes/loader-scene';
import { FILL_COLOR } from './shared/constants';

SceneManager.init(FILL_COLOR);

const loady: LoaderScene = new LoaderScene();
SceneManager.changeScene(loady);