extends Node2D

# Set the dimensions of the grid
const GRID_ROWS = 14
const GRID_COLUMNS = 9
const HEX_WIDTH = 116  # Width of hexagon sprite
const HEX_HEIGHT = 100 # Height of hexagon sprite
const OFFSET_X = 0
const OFFSET_Y = HEX_HEIGHT * .5 + 3
const NUMBER_OF_MINES = 20  # Number of mines to place in the grid

# Load the Cell scene
var HexCellScene = preload("res://HexCell.tscn")

# Preload the scenes
@onready var game_over_scene = $"../GameOver"
@onready var you_win_scene = $"../YouWinScene"
@onready var normal_sound = $"../ClickSound"
@onready var bomb_sound = $"../BombSound"
@onready var flag_sound = $"../FlagSound"
@onready var win_sound = $"../WinSound"

# Keep track of the hex cells
var hex_cells = []
var cells_revealed = 0
var game_over = false

# Called when the node enters the scene tree for the first time.
func _ready():
	# Loop through each row
	for row in range(GRID_ROWS):
		var row_cells = []
		# Loop through each column
		for col in range(GRID_COLUMNS):
			# Instance a new hexagonal cell
			var hex_cell = HexCellScene.instantiate()
			hex_cell.set_grid_position(Vector2(row, col))
			
			# Calculate the position for pointy-topped hexagons
			var x_pos = OFFSET_X + col * HEX_WIDTH * 0.75
			var y_pos = OFFSET_Y + row * HEX_HEIGHT
			if col % 2 == 0:
				y_pos -= HEX_HEIGHT * 0.5
			
			# Set the position of the hexagonal cell
			hex_cell.position = Vector2(x_pos, y_pos)
			
			# Add the hexagonal cell as a child of the HexGrid node
			add_child(hex_cell)
			row_cells.append(hex_cell)
		hex_cells.append(row_cells)
	AudioManager.loadAudios(["ambient"], "assets/sounds", {"loop":true})
	AudioManager.loadedAllAudios.connect(_on_loadedAllAudios)

func _on_loadedAllAudios():
	AudioManager.play("ambient",{"loop":true})

func init_game(initinal_coords: Vector2):
	# Place mines
	place_mines(initinal_coords)

	# Calculate numbers for each cell
	for row in range(GRID_ROWS):
		for col in range(GRID_COLUMNS):
			var adjacent_mines = count_adjacent_mines(row, col)
			hex_cells[row][col].set_adjacent_bombs(adjacent_mines)

# Randomly place mines in the grid
func place_mines(initinal_coords: Vector2):
	var placed_mines = 0
	while placed_mines < NUMBER_OF_MINES:
		var row = randi() % GRID_ROWS
		var col = randi() % GRID_COLUMNS
		if row == initinal_coords.x and col == initinal_coords.y:
			continue
		var cell = hex_cells[row][col]
		if not cell.is_bomb:
			cell.set_as_bomb()
			placed_mines += 1

# Count the number of mines adjacent to the cell at the given row and column
func count_adjacent_mines(row: int, col: int) -> int:
	var count = 0
	# Define possible neighbors' relative coordinates for pointy-topped hexagons
	var neighbors = [
		[1, 0], [-1, 0], [0, 1], [0, -1],
		[-1 if col % 2 == 0 else 1, 1],
		[-1 if col % 2 == 0 else 1, -1]
	]
	for neighbor in neighbors:
		var neighbor_row = row + neighbor[0]
		var neighbor_col = col + neighbor[1]
		if neighbor_row >= 0 and neighbor_row < GRID_ROWS and neighbor_col >= 0 and neighbor_col < GRID_COLUMNS:
			if hex_cells[neighbor_row][neighbor_col].is_bomb:
				count += 1
	return count


# Call this method from HexCell script when a cell is revealed
func on_cell_revealed(is_bomb: bool):
	cells_revealed += 1

	# If the revealed cell is a bomb, it's game over
	if is_bomb:
		player_loose()
	else:
		# If all non-bomb cells are revealed, the player wins
		if cells_revealed == GRID_ROWS * GRID_COLUMNS - NUMBER_OF_MINES:
			player_wins()

func play_normal_sound():
	normal_sound.play()

func play_bomb_sound():
	bomb_sound.play()

func play_flag_sound():
	flag_sound.play()

func reveal_all_cells():
	for row in hex_cells:
		for cell in row:
			cell.reveal()

func reveal_adjacent_cells(row: int, col: int):
	var directions = [  # trigwise (CCW) from RIGHT
		Vector2(1, 0),    # RIGHT
		Vector2(-1, 0),   # LEFT
		Vector2(0, 1),    # DOWN RIGHT
		Vector2(0, -1),   # UP LEFT
		Vector2(-1 if col % 2 == 0 else 1, -1),   # UP RIGHT
		Vector2(-1 if col % 2 == 0 else 1, 1),   # DOWN LEFT
	]
	
	for direction in directions:
		var new_row = row + direction.x
		var new_col = col + direction.y
		
		if new_row >= 0 and new_row < GRID_ROWS and new_col >= 0 and new_col < GRID_COLUMNS:
			var adjacent_cell = hex_cells[new_row][new_col]
			if not adjacent_cell.is_revealed:
				adjacent_cell.reveal()
			
func player_loose():
	if not game_over:
		AudioManager.stop("ambient")
		game_over = true
		print("Game Over")
		reveal_all_cells()
		game_over_scene.visible = true

func player_wins():
	if not game_over:
		AudioManager.stop("ambient")
		win_sound.play()
		game_over = true
		print("You Win!")
		you_win_scene.visible = true

