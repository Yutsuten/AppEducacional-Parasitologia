'use strict';

var musicEnabled = false;
var soundEffectsEnabled = false;

var gameMusic = null;
var gameSound = null;

function playMusic(musicDirectory) {
  if (musicEnabled) {
    if (gameMusic != null)
      gameMusic.pause();
    gameMusic = new Audio(musicDirectory);
    gameMusic.loop = true;
    gameMusic.play();
  }
}

function pauseMusic() {
  gameMusic.pause();
}

function resumeMusic() {
  gameMusic.play();
}

function playSoundEffect(soundDirectory) {
  if (soundEffectsEnabled) {
    if (gameSound != null)
      gameSound.pause();
    gameSound = new Audio(soundDirectory);
    gameSound.play();
  }
}
