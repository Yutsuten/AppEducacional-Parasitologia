'use strict';

// Add Text class to Game
Game.Text = function(text, style) {
  PIXI.Text.apply(this, arguments);

  this.z_order = 5;

  var animationDelay = 33; // delay between frames
  var objInstance = this;

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
  this.setAchor = function(achorX, achorY) {
    this.anchor.set(achorX, achorY);
  }

  this.fadein = function(time) {
    var elapsedTime = 0;
    var animationTime = time;
    var fadeinInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.alpha = elapsedTime / animationTime;
      }
      else {
        objInstance.alpha = 1;
        clearInterval(fadeinInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.fadeout = function(time) {
    var elapsedTime = 0;
    var animationTime = time;
    var fadeoutInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.alpha = 1 - (elapsedTime / animationTime);
      }
      else {
        objInstance.alpha = 0;
        clearInterval(fadeoutInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.disable = function() {
    this.visible = false;
  }

  this.enable = function() {
    this.visible = true;
  }

}

Game.Text.prototype = Object.create(PIXI.Text.prototype); // Inherance from PIXI.Sprite
Game.Text.prototype.constructor = Game.Text;
