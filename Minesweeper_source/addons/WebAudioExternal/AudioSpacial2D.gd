class_name AudioSpacial2D
extends Node2D

@export var audio_name = "" : set = audio_update

var config = {}
@export var enable = false : set = play_change
@export var isPlaying = false : set = play_change

@export var orientation: Array[float] = [0,0,0] : set = update_orientation

@export var loop = true : set = update_loop
@export_range(-60,0,0.1) var volume: float = -20 : set = update_volume
@export_range(0,2,0.05) var pitch: float = 1 : set = update_pitch

@export_range(0,360,1) var coneInnerAngle: int = 360 : set = update_coneInnerAngle
@export_range(0,360,1) var coneOuterAngle: int = 360 : set = update_coneOuterAngle
@export_range(0,1,0.05) var coneOuterGain: float = 1 : set = update_coneOuterGain
enum distanceModelEnum {linear, inverse, exponential}
@export var distanceModel: distanceModelEnum = distanceModelEnum.linear : set = update_distanceModel
@export var maxDistance: float = 10000 : set = update_maxDistance
@export var refDistance: float = 1 : set = update_refDistance
@export var rolloffFactor: float = 1 : set = update_rolloffFactor
@export var stereo: float = 1 : set = update_stereo
enum panningModelEnum {equalpower, HRTF}
@export var panningModel: panningModelEnum = panningModelEnum.HRTF : set = update_panningModel

func update_coneInnerAngle(_conner):
	coneInnerAngle = _conner
	update_config()

func update_coneOuterAngle(_value):
	coneOuterAngle = _value
	update_config()

func update_coneOuterGain(_value):
	coneOuterGain = _value
	update_config()

func update_distanceModel(_value):
	distanceModel = _value
	update_config()

func update_maxDistance(_value):
	maxDistance = _value
	update_config()

func update_rolloffFactor(_value):
	rolloffFactor = _value
	update_config()

func update_refDistance(_value):
	refDistance = _value
	update_config()

func update_panningModel(_value):
	panningModel = _value
	update_config()
	
func update_stereo(_value):
	stereo = _value
	update_config()


	


func _ready():
	set_notify_transform(true)
	if isPlaying and enable and is_inside_tree():
		AudioManager.play(audio_name,config)
		update_config()



func _notification(what):
	if what == NOTIFICATION_TRANSFORM_CHANGED and is_inside_tree(): 
		change_rect()
		
func change_rect():
	if is_inside_tree():
		update_pos()


func update_loop(_loop):
	loop = _loop
	update_config();
	
func update_volume(_volume):
	volume = _volume
	update_config();
	
func update_pitch(_pitch):
	pitch = _pitch
	update_config();


func update_config():
	config["loop"] = loop
	config["volume"] = volume
	config["pitch"] = pitch
	config["orientation"] = orientation
	config["stereo"] = stereo

	config["panner"] = {
		"coneInnerAngle":coneInnerAngle,
		"coneOuterAngle":coneOuterAngle,
		"coneOuterGain":coneOuterGain,
		"distanceModel":distanceModel,
		"maxDistance":maxDistance,
		"refDistance":refDistance,
		"rolloffFactor":rolloffFactor,
		"panningModel":panningModel
	}
	AudioManager.update_config_audio(config,audio_name)
	if is_inside_tree():
		update_pos()

func update_pos():
	var pos = [global_position[0],global_position[1],-0.5]
	AudioManager.update_source_pos(pos,audio_name)

func update_orientation(_value):
	orientation = _value
	AudioManager.update_source_orientation(orientation,audio_name)


func audio_update(new_name):
	AudioManager.stop(audio_name)
	audio_name = new_name
	if isPlaying and enable:
		AudioManager.play(audio_name,config)

func play():
	AudioManager.play(audio_name,config)

func play_change(_new_status):
	if isPlaying != _new_status and _new_status and is_inside_tree():
		AudioManager.play(audio_name,config)
		update_config()
	elif isPlaying and !_new_status:
		AudioManager.stop(audio_name)
	
	isPlaying = _new_status;
	enable = _new_status;
	
