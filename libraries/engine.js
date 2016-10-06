console.log("Pixi.js version: " + PIXI.VERSION);

// Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite,
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
    Graphics = PIXI.Graphics,
    Text = PIXI.Text;

var renderer = autoDetectRenderer(1920, 1080);
renderer.autoResize = true;
document.body.appendChild(renderer.view);
var scale = scaleToWindow(renderer.view);
window.addEventListener("resize", function(event) {
  scale = scaleToWindow(renderer.view);
});
renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
var stage = new Container();

var scene = [];

function createItem(directory, posX, posY, zoom = null) {
  var item = {
    image: directory,
    position: {
      x: posX,
      y: posY
    },
    zoomImage: zoom
  };
  return item;
}

function start() {
  for (var i = 0; i < scene.length; i++) {
    console.log("SCENE " + i);
    console.log(scene[i].backgroundImage);
    for (var j = 0; j < scene[i].item.length; j++) {
      console.log("ITEM " + j);
      console.log(scene[i].item[j].image);
      console.log(scene[i].item[j].position.x);
      console.log(scene[i].item[j].position.y);
      if (scene[i].item[j].zoomImage)
        console.log(scene[i].item[j].zoomImage);
    }
  }

  loader
    .add(createImagesArray())
    .load(finishedLoading);
}

function createImagesArray() {
  // Create an array with all images, without repetition
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
  console.log("finished loading");
}

// Loading image
/*loader
  .add("img/background.jpg")
  .add("img/student.png")
  .load(setup);

function setup() {
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

var state = play;

function gameLoop() {
  requestAnimationFrame(gameLoop);
  state();
  renderer.render(stage);
}

var i = 0;
function play() {
  //message.text = i;
}

gameLoop();
