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

  item.chiqueiro = new Game.Item("chiqueiro.png");
  item.chiqueiro.setPosition(238, 240);
  item.chiqueiro.setZorder(15);
  item.chiqueiro.onMouseOver = function() {
    scene[1].setSubtitle("Chiqueiro");
  }
  item.chiqueiro.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item.horta = new Game.Item("horta.png");
  item.horta.setPosition(400, 660);
  item.horta.setZorder(10);
  item.horta.onMouseOver = function() {
    scene[1].setSubtitle("Horta");
  }
  item.horta.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item.latrina = new Game.Item("latrina.png");
  item.latrina.setPosition(1450, 200);
  item.latrina.setZorder(15);
  item.latrina.onMouseOver = function() {
    scene[1].setSubtitle("Fossa");
  }
  item.latrina.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item.lixeira = new Game.Item("lixeira.png");
  item.lixeira.setPosition(567, 288);
  item.lixeira.setZorder(16);
  item.lixeira.onMouseOver = function() {
    scene[1].setSubtitle("Lixo");
  }
  item.lixeira.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item.pocoExterior = new Game.Item("pocoExterior.png");
  item.pocoExterior.setPosition(1723, 643);
  item.pocoExterior.setZorder(10);
  item.pocoExterior.onMouseOver = function() {
    scene[1].setSubtitle("Poço artesiano");
  }
  item.pocoExterior.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item.vacaExterior = new Game.Image("vacaExterior.png");
  item.vacaExterior.setPosition(935, 252);
  item.vacaExterior.setZorder(15);

  // Adiciona uma seta para voltar na sala de aula
  item.setaSalaDeAula = new Game.Item("seta.png");
  item.setaSalaDeAula.setPosition(210, 480);
  item.setaSalaDeAula.setBrightness(220);
  item.setaSalaDeAula.setScale(0.3);
  item.setaSalaDeAula.setRotation(180);
  item.setaSalaDeAula.setInteractive(true);
  item.setaSalaDeAula.onMouseOver = function() {
    scene[1].setSubtitle("Sala de aula");
    item.setaSalaDeAula.setBrightness(255);
  }
  item.setaSalaDeAula.onMouseOut = function() {
    scene[1].setSubtitle("");
    item.setaSalaDeAula.setBrightness(220);
  }
  item.setaSalaDeAula.onClick = function(mouse) {
    changeScene(0); // Muda para a sala de aula
  }

  // Estados da cena
  scene[1].state = 0;
  scene[1].nextState = function() {
    switch (scene[1].state) {
      case 0:
        scene[1].state = 1;
        item.estPocoNormal.brightnessTarget = 150;
        item.estPocoNormal.interactiveTarget = false;
        item.estVacaNormal.brightnessTarget = 220;
        item.estVacaNormal.interactiveTarget = true;
        item.estPorcoNormal.brightnessTarget = 220;
        item.estPorcoNormal.interactiveTarget = true;
        item.estCenouraNormal.brightnessTarget = 150;
        item.estCenouraNormal.interactiveTarget = false;
        break;
      case 1:
        if (!item.estVacaNormal.interactiveTarget && !item.estPorcoNormal.interactiveTarget) {
          scene[1].state = 2;
          item.estCenouraNormal.brightnessTarget = 220;
          item.estCenouraNormal.interactiveTarget = true;
        }
        break;
      case 2:
        scene[1].state = 3;
        item.estPocoNormal.brightnessTarget = 220;
        item.estPocoNormal.interactiveTarget = true;
        item.estVacaNormal.brightnessTarget = 220;
        item.estVacaNormal.interactiveTarget = true;
        item.estPorcoNormal.brightnessTarget = 220;
        item.estPorcoNormal.interactiveTarget = true;
        break;
      case 3:
        item.estPocoNormal.brightnessTarget = 220;
        item.estPocoNormal.interactiveTarget = true;
        item.estVacaNormal.brightnessTarget = 220;
        item.estVacaNormal.interactiveTarget = true;
        item.estPorcoNormal.brightnessTarget = 220;
        item.estPorcoNormal.interactiveTarget = true;
        item.estCenouraNormal.brightnessTarget = 220;
        item.estCenouraNormal.interactiveTarget = true;
        break;
    }
    UpdateScreen();
  }

  // Carrega ciclos
  carregaCicloGiardia();
  carregaCicloTaeniaSaginata();
  carregaCicloTaeniaSolium();
  carregaCicloCisticercose();

  scene[1].addAllItemsToScene();
}
