'use strict';

sceneLoader[0] = function() {

  // Iniciando a nova cena
  scene[0] = new Game.Scene();
  // Adicionando musica na cena
  scene[0].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  var fundoSalaDeAula = new Game.Background("salaDeAula.jpg");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  var mostraCoordenadasAoClicar = true;
  fundoSalaDeAula.click = function(mouse) {
    if (mostraCoordenadasAoClicar) {
      var mousePosition = mouse.data.getLocalPosition(stage);
      console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
    }
  }

  var carteiras = new Game.Item("salaDeAula_carteiras.png");
  carteiras.setPosition(960, 857);
  carteiras.setZorder(10);
  carteiras.setInteractive(false);

  var mesaProfessor = new Game.Item("salaDeAula_mesaProfessor.png");
  mesaProfessor.setPosition(1400, 550);
  mesaProfessor.setZorder(15);
  mesaProfessor.setInteractive(false);

  // Adiciona uma seta para levar a cena externa
  var setaJanela = new Game.Item("seta.png");
  setaJanela.setPosition(1735, 480);
  setaJanela.setScale(0.5);
  setaJanela.addGlowEffect();
  setaJanela.setZorder(1);
  setaJanela.click = function(mouse) {
    changeScene(1); // Muda para a cena exterior
  }

  // Adiciona uma seta para levar ao armario
  var setaArmario = new Game.Item("seta.png");
  setaArmario.setPosition(210, 480);
  setaArmario.setScale(0.5);
  setaArmario.setRotation(180);
  setaArmario.addGlowEffect();
  setaArmario.setZorder(1);
  setaArmario.click = function(mouse) {
    changeScene(2); // Muda para a cena exterior
  }

  // Elementos do ciclo da banana

  // Adicionando o aluno
  var estudanteBananaNormal = new Game.Item("estudanteNormal.png");
  estudanteBananaNormal.setPosition(960, 655);
  estudanteBananaNormal.setZorder(11);

  // Adiconando a banana
  var banana = new Game.Item("banana.png");
  banana.setPosition(980, 730);
  banana.setScale(0.2);
  banana.setZorder(9);
  banana.addGlowEffect();
  banana.click = function(mouse) {
    // Eventos que acontecem imediatamente apos clicar na banana
    disableInteractiveness();
    banana.removeGlow();
    fundoSalaDeAula.changeBrightness(100, 600);
    carteiras.changeBrightness(100, 600);
    mesaProfessor.changeBrightness(100, 600);
    setaJanela.fadeout(600);
    setaArmario.fadeout(600);

    // Eventos que acontecem apos 0.8 segundos do clique
    setTimeout(function() {
      setaJanela.disable();
      setaArmario.disable();
    }, 800);

    // Eventos que acontecem apos 1.6 segundos do clique
    setTimeout(function() {
      banana.fadeout(600);
      estudanteBananaNormal.fadeout(600);
    }, 1600);

    // Eventos que acontecem apos 2.4 segundos do clique
    setTimeout(function() {
      sistemaDigestivo.enable();
      sistemaDigestivo.fadein(600);
    }, 2400);

    // Eventos que acontecem apos 3.2 segundos do clique
    setTimeout(function() {
      estudanteBananaNormal.disable();
      bananaInfectada.enable();
      bananaInfectada.fadein(600);
    }, 3200);

    // Eventos que acontecem apos 3.6 segundos do clique
    setTimeout(function() {
      coliSeta_12.enable();
      coliSeta_12.fadein(600);
    }, 3600);

    // Eventos que acontecem apos 4 segundos do clique
    setTimeout(function() {
      coliDesencistamento.enable();
      coliDesencistamento.fadein(600);
    }, 4000);

    // Eventos que acontecem apos 4.4 segundos do clique
    setTimeout(function() {
      coliSeta_23.enable();
      coliSeta_23.fadein(600);
    }, 4400);

    // Eventos que acontecem apos 4.8 segundos do clique
    setTimeout(function() {
      coliEncistamento.enable();
      coliEncistamento.fadein(600);
    }, 4800);

    // Eventos que acontecem apos 5.2 segundos do clique
    setTimeout(function() {
      coliSeta_34.enable();
      coliSeta_34.fadein(600);
    }, 5200);

    // Eventos que acontecem apos 5.6 segundos do clique
    setTimeout(function() {
      coliFezes.enable();
      coliFezes.fadein(600);
    }, 5600);

    // Eventos que acontecem apos 6.0 segundos do clique
    setTimeout(function() {
      coliSeta_45.enable();
      coliSeta_45.fadein(600);
    }, 6000);

    // Eventos que acontecem apos 6.4 segundos do clique
    setTimeout(function() {
      coliMosca.enable();
      coliMosca.fadein(600);
    }, 6400);

    // Eventos que acontecem apos 6.8 segundos do clique
    setTimeout(function() {
      coliBotaoFechar.enable();
      coliBotaoFechar.fadein(600);
    }, 6800);

    // Eventos que acontecem apos 7.6 segundos do clique
    setTimeout(function() {
      enableInteractiveness();
    }, 7600);
  }

  // Adiciona a imagem do sistema digestivo - Ciclo Entamoeba Coli
  var sistemaDigestivo = new Game.Item("sistemaDigestivo.png");
  sistemaDigestivo.setPosition(960, 550);
  sistemaDigestivo.setScale(1.3);
  sistemaDigestivo.setZorder(5);
  sistemaDigestivo.setInteractive(false);
  sistemaDigestivo.setAlpha(0);
  sistemaDigestivo.disable();

  // Adiciona a primeira imagem do ciclo Entamoeba Coli
  var bananaInfectada = new Game.Item("temp.jpg");
  bananaInfectada.setPosition(335, 255);
  bananaInfectada.setZorder(5);
  bananaInfectada.setAlpha(0);
  bananaInfectada.disable();

  var coliSeta_12 = new Game.Item("seta.png");
  coliSeta_12.setPosition(337, 514);
  coliSeta_12.setRotation(270);
  coliSeta_12.setScale(0.5);
  coliSeta_12.setZorder(4);
  coliSeta_12.setAlpha(0);
  coliSeta_12.disable();

  // Adiciona a segunda imagem do ciclo Entamoeba Coli
  var coliDesencistamento = new Game.Item("temp.jpg");
  coliDesencistamento.setPosition(335, 770);
  coliDesencistamento.setZorder(5);
  coliDesencistamento.setAlpha(0);
  coliDesencistamento.disable();

  var coliSeta_23 = new Game.Item("seta.png");
  coliSeta_23.setPosition(960, 760);
  coliSeta_23.setRotation(45);
  coliSeta_23.setScale(0.3);
  coliSeta_23.setZorder(4);
  coliSeta_23.setAlpha(0);
  coliSeta_23.disable();

  // Adiciona a terceira imagem do ciclo Entamoeba Coli
  var coliEncistamento = new Game.Item("temp.jpg");
  coliEncistamento.setPosition(1520, 200);
  coliEncistamento.setScale(0.8);
  coliEncistamento.setZorder(5);
  coliEncistamento.setAlpha(0);
  coliEncistamento.disable();

  var coliSeta_34 = new Game.Item("seta.png");
  coliSeta_34.setPosition(1520, 382);
  coliSeta_34.setRotation(270);
  coliSeta_34.setScale(0.4);
  coliSeta_34.setZorder(4);
  coliSeta_34.setAlpha(0);
  coliSeta_34.disable();

  // Adiciona a quarta imagem do ciclo Entamoeba Coli
  var coliFezes = new Game.Item("fezes.png");
  coliFezes.setPosition(1520, 540);
  coliFezes.setScale(0.8);
  coliFezes.setZorder(5);
  coliFezes.setAlpha(0);
  coliFezes.disable();

  var coliSeta_45 = new Game.Item("seta.png");
  coliSeta_45.setPosition(1520, 706);
  coliSeta_45.setRotation(270);
  coliSeta_45.setScale(0.4);
  coliSeta_45.setZorder(4);
  coliSeta_45.setAlpha(0);
  coliSeta_45.disable();

  // Adiciona a quinta imagem do ciclo Entamoeba Coli
  var coliMosca = new Game.Item("temp.jpg");
  coliMosca.setPosition(1520, 880);
  coliMosca.setScale(0.8);
  coliMosca.setZorder(5);
  coliMosca.setAlpha(0);
  coliMosca.disable();

  var coliBotaoFechar = new Game.Item("botaoFechar.png");
  coliBotaoFechar.setPosition(1850, 78);
  coliBotaoFechar.setAlpha(0);
  coliBotaoFechar.disable();

  // Adicionando o Background e os Itens na cena
  // Background
  scene[0].addBackground(fundoSalaDeAula);
  // Itens
  scene[0].addItem(setaJanela);
  scene[0].addItem(setaArmario);
  scene[0].addItem(carteiras);
  scene[0].addItem(mesaProfessor);

  // Itens ciclo banana
  scene[0].addItem(estudanteBananaNormal);
  scene[0].addItem(banana);
  scene[0].addItem(sistemaDigestivo);
  scene[0].addItem(bananaInfectada);
  scene[0].addItem(coliSeta_12);
  scene[0].addItem(coliDesencistamento);
  scene[0].addItem(coliSeta_23);
  scene[0].addItem(coliEncistamento);
  scene[0].addItem(coliSeta_34);
  scene[0].addItem(coliFezes);
  scene[0].addItem(coliSeta_45);
  scene[0].addItem(coliMosca);
  scene[0].addItem(coliBotaoFechar);
}
