'use strict';

var animationDelay = 33;

// GameImage Class
var GameImage = function(texture) { // Game Image object
  PIXI.Sprite.apply(this, arguments); // Getting the PIXI.Sprite arguments and allowing to run its constructor

  this.setPosition = function(coordX, coordY) { // New function to game_image
    this.x = coordX;
    this.y = coordY;
  }
  this.setScale = function(newScale) {
    this.scale.set(newScale, newScale);
  }
  this.setAlpha = function(newAlpha) {
    this.alpha = newAlpha;
  }
  this.setDarkness = function(newDarkness) {
    this.tint = 65793 * (255 - newDarkness);
  }
  this.setVisibility = function(newVisibility) {
    this.visible = newVisibility;
  }

  this.getScale = function() {
    return this.scale.x;
  }
  this.getDarkness = function() {
    return 255 - (this.tint / 65793);
  }
}
GameImage.prototype = Object.create(PIXI.Sprite.prototype); // Inherance from PIXI.Sprite
GameImage.prototype.constructor = GameImage;

// Item Class
var GameItem = function(texture) {
  GameImage.apply(this, arguments);
  this.anchor.set(0.5, 0.5);

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

function loadImages(imagesArray, callbackFunction) {
  loader.add(imagesArray).load(callbackFunction);
}
