'use strict';

// Add Text class to Game
Game.Text = function(text, style) {
  // Class initialization
  PIXI.Text.apply(this, arguments);

  // PROPERTIES
  // Public properties
  this.z_order = 5;

  // Private properties
  var animationDelay = 33; // delay between frames
  var objInstance = this;

  // METHODS
  // Set value methods (changes instantly)
  this.setPosition = function(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
  }
  this.setAlpha = function(newAlpha) {
    this.alpha = newAlpha;
  }
  this.setZorder = function(newZorder) {
    this.z_order = newZorder;
  }
  this.setRotation = function(newRotation) {
    this.rotation = -1 * (newRotation + 90) * (Math.PI / 180); // Changing from radians to degree
  }
  this.setAnchor = function(anchorX, anchorY) {
    this.anchor.set(anchorX, anchorY);
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

  // Enable-Disable Methods
  this.disable = function() {
    this.visible = false;
  }
  this.enable = function() {
    this.visible = true;
  }

  // Return the graphic(s) to be drawn
  this.draw = function(stage) {
    stage.addChild(this);
  }

}

Game.Text.prototype = Object.create(PIXI.Text.prototype); // Inherance from PIXI.Sprite
Game.Text.prototype.constructor = Game.Text;
