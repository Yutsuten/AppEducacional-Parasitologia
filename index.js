'use strict';

scene[0] = {
  backgroundImage: "img/classroom.jpg",
  item: [
    createItem("img/student.png", 480, 750, 1),
    createItem("img/banana.png", 750, 630, 1)
  ]
};

scene[1] = {
  backgroundImage: "img/classroom2.jpg",
  item: [
    createItem("img/shit.png", 600, 530, 0.5, "img/zoom-egg.png"),
    createItem("img/banana.png", 600, 230, 1, "img/zoom-egg.png"),
    createItem("img/digestive-system.png", 200, 430, 1, "img/zoom-worm.png"),
    createItem("img/close.png", 750, 630, 1),
    createItem("img/mosca.gif", 850, 630, 1),
    createItem("img/mosca.gif", 850, 680, 1),
    createItem("img/mosca.gif", 850, 730, 1)
  ]
};

changeScene(scene[0].item[1], 1);

activeScene = 1;

start();
