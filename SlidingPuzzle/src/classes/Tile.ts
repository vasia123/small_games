import { Sprite, Texture, Text } from 'pixi.js';
import type { Board } from './Board';
import { AnimationManager } from './AnimationManager';

export class Tile extends Sprite {
    public static readonly SIZE = 100; // Change this based on your tile size
    public id: number;
    public row: number;
    public col: number;
    public originRow: number;
    public originRcol: number;
    public app: Board;

    constructor(texture: Texture, id: number, row: number, col: number, app: Board) {
        super(texture);
        this.app = app;
        this.id = id;
        this.row = row;
        this.col = col;
        this.originRow = row;
        this.originRcol = col;
        this.width = Tile.SIZE;
        this.height = Tile.SIZE;
        this.eventMode = 'static';
        const label = new Text(id.toString(), { fontSize: 24, fill: 0xFFFFFF });
        this.on('pointerup', this.onTileClick);
        this.addChild(label);
    }
    private async onTileClick(): Promise<void> {
        const row = this.row
        const col = this.col
        // Check if the clicked tile is adjacent to the empty spot
        const adjacentOffsets = [
            { dr: -1, dc: 0 },
            { dr: 1, dc: 0 },
            { dr: 0, dc: -1 },
            { dr: 0, dc: 1 }
        ];
    
        for (const { dr, dc } of adjacentOffsets) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (this.app.tilesIds[newRow] && (this.app.tilesIds[newRow][newCol] === 0)) {
                // Swap the clicked tile with the empty spot
                this.app.tilesIds[newRow][newCol] = this.id
                this.app.tilesIds[row][col] = 0;
                this.row = newRow
                this.col = newCol
    
                // Animate tile to new position
                const targetX = newCol * (Tile.SIZE + this.app.tilesMargin);
                const targetY = newRow * (Tile.SIZE + this.app.tilesMargin);
                await AnimationManager.slideTo(this, targetX, targetY);
    
                // Check if the puzzle is solved after moving the tile
                if (this.app.isSolved()) {
                    alert("Puzzle Solved!");
                    // Implement additional logic upon solving the puzzle
                }
                return;
            }
        }
    }
}
