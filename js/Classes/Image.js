'use strict';

Game.Image = function(texture) { // Game Image object
  arguments[0] = resources["img/" + arguments[0]].texture;
  PIXI.Sprite.apply(this, arguments); // Getting the PIXI.Sprite arguments and allowing to run its constructor

  // PROPERTIES
  this.z_order = 5;
  var animationDelay = 33; // delay between frames of "Change value" methods
  var objInstance = this; // reference to this object

  // METHODS
  // Set value methods (changes instantly)
  this.setPosition = function(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
  }
  this.setScale = function(newScale) {
    this.scale.set(newScale, newScale);
  }
  this.setAlpha = function(newAlpha) {
    this.alpha = newAlpha;
  }
  this.setZorder = function(newZorder) {
    this.z_order = newZorder;
  }
  this.setTint = function(red, green, blue) {
    this.tint = (red << 16) + (green << 8) + blue;
  }
  this.setBrightness = function(newBrightness) {
    this.setTint(newBrightness, newBrightness, newBrightness);
  }
  this.setVisibility = function(newVisibility) {
    this.visible = newVisibility;
  }
  this.setRotation = function(newRotation) {
    this.rotation = -newRotation * (Math.PI / 180); // Changing from radians to degree
  }
  this.setHeight = function(newHeight) {
    this.height = newHeight;
    this.scale.x = this.scale.y;
  }
  this.setWidth = function(newWidth) {
    this.width = newWidth;
    this.scale.y = this.scale.x;
  }
  this.setAchor = function(achorX, achorY) {
    this.anchor.set(achorX, achorY);
  }

  // Get value methods
  this.getScale = function() {
    return this.scale.x;
  }
  this.getBrightness = function() {
    return this.tint / 65793;
  }

  // Change value methods (animations that change properties within time)
  this.changeAlpha = function(newAlpha, time) {
    var elapsedTime = 0;
    var initialAlpha = this.alpha;
    var fadeInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < time) {
        objInstance.alpha = initialAlpha + (newAlpha - initialAlpha) * (elapsedTime / time);
      }
      else {
        objInstance.alpha = newAlpha;
        clearInterval(fadeInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

}

Game.Image.prototype = Object.create(PIXI.Sprite.prototype); // Inherance from PIXI.Sprite
Game.Image.prototype.constructor = Game.Image;
