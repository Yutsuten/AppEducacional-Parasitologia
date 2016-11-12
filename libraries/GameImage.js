'use strict';

var GameImage = function(texture) { // Game Image object
  arguments[0] = resources[arguments[0]].texture;
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
