'use strict';

Game.Book = function(name) {
  var item = scene[2].item;

  var bookName = name;
  var currentPageIndex = 0;

  this.pagina = [];

  item.bookNextPageArrow = new Game.Item("seta.png");
  item.bookNextPageArrow.setPosition(1670, 500);
  item.bookNextPageArrow.setBrightness(220);
  item.bookNextPageArrow.setScale(0.3);
  item.bookNextPageArrow.setAlpha(0);
  item.bookNextPageArrow.setInteractive(false);
  item.bookNextPageArrow.disable();
  item.bookNextPageArrow.setZorder(2);

  item.bookPreviousPageArrow = new Game.Item("seta.png");
  item.bookPreviousPageArrow.setPosition(110, 500);
  item.bookPreviousPageArrow.setBrightness(220);
  item.bookPreviousPageArrow.setScale(0.3);
  item.bookPreviousPageArrow.setRotation(180);
  item.bookPreviousPageArrow.setAlpha(0);
  item.bookPreviousPageArrow.setInteractive(false);
  item.bookPreviousPageArrow.disable();
  item.bookPreviousPageArrow.setZorder(2);

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

    item.bookNextPageArrow.enable();
    item.bookNextPageArrow.changeAlpha(1, 600);
    item.bookNextPageArrow.setInteractive(true);
    item.bookPreviousPageArrow.enable();
    item.bookPreviousPageArrow.changeAlpha(1, 600);
    item.bookPreviousPageArrow.setInteractive(true);
  }

  this.close = function() {
    item[getItemName()].hide();

    item.bookNextPageArrow.changeAlpha(0, 600);
    item.bookNextPageArrow.setInteractive(false);
    item.bookPreviousPageArrow.changeAlpha(0, 600);
    item.bookPreviousPageArrow.setInteractive(false);
    setTimeout(function() {
      item.bookNextPageArrow.disable();
      item.bookPreviousPageArrow.disable();
    }, 650);
  }

  this.nextPage = function() {
  }

  this.previousPage = function() {
  }

}
