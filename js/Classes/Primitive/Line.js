'use strict';

Game.Line = function(x1, y1, x2, y2, lineWidth) {
  // Class initialization
  Game.Primitive.apply(this); // Calling the Primitive constructor

  // Drawing the rectangle
  this.lineStyle(lineWidth, 0xFFFFFF, 1); // width, color, alpha
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.endFill();

  // METHODS
  // Do not allow changing the position
  this.setPosition = null;

  // Method to make an arrow
  this.addArrowAtBeginning = function() {

  }

  this.addArrowAtEnd = function() {

  }

  // Return the graphic(s) to be drawn
  this.draw = function(stage) {
    stage.addChild(this);
  }

}

Game.Line.prototype = Object.create(Game.Primitive.prototype); // Inherance from Graphics
Game.Line.prototype.constructor = Game.Line;
