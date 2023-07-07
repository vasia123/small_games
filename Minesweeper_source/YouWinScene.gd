extends Node2D


@onready var witness_sound = $Witness


func _on_button_button_down():
	if (not witness_sound.playing):
		witness_sound.play()
