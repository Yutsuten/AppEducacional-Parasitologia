function carregaCicloBanana() {
  // Adicionando o aluno
  scene[0].item["estudanteBananaNormal"] = new Game.Item("estudanteNormal.png");
  scene[0].item.estudanteBananaNormal.setPosition(960, 655);
  scene[0].item.estudanteBananaNormal.setZorder(11);

  // Adiconando a banana
  scene[0].item["banana"] = new Game.Item("banana.png");
  scene[0].item.banana.setPosition(980, 730);
  scene[0].item.banana.setScale(0.2);
  scene[0].item.banana.setZorder(9);
  scene[0].item.banana.addGlowEffect();
  scene[0].item.banana.click = function(mouse) {
    // Eventos que acontecem imediatamente apos clicar na banana
    disableInteractiveness();
    scene[0].item.banana.removeGlow();
    scene[0].background.changeBrightness(100, 600);
    scene[0].item.carteiras.changeBrightness(100, 600);
    scene[0].item.mesaProfessor.changeBrightness(100, 600);
    scene[0].item.setaJanela.fadeout(600);
    scene[0].item.setaArmario.fadeout(600);

    // Eventos que acontecem apos 0.8 segundos do clique
    setTimeout(function() {
      scene[0].item.setaJanela.disable();
      scene[0].item.setaArmario.disable();
    }, 800);

    // Eventos que acontecem apos 1.6 segundos do clique
    setTimeout(function() {
      scene[0].item.banana.fadeout(600);
      scene[0].item.estudanteBananaNormal.fadeout(600);
    }, 1600);

    // Eventos que acontecem apos 2.4 segundos do clique
    setTimeout(function() {
      scene[0].item.sistemaDigestivo.enable();
      scene[0].item.sistemaDigestivo.fadein(600);
    }, 2400);

    // Eventos que acontecem apos 3.2 segundos do clique
    setTimeout(function() {
      scene[0].item.estudanteBananaNormal.disable();
      scene[0].item.bananaInfectada.enable();
      scene[0].item.bananaInfectada.fadein(600);
    }, 3200);

    // Eventos que acontecem apos 3.6 segundos do clique
    setTimeout(function() {
      scene[0].item.coliSeta_12.enable();
      scene[0].item.coliSeta_12.fadein(600);
    }, 3600);

    // Eventos que acontecem apos 4 segundos do clique
    setTimeout(function() {
      scene[0].item.coliDesencistamento.enable();
      scene[0].item.coliDesencistamento.fadein(600);
    }, 4000);

    // Eventos que acontecem apos 4.4 segundos do clique
    setTimeout(function() {
      scene[0].item.coliSeta_23.enable();
      scene[0].item.coliSeta_23.fadein(600);
    }, 4400);

    // Eventos que acontecem apos 4.8 segundos do clique
    setTimeout(function() {
      scene[0].item.coliEncistamento.enable();
      scene[0].item.coliEncistamento.fadein(600);
    }, 4800);

    // Eventos que acontecem apos 5.2 segundos do clique
    setTimeout(function() {
      scene[0].item.coliSeta_34.enable();
      scene[0].item.coliSeta_34.fadein(600);
    }, 5200);

    // Eventos que acontecem apos 5.6 segundos do clique
    setTimeout(function() {
      scene[0].item.coliFezes.enable();
      scene[0].item.coliFezes.fadein(600);
    }, 5600);

    // Eventos que acontecem apos 6.0 segundos do clique
    setTimeout(function() {
      scene[0].item.coliSeta_45.enable();
      scene[0].item.coliSeta_45.fadein(600);
    }, 6000);

    // Eventos que acontecem apos 6.4 segundos do clique
    setTimeout(function() {
      scene[0].item.coliMosca.enable();
      scene[0].item.coliMosca.fadein(600);
    }, 6400);

    // Eventos que acontecem apos 6.8 segundos do clique
    setTimeout(function() {
      scene[0].item.coliBotaoFechar.enable();
      scene[0].item.coliBotaoFechar.fadein(600);
    }, 6800);

    // Eventos que acontecem apos 7.6 segundos do clique
    setTimeout(function() {
      enableInteractiveness();
    }, 7600);
  }

  // Adiciona a imagem do sistema digestivo - Ciclo Entamoeba Coli
  scene[0].item["sistemaDigestivo"] = new Game.Item("sistemaDigestivo.png");
  scene[0].item.sistemaDigestivo.setPosition(960, 550);
  scene[0].item.sistemaDigestivo.setScale(1.3);
  scene[0].item.sistemaDigestivo.setZorder(5);
  scene[0].item.sistemaDigestivo.setInteractive(false);
  scene[0].item.sistemaDigestivo.setAlpha(0);
  scene[0].item.sistemaDigestivo.disable();

  // Adiciona a primeira imagem do ciclo Entamoeba Coli
  scene[0].item["bananaInfectada"] = new Game.Item("temp.jpg");
  scene[0].item.bananaInfectada.setPosition(335, 255);
  scene[0].item.bananaInfectada.setZorder(5);
  scene[0].item.bananaInfectada.setAlpha(0);
  scene[0].item.bananaInfectada.disable();

  scene[0].item["coliSeta_12"] = new Game.Item("seta.png");
  scene[0].item.coliSeta_12.setPosition(337, 514);
  scene[0].item.coliSeta_12.setRotation(270);
  scene[0].item.coliSeta_12.setScale(0.5);
  scene[0].item.coliSeta_12.setZorder(4);
  scene[0].item.coliSeta_12.setAlpha(0);
  scene[0].item.coliSeta_12.disable();

  // Adiciona a segunda imagem do ciclo Entamoeba Coli
  scene[0].item["coliDesencistamento"] = new Game.Item("temp.jpg");
  scene[0].item.coliDesencistamento.setPosition(335, 770);
  scene[0].item.coliDesencistamento.setZorder(5);
  scene[0].item.coliDesencistamento.setAlpha(0);
  scene[0].item.coliDesencistamento.disable();

  scene[0].item["coliSeta_23"] = new Game.Item("seta.png");
  scene[0].item.coliSeta_23.setPosition(960, 760);
  scene[0].item.coliSeta_23.setRotation(45);
  scene[0].item.coliSeta_23.setScale(0.3);
  scene[0].item.coliSeta_23.setZorder(4);
  scene[0].item.coliSeta_23.setAlpha(0);
  scene[0].item.coliSeta_23.disable();

  // Adiciona a terceira imagem do ciclo Entamoeba Coli
  scene[0].item["coliEncistamento"] = new Game.Item("temp.jpg");
  scene[0].item.coliEncistamento.setPosition(1520, 200);
  scene[0].item.coliEncistamento.setScale(0.8);
  scene[0].item.coliEncistamento.setZorder(5);
  scene[0].item.coliEncistamento.setAlpha(0);
  scene[0].item.coliEncistamento.disable();

  scene[0].item["coliSeta_34"] = new Game.Item("seta.png");
  scene[0].item.coliSeta_34.setPosition(1520, 382);
  scene[0].item.coliSeta_34.setRotation(270);
  scene[0].item.coliSeta_34.setScale(0.4);
  scene[0].item.coliSeta_34.setZorder(4);
  scene[0].item.coliSeta_34.setAlpha(0);
  scene[0].item.coliSeta_34.disable();

  // Adiciona a quarta imagem do ciclo Entamoeba Coli
  scene[0].item["coliFezes"] = new Game.Item("fezes.png");
  scene[0].item.coliFezes.setPosition(1520, 540);
  scene[0].item.coliFezes.setScale(0.8);
  scene[0].item.coliFezes.setZorder(5);
  scene[0].item.coliFezes.setAlpha(0);
  scene[0].item.coliFezes.disable();

  scene[0].item["coliSeta_45"] = new Game.Item("seta.png");
  scene[0].item.coliSeta_45.setPosition(1520, 706);
  scene[0].item.coliSeta_45.setRotation(270);
  scene[0].item.coliSeta_45.setScale(0.4);
  scene[0].item.coliSeta_45.setZorder(4);
  scene[0].item.coliSeta_45.setAlpha(0);
  scene[0].item.coliSeta_45.disable();

  // Adiciona a quinta imagem do ciclo Entamoeba Coli
  scene[0].item["coliMosca"] = new Game.Item("temp.jpg");
  scene[0].item.coliMosca.setPosition(1520, 880);
  scene[0].item.coliMosca.setScale(0.8);
  scene[0].item.coliMosca.setZorder(5);
  scene[0].item.coliMosca.setAlpha(0);
  scene[0].item.coliMosca.disable();

  scene[0].item["coliBotaoFechar"] = new Game.Item("botaoFechar.png");
  scene[0].item.coliBotaoFechar.setPosition(1850, 78);
  scene[0].item.coliBotaoFechar.setAlpha(0);
  scene[0].item.coliBotaoFechar.disable();
}
