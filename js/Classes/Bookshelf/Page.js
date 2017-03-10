'use strict';

// Criando a variavel que tera todos os livros
var estiloTitulo = {
  "default": {fontFamily: "Times New Roman", fontSize: "35px",
  fontStyle: "bold", fill: 0x010101, align: "left"
  }
}
var estiloTextoLivro = {
  "default": {fontFamily: "Times New Roman", fontSize: "30px",
  fill: 0x010101, align: "left"
  },
  "i" : {
    fontStyle: "italic"
  },
  "b" : {
    fontStyle: "bold"
  }
};

var notContain = function(str, arrayStr) {
  for (i = 0; i < arrayStr.length; i++)
    if (str == arrayStr[i])
      return false;
  return true;
}

Game.Page = function() {
  var objInstance = this;
  var classPropMethods = ["z_order", "show", "hide", "draw", "interactive", "alpha"];

  this.z_order = 2;

  this.show = function() {
    console.log("Show page");
    for (var element in this) {
      if (notContain(element, classPropMethods)) {
        this[element].enable();
        this[element].changeAlpha(1, 600);
      }
    }
  }

  this.hide = function() {
    for (var element in this) {
      if (notContain(element, classPropMethods)) {
        this[element].changeAlpha(0, 600);
        setTimeout(function() {
          objInstance[element].disable();
        }, 650);
      }
    }
  }

  this.draw = function(stage) {
    for (var element in objInstance) {
      if (notContain(element, classPropMethods)) {
        stage.addChild(objInstance[element]);
      }
    }
  }

}
