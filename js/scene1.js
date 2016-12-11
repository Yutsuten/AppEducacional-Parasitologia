'use strict';

var spritesheet;

sceneLoader[1] = function() {

  scene[1] = new Game.Scene();
  scene[1].setMusic("audio/99spirits-crushingevil&spreadingthetruth.m4a");

  var farm = new Game.Background("img/farm.png");
  farm.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var arrow = new Game.Item("img/arrow.png");
  arrow.setPosition(150, 550);
  arrow.setScale(0.5);
  arrow.setRotation(180);
  arrow.addGlowEffect();
  arrow.click = function(mouse) {
    changeScene(0);
  }

  var calloutImage = new Game.Item("img/callout.png");
  calloutImage.anchor.set(0, 0);
  calloutImage.setPosition(820, 100);

  var calloutText = new Game.Text("Some text blablabla\nEven more text!! lol", {font: "50px Arial", fill: 0x000000, align: "left"});
  calloutText.setPosition(860, 120);

  spritesheet = new Game.SpriteSheet("img/spritesheet.png", 104, 90);
  spritesheet.setNumSprites(4, 12);
  spritesheet.setAnimationDelay(200);
  spritesheet.setPosition(1000, 750);
  spritesheet.setScale(3);
  spritesheet.setLoop(true);

  scene[1].addBackground(farm);
  scene[1].addItem(arrow);
  scene[1].addItem(calloutImage);
  scene[1].addItem(calloutText);
  //scene[1].addItem(singleImage);
  scene[1].addSpriteSheet(spritesheet);
}

onSceneOpen[1] = function() {
  spritesheet.setFrame(0);
  spritesheet.beginAnimation();
}

onSceneClose[1] = function() {
  spritesheet.stopAnimation();
}
