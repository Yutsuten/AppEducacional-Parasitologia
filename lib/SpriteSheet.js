'use strict';

Game.SpriteSheet = function(textureDirectory, spriteWidth, spriteHeight, numSpritesPerLine, numberOfSprites, animationDelay) {
  var width = spriteWidth;
  var height = spriteHeight;
  var numSpritesLine = numSpritesPerLine;
  var numSprites = numberOfSprites;
  var spritesheet = TextureCache[textureDirectory];

  var animDelay = animationDelay;
  var currentFrame = 0;
  var spriteResult = null;

  var posX = 0;
  var posY = 0;

  this.beginAnimation = function() {
    // The animation loop
    var animationInterval = setInterval( function() {
      spritesheet.frame = new PIXI.Rectangle( width * (currentFrame % numSpritesLine),  // The column
                                              height * Math.floor(currentFrame / numSpritesLine), // The line
                                              width, height);
      spriteResult = new PIXI.Sprite(spritesheet);
      spriteResult.x = posX;
      spriteResult.y = posY;
      currentFrame = (currentFrame + 1) % numSprites;
      UpdateScreen();
    }, animationDelay);
  }

  this.setPosition = function(coordX, coordY) {
    posX = coordX;
    posY = coordY;
  }

  this.setFrame = function(frame) {
    currentFrame = frame;
  }

  this.getCurrentFrame = function() {
    return spriteResult;
  }
}
