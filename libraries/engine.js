'use strict';

// Scene array to be filled on index.js
var scene = [];

// Item creation, to be used on index.js
function createItem(directory, posX, posY, imgScale, zoom = null) {
  var item = {
    image: directory,
    position: {
      x: posX,
      y: posY
    },
    scale: imgScale,
    zoomImage: zoom
  };
  return item;
}

// Start the application
function start() {
  loader
    .add(createImagesArray())
    .load(finishedLoading);
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
    for (var j = 0; j < scene[i].item.length; j++) {
      scene[i].item[j].image = new PIXI.Sprite(resources[scene[i].item[j].image].texture);
      scene[i].item[j].image.x = scene[i].item[j].position.x;
      scene[i].item[j].image.y = scene[i].item[j].position.y;
      scene[i].item[j].image.anchor.set(0.5, 0.5);
      scene[i].item[j].image.scale.set(scene[i].item[j].scale, scene[i].item[j].scale);
      if (scene[i].item[j].zoomImage) {
        scene[i].item[j].zoomImage = new PIXI.Sprite(resources[scene[i].item[j].zoomImage].texture);
      }
    }
  }

  gameLoop();
}

var activeScene = 0;
var state = play;

var i = 0;
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
}


/*function setup() {
  var background = new PIXI.Sprite(
    resources["img/background.jpg"].texture
  );

  var student = new PIXI.Sprite(
    resources["img/student.png"].texture
  );
  student.interactive = true;
  student.click = function(interaction) {
    console.log("Clicked on student");
    var audio = new Audio("audio/explosion.wav");
    audio.play();
    background.visible = !background.visible;
    renderer.render(stage);
  };
  student.mouseover = function(interaction) {
    console.log("Mouse on student");
  };
  student.mouseout = function(interaction) {
    console.log("Mouse out");
  };

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

  background.x = 0;
  background.y = 0;

  student.x = 300;
  student.y = 530;
  student.scale.set(1.5, 1.5);

  //student.anchor.set(0.5, 0.5);
  //student.rotation = 0.5;

  // Adding the image on the stage
  stage.addChild(background);
  stage.addChild(student);
  stage.addChild(triangle);
  stage.addChild(message);

  //Render the stage
  renderer.render(stage);
}*/
