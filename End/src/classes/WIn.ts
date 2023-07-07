import { Container, Text, Graphics, TextStyle } from 'pixi.js';
import { Game } from './Game';
import { SoundManager } from './SoundManager';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, updateDoc, doc, Firestore } from 'firebase/firestore/lite';

export class WinScene extends Container {
    // private message: Text;
    private descriptiveText: Text;
    private button: Graphics;

    constructor({ app }: Game) {
        super();

        // Create a black background
        const background = new Graphics();
        background.beginFill(0x000000);
        background.drawRect(0, 0, app.view.width, app.view.height);
        background.endFill();
        this.addChild(background);

        // Create and display the 'you got a hint' message
        // this.message = new Text('Ты получил подсказку!', new TextStyle({
        //     fontFamily: 'Arial',
        //     fontSize: 64,
        //     fill: 0xffffff,
        //     align: 'center'
        // }));
        // this.message.position.set((app.view.width - this.message.width) / 2, app.view.height / 4);
        // this.addChild(this.message);

        // Create and display the descriptive text
        this.descriptiveText = new Text('Последняя загадка пала перед тобой,\n\nа вместе с ней и очередной свидетель!', new TextStyle({
            fontFamily: 'Arial',
            fontSize: 32,
            fill: 0xffffff,
            align: 'center'
        }));
        this.descriptiveText.position.set((app.view.width - this.descriptiveText.width) / 2, 200 + 20);
        this.addChild(this.descriptiveText);

        // Create a button
        this.button = new Graphics();
        this.button.beginFill(0xffd900);
        this.button.drawRect(0, 0, 400, 50);
        this.button.endFill();
        this.button.position.set((app.view.width - this.button.width) / 2, this.descriptiveText.y + this.descriptiveText.height + 20);
        this.button.interactive = true;
        this.addChild(this.button);

        // Button text
        const buttonText = new Text('Слушать показания свидетеля', new TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0x000000,
            align: 'center'
        }));
        buttonText.position.set(
            this.button.x + (this.button.width - buttonText.width) / 2,
            this.button.y + (this.button.height - buttonText.height) / 2
        );
        this.addChild(buttonText);

        // Add button click handler
        this.button.on('pointerdown', () => {
            SoundManager.stopAll();
            SoundManager.playSound("witness_5");
            // Button click logic here
            console.log('Button clicked');
            // For example, navigate to another scene:
            // app.view.changeScene(new Locations());
        });
        const firebaseConfig = {
            apiKey: "AIzaSyD19hXl7T_hR22RKTbO0HRqzJLWB-dhnpw",
            authDomain: "small-games-dda7a.firebaseapp.com",
            projectId: "small-games-dda7a",
            storageBucket: "small-games-dda7a.appspot.com",
            messagingSenderId: "536294849994",
            appId: "1:536294849994:web:a7eaf666f68f46c537e333"
        };

        const fbapp = initializeApp(firebaseConfig);

        const db = getFirestore(fbapp);
        const currentGameOrder = 4

        // Function to mark the current game as completed
        async function markGameAsCompleted(db: Firestore) {
            try {
                // Reference to the games collection
                const gamesCol = collection(db, 'games');

                // Construct the query
                const q = query(gamesCol, where('sort_order', '==', currentGameOrder));

                // Execute the query
                const querySnapshot = await getDocs(q);

                // Loop through the documents (should only be one) and update it
                querySnapshot.forEach(docSnap => {
                    const gameDoc = doc(db, 'games', docSnap.id);
                    updateDoc(gameDoc, { is_completed: true });
                });

                console.log('Game marked as completed');
            } catch (error) {
                console.error('Error updating game data:', error);
            }
        }

        markGameAsCompleted(db)
    }

    public update(_delta: number): void { }
}
