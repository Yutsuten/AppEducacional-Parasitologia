function carregaCicloTaeniaSaginata() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estVacaNormal"] = new Game.Image("estMprdSdv.png");
  item.estVacaNormal.setPosition(1220, 630);
  item.estVacaNormal.setZorder(11);
}
