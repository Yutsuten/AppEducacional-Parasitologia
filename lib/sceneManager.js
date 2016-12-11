'use strict';

var scene = [];
var sceneLoader = [];
var onSceneOpen = [];
var onSceneClose = [];

var lastScene = null;
var currentScene = null;
var animDelay = 33;
var sceneAnimationTime = 350;

// No animation at all
function setScene(newScene) {
  lastScene = currentScene;
  currentScene = newScene;
  UpdateScreen();
}

// With animation
function changeScene(newScene) {
  var elapsedTime = 0;

  // Changing to new scene
  lastScene = currentScene;
  currentScene = newScene;

  // Running method for scene opened
  if (onSceneOpen[currentScene] != null) {
    onSceneOpen[currentScene]();
  }
  // Running method for scene closed
  if (onSceneClose[lastScene] != null) {
    onSceneClose[lastScene]();
  }

  // Interval when both scenes appear at the same time
  scene[lastScene].disableSceneInteractiveness();
  scene[currentScene].disableSceneInteractiveness();
  scene[currentScene].saveAlphaValues();
  scene[currentScene].setFade(0);
  var sceneFadeInterval = setInterval( function() {
    elapsedTime += animDelay;
    // Not finished animation
    if (elapsedTime < sceneAnimationTime) {
      // Draw the older scene
      scene[lastScene].showScene();
      // Change the newer scene fade
      scene[currentScene].setFade(elapsedTime/sceneAnimationTime);
    }
    // Finished animation
    else {
      scene[lastScene].enableSceneInteractiveness();
      scene[currentScene].enableSceneInteractiveness();
      scene[currentScene].setFade(1);
      clearInterval(sceneFadeInterval); // Stop calling itself
    }
    UpdateScreen();
  }, animDelay);
}

function UpdateScreen() {
  scene[currentScene].showScene();
  ScreenUpdateRequest();
}
