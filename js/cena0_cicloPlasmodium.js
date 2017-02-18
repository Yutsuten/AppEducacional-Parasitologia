function carregaCicloPlasmodium() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estudante"] = new Game.Image("estudante.png");
  item.estudante.setPosition(1220, 630);
  item.estudante.setZorder(11);
}
