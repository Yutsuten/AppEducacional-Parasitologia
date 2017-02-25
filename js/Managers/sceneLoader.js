'use strict';

for (var i = 0; i < gameImages.length; i++)
  gameImages[i] = "img/" + gameImages[i];

var onProgressCallback = function(progressInfo) {
  console.log(progressInfo.progress.toFixed(1));
}

// After loading all images, load scenes
loader.add(gameImages)
  .on("progress", onProgressCallback)
  .load(function() {
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
    setScene(2);
  });
