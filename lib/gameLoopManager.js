'use strict';

var screenUpdateRequest = false;

function gameLoop() {
  requestAnimationFrame(gameLoop); //Loop this function at 60 frames per second

  // Render the scene if needed
  if (screenUpdateRequest)
    renderer.render(stage);

  // Screen updated, reset bool for next request
  screenUpdateRequest = false;
}

// On screen change, call this
function ScreenUpdateRequest() {
  screenUpdateRequest = true;
}

gameLoop();
