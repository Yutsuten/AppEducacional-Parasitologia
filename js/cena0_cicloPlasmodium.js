function carregaCicloPlasmodium() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estPernNormal"] = new Game.Item("estMngrSdv.png");
  item.estPernNormal.setPosition(1586, 838);
  item.estPernNormal.setZorder(9);
  item.estPernNormal.setBrightness(220);
  item.estPernNormal.onMouseOver = function() {
    item.estPernNormal.setBrightness(255);
    scene[0].setSubtitle("Malária");
  }
  item.estPernNormal.onMouseOut = function() {
    item.estPernNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estPernNormal.click = function() {

  }
}
