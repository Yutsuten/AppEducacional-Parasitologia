'use strict';

var scene = [];
var sceneLoader = [];
var onSceneOpen = [];
var onSceneClose = [];

var lastScene = null;
var currentScene = null;
var animDelay = 33;
var sceneAnimationTime = 350;
var elapsedTime = 0;
var sceneFadeInterval;

// No animation at all
function setScene(newScene) {
  lastScene = currentScene;
  currentScene = newScene;
  scene[currentScene].playSceneMusic();
  UpdateScreen();
}

// With animation
function changeScene(newScene) {
  elapsedTime = 0;

  // Changing to new scene
  lastScene = currentScene;
  currentScene = newScene;

  // Interval when both scenes appear at the same time
  scene[lastScene].disableSceneInteractiveness();
  scene[currentScene].disableSceneInteractiveness();
  scene[currentScene].saveAlphaValues();
  scene[currentScene].setFade(0);

  // Play new music
  scene[currentScene].playSceneMusic();

  // Running method for scene opened
  if (onSceneOpen[currentScene] != null) {
    onSceneOpen[currentScene]();
  }
  // Running method for scene closed
  if (onSceneClose[lastScene] != null) {
    onSceneClose[lastScene]();
  }

  sceneFade();
  sceneFadeInterval = setInterval(sceneFade, animDelay);
}

function sceneFade() {
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
    scene[currentScene].setFade(1);
    scene[lastScene].enableSceneInteractiveness();
    scene[currentScene].enableSceneInteractiveness();
    clearInterval(sceneFadeInterval); // Stop calling itself
  }
  UpdateScreen();
}

function UpdateScreen() {
  scene[currentScene].showScene();
  ScreenUpdateRequest();
}
