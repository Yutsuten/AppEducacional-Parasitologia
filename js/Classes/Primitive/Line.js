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
  var angle = -Math.atan2(y2-y1, x2-x1)*180/Math.PI;
  console.log(angle);
  var triangleAtBeginning = null;
  var triangleAtEnd = null;

  // METHODS
  // Do not allow changing the position
  this.setPosition = null;

  // Method to make an arrow
  this.addArrowAtBeginning = function() {
    triangleAtBeginning = new Game.Triangle(8*lineWidth, 8*lineWidth);
    triangleAtBeginning.setPosition(x1, y1);
    triangleAtBeginning.setRotation(angle);
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
