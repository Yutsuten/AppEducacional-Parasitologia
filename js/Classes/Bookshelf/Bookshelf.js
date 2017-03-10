'use strict';

Game.Bookshelf = function() {

  this.newBook = function(bookName) {
    this[bookName] = new Game.Book(bookName);
  }

}
