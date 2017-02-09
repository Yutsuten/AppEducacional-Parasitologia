'use strict';

Game.Line = function(x1, y1, x2, y2, lineWidth) {
  // Class initialization
  Game.Primitive.apply(this); // Calling the Primitive constructor

  // Drawing the line
  this.lineStyle(lineWidth, 0xFFFFFF, 1); // width, color, alpha
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.endFill();

  // PROPERTIES
  // Private properties
  var angle = Math.atan2(y2-y1, x2-x1)*180/Math.PI;
  var triangleAtBeginning = null;
  var triangleAtEnd = null;
  var xDirection;
  var yDirection;

  if (x2-x1 == 0)
    xDirection = 0;
  else
    xDirection = (x2-x1) > 0 ? 1 : -1;

  if (y2-y1 == 0)
    yDirection = 0;
  else
    yDirection = (y2-y1) > 0 ? 1 : -1;

  // METHODS
  // Do not allow changing the position
  this.setPosition = null;

  // Method to make an arrow
  this.addArrowAtBeginning = function(size = 7*lineWidth) {
    triangleAtBeginning = new Game.Triangle(size, size);
    triangleAtBeginning.setPosition(x1 + -xDirection*size/2, y1 + -yDirection*size/2);
    triangleAtBeginning.setRotation(-angle);
  }

  this.addArrowAtEnd = function() {

  }

  // Return the graphic(s) to be drawn
  this.draw = function(stage) {
    stage.addChild(this);
    if (triangleAtBeginning)
      stage.addChild(triangleAtBeginning);
  }

}

Game.Line.prototype = Object.create(Game.Primitive.prototype); // Inherance from Graphics
Game.Line.prototype.constructor = Game.Line;
