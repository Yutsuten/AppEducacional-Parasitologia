'use strict';

var scene1images = [
  "img/classroom.jpg",
  "img/classroom2.jpg",
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

var scene1;
function scene1setup() {

  scene1 = new GameScene();

  var classroom = new GameBackground("img/classroom.jpg");
  classroom.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var classroom2 = new GameBackground("img/classroom2.jpg");
  classroom2.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var student = new GameItem("img/student.png");
  student.setPosition(480, 740);
  student.click = function(mouse) {
    console.log("Clicked on student");
  }

  var banana = new GameItem("img/banana.png");
  banana.setPosition(759, 648);
  banana.addGlowEffect();
  banana.click = function(mouse) {
    console.log("Clicked on banana");
    classroom.changeDarkness(200, 600);
    setTimeout(function() {
      student.fadeout(600);
      shit.fadein(600);
      digestiveSystem.fadein(600);
      banana.move(1287, 273, 600);
      banana.changeScale(3, 600);
      closeButton.fadein(600);
    }, 800);
  }

  var shit = new GameItem("img/shit.png");
  shit.setPosition(1308, 773);
  shit.disable();
  shit.addGlowEffect();
  shit.click = function(mouse) {
    console.log("Clicked on shit");
  }

  var digestiveSystem = new GameItem("img/digestive-system.png");
  digestiveSystem.setPosition(480, 530);
  digestiveSystem.disable();
  digestiveSystem.addGlowEffect();
  digestiveSystem.setScale(1.3);
  digestiveSystem.click = function(mouse) {
    console.log("Clicked on digestiveSystem");
  }

  var closeButton = new GameItem("img/close.png");
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
    classroom.changeDarkness(0, 600);
    //scene1.changeBackground(1);
  }

  scene1.addBackground(classroom);
  scene1.addBackground(classroom2);
  scene1.addItem(student);
  scene1.addItem(banana);
  scene1.addItem(shit);
  scene1.addItem(digestiveSystem);
  scene1.addItem(closeButton);

  UpdateScreen();
}

function UpdateScreen() {
  scene1.showScene();
}
