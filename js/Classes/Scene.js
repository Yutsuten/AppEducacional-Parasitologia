'use strict';

Game.Scene = function() {

  var background = [];
  var item = [];
  var spritesheet = [];
  var activatedBackground = 0;
  var music = null;

  var itemAlpha = [];
  var spritesheetAlpha = [];
  var itemInteractiveness = [];

  this.setMusic = function(musicDirectory) {
    music = musicDirectory;
  }

  this.playSceneMusic = function() {
    if (music != null)
      playMusic(music);
    else
      console.log("ERROR: No music is set to this scene");
  }

  this.addBackground = function(newBackground) {
    background.push(newBackground);
  }

  this.addItem = function(newItem) {
    item.push(newItem);
  }

  this.addSpriteSheet = function(newSpritesheet) {
    spritesheet.push(newSpritesheet);
  }

  this.changeBackground = function(backgroundIndex) {
    activatedBackground = backgroundIndex;
    this.showScene();
  }

  this.saveAlphaValues = function() {
    for (var i = 0; i < item.length; i++) {
      itemAlpha[i] = item[i].alpha;
    }
    for (var i = 0; i < spritesheet.length; i++) {
      spritesheetAlpha[i] = spritesheet[i].getAlpha();
    }
  }

  this.saveInteractiveness = function() {
    for (var i = 0; i < item.length; i++) {
      itemInteractiveness[i] = item[i].interactive;
    }
  }

  this.setFade = function(fadeValue) {
    // Set the items alpha to the desired alpha
    background[activatedBackground].setAlpha(fadeValue);
    for (var i = 0; i < item.length; i++) {
      item[i].alpha = fadeValue / itemAlpha[i];
    }
    for (var i = 0; i < spritesheet.length; i++) {
      spritesheet[i].setAlpha(fadeValue / spritesheetAlpha[i]);
    }
  }

  this.disableSceneInteractiveness = function() {
    this.saveInteractiveness();
    for (var i = 0; i < item.length; i++) {
      item[i].interactive = false;
    }
  }

  this.enableSceneInteractiveness = function() {
    for (var i = 0; i < item.length; i++) {
      item[i].interactive = itemInteractiveness[i];
    }
  }

  this.showScene = function() {
    stage.addChild(background[activatedBackground]);
    item.sort(function(a, b) {return b.z_order - a.z_order;}); // Sort items by Z order
    for (var i = 0; i < item.length; i++)
      stage.addChild(item[i]);
    for (var i = 0; i < spritesheet.length; i++)
      stage.addChild(spritesheet[i].getCurrentFrame());
  }
}
