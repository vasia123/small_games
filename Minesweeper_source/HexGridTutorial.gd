extends Node2D

const GRID_ROWS = 2
const GRID_COLUMNS = 7
const NUM_BOMBS = 5
const HEX_WIDTH = 116  # Width of hexagon sprite
const HEX_HEIGHT = 100 # Height of hexagon sprite

var HexCellScene = preload("res://HexCell.tscn")

var grid = []
var hex_cells = []


func _ready():
	initialize_grid()
	place_bombs()
	calculate_numbers()
	# _print_grid()
	append_mines()
	
func append_mines():
	# Loop through each row
	for row in grid.size():
		var row_cells = []
		for col in grid[row].size():
		# Loop through each column
			# Instance a new hexagonal cell
			var hex_cell = HexCellScene.instantiate()
			hex_cell.set_grid_position(Vector2(row, col))
			
			# Calculate the position for pointy-topped hexagons
			var x_pos =  col * HEX_WIDTH * 0.75
			var y_pos =  row * HEX_HEIGHT
			if col % 2 == 0:
				y_pos -= HEX_HEIGHT * 0.5
			
			# Set the position of the hexagonal cell
			hex_cell.position = Vector2(x_pos, y_pos)
			var cell = grid[row][col]
			if cell == -1:
				hex_cell.set_as_bomb()
			
			# Add the hexagonal cell as a child of the HexGrid node
			add_child(hex_cell)
			row_cells.append(hex_cell)
		hex_cells.append(row_cells)
		
	for row in range(GRID_ROWS):
		for col in range(GRID_COLUMNS):
			var adjacent_mines = count_adjacent_mines(row, col)
			hex_cells[row][col].set_adjacent_bombs(adjacent_mines)
	reveal_all_cells()

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

func reveal_all_cells():
	for row in hex_cells:
		for cell in row:
			cell.reveal()

func initialize_grid():
	for row in range(GRID_ROWS):
		grid.append([])
		for col in range(GRID_COLUMNS):
			grid[row].append(0)

func place_bombs():
	var placed_bombs = 0
	while placed_bombs < NUM_BOMBS:
		var row = randi() % GRID_ROWS
		var col = randi() % GRID_COLUMNS
		if grid[row][col] == 0:
			grid[row][col] = -1 # -1 represents a bomb
			placed_bombs += 1

func calculate_numbers():
	for row in range(GRID_ROWS):
		for col in range(GRID_COLUMNS):
			if grid[row][col] == -1:
				continue
			var bomb_count = 0
			var neighbor_offsets = [  # trigwise (CCW) from RIGHT
				Vector2(1, 0),    # RIGHT
				Vector2(-1, 0),   # LEFT
				Vector2(0, 1),    # DOWN RIGHT
				Vector2(0, -1),   # UP LEFT
				Vector2(-1 if col % 2 == 0 else 1, -1),   # UP RIGHT
				Vector2(-1 if col % 2 == 0 else 1, 1),   # DOWN LEFT
			]
			for offset in neighbor_offsets:
				var neighbor = Vector2(col, row) + offset
				if is_inside_grid(neighbor) and grid[int(neighbor.y)][int(neighbor.x)] == -1:
					bomb_count += 1
			grid[row][col] = bomb_count

func is_inside_grid(pos: Vector2):
	return pos.x >= 0 and pos.x < GRID_COLUMNS and pos.y >= 0 and pos.y < GRID_ROWS

func _print_grid():
	# Helper function to print the grid (useful for debugging)
	for row in grid:
		var row_str = ""
		for cell in row:
			if cell == -1:
				row_str += "B "
			else:
				row_str += str(cell) + " "

func on_cell_revealed(_is_bomb):
	pass

func reveal_adjacent_cells(_x,_y):
	pass
