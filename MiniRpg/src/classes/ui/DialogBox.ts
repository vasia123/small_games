import { Text, Container, NineSlicePlane, Texture } from "pixi.js";
import { assets } from "../assets";
import { Manager } from "../Manager";

export class DialogBox extends Container {
    private background: NineSlicePlane;
    private text: Text;
    private onOptionSelected: (optionIndex: string) => void;

    constructor(message: string, options: string[] = [], onOptionSelected: (optionIndex: string) => void) {
        super();

        this.onOptionSelected = onOptionSelected;
        const leftWidth = 30, topHeight = 30, rightWidth = 30, bottomHeight = 30
        let contentWidth = 800
        if (message.length > 300) {
            contentWidth = 1000
        }

        // Create the background of the dialog box
        this.background = new NineSlicePlane(Texture.from(assets.ui.dialog_box_3), leftWidth, topHeight, rightWidth, bottomHeight);
        this.background.width = contentWidth
        this.addChild(this.background);

        const leftPadding = leftWidth + 20, topPadding = topHeight + 10, bottomPadding = bottomHeight
        const contentAreaWidht = this.background.width - leftPadding * 2
        const optionFontSize = Manager.width * 0.02;
        const textFontSize = Manager.width * 0.025;

        const buttonsMargin = 10; // Margin around buttons
        const buttonsPadding = 30; // Padding around buttons
        const maxColumns = options.length > 1 ? 2 : 1; // Maximum columns allowed, 2 for multiple options, 1 for single
        let useTwoColumns = maxColumns === 2; // Start assuming two columns


        // Create text
        this.text = new Text(message, {
            fontFamily: 'Roboto Regular',
            fontSize: textFontSize,
            fill: 0x000000,
            wordWrap: true,
            wordWrapWidth: contentAreaWidht,
            dropShadowColor: 0xaca7a4,
            dropShadow: true,
            dropShadowAlpha: 0.3,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 2,
            align: "justify",
        });
        this.text.position.set(leftPadding, topPadding);
        this.addChild(this.text);


        // Calculate the widths of the options
        const optionWidths = options.map(option => {
            const tempText = new Text(option, {
                fontFamily: 'Roboto Regular',
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
                fontFamily: 'Roboto Regular',
                fontSize: optionFontSize,
                fill: 0xF2F6F9,
                padding: 10,
                dropShadowColor: 0x000000,
                dropShadow: true,
                dropShadowAlpha: 0.6,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 2,
            });
            optionText.interactive = true;

            // Add background and rounded corners to make it look like a button
            const buttonBackground = new NineSlicePlane(Texture.from(assets.ui.button_4), 15, 15, 15, 15);
            buttonBackground.width = optionText.width + buttonsPadding
            buttonBackground.height = optionText.height + buttonsPadding

            // Determine the column and row for this button
            if ((index === options.length - 1) && ((index + 1) % 2 !== 0)) useTwoColumns = false // last element
            const column = useTwoColumns ? index % maxColumns : 0;
            const row = useTwoColumns ? Math.floor(index / maxColumns) : index;

            // Position the background behind the text
            const columnWidth = useTwoColumns ? contentAreaWidht / 2 : contentAreaWidht;
            const columnSpacing = useTwoColumns ? columnWidth : (this.background.width - buttonBackground.width) / 2;
            buttonBackground.x = this.background.x + leftPadding + column * columnSpacing + (columnWidth - buttonBackground.width) / 2;

            // Adjust Y position
            if (useTwoColumns) {
                buttonBackground.y = this.text.y + this.text.height + buttonsMargin * (row + 1);
            } else {
                buttonBackground.y = this.text.y + this.text.height + buttonsMargin * (row + 1);
            }
            // Add option height to totalOptionsHeight
            if (column < 1) {
                totalOptionsHeight += buttonBackground.height + buttonsMargin;
            }
            if (row > 0) {
                buttonBackground.y += optionFontSize * row
            }

            optionText.position.set(buttonBackground.x + buttonsPadding / 2, buttonBackground.y + buttonsPadding / 2);

            // Add interaction
            optionText.on('pointerdown', () => this.onOptionSelected(options[index]));

            // Add the button background and text to the dialog box
            this.addChild(buttonBackground);
            this.addChild(optionText);

        });

        // Adjust the height of the background
        this.background.height = this.text.height + totalOptionsHeight + topPadding + bottomPadding;
    }

    show(duration: number = 500): Promise<void> {
        return new Promise((resolve) => {
            let elapsed = 0;
            this.alpha = 0; // initially hidden
            this.visible = true; // set the dialog box to be visible

            const step = (deltaTime: number) => {
                elapsed += deltaTime;
                if (elapsed < duration) {
                    // Interpolate alpha from 0 to 1
                    this.alpha = elapsed / duration;
                } else {
                    this.alpha = 1; // fully visible
                    Manager.ticker.remove(step, this); // stop the animation
                    resolve()
                }
            };

            // Start animation
            Manager.ticker.add(step, this);
        });
    }

    hide(duration: number = 500): Promise<void> {
        return new Promise((resolve) => {
            let elapsed = 0;
            this.alpha = 1; // initially visible

            const step = (deltaTime: number) => {
                elapsed += deltaTime;
                if (elapsed < duration) {
                    // Interpolate alpha from 1 to 0
                    this.alpha = 1 - (elapsed / duration);
                } else {
                    this.alpha = 0; // fully hidden
                    this.visible = false; // set the dialog box to be hidden
                    Manager.ticker.remove(step, this); // stop the animation
                    resolve()
                }
            };

            // Start animation
            Manager.ticker.add(step, this);
        });
    }
}
