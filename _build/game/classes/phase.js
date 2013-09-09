
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
		// console.log("Choose");
	},
	onCancel: function() {
		// console.log("Cancel");
	},
	onStart: function() {
		// console.log("Start");
	},
	onSelect: function() {
		// console.log("Select");
	},
	onUp: function() {
		// console.log("Up");
	},
	onRight: function() {
		// console.log("Right");
	},
	onDown: function() {
		// console.log("Down");
	},
	onLeft: function() {
		// console.log("Left");
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