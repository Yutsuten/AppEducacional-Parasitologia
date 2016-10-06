'use strict';

scene[0] = {
  backgroundImage: "img/background.jpg",
  item: [
    createItem("img/student.png", 480, 750, 1.7),
    createItem("img/banana.png", 750, 630, 0.2)
  ]
};

scene[1] = {
  backgroundImage: "img/background.jpg",
  item: [
    createItem("img/shit.png", 600, 530, 1, "img/zoom-egg.png"),
    createItem("img/banana.png", 600, 230, 1, "img/zoom-egg.png"),
    createItem("img/digestive-system.png", 200, 430, 1, "img/zoom-worm.png")
  ]
};

start();
