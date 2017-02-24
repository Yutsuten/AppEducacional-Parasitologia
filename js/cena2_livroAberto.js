function carregaLivroAberto() {

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  item["livroAberto"] = new Game.Item("livroAberto.png");
  item.livroAberto.setZorder(4);
  item.livroAberto.setPosition(960, 540);

  item["fechaLivro"] = new Game.Item("botaoFechar.png");
  item.fechaLivro.setPosition(1840, 70);
  item.fechaLivro.setZorder(1);
  //item.fechaLivro.setAlpha(0);
  //item.fechaLivro.disable();
  item.fechaLivro.onMouseOver = function() {
  }
  item.fechaLivro.onMouseOut = function() {
  }
  item.fechaLivro.onClick = function(mouse) {

  }

}
