'use strict';

Game.SpriteSheet = function(textureDirectory, spriteWidth, spriteHeight) {
  var spritesheet = TextureCache[textureDirectory];
  var width = spriteWidth;
  var height = spriteHeight;

  var posX = 0;
  var posY = 0;
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

  this.beginAnimation = function() {
    // The animation loop
    var animationInterval = setInterval( function() {
      spritesheet.frame = new PIXI.Rectangle( width * (currentFrame % numSpritesLine),  // The column
                                              height * Math.floor(currentFrame / numSpritesLine), // The line
                                              width, height);
      spriteResult = new PIXI.Sprite(spritesheet);
      spriteResult.anchor.set(0.5, 0.5);
      spriteResult.x = posX;
      spriteResult.y = posY;
      currentFrame = (currentFrame + 1) % numSprites;
      UpdateScreen();
    }, animDelay);
  }

  this.getCurrentFrame = function() {
    return spriteResult;
  }
}
