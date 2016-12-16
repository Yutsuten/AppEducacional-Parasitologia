'use strict';

Game.Triangle = function(triangleWidth, triangleHeight) {
  Graphics.apply(this);

  // Triangle methods
  this.setRotation = function(newRotation) {
    this.rotation = newRotation * (Math.PI / 180); // Changing from radians to degree
  }

  this.setPosition = function(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
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
