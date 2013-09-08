/*jslint browser:true */

// Game Namespace
var Game = Game || {
	currentScene: {},
	currentPhase: 0,
	screen: {},
	scenes: {},
	fps: 30,
	showPrompt: function() {
		console.log(Game.currentScene.phases[Game.currentPhase].prompt);
	},
	run: function() {

	}
};

// Game.scene = {
// 	intro: {
// 		phases: [
// 			{
// 				prompt: "Press Start",
// 				onStart: function() {
// 					console.log("On to the New Game Menu!");
// 					Game.currentPhase = 1;
// 					Game.showPrompt();
// 				}
// 			},
// 			{
// 				prompt: "New Game",
// 				onChoose: function() {
// 					console.log("On to meet Professor Oak!");
// 				}
// 			}
// 		],
// 		start: function() {
// 			Game.currentScene = this;
// 			console.log(Game.currentScene.phases[Game.currentPhase].prompt);
// 		}
// 	},
// 	battle: {}
// };

// Scene Class
Game.Scene = function(name, options) {
	this.name = name;
	this.options = options;
	this.phases = [];
};

Game.Scene.prototype = {
	start: function() {
		Game.currentScene = this;
	},
	showOptions: function() {
		len = this.options.length;
		for (i = 0; i < len; i++) {
			console.log(this.options[i]);
		}
	}
};


// Phase Class
Game.Phase = function(name) {
	this.name = name;
};
Game.Phase.prototype = {
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
	}
};


// Intro Scene Instance
Game.scenes.intro = new Game.Scene("intro", ["New Game", "Continue"]);

// Phase 01 Instance
splash = new Game.Phase("splash");
Game.scenes.intro.phases.push(splash);


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
		case 38: // Up Arrow
		case 87: // W
			Game.controls.up();
		break;

		// Right
		case 39: // Right Arrow
		case 68: // D
			Game.controls.right();
		break;

		// Down
		case 40: // Down Arrow
		case 83: // S
			Game.controls.down();
		break;

		// Left
		case 37: // Left Arrow
		case 65: // A
			Game.controls.left();
	}
}, false);

// Initiate
document.body.onload = function () {
	connectButtons();
	Game.scenes.intro.start();
};