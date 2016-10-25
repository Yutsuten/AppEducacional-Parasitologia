'use strict';

var scene1images = [
  "img/classroom.jpg",
  "img/student.png",
  "img/banana.png"
];
loadImages(scene1images, scene1setup);

var background;
function scene1setup() {
  background = new GameImage(resources["img/classroom.jpg"].texture);
  var darkValue = 0;
  var inc = true;
  setInterval(function() {
    if (inc) {
      if (darkValue >= 15) {
        darkValue -= 1;
        inc = false;
      }
      darkValue += 1;
    }
    else {
      if (darkValue <= 0) {
        darkValue += 1;
        inc = true;
      }
      darkValue -= 1;
    }
    background.setDarkness(darkValue);
    stage.addChild(background);
    renderer.render(stage);
  }, 50);
  stage.addChild(background);
  renderer.render(stage);
}
