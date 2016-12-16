'use strict';

Game.Triangle = function(triangleWidth, triangleHeight) {
  Graphics.apply(this); // Calling the Graphics constructor

  // Triangle methods
  this.setRotation = function(newRotation) {
    this.rotation = -1 * (newRotation + 90) * (Math.PI / 180); // Changing from radians to degree
  }

  this.setPosition = function(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
  }

  this.getBasePosition = function() {
    var angle = -this.rotation - Math.PI / 2; // In radians

    var position = {
      x : this.x + triangleHeight * Math.cos(angle),
      y : this.y - triangleHeight * Math.sin(angle)
    }
    return position;
  }

  // Drawing the black triangle
  this.beginFill(0x000000);
  this.drawPolygon([
      -triangleWidth, triangleHeight,
      triangleWidth, triangleHeight,
      0, 0
  ]);
  this.endFill();
}

Game.Triangle.prototype = Object.create(Graphics.prototype); // Inherance from Graphics
Game.Triangle.prototype.constructor = Game.Triangle;
