function carregaCicloBanana() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estudanteBananaNormal"] = new Game.Item("estudanteNormal.png");
  item.estudanteBananaNormal.setPosition(960, 655);
  item.estudanteBananaNormal.setZorder(11);

  // Adiconando a banana
  item["banana"] = new Game.Item("banana.png");
  item.banana.setPosition(980, 730);
  item.banana.setScale(0.2);
  item.banana.setZorder(9);
  //item.banana.addGlowEffect();
  item.banana.onMouseOver = function() {
    item.banana.addGlow();
  }
  item.banana.onMouseOut = function() {
    item.banana.removeGlow();
  }
  item.banana.click = function(mouse) {
    // Eventos que acontecem imediatamente apos clicar na banana
    disableInteractiveness();
    item.banana.removeGlow();
    scene[0].background.changeBrightness(100, 600);
    item.carteiras.changeBrightness(100, 600);
    item.mesaProfessor.changeBrightness(100, 600);
    item.setaJanela.fadeout(600);
    item.setaArmario.fadeout(600);

    // Eventos que acontecem apos 0.8 segundos do clique
    setTimeout(function() {
      item.setaJanela.disable();
      item.setaArmario.disable();
    }, 800);

    // Eventos que acontecem apos 1.6 segundos do clique
    setTimeout(function() {
      item.banana.fadeout(600);
      item.estudanteBananaNormal.fadeout(600);
    }, 1600);

    // Eventos que acontecem apos 2.4 segundos do clique
    setTimeout(function() {
      item.sistemaDigestivo.enable();
      item.sistemaDigestivo.fadein(600);
    }, 2400);

    // Eventos que acontecem apos 3.2 segundos do clique
    setTimeout(function() {
      item.estudanteBananaNormal.disable();
      item.bananaInfectada.enable();
      item.bananaInfectada.fadein(600);
    }, 3200);

    // Eventos que acontecem apos 3.6 segundos do clique
    setTimeout(function() {
      item.coliSeta_12.enable();
      item.coliSeta_12.fadein(600);
    }, 3600);

    // Eventos que acontecem apos 4 segundos do clique
    setTimeout(function() {
      item.coliDesencistamento.enable();
      item.coliDesencistamento.fadein(600);
    }, 4000);

    // Eventos que acontecem apos 4.4 segundos do clique
    setTimeout(function() {
      item.coliSeta_23.enable();
      item.coliSeta_23.fadein(600);
    }, 4400);

    // Eventos que acontecem apos 4.8 segundos do clique
    setTimeout(function() {
      item.coliEncistamento.enable();
      item.coliEncistamento.fadein(600);
    }, 4800);

    // Eventos que acontecem apos 5.2 segundos do clique
    setTimeout(function() {
      item.coliSeta_34.enable();
      item.coliSeta_34.fadein(600);
    }, 5200);

    // Eventos que acontecem apos 5.6 segundos do clique
    setTimeout(function() {
      item.coliFezes.enable();
      item.coliFezes.fadein(600);
    }, 5600);

    // Eventos que acontecem apos 6.0 segundos do clique
    setTimeout(function() {
      item.coliSeta_45.enable();
      item.coliSeta_45.fadein(600);
    }, 6000);

    // Eventos que acontecem apos 6.4 segundos do clique
    setTimeout(function() {
      item.coliMosca.enable();
      item.coliMosca.fadein(600);
    }, 6400);

    // Eventos que acontecem apos 6.8 segundos do clique
    setTimeout(function() {
      item.coliBotaoFechar.enable();
      item.coliBotaoFechar.fadein(600);
    }, 6800);

    // Eventos que acontecem apos 7.6 segundos do clique
    setTimeout(function() {
      enableInteractiveness();
    }, 7600);
  }

  // Adiciona a imagem do sistema digestivo - Ciclo Entamoeba Coli
  item["sistemaDigestivo"] = new Game.Item("sistemaDigestivo.png");
  item.sistemaDigestivo.setPosition(960, 550);
  item.sistemaDigestivo.setScale(1.3);
  item.sistemaDigestivo.setZorder(5);
  item.sistemaDigestivo.setInteractive(false);
  item.sistemaDigestivo.setAlpha(0);
  item.sistemaDigestivo.disable();

  // Adiciona a primeira imagem do ciclo Entamoeba Coli
  item["bananaInfectada"] = new Game.Item("temp.jpg");
  item.bananaInfectada.setPosition(335, 255);
  item.bananaInfectada.setZorder(5);
  item.bananaInfectada.setAlpha(0);
  item.bananaInfectada.disable();

  item["coliSeta_12"] = new Game.Item("seta.png");
  item.coliSeta_12.setPosition(337, 514);
  item.coliSeta_12.setRotation(270);
  item.coliSeta_12.setScale(0.5);
  item.coliSeta_12.setZorder(4);
  item.coliSeta_12.setAlpha(0);
  item.coliSeta_12.disable();

  // Adiciona a segunda imagem do ciclo Entamoeba Coli
  item["coliDesencistamento"] = new Game.Item("temp.jpg");
  item.coliDesencistamento.setPosition(335, 770);
  item.coliDesencistamento.setZorder(5);
  item.coliDesencistamento.setAlpha(0);
  item.coliDesencistamento.disable();

  item["coliSeta_23"] = new Game.Item("seta.png");
  item.coliSeta_23.setPosition(960, 760);
  item.coliSeta_23.setRotation(45);
  item.coliSeta_23.setScale(0.3);
  item.coliSeta_23.setZorder(4);
  item.coliSeta_23.setAlpha(0);
  item.coliSeta_23.disable();

  // Adiciona a terceira imagem do ciclo Entamoeba Coli
  item["coliEncistamento"] = new Game.Item("temp.jpg");
  item.coliEncistamento.setPosition(1520, 200);
  item.coliEncistamento.setScale(0.8);
  item.coliEncistamento.setZorder(5);
  item.coliEncistamento.setAlpha(0);
  item.coliEncistamento.disable();

  item["coliSeta_34"] = new Game.Item("seta.png");
  item.coliSeta_34.setPosition(1520, 382);
  item.coliSeta_34.setRotation(270);
  item.coliSeta_34.setScale(0.4);
  item.coliSeta_34.setZorder(4);
  item.coliSeta_34.setAlpha(0);
  item.coliSeta_34.disable();

  // Adiciona a quarta imagem do ciclo Entamoeba Coli
  item["coliFezes"] = new Game.Item("fezes.png");
  item.coliFezes.setPosition(1520, 540);
  item.coliFezes.setScale(0.8);
  item.coliFezes.setZorder(5);
  item.coliFezes.setAlpha(0);
  item.coliFezes.disable();

  item["coliSeta_45"] = new Game.Item("seta.png");
  item.coliSeta_45.setPosition(1520, 706);
  item.coliSeta_45.setRotation(270);
  item.coliSeta_45.setScale(0.4);
  item.coliSeta_45.setZorder(4);
  item.coliSeta_45.setAlpha(0);
  item.coliSeta_45.disable();

  // Adiciona a quinta imagem do ciclo Entamoeba Coli
  item["coliMosca"] = new Game.Item("temp.jpg");
  item.coliMosca.setPosition(1520, 880);
  item.coliMosca.setScale(0.8);
  item.coliMosca.setZorder(5);
  item.coliMosca.setAlpha(0);
  item.coliMosca.disable();

  item["coliBotaoFechar"] = new Game.Item("botaoFechar.png");
  item.coliBotaoFechar.setPosition(1850, 78);
  item.coliBotaoFechar.setAlpha(0);
  item.coliBotaoFechar.disable();
  item.coliBotaoFechar.click = function(mouse) {

  }
}
