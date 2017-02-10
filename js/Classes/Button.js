'use strict';

Game.Button = function(buttonNormal, buttonHover, buttonClicked, text, style) {
  // Class initialization
  buttonNormal = new Game.Item(buttonNormal);
  buttonHover = new Game.Item(buttonHover);
  buttonClicked = new Game.Item(buttonClicked);
  text = new Game.Text(text, style);

  // PROPERTIES
  // Static properties


  // Public properties


  // Private properties
  var objInstance = this; // reference to this object
  var state = 0; //0: normal, 1: hover, 2: clicked

  // METHODS
  // Set value methods (changes instantly)
  this.setPosition = function(coordX, coordY) {
    buttonNormal.position.set(coordX, coordY);
    buttonHover.position.set(coordX, coordY);
    buttonClicked.position.set(coordX, coordY);
    text.position.set(coordX, coordY);
    text.setAnchor(0.5, 0.5);
  }

  var onMouseOut = function() {
    state = 0;
    UpdateScreen();
  }
  var onMouseOver = function() {
    state = 1;
    UpdateScreen();
  }
  var onClick = function() {
    state = 2;
    UpdateScreen();
    if (objInstance.click)
      objInstance.click();
  }

  buttonNormal.mouseover = function(mouse) {
    onMouseOver();
  }
  buttonHover.mouseout = function(mouse) {
    onMouseOut();
  }
  buttonHover.mousedown = function(mouse) {
    onClick();
  }
  buttonClicked.mouseup = function(mouse) {
    onMouseOver();
  }
  buttonClicked.mouseout = function(mouse) {
    onMouseOut();
  }

  // Return the graphic(s) to be drawn
  this.draw = function(stage) {
    switch(state) {
      case 0: // Normal
        buttonNormal.draw(stage);
        break;
      case 1: // Hover
        buttonHover.draw(stage);
        break;
      case 2: // Clicked
        buttonClicked.draw(stage);
        break;
    }
    text.draw(stage);
  }

}
