// imports createJS library
// imports game/game.js
// imports game/controls.js



// Array Compare Method
Array.prototype.compare = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

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

function createMap(name, x, y) {
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
	Game.maps.push(map);
}
function findMap(mapname) {
	for (i = 0, len = Game.maps.length; i < len; i++) {
		if (Game.maps[i].name == mapname) {
			return Game.maps[i];
		}
	}
}
function makeWalkable(name, cells) { // name of map and array of cell coordinates
	var map = findMap(name);
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
}
function placeEvent(event, map, x, y) {

}

if ([1,1].compare([1,1])) {
	console.log("Match found");
}


// Initiate
document.body.onload = function () {
	Game.controls.connectButtons();
	Game.init();
	Game.runScene();
	createMap("fightMenu", 2, 2);

	walkable = [[1,1],[0,1]];
	makeWalkable('fightMenu', walkable);
	console.log(findMap('fightMenu'));
};

