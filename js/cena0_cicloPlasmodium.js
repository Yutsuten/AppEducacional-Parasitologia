function carregaCicloPlasmodium() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estPernNormal"] = new Game.Image("estMngrSdv.png");
  item.estPernNormal.setPosition(1220, 630);
  item.estPernNormal.setZorder(11);
}
