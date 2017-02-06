'use strict';

Game.Line = function(x1, y1, x2, y2, lineWidth) {
  Graphics.apply(this); // Calling the Graphics constructor

  this.z_order = 5;

  var animationDelay = 33; // delay between frames (for changing background mask alpha)

  // Triangle methods
  this.setRotation = function(newRotation) {
    this.rotation = -1 * (newRotation + 90) * (Math.PI / 180); // Changing from radians to degree
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

  // Animation methods
  this.changeAlpha = function(newAlpha, time) {
    var elapsedTime = 0;
    var initialAlpha = this.alpha;
    var objInstance = this;
    var fadeInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < time) {
        objInstance.setAlpha(initialAlpha + (newAlpha - initialAlpha) * (elapsedTime / time));
      }
      else {
        objInstance.setAlpha(newAlpha);
        clearInterval(fadeInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  // Drawing the rectangle
  this.lineStyle(lineWidth, 0xFFFFFF, 1);
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.endFill();
}

Game.Line.prototype = Object.create(Graphics.prototype); // Inherance from Graphics
Game.Line.prototype.constructor = Game.Line;
