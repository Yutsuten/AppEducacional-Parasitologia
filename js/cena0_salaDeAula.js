'use strict';

sceneLoader[0] = function() {

  // Iniciando a nova cena
  scene[0] = new Game.Scene();
  // Adicionando musica na cena
  scene[0].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  //var fundoSalaDeAula = new Game.Background("salaDeAula.jpg");
  scene[0].background = new Game.Background("salaDeAula.jpg");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  var mostraCoordenadasAoClicar = true;
  scene[0].background.click = function(mouse) {
    if (mostraCoordenadasAoClicar) {
      var mousePosition = mouse.data.getLocalPosition(stage);
      console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
    }
  }

  scene[0].item["carteiras"] = new Game.Item("salaDeAula_carteiras.png");
  scene[0].item.carteiras.setPosition(960, 857);
  scene[0].item.carteiras.setZorder(10);
  scene[0].item.carteiras.setInteractive(false);

  scene[0].item["mesaProfessor"] = new Game.Item("salaDeAula_mesaProfessor.png");
  scene[0].item.mesaProfessor.setPosition(1400, 550);
  scene[0].item.mesaProfessor.setZorder(15);
  scene[0].item.mesaProfessor.setInteractive(false);

  // Adiciona uma seta para levar a cena externa
  scene[0].item["setaJanela"] = new Game.Item("seta.png");
  scene[0].item.setaJanela.setPosition(1735, 480);
  scene[0].item.setaJanela.setScale(0.5);
  scene[0].item.setaJanela.addGlowEffect();
  scene[0].item.setaJanela.setZorder(1);
  scene[0].item.setaJanela.click = function(mouse) {
    changeScene(1); // Muda para a cena exterior
  }

  // Adiciona uma seta para levar ao armario
  scene[0].item["setaArmario"] = new Game.Item("seta.png");
  scene[0].item.setaArmario.setPosition(210, 480);
  scene[0].item.setaArmario.setScale(0.5);
  scene[0].item.setaArmario.setRotation(180);
  scene[0].item.setaArmario.addGlowEffect();
  scene[0].item.setaArmario.setZorder(1);
  scene[0].item.setaArmario.click = function(mouse) {
    changeScene(2); // Muda para a cena exterior
  }

  // Carrega elementos do ciclo da banana
  carregaCicloBanana();

  scene[0].addAllItemsToScene();
}
