'use strict';

sceneLoader[1] = function() {

  // Iniciando a nova cena
  scene[1] = new Game.Scene();
  // Adicionando musica na cena
  scene[1].setMusic("musicaAmbienteExterno.wav", 1.0);

  // Adicionando uma imagem de fundo
  scene[1].background = new Game.Background("cenaExterior.jpg");
  scene[1].background.setBrightness(210);

  // Criando um aliase de scene[1].item
  var item = scene[1].item;

  item.chiqueiro = new Game.Item("chiqueiro.png");
  item.chiqueiro.setPosition(238, 240);
  item.chiqueiro.setZorder(15);
  item.chiqueiro.onMouseOver = function() {
    scene[1].setSubtitle("Chiqueiro");
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }
  item.chiqueiro.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item.horta = new Game.Item("horta.png");
  item.horta.setPosition(400, 660);
  item.horta.setZorder(10);
  item.horta.onMouseOver = function() {
    scene[1].setSubtitle("Horta");
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }
  item.horta.onMouseOut = function() {
    scene[1].setSubtitle("");
  }

  item.latrina = new Game.Item("latrina.png");
  item.latrina.setPosition(1450, 200);
  item.latrina.setZorder(15);
  item.latrina.onMouseOver = function() {
    scene[1].setSubtitle("Fossa");
    somPopup();
    item.popupLatrinaPoco.enable();
    item.popupLatrinaPocoTexto.enable();
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
  }
  item.latrina.onMouseOut = function() {
    scene[1].setSubtitle("");
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }

  item.popupLatrinaPoco = new Game.Image("popupLatrinaPoco.png");
  item.popupLatrinaPoco.setPosition(1210, 440);
  item.popupLatrinaPoco.setScale(0.24);
  item.popupLatrinaPoco.disable();

  item.popupLatrinaPocoTexto = new Game.Text(
    "Contaminação do poço artesiano\n" +
    "a partir da fossa. A localização\n" +
    "do poço deve levar em conta os\n" +
    "riscos de contaminação do lençol\n" +
    "freático, portanto, deve-se respei-\n" +
    "tar uma distância mínima de 15\n" +
    "metros de qualquer fossa e de 45\n" +
    "metros de chiqueiros, por exem-\n" +
    "plo. No ambiente representado\n" +
    "por esse Objeto de Aprendiza-\n" +
    "gem, estas regras não foram se-\n" +
    "guidas: a construção da fossa se\n" +
    "deu próxima ao poço."
    ,estiloInfoPopup);
  item.popupLatrinaPocoTexto.setPosition(1106, 430);
  item.popupLatrinaPocoTexto.setAnchor(0.5, 0.5);
  item.popupLatrinaPocoTexto.setZorder(4);
  item.popupLatrinaPocoTexto.disable();

  item.lixeira = new Game.Item("lixeira.png");
  item.lixeira.setPosition(567, 288);
  item.lixeira.setZorder(16);
  item.lixeira.onMouseOver = function() {
    scene[1].setSubtitle("Lixo");
    somPopup();
    item.popupChorume.enable();
    item.popupChorumeTexto.enable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }
  item.lixeira.onMouseOut = function() {
    scene[1].setSubtitle("");
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
  }

  item.popupChorume = new Game.Image("popupChorume.png");
  item.popupChorume.setPosition(900, 460);
  item.popupChorume.setScale(0.27);
  item.popupChorume.disable();

  item.popupChorumeTexto = new Game.Text(
    "Contaminação do solo atra-\n" +
    "vés do chorume proveniente\n" +
    "do lixo depositado de modo\n" +
    "inadequado e por muito\n" +
    "tempo no local. O chorume\n" +
    "é um resíduo líquido forma-\n" +
    "do a partir da decomposição\n" +
    "de matéria orgânica presen-\n" +
    "te no lixo."
    ,estiloInfoPopup);
  item.popupChorumeTexto.setPosition(1010, 500);
  item.popupChorumeTexto.setAnchor(0.5, 0.5);
  item.popupChorumeTexto.setZorder(4);
  item.popupChorumeTexto.disable();

  item.pocoExterior = new Game.Item("pocoExterior.png");
  item.pocoExterior.setPosition(1723, 643);
  item.pocoExterior.setZorder(10);
  item.pocoExterior.onMouseOver = function() {
    scene[1].setSubtitle("Poço artesiano");
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
    /*item.popupLatrinaPoco.enable();
    item.popupLatrinaPocoTexto.enable();
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();*/
  }
  item.pocoExterior.onMouseOut = function() {
    scene[1].setSubtitle("");
    /*item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();*/
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
  item.setaSalaDeAula.setAlpha(1);
  item.setaSalaDeAula.enable();
  item.setaSalaDeAula.onMouseOver = function() {
    scene[1].setSubtitle("Sala de aula");
    item.setaSalaDeAula.setBrightness(255);
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }
  item.setaSalaDeAula.onMouseOut = function() {
    scene[1].setSubtitle("");
    item.setaSalaDeAula.setBrightness(220);
  }
  item.setaSalaDeAula.onClick = function(mouse) {
    somSeta();
    scene[1].setSubtitle("");
    changeScene(0); // Muda para a sala de aula
  }

  // Estados da cena
  scene[1].state = 3;
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
