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
