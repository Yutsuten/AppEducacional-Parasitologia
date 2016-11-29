'use strict';

sceneLoader[1] = function() {

  scene[1] = new GameScene();
  scene[1].setMusic("audio/99spirits-crushingevil&spreadingthetruth.m4a");

  var farm = new GameBackground("img/farm.png");
  farm.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var arrow = new GameItem("img/arrow.png");
  arrow.setPosition(150, 550);
  arrow.setScale(0.5);
  arrow.setRotation(180);
  arrow.addGlowEffect();
  arrow.click = function(mouse) {
    changeScene(0);
  }

  var calloutImage = new GameItem("img/callout.png");
  calloutImage.anchor.set(0, 0);
  calloutImage.setPosition(820, 100);

  var calloutText = new GameText("Some text blablabla\nEven more text!! lol", {font: "50px Arial", fill: 0x000000, align: "left"});
  calloutText.setPosition(860, 120);

  scene[1].addBackground(farm);
  scene[1].addItem(arrow);
  scene[1].addItem(calloutImage);
  scene[1].addItem(calloutText);
}
