'use strict';

// Lock interactive feature while animating
function disableInteractiveness() {
  Game.Item.isAnimating = true;
}

// Unlock interactive feature
function enableInteractiveness() {
  Game.Item.isAnimating = false;
}

Game.Item = function(texture) {
  Game.Image.apply(this, arguments);

  this.interactive = true;
  this.anchor.set(0.5, 0.5);

  var animationDelay = 33; // delay between frames
  var objInstance = this;

  var glowRectangle;

  Game.Item.isAnimating = false;

  this.fadein = function(time) {
    var elapsedTime = 0;
    var animationTime = time;
    objInstance.filters = null;
    var fadeinInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(elapsedTime / animationTime);
      }
      else {
        objInstance.setAlpha(1);
        clearInterval(fadeinInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.fadeout = function(time) {
    var elapsedTime = 0;
    var animationTime = time;
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
    var initialBrightness = objInstance.getBrightness();
    objInstance.filters = null;
    var changeBrightnessInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setBrightness(initialBrightness + Math.round((newBrightness - initialBrightness) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setBrightness(newBrightness);
        clearInterval(changeBrightnessInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.changeScale = function(newScale, time) {
    var elapsedTime = 0;
    var animationTime = time;
    var initialScale = objInstance.getScale();
    objInstance.filters = null;
    var changeScaleInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setScale(initialScale + ((newScale - initialScale) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setScale(newScale);
        clearInterval(changeScaleInterval); // Stop calling itself
        updateGlowRectangle();
      }
      UpdateScreen();
    }, animationDelay);
  }

  // Returns values between 0 and 1
  // 0 is the initial position
  // 1 is the final position
  var moveFunction = function(elapsedTime, animationTime) {
    var x = elapsedTime / animationTime;
    return 0.5*Math.sin((10*x/Math.PI) - 0.5*Math.PI)+0.5;
  }

  this.move = function(newX, newY, time) {
    var elapsedTime = 0;
    var animationTime = time;
    var initialPosition = {x: this.x, y: this.y};
    objInstance.filters = null;
    var moveInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        var movement = moveFunction(elapsedTime, animationTime);
        objInstance.setPosition(initialPosition.x + ((newX - initialPosition.x) * movement), initialPosition.y + ((newY - initialPosition.y) * movement));
      }
      else {
        objInstance.setPosition(newX, newY);
        clearInterval(moveInterval); // Stop calling itself
        updateGlowRectangle();
      }
      UpdateScreen();
    }, animationDelay);
  }

  var updateGlowRectangle = function() {
    objInstance.filterArea = new Rectangle( objInstance.x - objInstance.width/2 - 15,
                                            objInstance.y - objInstance.height/2 - 15,
                                            objInstance.width + 30,
                                            objInstance.height + 30);
  }

  this.addGlowEffect = function() {
    objInstance.mouseover = function(evt) {
      if (!Game.Item.isAnimating) {
        // distance, outerStrength, innerStrength, color, quality
        objInstance.filterArea = new Rectangle( objInstance.x - objInstance.width/2 - 15,
                                                objInstance.y - objInstance.height/2 - 15,
                                                objInstance.width + 30,
                                                objInstance.height + 30);
        // GlowFilter(10, 3, 0, 0xFFFFFF, 0.3)
        objInstance.filters = [new PIXI.filters.GlowFilter(renderer.width, renderer.height, 10, 5, 0, 0xFFFFFF, 0.3)];
        UpdateScreen();
      }
    };
    objInstance.mouseout = function(evt) {
      objInstance.filters = null;
      UpdateScreen();
    };
  }

  this.disable = function() {
    this.filters = null;
    this.visible = false;
    this.interactive = false;
  }

  this.enable = function() {
    this.visible = true;
    this.interactive = true;
  }

}

Game.Item.prototype = Object.create(Game.Image.prototype);
Game.Item.prototype.constructor = Game.Item;
