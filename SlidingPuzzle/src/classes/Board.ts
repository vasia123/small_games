import { Container, Texture, Rectangle, Application } from 'pixi.js';
import { Tile } from './Tile';

export class Board extends Container {
    private tiles: {[key: number]: Tile} = {}; 
    public tilesIds: number[][] = [];
    private readonly rows: number = 3; // Change this based on your preference
    private readonly cols: number = 3; // Change this based on your preference
    public readonly tilesMargin: number = 5; // Margin between tiles

    constructor(assets: {
        puzzle: Texture;
    }, app: Application) {
        super();
        this.initializeTiles(assets);
        this.shuffleTiles();
        this.centerOnScreen(app);
    }

    private initializeTiles(assets: {
        puzzle: Texture;
    }): void {
        const puzzleTexture = assets.puzzle;
        const tileWidth = puzzleTexture.width / this.cols;
        const tileHeight = puzzleTexture.height / this.rows;

        let id = 1
        for (let row = 0; row < this.rows; row++) {
            this.tilesIds[row] = []
            for (let col = 0; col < this.cols; col++) {
                if (row === this.rows - 1 && col === this.cols - 1) {
                    // Keep the last spot empty
                    // this.emptyRow = row;
                    // this.emptyCol = col;
                    this.tilesIds[row][col] = 0
                } else {
                    const tileTexture = new Texture(
                        puzzleTexture.baseTexture,
                        new Rectangle(col * tileWidth, row * tileHeight, tileWidth, tileHeight)
                    );
                    const tile = new Tile(tileTexture, id, row, col, this);
                    tile.x = col * (Tile.SIZE + this.tilesMargin); // Add margin
                    tile.y = row * (Tile.SIZE + this.tilesMargin); // Add margin
                    this.tiles[id] = tile;
                    this.addChild(tile);
                    this.tilesIds[row][col] = id
                    id++;
                }

            }
        }
    }
    
    private centerOnScreen(app: Application): void {
        const totalWidth = this.cols * (Tile.SIZE + this.tilesMargin) - this.tilesMargin;
        const totalHeight = this.rows * (Tile.SIZE + this.tilesMargin) - this.tilesMargin;
        this.x = (app.view.width - totalWidth) / 2;
        this.y = (app.view.height - totalHeight) / 2;
    }


    private shuffleTiles(): void {
        let flatGrid: number[] = [];
        let inversions: number;
        let blankRowFromBottom: number;
        do {
            flatGrid = this.tilesIds.flat();
            for (let i = flatGrid.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [flatGrid[i], flatGrid[j]] = [flatGrid[j], flatGrid[i]];
            }
            inversions = this.countInversions(flatGrid);
            const blankIndex = flatGrid.findIndex(val => val === 0);
            blankRowFromBottom = this.rows - Math.floor(blankIndex / this.rows);
        } while (
            (this.rows % 2 === 1 && inversions % 2 === 1) ||
            (this.rows % 2 === 0 && (inversions + blankRowFromBottom) % 2 === 0)
        );
    
        for (let newRowIndex = 0; newRowIndex < this.tilesIds.length; newRowIndex++) {
            for (let newColIndex = 0; newColIndex < this.tilesIds[newRowIndex].length; newColIndex++) {
                const id = flatGrid[newRowIndex * this.tilesIds.length + newColIndex];
                this.tilesIds[newRowIndex][newColIndex] = id
                const tile = this.tiles[id]
    
                if (tile) {
                    tile.row = newRowIndex;
                    tile.col = newColIndex;
                    tile.x = newColIndex * (Tile.SIZE + this.tilesMargin);
                    tile.y = newRowIndex * (Tile.SIZE + this.tilesMargin);
                }
            }
        }
    }

    private countInversions(array: number[]): number {
        let invCount = 0;
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] > array[j] && array[i] !== 0 && array[j] !== 0) {
                    invCount++;
                }
            }
        }
        return invCount;
    }
    
    
    public isSolved(): boolean {
        let expectedValue = 1;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                // The last tile should be 0 (blank)
                if (row === this.rows - 1 && col === this.cols - 1) {
                    if (this.tilesIds[row][col] !== 0) {
                        return false;
                    }
                } else {
                    // Check if the tile is in the correct position
                    if (this.tilesIds[row][col] !== expectedValue) {
                        return false;
                    }
                    expectedValue++;
                }
            }
        }
        return true;
    }
    
}
