// imports createJS library
// imports game/game.js
// imports game/controls.js

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


// Cursor
Game.cursor = {
	x: 0,
	y: 0,
	getLocation: function() {
		return [this.x, this.y];
	},
	moveUp: function() {
		this.y -= 1;
	},
	moveRight: function() {
		this.x += 1;
	},
	moveDown: function() {
		this.y += 1;
	},
	moveLeft: function() {
		this.x -= 1;
	}
};

Game.init = function() {
	// Intro Scene
	var intro = new Game.Scene(),
	phase01 = new Game.Phase(),
	options01 = ["Press Start"],
	phase02 = new Game.Phase(),
	options02 = ["New Game", "Continue"];

	// Phase 01
	phase01.addOptions(options01);
	phase01.start = function() {
		this.showOptions();
	};
	phase01.onStart = function() {
		Game.currentPhase = 1;
		Game.runScene();
	};
	intro.addPhase(phase01);

	// Phase 02
	phase02.addOptions(options02);
	phase02.start = function() {
		this.showOptions();
	};
	phase02.onChoose = function() {
		console.log("Off to meet Professor Oak!");
	};
	intro.addPhase(phase02);

	// Add Scene
	Game.addScene(intro);
};




// Initiate
document.body.onload = function () {
	Game.controls.connectButtons();
	Game.init();
	Game.runScene();
};

