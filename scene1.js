'use strict';

var scene1images = [
  "img/farm.png"
];
loadImages(scene1images, scene1setup);

function scene1setup() {

  scene[1] = new GameScene();

  var farm = new GameBackground("img/farm.png");
  farm.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var arrow = new GameItem("img/arrow.png");
  arrow.setPosition(150, 550);
  arrow.setScale(0.5);
  arrow.addGlowEffect();
  arrow.click = function(mouse) {
    changeScene(0);
  }

  scene[1].addBackground(farm);
  scene[1].addItem(arrow);

  UpdateScreen();
}
