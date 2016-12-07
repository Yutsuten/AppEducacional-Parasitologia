'use strict';

Game.SpriteSheet = function(textureDirectory, spriteWidth, spriteHeight) {
  var spritesheet = TextureCache[textureDirectory];
  var width = spriteWidth;
  var height = spriteHeight;

  var posX = 0;
  var posY = 0;
  var scale = 1;
  var numSpritesLine = 1;
  var numSprites = 1;
  var animDelay = 500;
  var currentFrame = 0;
  var spriteResult = null;

  this.setPosition = function(coordX, coordY) {
    posX = coordX;
    posY = coordY;
  }

  this.setFrame = function(frame) {
    currentFrame = frame;
  }

  this.setNumSprites = function(numSpritesPerLine, numberOfSprites) {
    numSpritesLine = numSpritesPerLine;
    numSprites = numberOfSprites;
  }

  this.setAnimationDelay = function(animationDelay) {
    animDelay = animationDelay;
  }

  this.setScale = function(newScale) {
    scale = newScale;
  }

  this.beginAnimation = function() {
    // The animation loop
    var animationInterval = setInterval( function() {
      spritesheet.frame = new PIXI.Rectangle( width * (currentFrame % numSpritesLine),  // The column
                                              height * Math.floor(currentFrame / numSpritesLine), // The line
                                              width, height);
      spriteResult = new PIXI.Sprite(spritesheet);
      spriteResult.anchor.set(0.5, 0.5);
      spriteResult.position.set(posX, posY);
      spriteResult.scale.set(scale, scale);
      currentFrame = (currentFrame + 1) % numSprites;
      UpdateScreen();
    }, animDelay);
  }

  this.getCurrentFrame = function() {
    return spriteResult;
  }
}
