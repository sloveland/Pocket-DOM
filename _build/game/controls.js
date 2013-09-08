// Game Controls
Game.controls = {
	choose: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].onChoose();
	},
	cancel: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].onCancel();
	},
	start: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].onStart();
	},
	select: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].onSelect();
	},
	up: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].onUp();
	},
	right: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].onRight();
	},
	down: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].onDown();
	},
	left: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].onLeft();
	}
};

Game.controls.connectButtons = function() {
	// GUI Controls

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
};