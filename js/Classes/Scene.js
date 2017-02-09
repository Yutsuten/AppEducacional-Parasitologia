'use strict';

Game.Scene = function() {

  var spritesheet = [];
  var activatedBackground = 0;
  var music = null;

  var itemAlpha = [];
  var spritesheetAlpha = [];
  var itemInteractiveness = [];

  this.background = null;
  this.item = {};
  var itemsArray = [];

  var backgroundMask = new Game.Rectangle(renderer.view.width, renderer.view.height);
  backgroundMask.setAlpha(0);

  var subtitle = new Game.Text("", {font: "60px SimSun", fontWeight: 'bold',
                                //stroke: 'black', strokeThickness: 10,
                                dropShadow: true, dropShadowBlur: 10,
                                fill: 0xFFFFFF, align: "left"});
  subtitle.setAchor(0.5, 0.5);
  subtitle.setPosition(960, 1000);

  this.setSubtitle = function setSubtitle(text) {
    subtitle.text = text;
    UpdateScreen();
  }

  this.setMusic = function(musicDirectory) {
    music = "audio/" + musicDirectory;
  }

  this.playSceneMusic = function() {
    if (music != null)
      playMusic(music);
    else
      console.log("ERROR: No music is set to this scene");
  }

  this.addAllItemsToScene = function() {
    // Add from object to array
    for (var singleItem in this.item) {
      itemsArray.push(this.item[singleItem]);
    }
    // Sort items by Z order
    itemsArray.sort(function(a, b) {return b.z_order - a.z_order;}); // Sort items by Z order
  }

  this.addSpriteSheet = function(newSpritesheet) {
    spritesheet.push(newSpritesheet);
  }

  this.setBackgroundMaskColor = function(red, green, blue) {
    backgroundMask.setColor(red, green, blue);
  }

  this.setBackgroundMaskAlpha = function(newAlpha) {
    backgroundMask.setAlpha(newAlpha);
  }

  this.changeBackgroundMaskAlpha = function(newAlpha, time) {
    backgroundMask.changeAlpha(newAlpha, time);
  }

  this.saveAlphaValues = function() {
    for (var i = 0; i < itemsArray.length; i++) {
      itemAlpha[i] = itemsArray[i].alpha;
    }
    for (var i = 0; i < spritesheet.length; i++) {
      spritesheetAlpha[i] = spritesheet[i].getAlpha();
    }
  }

  this.saveInteractiveness = function() {
    for (var i = 0; i < itemsArray.length; i++) {
      itemInteractiveness[i] = itemsArray[i].interactive;
    }
  }

  this.setFade = function(fadeValue) {
    // Set the items alpha to the desired alpha
    this.background.setAlpha(fadeValue);
    for (var i = 0; i < itemsArray.length; i++) {
      itemsArray[i].alpha = fadeValue / itemAlpha[i];
    }
    for (var i = 0; i < spritesheet.length; i++) {
      spritesheet[i].setAlpha(fadeValue / spritesheetAlpha[i]);
    }
  }

  this.disableSceneInteractiveness = function() {
    this.saveInteractiveness();
    for (var i = 0; i < itemsArray.length; i++) {
      itemsArray[i].interactive = false;
    }
  }

  this.enableSceneInteractiveness = function() {
    for (var i = 0; i < itemsArray.length; i++) {
      itemsArray[i].interactive = itemInteractiveness[i];
    }
  }

  this.showScene = function() {
    this.background.draw(stage);
    backgroundMask.draw(stage);
    for (var i = 0; i < itemsArray.length; i++)
      itemsArray[i].draw(stage);
    subtitle.draw(stage);
  }
}
