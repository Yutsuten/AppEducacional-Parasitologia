'use strict';

sceneLoader[1] = function() {

  // Iniciando a nova cena
  scene[1] = new Game.Scene();
  // Adicionando musica na cena
  scene[1].setMusic("musicaCenaExterna.mp3");

  // Adicionando uma imagem de fundo
  var fundoCenaExterior = new Game.Background("cenaExterior.png");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  var mostraCoordenadasAoClicar = true;
  fundoCenaExterior.click = function(mouse) {
    if (mostraCoordenadasAoClicar) {
      var mousePosition = mouse.data.getLocalPosition(stage);
      console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
    }
  }

  // Adiciona uma seta para voltar na sala de aula
  var setaSalaDeAula = new Game.Item("seta.png");
  setaSalaDeAula.setPosition(210, 480);
  setaSalaDeAula.setScale(0.5);
  setaSalaDeAula.setRotation(180);
  setaSalaDeAula.addGlowEffect();
  setaSalaDeAula.click = function(mouse) {
    changeScene(0); // Muda para a sala de aula
  }

  // Adicionando o Background e os Itens na cena
  // Background
  scene[1].addBackground(fundoCenaExterior);
  // Itens
  scene[1].addItem(setaSalaDeAula);

}
