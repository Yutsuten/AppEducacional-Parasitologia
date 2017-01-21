'use strict';

Game.Rectangle = function(rectangleWidth, rectangleHeight) {
  Graphics.apply(this); // Calling the Graphics constructor

  this.z_order = 5;

  // Triangle methods
  this.setRotation = function(newRotation) {
    this.rotation = -1 * (newRotation + 90) * (Math.PI / 180); // Changing from radians to degree
  }
  this.setPosition = function(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
  }
  this.setZorder = function(newZorder) {
    this.z_order = newZorder;
  }
  this.setVisibility = function(newVisibility) {
    this.visible = newVisibility;
  }
  this.setColor = function(red, green, blue) {
    this.tint = (red << 16) + (green << 8) + blue;
  }
  this.setAlpha = function(newAlpha) {
    this.alpha = newAlpha;
  }

  // Drawing the rectangle
  this.beginFill(0xFFFFFF);
  this.drawRect(0, 0, rectangleWidth, rectangleHeight);
  this.endFill();
}

Game.Rectangle.prototype = Object.create(Graphics.prototype); // Inherance from Graphics
Game.Rectangle.prototype.constructor = Game.Rectangle;
