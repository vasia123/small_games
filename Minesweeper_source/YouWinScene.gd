extends Node2D


@onready var witness_sound = $Witness

func _ready():
	var jsCode = """
		const { createClient } = supabase
		const supabaseClient = createClient('https://mjyfhdqsmwfvehhpbkjl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qeWZoZHFzbXdmdmVoaHBia2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MTAwOTYsImV4cCI6MjAwNDI4NjA5Nn0.hj4hfCX0A2_oiXx4QCSAZGbM6XjCIFfAoyUvDzSdDxI')
		
		const currentGameOrder = 0
	
		// Function to mark the current game as completed
		async function markGameAsCompleted() {
			try {
				const { error } = await supabaseClient
					.from('games')
					.update({ is_completed: true })
					.eq('order', currentGameOrder);

				if (error) {
					throw error;
				}
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
