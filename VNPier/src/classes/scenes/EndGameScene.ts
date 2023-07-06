import { Container, Text, Graphics } from 'pixi.js';
import { IScene } from '../../interfaces/IScene';
import { Manager } from '../Manager';
import { Locations } from './Locations';

export class EndGameScene extends Container implements IScene {
    private message: Text;
    private timerText: Text;
    private endTime: number;
    private intervalId?: number;

    constructor() {
        super();

        // Check if there's a saved endTime in local storage
        const savedEndTime = localStorage.getItem('endTime');
        if (savedEndTime) {
            this.endTime = Number(savedEndTime);
        } else {
            if (import.meta.env.DEV) {
                this.endTime = Date.now() + 10 * 1000;
            } else {
                this.endTime = Date.now() + 120 * 1000; // 2 minutes from now
            }
            localStorage.setItem('endTime', this.endTime.toString());
        }
        // Create a black background
        const background = new Graphics();
        background.beginFill(0x000000);
        background.drawRect(0, 0, Manager.width, Manager.height);
        background.endFill();
        this.addChild(background);

        // Create and display the 'You Lost' message
        this.message = new Text('Ты проиграл', {
            fontFamily: 'Arial',
            fontSize: 64,
            fill: 0xff1010,
            align: 'center'
        });
        this.message.position.set((Manager.width - this.message.width) / 2, Manager.height / 4);
        this.addChild(this.message);

        // Create and display the timer
        this.timerText = new Text('', {
            fontFamily: 'Arial',
            fontSize: 32,
            fill: 0xffffff,
            align: 'center'
        });
        this.addChild(this.timerText);

        // Update the timer
        this.updateTimer();
        this.intervalId = window.setInterval(() => this.updateTimer(), 1000);
    }

    private updateTimer(): void {
        const remainingTime = Math.max(0, this.endTime - Date.now());
        const minutes = Math.floor(remainingTime / (60 * 1000));
        const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
        this.timerText.text = `Можно попытаться снова через ${minutes}:${seconds < 10 ? '0' : ''
            }${seconds}`;
        this.timerText.position.set((Manager.width - this.timerText.width) / 2, Manager.height / 2);

        // Check if the timer has reached 0, then clear the interval and remove endTime from local storage
        if (remainingTime <= 0) {
            if (this.intervalId !== undefined) {
                clearInterval(this.intervalId);
            }
            localStorage.removeItem('endTime');
            // You can navigate to another scene or reload the game here
            Manager.changeScene(new Locations());
        }
    }
    public update(_delta: number): void { }
}
