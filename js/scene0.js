'use strict';

sceneLoader[0] = function() {

  scene[0] = new Game.Scene();
  scene[0].setMusic("audio/suikodentierkreis-friendofthegreatplains.m4a");

  var classroom = new Game.Background("img/classroom.jpg");
  classroom.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var classroom2 = new Game.Background("img/classroom2.jpg");
  classroom2.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  var student = new Game.Item("img/student.png");
  student.setPosition(480, 740);
  student.z_order = 3;
  student.click = function(mouse) {
    console.log("Clicked on student");

    customText.fadein(600);
  }

  var banana = new Game.Item("img/banana.png");
  banana.setPosition(759, 648);
  banana.z_order = 3;
  banana.addGlowEffect();
  banana.click = function(mouse) {
    console.log("Clicked on banana");
    classroom.changeDarkness(200, 600);
    setTimeout(function() {
      student.fadeout(600);
      //shit.fadein(600);
      shit.move(1308, 773, 600);
      digestiveSystem.fadein(600);
      banana.move(1287, 273, 600);
      banana.changeScale(3, 600);
      closeButton.fadein(600);
    }, 800);
  }

  var shit = new Game.Item("img/shit.png");
  shit.setPosition(1308, 1373);
  shit.z_order = 3;
  shit.addGlowEffect();
  shit.click = function(mouse) {
    console.log("Clicked on shit");
    playSoundEffect("audio/explosion.wav");
  }

  var digestiveSystem = new Game.Item("img/digestive-system.png");
  digestiveSystem.setPosition(480, 530);
  digestiveSystem.z_order = 3;
  digestiveSystem.disable();
  digestiveSystem.addGlowEffect();
  digestiveSystem.setScale(1.3);
  var zoomActivated = false;
  digestiveSystem.click = function(mouse) {
    console.log("Clicked on digestiveSystem");
    playSoundEffect("audio/explosion.wav");
    var zoom, egg;
    if (!zoomActivated) {
      zoom = new Game.Triangle(120, 600);
      zoom.setPosition(digestiveSystem.x, digestiveSystem.y);
      zoom.z_order = 3;
      zoom.setRotation(0);
      zoom.visible = true;

      egg = new Game.Item("img/zoom-egg.png");
      var position = zoom.getBasePosition();
      egg.setPosition(position.x, position.y);
      egg.z_order = 2;
      egg.setHeight(240);
      egg.visible = true;

      scene[0].addItem(zoom);
      scene[0].addItem(egg);

      UpdateScreen();
    }
    else {
      zoom.visible = false;
      egg.visible = false;
    }
    zoomActivated = !zoomActivated;
  }

  var closeButton = new Game.Item("img/close.png");
  closeButton.setPosition(1840, 65);
  closeButton.z_order = 3;
  closeButton.disable();
  closeButton.addGlowEffect();
  closeButton.click = function(mouse) {
    console.log("Clicked on close button");
    student.fadein(600);
    shit.move(1308, 1373, 600);
    digestiveSystem.fadeout(600);
    banana.move(759, 648, 600);
    banana.changeScale(1, 600);
    closeButton.fadeout(600);
    classroom.changeDarkness(0, 600);
    //scene[0].changeBackground(1);
  }

  var arrow = new Game.Item("img/arrow.png");
  arrow.setPosition(1700, 550);
  arrow.z_order = 3;
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
  scene[0].addItem(digestiveSystem);
  scene[0].addItem(closeButton);
  scene[0].addItem(arrow);
}
