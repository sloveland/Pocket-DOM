/*jslint browser:true */

// Game Namespace
var Game = Game || {
	currentMenu: 0,
	currentScene: {},
	currentPhase: 0,
	cursor: {},
	menus: [],
	scenes: [],
	addScene: function(scene) {
		Game.scenes.push(scene);
	},
	showPrompt: function() {
		console.log(Game.currentScene.phases[Game.currentPhase].prompt);
	},
	run: function() {

	}
};

// Menu Class
Game.Menu = function() {
	this.grid = [];
};
Game.Menu.prototype = {
	setGrid: function() {
		this.grid = [];
	}
};

// Scene Class
Game.Scene = function() {
	this.phases = [];
};
Game.Scene.prototype = {
	start: function() {
		Game.currentScene = this;
		Game.currentPhase = 0;
		this.phases[Game.currentPhase].start();
	},
	addPhase: function(phase) {
		this.phases.push(phase);
	}
};

// Phase Class
Game.Phase = function() {
	this.options = [];
};
Game.Phase.prototype = {
	addOptions: function(options) {
		var len = options.length;
		for (i = 0; i < len; i++) {
			this.options.push(options[i]);
		}
	},
	nextPhase: function(phase) {
		Game.currentPhase = phase;
	},
	onChoose: function() {
		console.log("Choose");
	},
	onCancel: function() {
		console.log("Cancel");
	},
	onStart: function() {
		console.log("Start");
	},
	onSelect: function() {
		console.log("Select");
	},
	onUp: function() {
		console.log("Up");
	},
	onRight: function() {
		console.log("Right");
	},
	onDown: function() {
		console.log("Down");
	},
	onLeft: function() {
		console.log("Left");
	},
	showOptions: function() {
		var len = this.options.length;
		for (i = 0; i < len; i++) {
			console.log(this.options[i]);
		}
	},
	start: function() {
		console.log("phase Started");
	}
};


// Intro Scene
var intro = new Game.Scene(),
phase01 = new Game.Phase();
options = ["New Game", "Continue"];
phase01.addOptions(options);
phase01.start = function() {
	this.showOptions();
};
phase01.onStart = function() {
	console.log("Off to meet Professor Oak!");
};
intro.addPhase(phase01);
Game.addScene(intro);

// Cursor
Game.cursor = {
	x: 0,
	y: 0,
	getLocation: function() {
		return [this.x, this.y];
	},
	moveUp: function() {
		this.y - 1;
	},
	moveRight: function() {
		this.x + 1;
	},
	moveDown: function() {
		this.y + 1;
	},
	moveLeft: function() {
		this.x - 1;
	}
};


// Game Controls
Game.controls = {
	choose: function() {
		Game.currentScene.phases[Game.currentPhase].onChoose();
	},
	cancel: function() {
		Game.currentScene.phases[Game.currentPhase].onCancel();
	},
	start: function() {
		Game.currentScene.phases[Game.currentPhase].onStart();
	},
	select: function() {
		Game.currentScene.phases[Game.currentPhase].onSelect();
	},
	up: function() {
		Game.currentScene.phases[Game.currentPhase].onUp();
	},
	right: function() {
		Game.currentScene.phases[Game.currentPhase].onRight();
	},
	down: function() {
		Game.currentScene.phases[Game.currentPhase].onDown();
	},
	left: function() {
		Game.currentScene.phases[Game.currentPhase].onLeft();
	}
};

// GUI Controls
function connectButtons () {
	// Control A
	var controlA = document.getElementById('control-a');
	controlA.addEventListener('click', function(event) {
		Game.controls.choose();
	}, false);

	// Control B
	var controlB = document.getElementById('control-b');
	controlB.addEventListener('click', function(event) {
		Game.controls.cancel();
	}, false);

	// Meta Start
	var metaStart = document.getElementById('meta-start');
	metaStart.addEventListener('click', function(event) {
		Game.controls.start();
	}, false);

	// Meta Select
	var metaSelect = document.getElementById('meta-select');
	metaSelect.addEventListener('click', function(event) {
		Game.controls.select();
	}, false);

	// D-Up
	var dUp = document.getElementById('d-up');
	dUp.addEventListener('click', function(event) {
		Game.controls.up();
	}, false);

	// D-Right
	var dRight = document.getElementById('d-right');
	dRight.addEventListener('click', function(event) {
		Game.controls.right();
	}, false);

	// D-Down
	var dDown = document.getElementById('d-down');
	dDown.addEventListener('click', function(event) {
		Game.controls.down();
	}, false);

	// D-Left
	var dLeft = document.getElementById('d-left');
	dLeft.addEventListener('click', function(event) {
		Game.controls.left();
	}, false);

	return true;
}

// Keyboard Controls
window.addEventListener('keydown', function(event) {
	switch (event.keyCode) {
		// Choose
		case 13: // Enter
		case 32: // Spacebar
			Game.controls.choose();
		break;

		// Cancel
		case 8: // Backspace
		case 16: // Shift
			Game.controls.cancel();
		break;

		// Start
		case 17: // Ctrl
		case 36: // Home
			Game.controls.start();
		break;

		// Shift
		case 9: // Tab
		case 18: // Alt
			Game.controls.select();
		break;

		// Up
		case 104: // Numpad 8
		case 38: // Up Arrow
		case 87: // W
			Game.controls.up();
		break;

		// Right
		case 102: // Numpad 6
		case 39: // Right Arrow
		case 68: // D
			Game.controls.right();
		break;

		// Down
		case 98: // Numpad 2
		case 40: // Down Arrow
		case 83: // S
			Game.controls.down();
		break;

		// Left
		case 100: // Numpad 4
		case 37: // Left Arrow
		case 65: // A
			Game.controls.left();
	}
}, false);

// Starting Scene
function startGame() {
	Game.scenes[0].start();
}
// Initiate
document.body.onload = function () {
	connectButtons();
	startGame();
};































