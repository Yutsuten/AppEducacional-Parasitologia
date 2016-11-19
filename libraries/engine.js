'use strict';

var gameMusic = null;
var gameSound = null;

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
