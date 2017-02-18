function carregaCicloToxoplasmose() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estGatoNormal"] = new Game.Item("estMjpnSdv.png");
  item.estGatoNormal.setPosition(610, 455);
  item.estGatoNormal.setZorder(11);
  item.estGatoNormal.onMouseOver = function() {
    item.estGatoNormal.addGlow();
    scene[0].setSubtitle("Toxoplasmose");
  }
  item.estGatoNormal.onMouseOut = function() {
    item.estGatoNormal.removeGlow();
    scene[0].setSubtitle("");
  }
  item.estGatoNormal.click = function() {

  }
}
