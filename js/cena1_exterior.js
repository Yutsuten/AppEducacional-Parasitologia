'use strict';

sceneLoader[1] = function() {

  // Iniciando a nova cena
  scene[1] = new Game.Scene();
  // Adicionando musica na cena
  scene[1].setMusic("musicaAmbienteExterno.wav", 1.0);

  // Adicionando uma imagem de fundo
  scene[1].background = new Game.Background("cenaExterior.jpg");
  scene[1].background.setBrightness(100);

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
  item.setaSalaDeAula.setAlpha(0);
  item.setaSalaDeAula.disable();
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

  // Scene darker and disable them by default
  item.chiqueiro.setBrightness(100);
  item.horta.setBrightness(100);
  item.latrina.setBrightness(100);
  item.lixeira.setBrightness(100);
  item.pocoExterior.setBrightness(100);
  item.vacaExterior.setBrightness(100);

  item.estCenouraNormal.setBrightness(100);
  item.estVacaNormal.setBrightness(100);
  item.estPocoNormal.setBrightness(100);

  item.estPocoNormal.setInteractive(false);
  item.setaSalaDeAula.setInteractive(false);
  item.chiqueiro.setInteractive(false);
  item.horta.setInteractive(false);
  item.latrina.setInteractive(false);
  item.lixeira.setInteractive(false);
  item.pocoExterior.setInteractive(false);

  // Livro inicial
  item.livroCenaExteriorTitulo = new Game.Text(
    "          Cena Exterior"
  , estiloTitulo);
  item.livroCenaExteriorTitulo.setPosition(248, 120);

  item.livroCenaExteriorTexto1 = new Game.Text(
    "     Nesta parte, você irá se deparar com\n" +
    "uma ordem programada de interação com\n" +
    "as personagens e suas doenças. Apresenta-\n" +
    "remos quatro doenças, mas apenas três pa-\n" +
    "rasitas. Neste sentido, um dos parasitas é o\n" +
    "causador de duas doenças. Passe o mouse\n" +
    "pela tela e descubra qual é esta ordem!"
    , estiloTextoLivro);
  item.livroCenaExteriorTexto1.setPosition(248, 190);

  item.livroAberto = new Game.Item("livroAbertoSemMesa.png");
  item.livroAberto.setZorder(6);
  item.livroAberto.setPosition(960, 540);
  item.livroAberto.enable();
  item.livroAberto.setAlpha(1);

  item.fechaLivro = new Game.Item("botaoFechar.png");
  item.fechaLivro.setPosition(1840, 70);
  item.fechaLivro.setZorder(1);
  item.fechaLivro.setBrightness(200);
  item.fechaLivro.setScale(0.14);
  item.fechaLivro.enable();
  item.fechaLivro.setAlpha(1);
  item.fechaLivro.onMouseOver = function() {
    item.fechaLivro.setBrightness(255);
  }
  item.fechaLivro.onMouseOut = function() {
    item.fechaLivro.setBrightness(200);
  }
  item.fechaLivro.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    // Esconde o livro
    item.livroAberto.changeAlpha(0, 600);
    item.fechaLivro.changeAlpha(0, 600);

    // Esconde o texto
    item.livroCenaExteriorTitulo.changeAlpha(0, 600);
    item.livroCenaExteriorTexto1.changeAlpha(0, 600);

    // Mostra setas da cena exterior
    item.setaSalaDeAula.enable();
    item.setaSalaDeAula.changeAlpha(1, 600);

    scene[1].background.changeBrightness(210, 600);
    item.chiqueiro.changeBrightness(210, 600);
    item.horta.changeBrightness(210, 600);
    item.latrina.changeBrightness(210, 600);
    item.lixeira.changeBrightness(210, 600);
    item.pocoExterior.changeBrightness(210, 600);
    item.vacaExterior.changeBrightness(210, 600);

    item.estPocoNormal.changeBrightness(210, 600);
    item.estPocoNormal.setInteractive(true);
    item.setaSalaDeAula.setInteractive(true);
    item.chiqueiro.setInteractive(true);
    item.horta.setInteractive(true);
    item.latrina.setInteractive(true);
    item.lixeira.setInteractive(true);
    item.pocoExterior.setInteractive(true);

    setTimeout(function() {
      item.livroAberto.disable();
      item.fechaLivro.disable();
      item.livroCenaExteriorTitulo.disable();
      item.livroCenaExteriorTexto1.disable();

      enableInteractiveness();
    }, 650);
  }

  scene[1].addAllItemsToScene();
}
