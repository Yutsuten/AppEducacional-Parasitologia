'use strict';

var scene = [];
var currentScene = null;
var sceneLoader = [];

function changeScene(newScene) {
  currentScene = newScene;
  scene[currentScene].playSceneMusic();
  UpdateScreen();
}

function UpdateScreen() {
  scene[currentScene].showScene();
}
