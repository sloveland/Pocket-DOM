/*jslint browser:true */

  "use strict";

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