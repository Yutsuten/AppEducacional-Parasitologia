'use strict';

Game.Zoom = function(texture) {
  Game.Zoom.apply(this, arguments);

}

Game.Zoom.prototype = Object.create(Game.Image.prototype);
Game.Zoom.prototype.constructor = Game.Zoom;
