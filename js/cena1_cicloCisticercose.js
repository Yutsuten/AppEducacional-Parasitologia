function carregaCicloCisticercose() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estCenouraNormal"] = new Game.Item("estHbrcSdv.png");
  item.estCenouraNormal.setPosition(375, 560);
  item.estCenouraNormal.setScale(0.7);
  item.estCenouraNormal.setZorder(9);
  item.estCenouraNormal.setBrightness(220);
  item.estCenouraNormal.onMouseOver = function() {
    item.estCenouraNormal.setBrightness(255);
    scene[1].setSubtitle("Cisticercose");
  }
  item.estCenouraNormal.onMouseOut = function() {
    item.estCenouraNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estCenouraNormal.click = function() {

  }
}
