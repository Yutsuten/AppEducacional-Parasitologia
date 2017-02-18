function carregaCicloTaeniaSaginata() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estVacaNormal"] = new Game.Image("estMprdSdv.png");
  item.estVacaNormal.setPosition(1150, 250);
  item.estVacaNormal.setZorder(11);
}
