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

  item["chiqueiro"] = new Game.Image("chiqueiro.png");
  item.chiqueiro.setPosition(240, 240);
  item.chiqueiro.setZorder(15);

  item["horta"] = new Game.Image("horta.png");
  item.horta.setPosition(400, 660);
  item.horta.setZorder(10);

  item["latrina"] = new Game.Image("latrina.png");
  item.latrina.setPosition(1450, 200);
  item.latrina.setZorder(15);

  item["lixeira"] = new Game.Image("lixeira.png");
  item.lixeira.setPosition(580, 290);
  item.lixeira.setZorder(16);

  item["pocoExterior"] = new Game.Image("pocoExterior.png");
  item.pocoExterior.setPosition(1723, 648);
  item.pocoExterior.setZorder(10);

  item["vacaExterior"] = new Game.Image("vacaExterior.png");
  item.vacaExterior.setPosition(938, 250);
  item.vacaExterior.setZorder(15);

  // Adiciona uma seta para voltar na sala de aula
  item["setaSalaDeAula"] = new Game.Item("seta.png");
  item.setaSalaDeAula.setPosition(210, 480);
  item.setaSalaDeAula.setScale(0.5);
  item.setaSalaDeAula.setRotation(180);
  item.setaSalaDeAula.setInteractive(true);
  item.setaSalaDeAula.onMouseOver = function() {
    item.setaSalaDeAula.addGlow();
  }
  item.setaSalaDeAula.onMouseOut = function() {
    item.setaSalaDeAula.removeGlow();
  }
  item.setaSalaDeAula.click = function(mouse) {
    changeScene(0); // Muda para a sala de aula
  }

  // Carrega ciclos
  carregaCicloGiardia();
  carregaCicloTaeniaSaginata();
  carregaCicloTaeniaSolium();
  carregaCicloCisticercose();

  scene[1].addAllItemsToScene();
}
