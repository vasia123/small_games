extends Node2D


@export var grid_position : Vector2 = Vector2(0, 0)

@export var initialized: bool = false
@export var is_bomb: bool = false
@export var adjacent_bombs: int = 0

@onready var cover = $Cover
@onready var empty = $Empty
@onready var label = $Label
@onready var bomb = $Bomb
@onready var bomb_exploded = $Bomb/Exploded
@onready var bomb_not_exploded = $Bomb/NotExploded
@onready var debug_label = $Debug
@onready var flag = $Flag

var is_revealed: bool = false
var debug_enabled = false

var is_long_press = false
var long_press_start_time = null
const LONG_PRESS_DURATION = 0.5  # Duration (in seconds) to consider a press as long press


func _ready():
	# Initially, only the cover should be visible
	empty.visible = true
	cover.visible = true
	label.visible = false
	flag.visible = false
	bomb.visible = false
	bomb_exploded.visible = false
	bomb_not_exploded.visible = false
	if debug_enabled:
		debug_label.text = str(str(grid_position.x) + "," + str(grid_position.y))
	else:
		debug_label.visible = false


func set_grid_position(pos: Vector2):
	grid_position = pos

func handle_click():
	if not flag.visible:
		if not initialized:
			get_parent().init_game(grid_position)
		# Add your logic for when the hex cell is clicked here
		reveal()
		if is_bomb:
			get_parent().play_bomb_sound()
			explode_bomb()
		else:
			get_parent().play_normal_sound()

func _on_area_2d_input_event(_viewport, event, _shape_idx):
	
	# Start counting time if touch event begins
	if event is InputEventScreenTouch and event.pressed:
		long_press_start_time = Time.get_ticks_msec()
		is_long_press = false
		
	# Check if touch ended, and if the duration was long enough for a long press
	if event is InputEventScreenTouch and !event.pressed:
		if long_press_start_time and Time.get_ticks_msec() - long_press_start_time > LONG_PRESS_DURATION * 1000:
			toggle_flag()
			is_long_press = true
		else:
			handle_click()
		long_press_start_time = null

	# Right-click or long press to toggle flag
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_RIGHT and event.pressed:
		toggle_flag()

	# Handle click
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and !event.pressed:
		if not is_long_press and long_press_start_time == null:
			handle_click()


func reveal():
	#if cascade and not is_revealed:
	#	print("reveal: ", grid_position.x,",", grid_position.y)
	if is_revealed:
		return
	is_revealed = true
	
	get_parent().on_cell_revealed(is_bomb)

	# Hide the cover
	cover.visible = false

	# If it's a bomb, show the bomb sprite
	if is_bomb:
		bomb.visible = true
		bomb_not_exploded.visible = true
	# Otherwise, show the empty sprite and, if there are adjacent bombs, show the count
	else:
		if adjacent_bombs > 0:
			label.text = str(adjacent_bombs)
			label.visible = true
		else:
			get_parent().reveal_adjacent_cells(grid_position.x, grid_position.y)

# Call this function from outside to set this cell as a bomb
func set_as_bomb():
	is_bomb = true

# Call this function from outside to set the number of adjacent bombs
func set_adjacent_bombs(count: int):
	adjacent_bombs = count
	initialized = true

# Call this function to explode the bomb
func explode_bomb():
	if is_bomb and is_revealed:
		bomb_exploded.visible = true
		bomb_not_exploded.visible = false


func toggle_flag():
	# Toggle the visibility of the flag
	flag.visible = !flag.visible
	get_parent().play_flag_sound()
