'use strict';

for (var i = 0; i < gameImages.length; i++)
  gameImages[i] = "img/" + gameImages[i];

// Loading progress text
var progressScreenText = new Game.Text("Carregando: 0%", {
    "default": {fontFamily: "Book Antiqua", fontSize: "40px",
      //stroke: 'black', strokeThickness: 10,
      dropShadow: true, dropShadowBlur: 10,
      fill: 0xFFFFFF, align: "left"
    }
  });
progressScreenText.setAnchor(0.5, 0.5);
progressScreenText.setPosition(1920/2, 1080/2);

var onProgressCallback = function(progressInfo) {
  // Update text
  progressScreenText.text = "Carregando: " + progressInfo.progress.toFixed(1) + "%";
  // Draw on screen
  stage.addChild(progressScreenText);
  renderer.render(stage);
}

// After loading all images, load scenes
loader.add(gameImages)
  .on("progress", onProgressCallback)
  .load(function() {
    progressScreenText = null; // Delete the loading object
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
    setScene(0);
  });
