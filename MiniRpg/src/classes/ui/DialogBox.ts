import { Text, Container, Graphics } from "pixi.js";
import { Manager } from "../Manager";

export class DialogBox extends Container {
    private background: Graphics;
    private text: Text;
    private onOptionSelected: (optionIndex: string) => void;

    constructor(message: string, options: string[] = [], onOptionSelected: (optionIndex: string) => void) {
        super();

        this.onOptionSelected = onOptionSelected;
        // const leftWidth = 30, topHeight = 30, rightWidth = 30, bottomHeight = 30
        let contentMinHeight = 300
        let contentWidth = 1000
        if (message.length > 300) {
            contentWidth = 1000
        }
        let textFontSize = Manager.width * 0.025;
        if (message.length > 500) {
            textFontSize = Manager.width * 0.020
        }
        if (message.length > 800) {
            textFontSize = Manager.width * 0.015
        }

        // Create the background of the dialog box
        // this.background = new NineSlicePlane(Texture.from(assets.ui.dialog_box_3), leftWidth, topHeight, rightWidth, bottomHeight);
        this.background = new Graphics();
        this.background.clear();
        // this.background.lineStyle(1, 0xffffff, 1); // Border: thickness 4, white color
        this.background.beginFill(0x000000, 0.5); // Semi-transparent black color

        const XPadding = 50, topPadding = 40, bottomPadding = 30
        const contentAreaWidht = contentWidth - XPadding * 2
        const optionFontSize = Manager.width * 0.02;

        const buttonsMargin = 10; // Margin around buttons
        const textBottomMargin = 10; // Margin around buttons
        const buttonsPaddingX = 20; // Padding around buttons
        const buttonsPaddingY = 10; // Padding around buttons
        const maxColumns = options.length > 1 ? 2 : 1; // Maximum columns allowed, 2 for multiple options, 1 for single
        let useTwoColumns = maxColumns === 2; // Start assuming two columns

        // Create text
        this.text = new Text(message, {
            fontFamily: 'Roboto Regular',
            fontSize: textFontSize,
            fill: 0xffffff,
            wordWrap: true,
            wordWrapWidth: contentAreaWidht,
            dropShadowColor: 0xaca7a4,
            dropShadow: true,
            dropShadowAlpha: 0.3,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 2,
            align: "justify",
        });
        this.text.position.set(XPadding, topPadding);
        this.addChild(this.text);
        let textHeight = this.text.height
        if (this.text.height < contentMinHeight) {
            textHeight = contentMinHeight
        }


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

            // Add background and rounded corners to make it look like a button
            // const buttonBackground = new NineSlicePlane(Texture.from(assets.ui.button_4), 15, 15, 15, 15);

            const buttonWidth = optionText.width + buttonsPaddingX * 2
            const buttonHeight = optionText.height + buttonsPaddingY * 2

            const buttonBackground = new Graphics();
            buttonBackground.lineStyle(2, 0xffffff, 1);
            buttonBackground.beginFill(0x465464, 0.8);
            buttonBackground.drawRoundedRect(0, 0, buttonWidth, buttonHeight, 5);
            buttonBackground.endFill();
            buttonBackground.interactive = true;


            // Determine the column and row for this button
            if ((index === options.length - 1) && ((index + 1) % 2 !== 0)) useTwoColumns = false // last element
            const column = useTwoColumns ? index % maxColumns : 0;
            const row = useTwoColumns ? Math.floor(index / maxColumns) : index;

            // Position the background behind the text
            const columnWidth = useTwoColumns ? contentAreaWidht / 2 : contentAreaWidht;
            const columnSpacing = useTwoColumns ? columnWidth : (contentWidth - buttonWidth) / 2;
            buttonBackground.x = XPadding + column * columnSpacing + (columnWidth - buttonWidth) / 2;

            // Adjust Y position
            if (useTwoColumns) {
                buttonBackground.y = this.text.y + textHeight + textBottomMargin + buttonsMargin * (row + 1);
            } else {
                buttonBackground.y = this.text.y + textHeight + textBottomMargin + buttonsMargin * (row + 1);
            }
            // Add option height to totalOptionsHeight
            if (column < 1) {
                totalOptionsHeight += buttonHeight + buttonsMargin;
            }
            if (row > 0) {
                buttonBackground.y += optionFontSize * row
            }

            optionText.position.set(buttonBackground.x + buttonsPaddingX, buttonBackground.y + buttonsPaddingY);

            // Add interaction
            buttonBackground.on('pointerdown', () => this.onOptionSelected(options[index]));

            // Add the button background and text to the dialog box
            this.addChild(buttonBackground);
            this.addChild(optionText);

        });

        // Adjust the height of the background
        const contentHeight = textHeight + textBottomMargin + totalOptionsHeight + topPadding + bottomPadding;
        this.background.drawRoundedRect(0, 0, contentWidth, contentHeight, 8); // Rounded rectangle
        this.background.endFill();
        // this.background.width = contentWidth
        this.addChildAt(this.background, 0);
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
