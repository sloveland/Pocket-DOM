// imports array_compare.js
// imports createJS library
// imports game/game.js
// imports game/classes/scene.js
// imports game/classes/phase.js
// imports game/controls.js





// Map Class
Game.Map = function(name, x, y) {
	map = {
		name: name,
		grid: []
	};
	// use loop to create grid from x, y
	for (i = 0; i < x; i++) {
		row = [];
		for (ix = 0; ix < y; ix++) {
			cell = { value: [i, ix], walkable: false };
			row.push(cell);
		}
		map.grid.push(row);
	}
	return this;
};

Game.Map.prototype = {
	findMap: function(mapname) {
		for (i = 0, len = Game.maps.length; i < len; i++) {
			if (Game.maps[i].name == mapname) {
				return Game.maps[i];
			}
		}
	},
	isWalkable: function(name, cell) {

	},
	makeWalkable: function(name, cells) { // name of map and array of cell coordinates
		var map = this;
		console.log(map);
		// Loop through cells
		for (i = 0, len = cells.length; i < len; i++) {
			// Loop through map.grid
			for (ib = 0, lenb = map.grid.length; ib < lenb; ib++) {
				// Loop through grid columns
				for (ic = 0, lenc = map.grid[ib].length; ic < lenc; ic++) {

					// Check match
					if ((cells[i]).compare(map.grid[ib][ic].value)) {
						// Make walkable
						thisCell = map.grid[ib][ic];
						thisCell.walkable = true;
					}
				}
			}
		}
	},
	placeEvent: function(event, map, x, y) {

	}
};

// Cursor
Game.player = {
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


// Create the Game!
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
		gameMenu();
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


	// Create a Map

	fightMenu = new Game.Map("fightMenu", 2, 2);
	console.log(fightMenu);
	walkable = [[1,1],[0,1],[1,0]];
	// fightMenu.makeWalkable('fightMenu', walkable);
	Game.addMap(fightMenu);
	// console.log(findMap('fightMenu'));
};


// Initiate on Document Load
document.body.onload = function () {
	Game.controls.connectButtons();
	Game.init();
	Game.runScene();
	startScreen();
	
};

