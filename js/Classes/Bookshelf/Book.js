'use strict';

Game.Book = function(name) {
  var bookName = name;
  var currentPageIndex = 0;
  var item = scene[2].item;

  this.pagina = [];

  var getItemName = function() {
    return "livro" + bookName + "Pagina" + currentPageIndex;
  }

  this.createItems = function() {
    for (var i = 0; i < this.pagina.length; i++) {
      item["livro" + bookName + "Pagina" + i] = this.pagina[i];
    }
  }

  this.open = function() {
    currentPageIndex = 0;
    item[getItemName()].show();
  }

  this.close = function() {
    item[getItemName()].hide();
  }

  this.nextPage = function() {
  }

  this.previousPage = function() {
  }

}
