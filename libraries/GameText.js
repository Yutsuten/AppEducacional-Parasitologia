'use strict';

var GameText = function(text, style) {
  Text.apply(this, arguments);

  var animationDelay = 33; // delay between frames
  var objInstance = this;

  this.setPosition = function(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
  }

  this.setAlpha = function(newAlpha) {
    this.alpha = newAlpha;
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

}

GameText.prototype = Object.create(Text.prototype); // Inherance from PIXI.Sprite
GameText.prototype.constructor = GameText;
