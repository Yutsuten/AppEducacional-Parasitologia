'use strict';

sceneLoader[0] = function() {

  // Iniciando a nova cena
  scene[0] = new Game.Scene();
  // Adicionando musica na cena
  scene[0].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  var fundoSalaDeAula = new Game.Background("salaDeAula.png");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  var mostraCoordenadasAoClicar = true;
  fundoSalaDeAula.click = function(mouse) {
    if (mostraCoordenadasAoClicar) {
      var mousePosition = mouse.data.getLocalPosition(stage);
      console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
    }
  }

  // Adiciona uma seta para levar a cena externa
  var setaJanela = new Game.Item("seta.png");
  setaJanela.setPosition(1735, 480);
  setaJanela.setScale(0.5);
  setaJanela.addGlowEffect();
  setaJanela.click = function(mouse) {
    changeScene(1); // Muda para a cena exterior
  }

  // Adiciona uma seta para levar ao armario
  var setaArmario = new Game.Item("seta.png");
  setaArmario.setPosition(210, 480);
  setaArmario.setScale(0.5);
  setaArmario.setRotation(180);
  setaArmario.addGlowEffect();
  setaArmario.click = function(mouse) {
    changeScene(2); // Muda para a cena exterior
  }

  // Adicionando o Background e os Itens na cena
  // Background
  scene[0].addBackground(fundoSalaDeAula);
  // Itens
  scene[0].addItem(setaJanela);
  scene[0].addItem(setaArmario);

}
