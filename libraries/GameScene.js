'use strict';

var GameScene = function() {

  var background = [];
  var item = [];
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

  // ADD BACKGROUND METHOD
  this.addBackground = function(newBackground) {
    background.push(newBackground);
  }

  // ADD ITEM METHOD
  this.addItem = function(newItem) {
    item.push(newItem);
  }

  // CHANGE ACTIVE background
  this.changeBackground = function(backgroundIndex) {
    activatedBackground = backgroundIndex;
    this.showScene();
  }

  // SHOW SCENE METHOD
  this.showScene = function() {
    stage.addChild(background[activatedBackground]);
    for (var i = 0; i < item.length; i++)
      stage.addChild(item[i]);
    renderer.render(stage);
  }
}
