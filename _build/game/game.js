// Game Namespace
var Game = Game || {
	currentMap: "",
	currentMenu: 0,
	currentScene: 0,
	currentPhase: 0,
	maps: [],
	menus: [],
	scenes: [],
	addScene: function(scene) {
		Game.scenes.push(scene);
	},
	runScene: function() {
		Game.scenes[Game.currentScene].phases[Game.currentPhase].start();
	}
};

// CLASSES

// Scene: A collection of Phases, like a book of "pages"
// Phase: Manage what is displayed and what input to expect
//
// Map: A grid that manages graphics, player movement/location, 
//   and player-interactive events
// Menu: A grid that manages options, cursor movement/location, 
//   and cursor-interactive events
//
// Event: Interactive objects which are located in a location 
//   on a Map or Menu grid.