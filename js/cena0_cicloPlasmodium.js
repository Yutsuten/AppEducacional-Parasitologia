function carregaCicloPlasmodium() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estPernNormal"] = new Game.Image("estMngrSdv.png");
  item.estPernNormal.setPosition(1586, 838);
  item.estPernNormal.setZorder(9);
}
