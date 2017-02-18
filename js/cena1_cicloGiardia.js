function carregaCicloGiardia() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estPocoNormal"] = new Game.Item("estMbrcSdv.png");
  item.estPocoNormal.setPosition(1500, 650);
  item.estPocoNormal.setZorder(9);
}
