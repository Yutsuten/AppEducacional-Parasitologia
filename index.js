scene[0] = {
  backgroundImage: "img/background.jpg",
  item: [
    createItem("img/student.png", 300, 530),
    createItem("img/banana.png", 500, 430)
  ]
};

scene[1] = {
  backgroundImage: "img/background2.jpg",
  item: [
    createItem("img/shit.png", 600, 530, "img/zoom-egg.png"),
    createItem("img/banana.png", 600, 230, "img/zoom-worm.png"),
    createItem("img/digestive-system.png", 200, 430, "img/zoom-worm.png")
  ]
};

start();
