function carregaCicloGiardia() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estPocoNormal"] = new Game.Image("estMbrcSdv.png");
  item.estPocoNormal.setPosition(1220, 630);
  item.estPocoNormal.setZorder(11);
}
