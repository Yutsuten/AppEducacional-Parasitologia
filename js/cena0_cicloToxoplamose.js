function carregaCicloToxoplasmose() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estGatoNormal"] = new Game.Item("estMjpnSdv.png");
  item.estGatoNormal.setPosition(610, 455);
  item.estGatoNormal.setZorder(11);
  item.estGatoNormal.setBrightness(220);
  item.estGatoNormal.onMouseOver = function() {
    item.estGatoNormal.setBrightness(255);
    scene[0].setSubtitle("Toxoplasmose");
  }
  item.estGatoNormal.onMouseOut = function() {
    item.estGatoNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estGatoNormal.click = function() {

  }
}
