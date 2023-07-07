extends Node2D


@onready var witness_sound = $Witness

func _ready():
	var jsCode = """
		const firebaseConfig = {
			apiKey: "AIzaSyD19hXl7T_hR22RKTbO0HRqzJLWB-dhnpw",
			authDomain: "small-games-dda7a.firebaseapp.com",
			projectId: "small-games-dda7a",
			storageBucket: "small-games-dda7a.appspot.com",
			messagingSenderId: "536294849994",
			appId: "1:536294849994:web:a7eaf666f68f46c537e333"
		};

		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}

		const db = firebase.firestore();
		const currentGameOrder = 0
	
		async function markGameAsCompleted() {
			try {
				
				// Reference to the games collection
				const gamesRef = db.collection('games');
				
				// Query for the game with the matching order
				const querySnapshot = await gamesRef.where('sort_order', '==', currentGameOrder).get();
				
				// Loop through the documents (should only be one) and update it
				querySnapshot.forEach(doc => {
					doc.ref.update({ is_completed: true });
				});
				
				console.log('Game marked as completed');
			} catch (error) {
				console.error('Error updating game data:', error);
			}
		}

		markGameAsCompleted()
	"""
	JavaScriptBridge.eval(jsCode,true)


func _on_button_button_down():
	if (not witness_sound.playing):
		witness_sound.play()
