'use strict';

Game.Book = function(name) {
  var bookName = name;
  var currentPageIndex = 0;
  var item = scene[2].item;

  this.page = [];

  var getItemName = function() {
    return "livro" + bookName + "Pagina" + currentPageIndex;
  }

  this.open = function() {
    currentPageIndex = 0;
    item[getItemName()].show();
  }

  this.close = function() {
  }

  this.nextPage = function() {
  }

  this.previousPage = function() {
  }

}
