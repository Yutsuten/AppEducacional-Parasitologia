'use strict';

Game.Book = function(name) {
  var bookName = name;
  var currentPageIndex = 0;

  this.page = [];

  var getItemName = function() {
    return "livro" + bookName + "Pagina" + currentPageIndex;
  }

  this.open = function() {
    currentPageIndex = 0;
    console.log(getItemName());
    //this.page[currentPageIndex].show();
  }

  this.close = function() {
  }

  this.nextPage = function() {
  }

  this.previousPage = function() {
  }

}
