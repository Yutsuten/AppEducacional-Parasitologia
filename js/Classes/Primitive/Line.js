'use strict';

Game.Line = function(x1, y1, x2, y2, lineWidth) {
  // Class initialization
  Game.Primitive.apply(this); // Calling the Primitive constructor

  // Drawing the rectangle
  this.lineStyle(lineWidth, 0xFFFFFF, 1); // width, color, alpha
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.endFill();
}

Game.Line.prototype = Object.create(Game.Primitive.prototype); // Inherance from Graphics
Game.Line.prototype.constructor = Game.Line;
