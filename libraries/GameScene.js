'use strict';

var GameScene = function(texture) {
  GameImage.apply(this, arguments);

  this.width = renderer.width;
  this.height = renderer.height;

  var animationDelay = 33;
  var objInstance = this;
  var animationInterval;
  var elapsedTime = 0, animationTime;
  var item = [];

  // ADD ITEM METHOD
  this.addItem = function(newItem) {
    item.push(newItem);
  }
  // CHANGE DARKNESS METHOD
  this.changeDarkness = function(newDarkness, time) {
    elapsedTime = 0;
    animationTime = time;
    clearInterval(animationInterval); // Cancel if there is another animation
    var initialDarkness = objInstance.getDarkness();
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setDarkness(initialDarkness + Math.round((newDarkness - initialDarkness) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setDarkness(newDarkness);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
  // SHOW SCENE METHOD
  this.showScene = function() {
    stage.addChild(this);
    for (var i = 0; i < item.length; i++)
      stage.addChild(item[i]);
    renderer.render(stage);
  }
}

GameScene.prototype = Object.create(GameImage.prototype); // Inherance from PIXI.Sprite
GameScene.prototype.constructor = GameScene;
