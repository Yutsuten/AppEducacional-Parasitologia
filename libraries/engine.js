'use strict';

// Scene array to be filled on index.js
var scene = [];
var activeScene = 0;
var showCoordinates = true;

var glowFilter = new PIXI.filters.GlowFilter(renderer.width, renderer.height, 20, 2, 1, 0xFFFFFF, 0.5);
var zoomTriangle = CreateTriangle(120);

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
    rotation: (Math.PI / 180) * imgRotation,
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

function loadSpritesFromTextures() {
  for (var i = 0; i < scene.length; i++) {

    scene[i].backgroundImage = new PIXI.Sprite(resources[scene[i].backgroundImage].texture);
    scene[i].backgroundImage.interactive = true;
    scene[i].backgroundImage.click = function(evt) {
      zoomTriangle.visible = false;
      if (showCoordinates) {
        var mousePosition = evt.data.getLocalPosition(stage);
        console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
      }
      UpdateScreen();
    };

    for (var j = 0; j < scene[i].item.length; j++) {
      scene[i].item[j].image = new PIXI.Sprite(resources[scene[i].item[j].image].texture);
      scene[i].item[j].image.x = scene[i].item[j].position.x;
      scene[i].item[j].image.y = scene[i].item[j].position.y;
      scene[i].item[j].image.anchor.set(0.5, 0.5);
      scene[i].item[j].image.scale.set(scene[i].item[j].scale, scene[i].item[j].scale);
      scene[i].item[j].image.rotation = scene[i].item[j].rotation;
      if (scene[i].item[j].sceneChange != null) {
        AddClickChangeSceneEvent(scene[i].item[j]);
      }
      if (scene[i].item[j].zoomImage) {
        AddClickShowZoomEvent(scene[i].item[j]);
        //scene[i].item[j].zoomImage = new PIXI.Sprite(resources[scene[i].item[j].zoomImage].texture);
      }
    }
  }

  UpdateScreen();
}

function CreateTriangle(size) {
  var triangle = new Graphics();
  triangle.beginFill(0x000000);
  triangle.drawPolygon([
      -size, 4*size,             //First point
      size, 4*size,              //Second point
      0, 0                 //Third point
  ]);
  triangle.endFill();
  triangle.visible = false;
  return triangle;
}

function AddEvent(item) {
  item.image.interactive = true;
  // Setting glow area to be 25 pixels bigger than the image bounds
  item.image.filterArea = new Rectangle(item.image.x - item.image.width/2 - 25, item.image.y - item.image.height/2 - 25, item.image.width + 50, item.image.height + 50);
  item.image.mouseover = function(interaction) {
    // viewWidth, viewHeight, outerStrength, innerStrength, color, quality
    item.image.filters = [new PIXI.filters.GlowFilter(renderer.width, renderer.height, 18, 2, 1, 0xFFFFFF, 0.3)];
    UpdateScreen();
  };
  item.image.mouseout = function(interaction) {
    item.image.filters = null;
    UpdateScreen();
  };
}

function AddClickChangeSceneEvent(item) {
  AddEvent(item);
  item.image.click = function(interaction) {
    /*var audio = new Audio("audio/explosion.wav");
    audio.play();*/
    zoomTriangle.visible = false;
    activeScene = item.sceneChange;
    UpdateScreen();
  };
}

function AddClickShowZoomEvent(item) {
  AddEvent(item);
  item.image.click = function(evt) {
    console.log("clicked on object");
    zoomTriangle.x = evt.target.position.x;
    zoomTriangle.y = evt.target.position.y;
    if (zoomTriangle.x < renderer.width/2) { // Left side
      // Rotate triangle's base to right
      zoomTriangle.rotation = 1.5 * Math.PI;
    }
    else { // Right side
      // Rotate triangle's base to left
      zoomTriangle.rotation = 0.5 * Math.PI;
    }
    zoomTriangle.visible = true;
    UpdateScreen();
  };
}

function UpdateScreen() {
  stage.addChild(scene[activeScene].backgroundImage);
  for (var i = 0; i < scene[activeScene].item.length; i++)
    stage.addChild(scene[activeScene].item[i].image);
  stage.addChild(zoomTriangle);

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
  var message = new Text(
    "Hello Pixi!",
    {font: "32px sans-serif", fill: "white"}
  );
  message.position.set(54, 96);
}*/
