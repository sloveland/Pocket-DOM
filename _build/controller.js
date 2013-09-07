/*jslint browser:true */

  "use strict";

  var charmander1 = new Pokemon("Charmander", 5, 20, 11, 10, 13);
  var bulbasaur1 = new Pokemon("Bulbasaur", 5, 21, 11, 11, 11);

  document.getElementById('attack').onclick = function () {
    battleRound();
  };


