'use strict';

var gameMusic = null;
var gameSound = null;

var scene = [];
var currentScene = 0;

function changeScene(newScene) {
  currentScene = newScene;
  scene[currentScene].playSceneMusic();
  UpdateScreen();
}

function UpdateScreen() {
  scene[currentScene].showScene();
}

function loadImages(imagesArray, callbackFunction) {
  loader.add(imagesArray).load(callbackFunction);
}

function playMusic(musicDirectory) {
  if (gameMusic != null) {
    gameMusic.pause();
    gameMusic = null;
  }
  gameMusic = new Audio(musicDirectory);
  gameMusic.loop = true;
  gameMusic.play();
}

function pauseMusic() {
  gameMusic.pause();
}

function resumeMusic() {
  gameMusic.play();
}

function playSoundEffect(soundDirectory) {
  if (gameSound != null) {
    gameSound.pause();
    gameSound = null;
  }
  gameSound = new Audio(soundDirectory);
  gameSound.play();
}
