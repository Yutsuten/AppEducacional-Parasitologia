'use strict';

var GameItem = function(texture) {
  GameImage.apply(this, arguments);
  this.anchor.set(0.5, 0.5);

  var animationDelay = 33;
  var objInstance = this;
  var animationInterval;
  var elapsedTime = 0, animationTime;

  function animationInitialization(time) {
    elapsedTime = 0;
    animationTime = time;
    clearInterval(animationInterval); // Cancel if there is another animation
  }

  // FADEIN METHOD
  this.fadein = function(time) {
    animationInitialization(time);
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(elapsedTime / animationTime);
      }
      else {
        objInstance.setAlpha(1);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
  // FADEOUT METHOD
  this.fadeout = function(time) {
    animationInitialization(time);
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(1 - (elapsedTime / animationTime));
      }
      else {
        objInstance.setAlpha(0);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
  // CHANGE DARKNESS METHOD
  this.changeDarkness = function(newDarkness, time) {
    animationInitialization(time);
    var initialDarkness = objInstance.getDarkness();
    animationInterval = setInterval( function() {
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
  // CHANGE SCALE METHOD
  this.changeScale = function(newScale, time) {
    animationInitialization(time);
    var initialScale = objInstance.getScale();
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setScale(initialScale + ((newScale - initialScale) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setScale(newScale);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
  // MOVE METHOD
  this.move = function(newX, newY, time) {
    animationInitialization(time);
    var initialPosition = { x: this.x, y: this.y};
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setPosition(initialPosition.x + ((newX - initialPosition.x) * (elapsedTime / animationTime)), initialPosition.y + ((newY - initialPosition.y) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setPosition(newX, newY);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
}

GameItem.prototype = Object.create(GameImage.prototype); // Inherance from PIXI.Sprite
GameItem.prototype.constructor = GameItem;
