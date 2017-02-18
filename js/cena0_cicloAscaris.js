function carregaCicloAscaris() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estTomateNormal"] = new Game.Item("estHngrSdv.png");
  item.estTomateNormal.setPosition(940, 590);
  item.estTomateNormal.setZorder(11);
  item.estTomateNormal.onMouseOver = function() {
    item.estTomateNormal.addGlow();
    scene[0].setSubtitle("Ascaridíase");
  }
  item.estTomateNormal.onMouseOut = function() {
    item.estTomateNormal.removeGlow();
    scene[0].setSubtitle("");
  }
  item.estTomateNormal.click = function() {

  }
}
