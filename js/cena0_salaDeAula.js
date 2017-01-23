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

  // Adicionando o aluno da banana
  var estudanteBananaNormal = new Game.Item("estudanteNormal.png");
  estudanteBananaNormal.setPosition(960, 655);

  // Adiconando a banana
  var banana = new Game.Item("banana.png");
  banana.setPosition(960, 760);
  banana.setScale(0.2);
  banana.setZorder(4);
  banana.addGlowEffect();
  banana.click = function(mouse) {
    // Eventos que acontecem imediatamente apos clicar na banana
    disableInteractiveness();
    fundoSalaDeAula.changeBrightness(100, 600);
    setaJanela.fadeout(600);
    setaArmario.fadeout(600);

    // Eventos que acontecem apos 0.8 segundos do clique
    setTimeout(function() {
      setaJanela.disable();
      setaArmario.disable();
      scene[0].setBackgroundMaskColor(120, 220, 255);
      scene[0].changeBackgroundMaskAlpha(1, 600);
      estudanteBananaNormal.fadeout(600);
      banana.fadeout(600);
      sistemaDigestivo.enable();
      sistemaDigestivo.fadein(600);
    }, 800);

    setTimeout(function() {
      enableInteractiveness();
    }, 1300);
  }

  // Adiciona a imagem do sistema digestivo - Ciclo Entamoeba Coli
  var sistemaDigestivo = new Game.Item("sistemaDigestivo.png");
  sistemaDigestivo.setPosition(960, 550);
  sistemaDigestivo.setScale(1.3);
  sistemaDigestivo.setAlpha(0);
  sistemaDigestivo.disable();

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
  scene[0].addItem(estudanteBananaNormal);
  scene[0].addItem(banana);
  scene[0].addItem(sistemaDigestivo);

}
