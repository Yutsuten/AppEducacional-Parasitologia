'use strict';

var scene1images = [
  "img/classroom.jpg",
  "img/student.png",
  "img/banana.png"
];
loadImages(scene1images, scene1setup);

var background;
var myItem;
function scene1setup() {
  background = new GameImage(resources["img/classroom.jpg"].texture);
  var darkValue = 0;
  var inc = true;
  background.interactive = true;
  background.click = function() {
    console.log("Background clicked");
  }

  myItem = new GameItem(resources["img/student.png"].texture);
  myItem.setPosition(150, 150);
  myItem.fadeout(800);

  UpdateScreen();
}

function UpdateScreen() {
  stage.addChild(background);
  stage.addChild(myItem);
  renderer.render(stage);
}
