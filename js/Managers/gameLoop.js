'use strict';

var screenUpdateRequest = false;
//var numberOfScreenUpdates = 1;

function gameLoop() {
  requestAnimationFrame(gameLoop); // Loop this function

  // Render the scene if needed
  if (screenUpdateRequest) {
    renderer.render(stage);
    //console.log("Screen Updated. Count: " + numberOfScreenUpdates++);
  }

  // Screen updated, reset bool for next request
  screenUpdateRequest = false;
}

// On screen change, call this
function ScreenUpdateRequest() {
  screenUpdateRequest = true;
}

gameLoop();
