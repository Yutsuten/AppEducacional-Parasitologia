'use strict';

var GameItem = function(texture) {
  GameImage.apply(this, arguments);

  this.interactive = true;
  this.anchor.set(0.5, 0.5);

  var animationDelay = 33;
  var objInstance = this;
  var elapsedTime = 0, animationTime;

  function animationInitialization(time) {
    elapsedTime = 0;
    animationTime = time;
  }

  // FADEIN METHOD
  this.fadein = function(time) {
    animationInitialization(time);
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

  // FADEOUT METHOD
  this.fadeout = function(time) {
    objInstance.interactive = false;
    objInstance.filters = null;
    animationInitialization(time);
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

  // CHANGE DARKNESS METHOD
  this.changeDarkness = function(newDarkness, time) {
    animationInitialization(time);
    var initialDarkness = objInstance.getDarkness();
    var changeDarknessInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setDarkness(initialDarkness + Math.round((newDarkness - initialDarkness) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setDarkness(newDarkness);
        clearInterval(changeDarknessInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  // CHANGE SCALE METHOD
  this.changeScale = function(newScale, time) {
    animationInitialization(time);
    var initialScale = objInstance.getScale();
    var changeScaleInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setScale(initialScale + ((newScale - initialScale) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setScale(newScale);
        clearInterval(changeScaleInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  // MOVE METHOD
  this.move = function(newX, newY, time) {
    animationInitialization(time);
    var initialPosition = { x: this.x, y: this.y};
    var moveInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setPosition(initialPosition.x + ((newX - initialPosition.x) * (elapsedTime / animationTime)), initialPosition.y + ((newY - initialPosition.y) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setPosition(newX, newY);
        clearInterval(moveInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  // ADD GLOE EFFECT ON MOUSE OVER METHOD
  this.addGlowEffect = function() {
    objInstance.mouseover = function(evt) {
      // viewWidth, viewHeight, outerStrength, innerStrength, ??, color, quality
      objInstance.filters = [new PIXI.filters.GlowFilter(renderer.width, renderer.height, 18, 3, 0.5, 0xFFFFFF, 0.3)];
      UpdateScreen();
    };
    objInstance.mouseout = function(evt) {
      objInstance.filters = null;
      UpdateScreen();
    };
  }

  // DISABLE ITEM METHOD
  this.disable = function() {
    this.setAlpha(0);
    this.interactive = false;
  }

}

GameItem.prototype = Object.create(GameImage.prototype); // Inherance from PIXI.Sprite
GameItem.prototype.constructor = GameItem;
