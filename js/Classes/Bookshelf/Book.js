'use strict';

Game.Book = function(name) {
  var item = scene[2].item;
  var objInstance = this;

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
  item.bookNextPageArrow.onMouseOver = function() {
    scene[2].setSubtitle("Próxima página");
    item.bookNextPageArrow.setBrightness(255);
  }
  item.bookNextPageArrow.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.bookNextPageArrow.setBrightness(220);
  }
  item.bookNextPageArrow.onClick = function(mouse) {
    objInstance.nextPage();
  }

  item.bookPreviousPageArrow = new Game.Item("seta.png");
  item.bookPreviousPageArrow.setPosition(110, 500);
  item.bookPreviousPageArrow.setBrightness(220);
  item.bookPreviousPageArrow.setScale(0.3);
  item.bookPreviousPageArrow.setRotation(180);
  item.bookPreviousPageArrow.setAlpha(0);
  item.bookPreviousPageArrow.setInteractive(false);
  item.bookPreviousPageArrow.disable();
  item.bookPreviousPageArrow.setZorder(2);
  item.bookPreviousPageArrow.onMouseOver = function() {
    scene[2].setSubtitle("Página anterior");
    item.bookPreviousPageArrow.setBrightness(255);
  }
  item.bookPreviousPageArrow.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.bookPreviousPageArrow.setBrightness(220);
  }
  item.bookPreviousPageArrow.onClick = function(mouse) {
    objInstance.nextPage();
  }

  var updateArrowsState = function() {
    var arrowNextEnabled = currentPageIndex < objInstance.pagina.length - 1;
    var arrowPreviousEnabled = currentPageIndex > 0;

    item.bookNextPageArrow.setInteractive(arrowNextEnabled);
    item.bookPreviousPageArrow.setInteractive(arrowPreviousEnabled);

    item.bookNextPageArrow.setBrightness(arrowNextEnabled ? 220 : 120);
    item.bookPreviousPageArrow.setBrightness(arrowPreviousEnabled ? 220 : 120);
  }

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

    updateArrowsState();
    item.bookNextPageArrow.enable();
    item.bookNextPageArrow.changeAlpha(1, 600);
    item.bookPreviousPageArrow.enable();
    item.bookPreviousPageArrow.changeAlpha(1, 600);
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
    if (currentPageIndex < currentPageIndex < objInstance.pagina.length - 1) {
      item[getItemName()].hide(); // Pagina anterior
      currentPageIndex++;
      item[getItemName()].show(); // Proxima pagina
      updateArrowsState();
    }
    else {
      console.warn("There is no next page.");
    }
  }

  this.previousPage = function() {
  }

}
