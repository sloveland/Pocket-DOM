/*jslint browser:true */
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





  document.getElementById('attack').onclick = function () {
    battleRound();
  };


