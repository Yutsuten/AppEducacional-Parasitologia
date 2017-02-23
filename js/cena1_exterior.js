'use strict';

sceneLoader[1] = function() {

  // Iniciando a nova cena
  scene[1] = new Game.Scene();
  // Adicionando musica na cena
  scene[1].setMusic("musicaCenaExterna.mp3");

  // Adicionando uma imagem de fundo
  scene[1].background = new Game.Background("cenaExterior.jpg");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  scene[1].background.setInteractive(true);
  scene[1].background.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  // Criando um aliase de scene[1].item
  var item = scene[1].item;

  item["chiqueiro"] = new Game.Item("chiqueiro.png");
  item.chiqueiro.setPosition(238, 240);
  item.chiqueiro.setZorder(15);
  item.chiqueiro.onMouseOver = function() {
    scene[1].setSubtitle("Chiqueiro");
  }
  item.chiqueiro.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item["horta"] = new Game.Item("horta.png");
  item.horta.setPosition(400, 660);
  item.horta.setZorder(10);
  item.horta.onMouseOver = function() {
    scene[1].setSubtitle("Horta");
  }
  item.horta.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item["latrina"] = new Game.Item("latrina.png");
  item.latrina.setPosition(1450, 200);
  item.latrina.setZorder(15);
  item.latrina.onMouseOver = function() {
    scene[1].setSubtitle("Fossa");
  }
  item.latrina.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item["lixeira"] = new Game.Item("lixeira.png");
  item.lixeira.setPosition(567, 288);
  item.lixeira.setZorder(16);
  item.lixeira.onMouseOver = function() {
    scene[1].setSubtitle("Lixo");
  }
  item.lixeira.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item["pocoExterior"] = new Game.Item("pocoExterior.png");
  item.pocoExterior.setPosition(1723, 643);
  item.pocoExterior.setZorder(10);
  item.pocoExterior.onMouseOver = function() {
    scene[1].setSubtitle("Poço artesiano");
  }
  item.pocoExterior.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item["vacaExterior"] = new Game.Image("vacaExterior.png");
  item.vacaExterior.setPosition(935, 252);
  item.vacaExterior.setZorder(15);

  // Adiciona uma seta para voltar na sala de aula
  item["setaSalaDeAula"] = new Game.Item("seta.png");
  item.setaSalaDeAula.setPosition(210, 480);
  item.setaSalaDeAula.setScale(0.5);
  item.setaSalaDeAula.setRotation(180);
  item.setaSalaDeAula.setInteractive(true);
  item.setaSalaDeAula.onMouseOver = function() {
    scene[1].setSubtitle("Sala de aula");
    item.setaSalaDeAula.addGlow();
  }
  item.setaSalaDeAula.onMouseOut = function() {
    scene[1].setSubtitle("");
    item.setaSalaDeAula.removeGlow();
  }
  item.setaSalaDeAula.onClick = function(mouse) {
    changeScene(0); // Muda para a sala de aula
  }

  // Carrega ciclos
  carregaCicloGiardia();
  carregaCicloTaeniaSaginata();
  carregaCicloTaeniaSolium();
  carregaCicloCisticercose();

  scene[1].addAllItemsToScene();
}
