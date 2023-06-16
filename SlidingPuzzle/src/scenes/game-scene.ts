import { Container, Texture, Sprite, Rectangle, Text } from 'pixi.js';
import { IScene } from '../shared/scene-manager';
import { gsap } from 'gsap';

export class GameScene extends Container implements IScene {
  private tileSize!: number;
  private grid!: number[][];
  private emptyPos!: { x: number; y: number; };
  private gridWidth!: number;
  private gridHeight!: number;
  private startX!: number;
  private startY!: number;
  private gap!: number;
  private tileToGrid!: {[key: number]: { x: number; y: number; }};
  private container = new Container();

  constructor() {
    super();
    this.onInitialize();
  }
    
  public onInitialize() {
    this.tileSize = 100;
    this.gap = 5;
    this.grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0]
    ];
    this.tileToGrid = {}

    const texture = Texture.from("puzzle");
    const spriteWidth = this.tileSize;
    const spriteHeight = this.tileSize;

    this.gridWidth = this.tileSize * this.grid[0].length + this.gap * (this.grid[0].length - 1);
    this.gridHeight = this.tileSize * this.grid.length + this.gap * (this.grid.length - 1);

    this.startX = (window.innerWidth - this.gridWidth) / 2 + this.tileSize / 2;
    this.startY = (window.innerHeight - this.gridHeight) / 2 + this.tileSize / 2;
    // this.startX = 0
    // this.startY = 0

    this.shuffleGrid();

    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        const number = this.grid[y][x];
        if (number !== 0) {
          const index = number - 1;
          const rect = new Rectangle((index % this.grid[0].length) * spriteWidth, Math.floor(index / this.grid[0].length) * spriteHeight, spriteWidth, spriteHeight);
          const tileTexture = new Texture(texture.baseTexture, rect);

          const tile = new Sprite(tileTexture);
          tile.width = spriteWidth;
          tile.height = spriteHeight;
          tile.position.set(this.startX + x * (this.tileSize + this.gap), this.startY + y * (this.tileSize + this.gap));
          tile.interactive = true;
          tile.on('pointerup', () => this.slideTile(tile));

          tile.texture.frame = rect;
          tile.texture.updateUvs()
          tile.name = "tile_" + number

          this.tileToGrid[tile.name] = { x, y };

          const label = new Text(number.toString(), { fontSize: 24, fill: 0xFFFFFF });
          // label.position.set(tile.x, tile.y);

          tile.addChild(label);
          this.container.addChild(tile);
        } else {
          this.emptyPos = { x, y };
        }
      }
    }
    this.addChild(this.container);
  }

  private shuffleGrid() {
    let flatGrid = this.grid.flat();
    for (let i = flatGrid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flatGrid[i], flatGrid[j]] = [flatGrid[j], flatGrid[i]];
    }
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        this.grid[y][x] = flatGrid[y * this.grid.length + x];
      }
    }
    console.log('this.grid', this.grid)
  }

  private isSolved() {
    let number = 1;
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        if (this.grid[y][x] !== 0 && this.grid[y][x] !== number) {
          return false;
        }
        number++;
      }
    }
    return true;
  }
  
  
private slideTile(tile: Sprite) {
  console.log('click tile.id', tile.name);

  const { x, y } = this.tileToGrid[tile.name];
  const dx = x - this.emptyPos.x;
  const dy = y - this.emptyPos.y;

  if (((dx === 1 || dx === -1) && dy === 0) || (dx === 0 && (dy === 1 || dy === -1))) {

      // Swap the empty position with the tile's position
      this.tileToGrid[tile.name] = {
          x: x - dx,
          y: y - dy
      };

      // Update empty position
      this.grid[this.emptyPos.y][this.emptyPos.x] = this.grid[y][x];
      this.grid[y][x] = 0;
      this.emptyPos = { x, y };

      // Animate the sprite to slide to the target position
      const targetX = tile.x - dx * (this.tileSize + this.gap);
      const targetY = tile.y - dy * (this.tileSize + this.gap);

      gsap.to(tile, { x: targetX, y: targetY, duration: 0.1 });

      // Check if the grid is solved
      if (this.isSolved()) {
          alert("Congratulations! You have solved the puzzle.");
          // Optionally, you can restart or navigate to another scene here.
      }
  }
}

  update(framesPassed: number): void {
      
  }

  resize(parentWidth: number, parentHeight: number): void {
    //
    // this._viteLogo.position.x = parentWidth/2 - 120;
    // this._viteLogo.position.y = parentHeight/2;

    // this._pixiLogo.position.x = parentWidth/2;
    // this._pixiLogo.position.y = parentHeight/2;

    // this._tsLogo.position.x = parentWidth/2 + 120;
    // this._tsLogo.position.y = parentHeight/2;
  }
}