'use strict';

Game.Background = function(texture) {
  // Class initialization
  Game.Image.apply(this, arguments);
  this.anchor.set(0, 0); // Default anchor at top-left
  this.interactive = false;
  this.width = renderer.width;
  this.height = renderer.height;
}

Game.Background.prototype = Object.create(Game.Image.prototype);
Game.Background.prototype.constructor = Game.Background;
