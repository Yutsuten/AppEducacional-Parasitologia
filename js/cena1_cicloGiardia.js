function carregaCicloGiardia() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estPocoNormal"] = new Game.Item("estMbrcSdv.png");
  item.estPocoNormal.setPosition(1500, 650);
  item.estPocoNormal.setZorder(9);
  item.estPocoNormal.setBrightness(220);
  item.estPocoNormal.onMouseOver = function() {
    item.estPocoNormal.setBrightness(255);
    scene[1].setSubtitle("Giardíase");
  }
  item.estPocoNormal.onMouseOut = function() {
    item.estPocoNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estPocoNormal.click = function() {

  }
}
