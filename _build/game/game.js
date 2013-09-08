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