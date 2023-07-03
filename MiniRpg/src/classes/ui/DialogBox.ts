import { Text, Container, NineSlicePlane, Texture, Graphics } from "pixi.js";
import { assets } from "../assets";
import { Manager } from "../Manager";

export class DialogBox extends Container {
    private background: NineSlicePlane;
    private text: Text;
    private onOptionSelected: (optionIndex: number) => void;

    constructor(message: string, options: string[] = [], onOptionSelected: (optionIndex: number) => void) {
        super();

        this.onOptionSelected = onOptionSelected;
        const leftWidth = 55, topHeight = 55, rightWidth = 55, bottomHeight = 55

        // Create the background of the dialog box
        this.background = new NineSlicePlane(Texture.from(assets.backgrounds.dialog_box), leftWidth, topHeight, rightWidth, bottomHeight);
        console.log('this.window.texture.width', this.background.texture.width)
        this.background.width = 800
        this.addChild(this.background);

        const leftPadding = leftWidth, topPadding = topHeight, bottomPadding = bottomHeight
        const contentAreaWidht = this.background.width - leftPadding - topPadding
        const optionFontSize = Manager.width * 0.02;
        const textFontSize = Manager.width * 0.025;

        const buttonPadding = 30; // Padding around buttons
        const maxColumns = options.length > 1 ? 2 : 1; // Maximum columns allowed, 2 for multiple options, 1 for single
        let useTwoColumns = maxColumns === 2; // Start assuming two columns


        // Create text
        this.text = new Text(message, {
            fontFamily: 'Arial',
            fontSize: textFontSize,
            fill: 0x000000,
            wordWrap: true,
            wordWrapWidth: contentAreaWidht,
            dropShadowColor: 0xaca7a4,
            dropShadow: true,
            dropShadowAlpha: 0.3,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 1,
        });
        this.text.position.set(leftPadding, topPadding);
        this.addChild(this.text);
        console.log('this.text.height', this.text.height)


        // Calculate the widths of the options
        const optionWidths = options.map(option => {
            const tempText = new Text(option, {
                fontFamily: 'Arial',
                fontSize: optionFontSize,
                padding: 10,
            });
            return tempText.width;
        });
        // Check if at least one option exceeds half of the background width
        if (useTwoColumns) {
            useTwoColumns = !optionWidths.some(width => width > contentAreaWidht * 0.5 - 10);
        }


        // Determine total height required for options
        let totalOptionsHeight = 0;

        options.forEach((option, index) => {
            const optionText = new Text(option, {
                fontFamily: 'Arial',
                fontSize: optionFontSize,
                fill: 0xffffff,
                padding: 10,
            });
            optionText.interactive = true;

            // Add background and rounded corners to make it look like a button
            const buttonBackground = new Graphics();
            buttonBackground.beginFill(0x0000ff, 0.4);
            buttonBackground.drawRoundedRect(0, 0, optionText.width + 20, optionText.height + 20, 10);
            buttonBackground.endFill();

            // Determine the column and row for this button
            const column = useTwoColumns ? index % maxColumns : 0;
            const row = useTwoColumns ? Math.floor(index / maxColumns) : index;

            // Position the background behind the text
            const columnWidth = useTwoColumns ? contentAreaWidht / 2 : contentAreaWidht;
            const columnSpacing = useTwoColumns ? columnWidth : (this.background.width - buttonBackground.width) / 2;
            buttonBackground.x = this.background.x + leftPadding + column * columnSpacing + (columnWidth - buttonBackground.width) / 2;
            buttonBackground.y = this.text.y + this.text.height + optionFontSize * 1.5 * row + buttonPadding * (row + 1); // Add padding between options

            optionText.position.set(buttonBackground.x + 10, buttonBackground.y + 10);

            // Add interaction
            optionText.on('pointerdown', () => this.onOptionSelected(index));

            // Add the button background and text to the dialog box
            this.addChild(buttonBackground);
            this.addChild(optionText);

            // Add option height to totalOptionsHeight
            totalOptionsHeight += buttonBackground.height + buttonPadding;
        });
        if (useTwoColumns) totalOptionsHeight /= 2

        // Adjust the height of the background
        this.background.height = this.text.height + totalOptionsHeight + topPadding + bottomPadding;
        // this.background.height = Math.max(400, this.background.height);
        console.log('this.text.height', this.text.height, topHeight, bottomPadding)
        console.log('totalOptionsHeight', totalOptionsHeight)
        console.log('this.window.height', this.background.height)
    }
}
