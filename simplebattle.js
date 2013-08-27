/*jslint browser:true */
(function () {
  "use strict";

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

  var charmander1 = new Pokemon("Charmander", 5, 20, 11, 10, 13);
  var bulbasaur1 = new Pokemon("Bulbasaur", 5, 21, 11, 11, 11);

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

    if (checkFainted(second)) {
      console.log(second.name + " fainted!");
      endBattle();
    }
    if (checkFainted(first)) {
      console.log(first.name + " fainted!");
      endBattle();
    }

    // Second Attack

    console.log(second.name + ' used Tackle!');

    power = getRandom(1, 4) + second.attack;
    damage = power - first.defense + 2;
    first.takeDamage(damage);
    console.log('...It dealt ' + damage + ' damage!');

    if (checkFainted(first)) {
      console.log(first.name + " fainted!");
      endBattle();
    }
    if (checkFainted(second)) {
      console.log(second.name + " fainted!");
      endBattle();
    }

  }

  document.getElementById('attack').onclick = function () {
    battleRound();
  };

}());

