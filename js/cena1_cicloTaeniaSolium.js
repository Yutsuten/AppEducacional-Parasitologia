function carregaCicloTaeniaSolium() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estPorcoNormal"] = new Game.Item("estHjpnSdv.png");
  item.estPorcoNormal.setPosition(150, 308);
  item.estPorcoNormal.setZorder(11);
  item.estPorcoNormal.onMouseOver = function() {
    item.estPorcoNormal.addGlow();
    scene[1].setSubtitle("Teníase");
  }
  item.estPorcoNormal.onMouseOut = function() {
    item.estPorcoNormal.removeGlow();
    scene[1].setSubtitle("");
  }
  item.estPorcoNormal.click = function() {

  }
}
