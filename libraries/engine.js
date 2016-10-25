'use strict';

var GameImage = function(texture) { // Game Image object
  PIXI.Sprite.apply(this, arguments); // Getting the PIXI.Sprite arguments and allowing to run its constructor
  this.setPosition = function(coordX, coordY) { // New function to game_image
    console.log(this.x);
    console.log(this.y);
  }
}
GameImage.prototype = Object.create(PIXI.Sprite.prototype); // Inherance from PIXI.Sprite
GameImage.prototype.constructor = GameImage;

/*var newType = function() {
  this.theType = "newType";
}
newType.prototype = Object.create(PIXI.Sprite.prototype);
var backgroundImage = new newType(resources[scene[i].backgroundImage].texture);
console.log(backgroundImage);*/

// Scene array to be filled on index.js
var scene = [];
var activeScene = 0;
var showCoordinates = true;

var glowFilter = new PIXI.filters.GlowFilter(renderer.width, renderer.height, 20, 2, 1, 0xFFFFFF, 0.5);
var zoomSize = 120;
var zoomTriangle = CreateTriangle(zoomSize);

// Item creation, to be used on index.js
function createItem(directory, posX, posY, imgScale, imgRotation) {
  var item = {
    image: directory,
    position: {
      x: posX,
      y: posY
    },
    scale: imgScale,
    rotation: (Math.PI / 180) * imgRotation,
    zoomImage: null,
    zoomOffsetX: 0,
    zoomOffsetY: 0,
    calloutTab: [
      {
        title: null,
        content: null
      },
      {
        title: null,
        content: null
      },
      {
        title: null,
        content: null
      }
    ],
    sceneChange: null
  };
  return item;
}

function AddZoomEvent(gameItem, zoom, offsetX = 0, offsetY = 0) {
  gameItem.zoomImage = zoom;
  gameItem.zoomOffsetX = offsetX;
  gameItem.zoomOffsetY = offsetY;
}

function AddCalloutEvent(gameItem, tab1Title, tab1Content, tab2Title, tab2Content, tab3Title, tab3Content) {
  gameItem.calloutTab[0].title = tab1Title;
  console.log(gameItem.calloutTab[0].title);
  gameItem.calloutTab[0].content = tab1Content;
  console.log(gameItem.calloutTab[0].content);
  gameItem.calloutTab[1].title = tab2Title;
  console.log(gameItem.calloutTab[1].title);
  gameItem.calloutTab[1].content = tab2Content;
  console.log(gameItem.calloutTab[1].content);
  gameItem.calloutTab[2].title = tab3Title;
  console.log(gameItem.calloutTab[2].title);
  gameItem.calloutTab[2].content = tab3Content;
  console.log(gameItem.calloutTab[2].content);
}

// Scene change, to be used on index.js
function changeSceneEvent(gameItem, scene) {
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
    var backgroundImage = new GameImage(resources[scene[i].backgroundImage].texture);
    backgroundImage.setPosition(10, 20);
    /*scene[i].backgroundImage.interactive = true;
    scene[i].backgroundImage.click = function(evt) {
      HideZoom();
      if (showCoordinates) {
        var mousePosition = evt.data.getLocalPosition(stage);
        console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
      }
    };*/
  }

  //UpdateScreen();
}

function HideZoom() {
  zoomTriangle.visible = false;
  for (var i = 0; i < scene.length; i++)
    for (var j = 0; j < scene[i].item.length; j++)
      if (scene[i].item[j].zoomImage)
        scene[i].item[j].zoomImage.visible = false;
  UpdateScreen();
}

function CreateTriangle(size) {
  var triangle = new Graphics();
  triangle.beginFill(0x000000);
  triangle.drawPolygon([
      -size, 4*size,
      size, 4*size,
      0, 0
  ]);
  triangle.endFill();
  triangle.visible = false;
  return triangle;
}

function AddEvent(item) {
  item.image.interactive = true;
  // Setting glow area to be 25 pixels bigger than the image bounds
  item.image.filterArea = new Rectangle(item.image.x - item.image.width/2 - 25, item.image.y - item.image.height/2 - 25, item.image.width + 50, item.image.height + 50);
  item.image.mouseover = function(evt) {
    // viewWidth, viewHeight, outerStrength, innerStrength, ??, color, quality
    item.image.filters = [new PIXI.filters.GlowFilter(renderer.width, renderer.height, 18, 2, 1, 0xFFFFFF, 0.3)];
    UpdateScreen();
  };
  item.image.mouseout = function(evt) {
    item.image.filters = null;
    UpdateScreen();
  };
}

function AddClickChangeSceneEvent(item) {
  AddEvent(item);
  item.image.click = function(evt) {
    /*var audio = new Audio("audio/explosion.wav");
    audio.play();*/
    HideZoom();
    activeScene = item.sceneChange;
    UpdateScreen();
  };
}

function AddClickShowZoomEvent(item) {
  AddEvent(item);
  item.image.click = function(evt) {
    // Hide any other zoom being display
    HideZoom();

    // Show zoom of the item clicked
    zoomTriangle.x = item.position.x + item.zoomOffsetX;
    zoomTriangle.y = item.position.y + item.zoomOffsetY;
    if (zoomTriangle.x < renderer.width/2) { // Left side
      // Rotate triangle's base to right
      zoomTriangle.rotation = 1.5 * Math.PI;
      // Show the zoom image
      item.zoomImage.x = item.position.x + 4 * zoomSize + item.zoomOffsetX;
      item.zoomImage.y = item.position.y + item.zoomOffsetY;
      item.zoomImage.visible = true;
    }
    else { // Right side
      // Rotate triangle's base to left
      zoomTriangle.rotation = 0.5 * Math.PI;
      // Show the zoom image
      item.zoomImage.x = item.position.x - 4 * zoomSize + item.zoomOffsetX;
      item.zoomImage.y = item.position.y + item.zoomOffsetY;
      item.zoomImage.visible = true;
    }
    zoomTriangle.visible = true;
    UpdateScreen();
  };
}

function UpdateScreen() {
  // Draw Background
  stage.addChild(scene[activeScene].backgroundImage);

  // Draw Items
  for (var i = 0; i < scene[activeScene].item.length; i++) {
    stage.addChild(scene[activeScene].item[i].image);
  }

  // Draw zoom's Triangle
  stage.addChild(zoomTriangle);

  // Draw zoom's Image
  for (var i = 0; i < scene[activeScene].item.length; i++) {
    if (scene[activeScene].item[i].zoomImage != null)
      stage.addChild(scene[activeScene].item[i].zoomImage);
  }

  // Render 'em all
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
