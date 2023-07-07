extends Node2D

@onready var intro = $Panel/Intro
@onready var button1 = $Panel/Button1
@onready var tutorial = $Panel/Tutorial
@onready var button2 = $Panel/Button2
@onready var hex_grid = $HexGrid

func _ready():
	intro.visible = true
	button1.visible = true
	tutorial.visible = false
	button2.visible = false
	hex_grid.visible = false
	AudioManager.loadAudios(["tutorial"], "assets/sounds", {"loop":true})
	AudioManager.loadedAllAudios.connect(_on_loadedAllAudios)

func _on_loadedAllAudios():
	AudioManager.play("tutorial",{"loop":true})
	
func _on_button_1_button_up():
	intro.visible = false
	button1.visible = false
	tutorial.visible = true
	button2.visible = true
	hex_grid.visible = true
	
func _on_button_2_button_up():
	AudioManager.stop("tutorial")
	get_tree().change_scene_to_file("res://main.tscn")
	
#func _process(_delta):
	#if $BackgroundMusic.playing == false:
	#	$BackgroundMusic.play()
