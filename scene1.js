'use strict';

function loadOutsideScene() {
  console.log("Begin loading scene 1");

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

  scene[1].addBackground(farm);
  scene[1].addItem(arrow);

  UpdateScreen();

  console.log("Finish loading scene 1");
}
