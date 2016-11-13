'use strict';

var GameBackground = function(texture) {
  GameImage.apply(this, arguments);

  this.interactive = true;
  this.width = renderer.width;
  this.height = renderer.height;

  var animationDelay = 33;
  var objInstance = this;

  // CHANGE DARKNESS METHOD
  this.changeDarkness = function(newDarkness, time) {
    var elapsedTime = 0;
    var animationTime = time;
    clearInterval(animationInterval); // Cancel if there is another animation
    var initialDarkness = objInstance.getDarkness();
    var animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setDarkness(initialDarkness + Math.round((newDarkness - initialDarkness) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setDarkness(newDarkness);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

}

GameBackground.prototype = Object.create(GameImage.prototype); // Inherance from PIXI.Sprite
GameBackground.prototype.constructor = GameBackground;
