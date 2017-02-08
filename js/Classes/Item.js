'use strict';

Game.Item = function(texture) {
  // Class initialization
  Game.Image.apply(this, arguments);
  this.anchor.set(0.5, 0.5); // Default anchor at center
}

Game.Item.prototype = Object.create(Game.Image.prototype);
Game.Item.prototype.constructor = Game.Item;
