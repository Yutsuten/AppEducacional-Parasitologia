'use strict';

// Scene array to be filled on index.js
var scene = [];

var showCoordinates = true;

// Item creation, to be used on index.js
function createItem(directory, posX, posY, imgScale, imgRotation, zoom = null) {
  var item = {
    image: directory,
    position: {
      x: posX,
      y: posY
    },
    scale: imgScale,
    zoomImage: zoom,
    rotation: imgRotation,
    sceneChange: null
  };
  return item;
}

// Scene change, to be used on index.js
function changeScene(gameItem, scene) {
  gameItem.sceneChange = scene;
}

// Start the application
function start() {
  // Load image textures
  loader
    .add(createImagesArray())
    .load(loadSpritesFromTextures);
}

// Create an array with all images, without repetition
function createImagesArray() {
  var image = [];
  for (var i = 0; i < scene.length; i++) {
    image = addImageToArray(image, scene[i].backgroundImage);
    for (var j = 0; j < scene[i].item.length; j++) {
      image = addImageToArray(image, scene[i].item[j].image);
      if (scene[i].item[j].zoomImage)
        image = addImageToArray(image, scene[i].item[j].zoomImage);
    }
  }
  return image;
}

function addImageToArray(array, directory) {
  // Check if already exist
  for (var i = 0; i < array.length; i++) {
    if (array[i] === directory) // Already exist
      return array;
  }
  array.push(directory);
  return array;
}

function finishedLoading() {
  for (var i = 0; i < scene.length; i++) {

    scene[i].backgroundImage = new PIXI.Sprite(resources[scene[i].backgroundImage].texture);
    if (showCoordinates) {
      scene[i].backgroundImage.interactive = true;
      scene[i].backgroundImage.click = function(evt) {
        var mousePosition = evt.data.getLocalPosition(stage);
        console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
      };
    }

    for (var j = 0; j < scene[i].item.length; j++) {
      scene[i].item[j].image = new PIXI.Sprite(resources[scene[i].item[j].image].texture);
      scene[i].item[j].image.x = scene[i].item[j].position.x;
      scene[i].item[j].image.y = scene[i].item[j].position.y;
      scene[i].item[j].image.anchor.set(0.5, 0.5);
      scene[i].item[j].image.scale.set(scene[i].item[j].scale, scene[i].item[j].scale);
      if (scene[i].item[j].sceneChange != null) {
        AddClickChangeSceneEvent(scene[i].item[j]);
      }
      if (scene[i].item[j].zoomImage) {
        scene[i].item[j].zoomImage = new PIXI.Sprite(resources[scene[i].item[j].zoomImage].texture);
      }
    }
  }

  UpdateScreen();
}

function AddClickChangeSceneEvent(item) {
  item.image.interactive = true;
  // Setting glow area to be 25 pixels bigger than the image bounds
  item.image.filterArea = new Rectangle(item.image.x - item.image.width/2 - 25, item.image.y - item.image.height/2 - 25, item.image.height + 50, item.image.width + 50);
  item.image.mouseover = function(interaction) {
    // viewWidth, viewHeight, outerStrength, innerStrength, color, quality
    item.image.filters = [new PIXI.filters.GlowFilter(renderer.width, renderer.height, 20, 2, 1, 0xFFFFFF, 0.5)];
    UpdateScreen();
  };
  item.image.mouseout = function(interaction) {
    item.image.filters = null;
    UpdateScreen();
  };
  item.image.click = function(interaction) {
    /*var audio = new Audio("audio/explosion.wav");
    audio.play();*/
    activeScene = item.sceneChange;
    UpdateScreen();
  };
}

var activeScene = 0;
var glowFilter = new PIXI.filters.GlowFilter(renderer.width, renderer.height, 20, 2, 1, 0xFFFFFF, 0.5);

function UpdateScreen() {
  stage.addChild(scene[activeScene].backgroundImage);
  for (var i = 0; i < scene[activeScene].item.length; i++)
    stage.addChild(scene[activeScene].item[i].image);

  renderer.render(stage);
}

/*var i = 0;
function play() {
  //message.text = i;
  stage.addChild(scene[activeScene].backgroundImage);
  for (var i = 0; i < scene[activeScene].item.length; i++)
    stage.addChild(scene[activeScene].item[i].image);
}

function gameLoop() {
  requestAnimationFrame(gameLoop);
  state();
  renderer.render(stage);
  meter.tick();
}*/


/*
  var triangle = new Graphics();
  triangle.beginFill(0x000000);
  triangle.drawPolygon([
      -32, 64,             //First point
      32, 64,              //Second point
      0, 0                 //Third point
  ]);
  triangle.endFill();
  triangle.x = 180;
  triangle.y = 22;

  var message = new Text(
    "Hello Pixi!",
    {font: "32px sans-serif", fill: "white"}
  );
  message.position.set(54, 96);
}*/
