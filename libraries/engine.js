'use strict';

function loadImages(imagesArray, callbackFunction) {
  loader.add(imagesArray).load(callbackFunction);
}
