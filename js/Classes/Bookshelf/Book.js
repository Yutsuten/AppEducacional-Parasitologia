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
  }

  this.close = function() {
    item[getItemName()].hide();

    item.bookNextPageArrow.changeAlpha(0, 600);
    item.bookNextPageArrow.setInteractive(false);
    setTimeout(function() {
      item.bookNextPageArrow.disable();
    }, 650);
  }

  this.nextPage = function() {
  }

  this.previousPage = function() {
  }

}
