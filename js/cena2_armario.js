'use strict';

sceneLoader[2] = function() {

  // Iniciando a nova cena
  scene[2] = new Game.Scene();
  // Adicionando musica na cena
  scene[2].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  var fundoCenaArmario = new Game.Background("cenaArmarioBackground.jpg");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  var mostraCoordenadasAoClicar = true;
  fundoCenaArmario.click = function(mouse) {
    if (mostraCoordenadasAoClicar) {
      var mousePosition = mouse.data.getLocalPosition(stage);
      console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
    }
  }

  // Adiciona a imagem do armario
  var armarioDeLivros = new Game.Item("armarioLivros.jpg");
  armarioDeLivros.setPosition(990, 560);
  armarioDeLivros.setScale(0.8);

  // Adiciona uma seta para voltar na sala de aula
  var setaSalaDeAula = new Game.Item("seta.png");
  setaSalaDeAula.setPosition(1735, 480);
  setaSalaDeAula.setScale(0.5);
  setaSalaDeAula.addGlowEffect();
  setaSalaDeAula.click = function(mouse) {
    changeScene(0); // Muda para a cena exterior
  }

  // Adicionando o Background e os Itens na cena
  // Background
  scene[2].addBackground(fundoCenaArmario);
  // Itens
  scene[2].addItem(armarioDeLivros);
  scene[2].addItem(setaSalaDeAula);

}
