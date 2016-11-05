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
  background = new GameScene(resources["img/classroom.jpg"].texture);
  var isDark = false;
  background.click = function() {
    if (isDark === true) {
      background.changeDarkness(0, 500);
      isDark = false;
    }
    else {
      background.changeDarkness(255, 500);
      isDark = true;
    }
  }

  myItem = new GameItem(resources["img/student.png"].texture);
  myItem.setPosition(300, 300);
  var moved = false;
  myItem.addGlowEffect();
  myItem.click = function() {
    if (moved === true) {
      myItem.move(300, 300, 800);
      moved = false;
    }
    else {
      myItem.move(1000, 500, 800);
      moved = true;
    }
  }
  //setTimeout(function() {myItem.fadein(800);}, 800);

  background.addItem(myItem);

  UpdateScreen();
}

function UpdateScreen() {
  background.showScene();
}
