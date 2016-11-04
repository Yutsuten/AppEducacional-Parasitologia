'use strict';

var animationDelay = 33;

// GameImage Class
var GameImage = function(texture) { // Game Image object
  PIXI.Sprite.apply(this, arguments); // Getting the PIXI.Sprite arguments and allowing to run its constructor
  this.setPosition = function(coordX, coordY) { // New function to game_image
    this.x = coordX;
    this.y = coordY;
  }
  this.setScale = function(newScale) {
    this.scale.set(newScale, newScale);
  }
  this.setAlpha = function(newAlpha) {
    this.alpha = newAlpha;
  }
  this.setDarkness = function(newDarkness) {
    this.tint = 65793 * (255 - newDarkness);
  }
  this.setVisibility = function(newVisibility) {
    this.visible = newVisibility;
  }

  this.getScale = function() {
    return this.scale.x;
  }
  this.getDarkness = function() {
    return 255 - (this.tint / 65793);
  }
}
GameImage.prototype = Object.create(PIXI.Sprite.prototype); // Inherance from PIXI.Sprite
GameImage.prototype.constructor = GameImage;

// Item Class
var GameItem = function(texture) {
  GameImage.apply(this, arguments);

  var objInstance = this;
  var animationInterval;
  var elapsedTime = 0, animationTime;

  function animationInitialization(time) {
    elapsedTime = 0;
    animationTime = time;
    clearInterval(animationInterval); // Cancel if there is another animation
  }

  // FADEIN METHOD
  this.fadein = function(time) {
    animationInitialization(time);
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(elapsedTime / animationTime);
      }
      else {
        objInstance.setAlpha(1);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
  // FADEOUT METHOD
  this.fadeout = function(time) {
    animationInitialization(time);
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(1 - (elapsedTime / animationTime));
      }
      else {
        objInstance.setAlpha(0);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
  // CHANGE DARKNESS METHOD
  this.changeDarkness = function(newDarkness, time) {
    animationInitialization(time);
    var initialDarkness = objInstance.getDarkness();
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setDarkness(initialDarkness + Math.round((newDarkness - initialDarkness) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setDarkness(newDarkness);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
  // CHANGE SCALE METHOD
  this.changeScale = function(newScale, time) {
    animationInitialization(time);
    var initialScale = objInstance.getScale();
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setScale(initialScale + ((newScale - initialScale) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setScale(newScale);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
  // MOVE METHOD
  this.move = function(newX, newY, time) {
    animationInitialization(time);
    var initialPosition = { x: this.x, y: this.y};
    animationInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setPosition(initialPosition.x + ((newX - initialPosition.x) * (elapsedTime / animationTime)), initialPosition.y + ((newY - initialPosition.y) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setPosition(newX, newY);
        clearInterval(animationInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }
}
GameItem.prototype = Object.create(GameImage.prototype); // Inherance from PIXI.Sprite
GameItem.prototype.constructor = GameItem;

function loadImages(imagesArray, callbackFunction) {
  loader.add(imagesArray).load(callbackFunction);
}

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
    //UpdateScreen();
  };
}

function AddClickChangeSceneEvent(item) {
  AddEvent(item);
  item.image.click = function(evt) {
    /*var audio = new Audio("audio/explosion.wav");
    audio.play();*/
    HideZoom();
    activeScene = item.sceneChange;
    //UpdateScreen();
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
    //UpdateScreen();
  };
}
