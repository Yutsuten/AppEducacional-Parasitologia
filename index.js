'use strict';

scene[0] = {
  backgroundImage: "img/classroom.jpg",
  item: [
    createItem("img/student.png", 480, 750, 1, 0),
    createItem("img/banana.png", 750, 630, 1, 0)
  ]
};

scene[1] = {
  backgroundImage: "img/classroom2.jpg",
  item: [
    createItem("img/close.png", 1920 - 60, 60, 1, 0),
    createItem("img/shit.png", 1300, 890, 0.7, 0, "img/zoom-egg.png"),
    createItem("img/banana.png", 1300, 270, 2.5, 0, "img/zoom-egg.png"),
    createItem("img/digestive-system.png", 600, 560, 1.5, 0, "img/zoom-worm.png", -80, 320),
    createItem("img/mosca.gif", 1318, 775, 0.5, 0),
    createItem("img/mosca.gif", 1388, 853, 0.5, 0),
    createItem("img/mosca.gif", 1223, 823, 0.5, 0),
    createItem("img/arrow.png", 1379, 573, 0.7, 270),
    createItem("img/arrow.png", 984, 232, 0.7, 180),
    createItem("img/arrow.png", 965, 921, 0.7, 0)
  ]
};

scene[2] = {
  backgroundImage: "img/classroom.jpg",
  item: [
    createItem("img/sick-person.png", 480, 750, 1.4, 0)
  ]
}

changeScene(scene[0].item[1], 1);
changeScene(scene[1].item[0], 2);

activeScene = 0;

start();
