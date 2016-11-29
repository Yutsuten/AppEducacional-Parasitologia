var imagesArray = [
  "img/classroom.jpg",
  "img/classroom2.jpg",
  "img/student.png",
  "img/banana.png",
  "img/close.png",
  "img/shit.png",
  "img/digestive-system.png",
  "img/mosca.gif",
  "img/arrow.png",
  "img/sick-person.png",
  "img/farm.png"
];

console.log("Before loading scenes");
loader.add(imagesArray).load(function() {
  loadClassroomScene();
  loadOutsideScene();

  //playMusic("audio/suikodentierkreis-friendofthegreatplains.m4a");
});

console.log("After loading scenes");
