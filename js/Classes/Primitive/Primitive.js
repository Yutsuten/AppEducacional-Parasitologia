'use strict';

Game.Primitive = function() {
  // Class initialization
  Graphics.apply(this); // Calling the Graphics constructor
  this.z_order = 5;

  // PROPERTIES
  // Private properties
  var animationDelay = 33; // delay between frames (for changing background mask alpha)
  var objInstance = this; // reference to this object

  // METHODS
  // Set value methods (changes instantly)
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

  // Change value methods (animations that change properties within time)
  this.changeAlpha = function(newAlpha, time) {
    var elapsedTime = 0;
    var initialAlpha = this.alpha;
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
}

Game.Primitive.prototype = Object.create(Graphics.prototype); // Inherance from Graphics
Game.Primitive.prototype.constructor = Game.Primitive;
