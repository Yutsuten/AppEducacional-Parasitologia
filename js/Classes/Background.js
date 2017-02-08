'use strict';

Game.Background = function(texture) {
  Game.Image.apply(this, arguments);
  this.anchor.set(0, 0); // Default anchor at top-left

  this.interactive = true;
  this.width = renderer.width;
  this.height = renderer.height;

  var animationDelay = 33;
  var objInstance = this;

  this.fadein = function(time) {
    var elapsedTime = 0;
    var animationTime = time;
    objInstance.interactive = false;
    objInstance.filters = null;
    var fadeinInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(elapsedTime / animationTime);
      }
      else {
        objInstance.interactive = true;
        objInstance.setAlpha(1);
        clearInterval(fadeinInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.fadeout = function(time) {
    var elapsedTime = 0;
    var animationTime = time;
    objInstance.interactive = false;
    objInstance.filters = null;
    var fadeoutInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(1 - (elapsedTime / animationTime));
      }
      else {
        objInstance.setAlpha(0);
        clearInterval(fadeoutInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.changeBrightness = function(newBrightness, time) {
    var elapsedTime = 0;
    var animationTime = time;
    clearInterval(animationInterval); // Cancel if there is another animation
    var initialBrightness = objInstance.getBrightness();
    var animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setBrightness(initialBrightness + Math.round((newBrightness - initialBrightness) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setBrightness(newBrightness);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

}

Game.Background.prototype = Object.create(Game.Image.prototype);
Game.Background.prototype.constructor = Game.Background;
