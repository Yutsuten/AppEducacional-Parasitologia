'use strict';

function loadImages(imagesArray, callbackFunction) {
  loader.add(imagesArray).load(callbackFunction);
}

function addGlowEffect(item) {
  item.mouseover = function(evt) {
    // viewWidth, viewHeight, outerStrength, innerStrength, ??, color, quality
    item.filters = [new PIXI.filters.GlowFilter(renderer.width, renderer.height, 18, 3, 0.5, 0xFFFFFF, 0.3)];
    UpdateScreen();
  };
  item.mouseout = function(evt) {
    item.filters = null;
    UpdateScreen();
  };
}
