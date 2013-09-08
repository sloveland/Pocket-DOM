/*jslint browser:true */

// Game Namespace
var Game = Game || {
	screen: {},
	scene: {},
	controls: {},
	fps: 30,
	run: function() {

	}
};

// Game Controls
Game.controls = {
	choose: function() {
		console.log("Choose");
	},
	cancel: function() {
		console.log("Cancel");
	},
	start: function() {
		console.log("Start");
	},
	select: function() {
		console.log("Select");
	},
	up: function() {
		console.log("Up");
	},
	right: function() {
		console.log("Right");
	},
	down: function() {
		console.log("Down");
	},
	left: function() {
		console.log("Left");
	}
};


document.body.onload = function () {
	connectButtons();
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