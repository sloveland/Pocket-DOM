/*jslint browser:true */

// Game Namespace
var Game = Game || {};
Game.screen = Game.screen || {};
Game.controls = Game.controls || {};
Game.scene = Game.scene || {};

// Game Controls
Game.controls.choose = function() {
	console.log("Choose");
}
Game.controls.cancel = function() {
	console.log("Cancel");
}
Game.controls.start = function() {
	console.log("Start");
}
Game.controls.select = function() {
	console.log("Select");
}
Game.controls.up = function() {
	console.log("Up");
}
Game.controls.right = function() {
	console.log("Right");
}
Game.controls.down = function() {
	console.log("Down");
}
Game.controls.left = function() {
	console.log("Left");
}


document.body.onload = function () {
	console.log(Game);
};


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