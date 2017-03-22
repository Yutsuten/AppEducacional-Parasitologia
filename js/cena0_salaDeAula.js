'use strict';

var estiloInfoPopup = {
  "default" : {
    fontFamily: "Book Antiqua",
    fill: 0x010101,
    fontSize: "25px"
  },
  "i" : {
    fontStyle: "italic"
  },
  "b" : {
    fontStyle: "bold"
  }
}

sceneLoader[0] = function() {

  // Iniciando a nova cena
  scene[0] = new Game.Scene();
  // Adicionando musica na cena
  scene[0].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  scene[0].background = new Game.Background("salaDeAula.jpg");
  scene[0].background.setBrightness(210);

  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  item.caixaDeAreia = new Game.Item("salaDeAula_caixaDeAreia.png");
  item.caixaDeAreia.setPosition(554, 478);
  item.caixaDeAreia.setZorder(20);
  item.caixaDeAreia.setBrightness(210);
  item.caixaDeAreia.onMouseOver = function() {
    scene[0].setSubtitle("Caixa de areia");
  }
  item.caixaDeAreia.onMouseOut = function() {
    scene[0].setSubtitle("");
  }

  item.carteiras = new Game.Image("salaDeAula_carteiras.png");
  item.carteiras.setPosition(960, 857);
  item.carteiras.setZorder(10);
  item.carteiras.setBrightness(200);

  item.mesaProfessor = new Game.Image("salaDeAula_mesaProfessor.png");
  item.mesaProfessor.setPosition(1400, 550);
  item.mesaProfessor.setZorder(15);
  item.mesaProfessor.setBrightness(200);

  item.vasoDeFlores = new Game.Item("salaDeAula_vasoDeFlores.png");
  item.vasoDeFlores.setPosition(1630, 400);
  item.vasoDeFlores.setZorder(20);
  item.vasoDeFlores.setBrightness(210);
  item.vasoDeFlores.onMouseOver = function() {
    scene[0].setSubtitle("Vaso com água parada");
    item.popupFlores.enable();
    item.popupFloresTexto.enable();
  }
  item.vasoDeFlores.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.popupFlores.disable();
    item.popupFloresTexto.disable();
  }

  item.popupFlores = new Game.Image("popupFlores.png");
  item.popupFlores.setPosition(1400, 210);
  item.popupFlores.setScale(0.32);
  item.popupFlores.disable();

  item.popupFloresTexto = new Game.Text(
    "Vaso de planta com água\n" +
    "parada. Este é um local\n" +
    "propício para a postura\n" +
    "de ovos e desenvolvi-\n" +
    "mento de larvas de mos-\n" +
    "quitos, como, por exem-\n" +
    "plo, o <i>Anopheles</i> sp,\n" +
    "vetor da malária."
    ,estiloInfoPopup);
  item.popupFloresTexto.setPosition(1315, 160);
  item.popupFloresTexto.setAnchor(0.5, 0.5);
  item.popupFloresTexto.disable();

  // Adiciona uma seta para levar a cena externa
  item.setaJanela = new Game.Item("seta.png");
  item.setaJanela.setPosition(1735, 480);
  item.setaJanela.setBrightness(220);
  item.setaJanela.setScale(0.3);
  item.setaJanela.setZorder(1);
  item.setaJanela.onMouseOver = function() {
    scene[0].setSubtitle("Ambiente externo");
    item.setaJanela.setBrightness(255);
  }
  item.setaJanela.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.setaJanela.setBrightness(220);
  }
  item.setaJanela.onClick = function(mouse) {
    changeScene(1); // Muda para a cena exterior
  }

  // Adiciona uma seta para levar ao armario
  item.setaArmario = new Game.Item("seta.png");
  item.setaArmario.setPosition(210, 480);
  item.setaArmario.setBrightness(220);
  item.setaArmario.setScale(0.3);
  item.setaArmario.setRotation(180);
  item.setaArmario.setZorder(1);
  item.setaArmario.onMouseOver = function() {
    scene[0].setSubtitle("Armário");
    item.setaArmario.setBrightness(255);
  }
  item.setaArmario.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.setaArmario.setBrightness(220);
  }
  item.setaArmario.onClick = function(mouse) {
    changeScene(2); // Muda para o armario
  }

  // Carrega ciclos
  carregaCicloEhistolytica();
  carregaCicloAscaris();
  carregaCicloPlasmodium();
  carregaCicloToxoplasmose();

  scene[0].addAllItemsToScene();
}
