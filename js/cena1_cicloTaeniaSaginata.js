function carregaCicloTaeniaSaginata() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estVacaNormal"] = new Game.Item("estMprdSdv.png");
  item.estVacaNormal.setPosition(1150, 250);
  item.estVacaNormal.setZorder(11);
  item.estVacaNormal.setBrightness(220);
  item.estVacaNormal.onMouseOver = function() {
    item.estVacaNormal.setBrightness(255);
    scene[1].setSubtitle("Teníase");
  }
  item.estVacaNormal.onMouseOut = function() {
    item.estVacaNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estVacaNormal.click = function() {

  }
}
