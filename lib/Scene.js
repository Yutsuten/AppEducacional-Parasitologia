'use strict';

Game.Scene = function() {

  var background = [];
  var item = [];
  var spritesheet = [];
  var activatedBackground = 0;
  var music = null;

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

  this.showScene = function() {
    stage.addChild(background[activatedBackground]);
    for (var i = 0; i < item.length; i++)
      stage.addChild(item[i]);
    for (var i = 0; i < spritesheet.length; i++)
      stage.addChild(spritesheet[i].getCurrentFrame());
    renderer.render(stage);
  }
}
