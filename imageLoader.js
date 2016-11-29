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
  "img/farm.png",
  "img/callout.png"
];

loader.add(imagesArray).load(function() {
  console.log("Loading " + sceneLoader.length + " scenes.");
  for (var i = 0; i < sceneLoader.length; i++) {
    console.log("Loading scene " + i);
    if (sceneLoader[i] != null)
      sceneLoader[i]();
    else
      console.log("ERROR: Failed to load scene " + i);
  }
  console.log("Finish");

  // Initial Scene
  changeScene(0);
});
