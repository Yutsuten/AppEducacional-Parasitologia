'use strict';

var scene1images = [
  "img/classroom.jpg",
  "img/student.png",
  "img/banana.png"
];
loadImages(scene1images, scene1setup);

function scene1setup() {
  var background = new GameImage(resources["img/classroom.jpg"].texture);
  background.setDarkness(10);
  stage.addChild(background);
  renderer.render(stage);
}
