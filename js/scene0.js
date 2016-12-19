'use strict';

sceneLoader[0] = function() {

  scene[0] = new Game.Scene();
  scene[0].setMusic("audio/suikodentierkreis-friendofthegreatplains.m4a");

  var classroom = new Game.Background("classroom.jpg");
  classroom.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var classroom2 = new Game.Background("classroom2.jpg");
  classroom2.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var student = new Game.Item("student.png");
  student.setPosition(480, 740);
  student.click = function(mouse) {
    console.log("Clicked on student");
  }

  var banana = new Game.Item("banana.png");
  banana.setPosition(759, 648);
  banana.addGlowEffect();
  banana.setScale(0.2);
  banana.click = function(mouse) {
    disableInteractiveness();
    console.log("Clicked on banana");
    classroom.changeDarkness(200, 600);

    setTimeout(function() {
      student.fadeout(600);
      //shit.fadein(600);
      shit.move(1308, 773, 600);
      digestiveSystem.enable();
      digestiveSystem.setAlpha(0);
      digestiveSystem.fadein(600);
      banana.move(1287, 273, 600);
      banana.changeScale(0.4, 600);
      closeButton.enable();
      closeButton.setAlpha(0);
      closeButton.fadein(600);
    }, 800);

    setTimeout(function() {
      enableInteractiveness();
    }, 1300);
  }

  var shit = new Game.Item("shit.png");
  shit.setPosition(1308, 1373);
  shit.addGlowEffect();
  shit.click = function(mouse) {
    console.log("Clicked on shit");
    playSoundEffect("audio/explosion.wav");
  }

  var digestiveSystemZoom1 = new Game.Triangle(300, 600);
  digestiveSystemZoom1.setPosition(480, 530 + 200);
  digestiveSystemZoom1.setZorder(3);
  digestiveSystemZoom1.setRotation(0);
  digestiveSystemZoom1.setVisibility(false);

  var digestiveSystemZoom2 = new Game.Item("zoom-egg.png");
  var position = digestiveSystemZoom1.getBasePosition();
  digestiveSystemZoom2.setPosition(position.x, position.y);
  digestiveSystemZoom2.setZorder(2);
  digestiveSystemZoom2.setHeight(300);
  digestiveSystemZoom2.setVisibility(false);

  var digestiveSystem = new Game.Item("digestive-system.png");
  digestiveSystem.setPosition(480, 530);
  digestiveSystem.setZorder(4);
  digestiveSystem.disable();
  digestiveSystem.addGlowEffect();
  digestiveSystem.setScale(1.3);
  var zoomActivated = false;
  digestiveSystem.click = function(mouse) {
    console.log("Clicked on digestiveSystem");
    playSoundEffect("audio/explosion.wav");
    zoomActivated = !zoomActivated;
    digestiveSystemZoom1.setVisibility(zoomActivated);
    digestiveSystemZoom2.setVisibility(zoomActivated);
    UpdateScreen();
  }

  var closeButton = new Game.Item("close.png");
  closeButton.setPosition(1840, 65);
  closeButton.disable();
  closeButton.addGlowEffect();
  closeButton.click = function(mouse) {
    disableInteractiveness();
    console.log("Clicked on close button");
    zoomActivated = false;
    digestiveSystemZoom1.setVisibility(false);
    digestiveSystemZoom2.setVisibility(false);
    student.fadein(600);
    shit.move(1308, 1373, 600);
    digestiveSystem.fadeout(600);
    banana.move(759, 648, 600);
    banana.changeScale(0.2, 600);
    closeButton.fadeout(600);
    classroom.changeDarkness(0, 600);

    setTimeout(function() {
      closeButton.disable();
      digestiveSystem.disable();
      enableInteractiveness();
    }, 700);
  }

  var arrow = new Game.Item("arrow.png");
  arrow.setPosition(1700, 550);
  arrow.setScale(0.5);
  arrow.addGlowEffect();
  arrow.click = function(mouse) {
    changeScene(1);
  }

  scene[0].addBackground(classroom);
  scene[0].addBackground(classroom2);
  scene[0].addItem(student);
  scene[0].addItem(banana);
  scene[0].addItem(shit);
  scene[0].addItem(digestiveSystemZoom1);
  scene[0].addItem(digestiveSystemZoom2);
  scene[0].addItem(digestiveSystem);
  scene[0].addItem(closeButton);
  scene[0].addItem(arrow);
}
