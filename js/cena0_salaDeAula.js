'use strict';

sceneLoader[0] = function() {

  // Iniciando a nova cena
  scene[0] = new Game.Scene();
  // Adicionando musica na cena
  scene[0].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  scene[0].background = new Game.Background("salaDeAula.jpg");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  scene[0].background.setInteractive(true);
  scene[0].background.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  item["carteiras"] = new Game.Image("salaDeAula_carteiras.png");
  item.carteiras.setPosition(960, 857);
  item.carteiras.setZorder(10);

  item["mesaProfessor"] = new Game.Image("salaDeAula_mesaProfessor.png");
  item.mesaProfessor.setPosition(1400, 550);
  item.mesaProfessor.setZorder(15);

  // Adiciona uma seta para levar a cena externa
  item["setaJanela"] = new Game.Item("seta.png");
  item.setaJanela.setPosition(1735, 480);
  item.setaJanela.setScale(0.5);
  item.setaJanela.setZorder(1);
  item.setaJanela.onMouseOver = function() {
    item.setaJanela.addGlow();
  }
  item.setaJanela.onMouseOut = function() {
    item.setaJanela.removeGlow();
  }
  item.setaJanela.click = function(mouse) {
    changeScene(1); // Muda para a cena exterior
  }

  // Adiciona uma seta para levar ao armario
  item["setaArmario"] = new Game.Item("seta.png");
  item.setaArmario.setPosition(210, 480);
  item.setaArmario.setScale(0.5);
  item.setaArmario.setRotation(180);
  item.setaArmario.setZorder(1);
  item.setaArmario.onMouseOver = function() {
    item.setaArmario.addGlow();
  }
  item.setaArmario.onMouseOut = function() {
    item.setaArmario.removeGlow();
  }
  item.setaArmario.click = function(mouse) {
    changeScene(2); // Muda para a cena exterior
  }

  // Carrega elementos do ciclo da banana
  carregaCicloEcoli();

  scene[0].addAllItemsToScene();
}
