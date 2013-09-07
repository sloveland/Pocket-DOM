/*jslint browser:true */

  // Pokemon object constructor
  var Pokemon = function Pokemon(name, lvl, hp, attack, defense, speed) {
    this.name = name;
    this.lvl = lvl;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.takeDamage = function (damage) {
      this.hp = this.hp - damage;
    };
  };


/* **********************************************
     Begin lib.js
********************************************** */

/*jslint browser:true */

  function endBattle() {
    console.log("The battle ended.");
    document.getElementById('attack').disabled = true;
  }

  // Returns random integer
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Rolls dice, adds speed, calculates winner
  function rollInitiative(player, npc) {
    var playerInit = player.speed + getRandom(1, 20),
      npcInit = npc.speed + getRandom(1, 20);
    // console.log('Player Init: ' + playerInit);
    if (playerInit > npcInit) {
      return player;
    }
    return npc;
  }

  function checkFainted(pokemon) {
    if (pokemon.hp <= 0) {
      return true;
    }
    return false;
  }

  // 
  function battleRound() {
    var first = rollInitiative(bulbasaur1, charmander1);
    var second;
    var output = "";
    var power, damage;

    // Assign second initiative
    if (first === bulbasaur1) {
      second = charmander1;
    } else {
      second = bulbasaur1;
    }

    // First Attack

    console.log(first.name + ' used Tackle!');

    power = getRandom(1, 4) + first.attack;
    damage = power - second.defense + 2;
    second.takeDamage(damage);
    console.log('...It dealt ' + damage + ' damage!');
    console.log('...' + second.name + ' has ' + second.hp + ' health remaining.');

    if (checkFainted(second)) {
      console.log(second.name + " fainted!");
      endBattle();
      return;
    }
    if (checkFainted(first)) {
      console.log(first.name + " fainted!");
      endBattle();
      return;
    }

    // Second Attack

    console.log(second.name + ' used Tackle!');

    power = getRandom(1, 4) + second.attack;
    damage = power - first.defense + 2;
    first.takeDamage(damage);
    console.log('...It dealt ' + damage + ' damage!');
    console.log('...' + first.name + ' has ' + first.hp + ' health remaining.');

    if (checkFainted(first)) {
      console.log(first.name + " fainted!");
      endBattle();
      return;
    }
    if (checkFainted(second)) {
      console.log(second.name + " fainted!");
      endBattle();
      return;
    }

  }

/* **********************************************
     Begin canvas.js
********************************************** */

var canvas = document.getElementById("easel"),
stage = new createjs.Stage(canvas),
centerX = canvas.width/2,
centerY = canvas.height/2;

var background = new createjs.Shape();
background.graphics.beginFill("#000000").drawRect(0,0, canvas.width, canvas.height)

var logo = new createjs.Bitmap("_assets/images/pokemon_logo.png");
logo.x = centerX;
logo.y = centerY;
logo.regX = 320;
logo.regY = 280;
logo.alpha = 0.001;

createjs.Sound.registerSound("_assets/music/intro.mp3", "intro");
createjs.Sound.addEventListener("loadComplete", soundLoaded);

stage.addChild(background);
stage.addChild(logo);
var logoFade = false;



function soundLoaded(event) {
	createjs.Sound.play("intro");
	createjs.Tween.get(logo).wait(2000).to({alpha:1}, 5000);
	createjs.Tween.get(background).wait(7000).to({alpha: 0}, 5000)
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		stage.update();
	});
}

/* **********************************************
     Begin controller.js
********************************************** */

/*jslint browser:true */

var charmander1 = new Pokemon("Charmander", 5, 20, 11, 10, 13);
var bulbasaur1 = new Pokemon("Bulbasaur", 5, 21, 11, 11, 11);

document.onload = function () {
	initCanvas();
};


