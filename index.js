'use strict';

var scene1images = [
  "img/classroom.jpg",
  "img/student.png",
  "img/banana.png",
  "img/close.png",
  "img/shit.png",
  "img/digestive-system.png",
  "img/mosca.gif",
  "img/arrow.png",
  "img/sick-person.png"
];
loadImages(scene1images, scene1setup);

var background;
function scene1setup() {
  background = new GameScene(resources["img/classroom.jpg"].texture);
  background.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var student = new GameItem(resources["img/student.png"].texture);
  student.setPosition(480, 740);
  student.click = function(mouse) {
    console.log("Clicked on student");
  }
  //setTimeout(function() {myItem.fadein(800);}, 800);

  var banana = new GameItem(resources["img/banana.png"].texture);
  banana.setPosition(759, 648);
  banana.addGlowEffect();
  banana.click = function(mouse) {
    console.log("Clicked on banana");
    student.fadeout(600);
    shit.fadein(600);
    digestiveSystem.fadein(600);
    banana.move(1287, 273, 600);
    banana.changeScale(3, 600);
    closeButton.fadein(600);
    background.changeDarkness(230, 600);
  }

  var shit = new GameItem(resources["img/shit.png"].texture);
  shit.setPosition(1308, 773);
  shit.disable();
  shit.addGlowEffect();
  shit.click = function(mouse) {
    console.log("Clicked on shit");
  }

  var digestiveSystem = new GameItem(resources["img/digestive-system.png"].texture);
  digestiveSystem.setPosition(480, 530);
  digestiveSystem.disable();
  digestiveSystem.addGlowEffect();
  digestiveSystem.setScale(1.3);
  digestiveSystem.click = function(mouse) {
    console.log("Clicked on digestiveSystem");
  }

  var closeButton = new GameItem(resources["img/close.png"].texture);
  closeButton.setPosition(1840, 65);
  closeButton.disable();
  closeButton.addGlowEffect();
  closeButton.click = function(mouse) {
    console.log("Clicked on close button");
    student.fadein(600);
    shit.fadeout(600);
    digestiveSystem.fadeout(600);
    banana.move(759, 648, 600);
    banana.changeScale(1, 600);
    closeButton.fadeout(600);
    background.changeDarkness(0, 600);
  }

  background.addItem(student);
  background.addItem(banana);
  background.addItem(shit);
  background.addItem(digestiveSystem);
  background.addItem(closeButton);

  UpdateScreen();
}

function UpdateScreen() {
  background.showScene();
}
