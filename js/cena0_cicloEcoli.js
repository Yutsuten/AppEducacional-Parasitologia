function carregaCicloEcoli() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estBananaNormal"] = new Game.Item("estHprdSdv.png");
  item.estBananaNormal.setPosition(1220, 630);
  item.estBananaNormal.setZorder(11);
  item.estBananaNormal.setBrightness(210);
  item.estBananaNormal.onMouseOver = function() {
    item.estBananaNormal.setBrightness(255);
    scene[0].setSubtitle("Amebíase");
  }
  item.estBananaNormal.onMouseOut = function() {
    item.estBananaNormal.setBrightness(210);
    scene[0].setSubtitle("");
  }
  item.estBananaNormal.click = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 700; // Intervalo entre cada animacao

    // Fadeout unrelated images
    item.estBananaNormal.removeGlow();
    scene[0].background.changeBrightness(100, 600);
    item.carteiras.changeBrightness(100, 600);
    item.mesaProfessor.changeBrightness(100, 600);
    item.estTomateNormal.changeBrightness(100, 600);
    item.estPernNormal.changeBrightness(100, 600);
    item.estGatoNormal.changeBrightness(100, 600);
    item.setaJanela.changeAlpha(0, 600);
    item.setaArmario.changeAlpha(0, 600);

    setTimeout(function() {
      scene[0].setSubtitle("");
      item.setaJanela.disable();
      item.setaArmario.disable();
      item.estTomateNormal.setInteractive(false);
      item.estPernNormal.setInteractive(false);
      item.estGatoNormal.setInteractive(false);
    }, currentTime += animationInterval);

    setTimeout(function() {
      scene[0].setSubtitle("");
      item.estBananaNormal.changeBrightness(100, 600);
    }, currentTime += animationInterval);
  }

  /*
  item.banana.click = function(mouse) {

    // Eventos que acontecem apos o intervalo estipulado
    setTimeout(function() {
      item.estudanteBananaNormal.disable();
      item.banana.disable();
      item.sistemaDigestivo.enable();
      item.sistemaDigestivo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    // Eventos que acontecem apos o intervalo estipulado
    setTimeout(function() {
      item.bananaInfectada.enable();
      item.bananaInfectada.changeAlpha(1, 600);
      item.zoomBanana.enable();
      item.zoomBanana.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    // Eventos que acontecem apos o intervalo estipulado
    setTimeout(function() {
      item.coliDesencistamento.enable();
      item.coliDesencistamento.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    // Eventos que acontecem apos o intervalo estipulado
    setTimeout(function() {
      item.coliEncistamento.enable();
      item.coliEncistamento.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    // Eventos que acontecem apos o intervalo estipulado
    setTimeout(function() {
      item.coliFezes.enable();
      item.coliFezes.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    // Eventos que acontecem apos o intervalo estipulado
    setTimeout(function() {
      item.coliMosca.enable();
      item.coliMosca.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    // Eventos que acontecem apos o intervalo estipulado
    setTimeout(function() {
      item.coliBotaoFechar.enable();
      item.coliBotaoFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    // Eventos que acontecem apos o intervalo estipulado
    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensCiclo = [];

  // Adiciona a imagem do sistema digestivo - Ciclo Entamoeba Coli
  item["sistemaDigestivo"] = new Game.Image("sistemaDigestivo.png");
  item.sistemaDigestivo.setPosition(960, 550);
  item.sistemaDigestivo.setScale(1.3);
  item.sistemaDigestivo.setZorder(6);
  item.sistemaDigestivo.setInteractive(false);
  item.sistemaDigestivo.setAlpha(0);
  item.sistemaDigestivo.disable();
  itensCiclo.push(item.sistemaDigestivo);

  // Adiciona a primeira imagem do ciclo Entamoeba Coli
  item["bananaInfectada"] = new Game.Image("temp.jpg");
  item.bananaInfectada.setPosition(335, 255);
  item.bananaInfectada.setZorder(4);
  item.bananaInfectada.setAlpha(0);
  item.bananaInfectada.disable();
  itensCiclo.push(item.bananaInfectada);

  item["zoomBanana"] = new Game.Line(355, 255, 1030, 280, 3);
  item.zoomBanana.setColor(0, 0, 0);
  item.zoomBanana.setZorder(5);
  item.zoomBanana.addArrowAtEnd();
  item.zoomBanana.setAlpha(0);
  item.zoomBanana.disable();
  itensCiclo.push(item.zoomBanana);

  // Adiciona a segunda imagem do ciclo Entamoeba Coli
  item["coliDesencistamento"] = new Game.Image("entamoebaCisto.png");
  item.coliDesencistamento.setPosition(335, 770);
  item.coliDesencistamento.setZorder(4);
  item.coliDesencistamento.setAlpha(0);
  item.coliDesencistamento.disable();
  itensCiclo.push(item.coliDesencistamento);

  // Adiciona a terceira imagem do ciclo Entamoeba Coli
  item["coliEncistamento"] = new Game.Image("entamoebaTrofozoito.png");
  item.coliEncistamento.setPosition(1520, 200);
  item.coliEncistamento.setScale(0.8);
  item.coliEncistamento.setZorder(4);
  item.coliEncistamento.setAlpha(0);
  item.coliEncistamento.disable();
  itensCiclo.push(item.coliEncistamento);

  // Adiciona a quarta imagem do ciclo Entamoeba Coli
  item["coliFezes"] = new Game.Image("fezes.png");
  item.coliFezes.setPosition(1520, 540);
  item.coliFezes.setScale(0.8);
  item.coliFezes.setZorder(4);
  item.coliFezes.setAlpha(0);
  item.coliFezes.disable();
  itensCiclo.push(item.coliFezes);

  // Adiciona a quinta imagem do ciclo Entamoeba Coli
  item["coliMosca"] = new Game.Image("temp.jpg");
  item.coliMosca.setPosition(1520, 880);
  item.coliMosca.setScale(0.8);
  item.coliMosca.setZorder(4);
  item.coliMosca.setAlpha(0);
  item.coliMosca.disable();
  itensCiclo.push(item.coliMosca);

  item["coliBotaoFechar"] = new Game.Item("botaoFechar.png");
  item.coliBotaoFechar.setPosition(1850, 78);
  item.coliBotaoFechar.setAlpha(0);
  item.coliBotaoFechar.disable();
  itensCiclo.push(item.coliBotaoFechar);
  item.coliBotaoFechar.onMouseOver = function() {
    item.coliBotaoFechar.addGlow();
  }
  item.coliBotaoFechar.onMouseOut = function() {
    item.coliBotaoFechar.removeGlow();
  }
  item.coliBotaoFechar.click = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 700; // Intervalo entre cada animacao

    // Fadeout em todas as imagens do ciclo
    groupChangeAlpha(itensCiclo, 0, 600);

    // Eventos que acontecem apos 0.8 segundos do clique
    setTimeout(function() {
      // Desabilita todos os itens do ciclo
      groupDisable(itensCiclo);

      // Mostra o estudante doente
      // Mostra o balao e as informacoes
      groupEnable(itensSobreDoenca);
      groupChangeAlpha(itensSobreDoenca, 1, 600);
      item.balaoDescricaoTratamento.disable();
      item.balaoDescricaoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensSobreDoenca = [];

  item["estudanteDoente"] = new Game.Image("estudanteDoente.png");
  item.estudanteDoente.setPosition(600, 660);
  item.estudanteDoente.setZorder(11);
  item.estudanteDoente.setScale(1.3);
  item.estudanteDoente.setAlpha(0);
  item.estudanteDoente.disable();
  itensSobreDoenca.push(item.estudanteDoente);

  item["balaoSobreColi"] = new Game.Image("balao.png");
  item.balaoSobreColi.setPosition(1270, 260);
  item.balaoSobreColi.setZorder(3);
  item.balaoSobreColi.setScale(1.4);
  item.balaoSobreColi.setAlpha(0);
  item.balaoSobreColi.disable();
  itensSobreDoenca.push(item.balaoSobreColi);

  // Aba Sintomas
  item["balaoAbaSintomas"] = new Game.Item("abaDoBalao.png");
  item.balaoAbaSintomas.setPosition(950, 80);
  item.balaoAbaSintomas.setZorder(2);
  item.balaoAbaSintomas.setScale(1.3);
  item.balaoAbaSintomas.setAlpha(0);
  item.balaoAbaSintomas.disable();
  item.balaoAbaSintomas.setInteractive(true);
  item.balaoAbaSintomas.click = function(mouse) {
    item.balaoDescricaoTratamento.disable();
    item.balaoDescricaoTransmissao.disable();
    item.balaoDescricaoSintomas.enable();
    UpdateScreen();
  }
  itensSobreDoenca.push(item.balaoAbaSintomas);

  item["balaoAbaSintomasTexto"] = new Game.Text("Sintomas", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaSintomasTexto.setPosition(950, 80);
  item.balaoAbaSintomasTexto.setZorder(1);
  item.balaoAbaSintomasTexto.setAnchor(0.5, 0.5);
  item.balaoAbaSintomasTexto.setAlpha(0);
  item.balaoAbaSintomasTexto.disable();
  itensSobreDoenca.push(item.balaoAbaSintomasTexto);

  item["balaoDescricaoSintomas"] = new Game.Text("Descrição sintomas ...", {font: "32px Arial", fill: 0x000000, align: "left"});
  item.balaoDescricaoSintomas.setPosition(810, 140);
  item.balaoDescricaoSintomas.setZorder(1);
  item.balaoDescricaoSintomas.setAlpha(0);
  item.balaoDescricaoSintomas.disable();
  itensSobreDoenca.push(item.balaoDescricaoSintomas);

  // Aba Tratamento
  item["balaoAbaTratamento"] = new Game.Item("abaDoBalao.png");
  item.balaoAbaTratamento.setPosition(1270, 80);
  item.balaoAbaTratamento.setZorder(2);
  item.balaoAbaTratamento.setScale(1.3);
  item.balaoAbaTratamento.setAlpha(0);
  item.balaoAbaTratamento.disable();
  item.balaoAbaTratamento.setInteractive(true);
  item.balaoAbaTratamento.click = function(mouse) {
    item.balaoDescricaoSintomas.disable();
    item.balaoDescricaoTransmissao.disable();
    item.balaoDescricaoTratamento.enable();
    UpdateScreen();
  }
  itensSobreDoenca.push(item.balaoAbaTratamento);

  item["balaoAbaTratamentoTexto"] = new Game.Text("Tratamento", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaTratamentoTexto.setPosition(1270, 80);
  item.balaoAbaTratamentoTexto.setZorder(1);
  item.balaoAbaTratamentoTexto.setAnchor(0.5, 0.5);
  item.balaoAbaTratamentoTexto.setAlpha(0);
  item.balaoAbaTratamentoTexto.disable();
  itensSobreDoenca.push(item.balaoAbaTratamentoTexto);

  item["balaoDescricaoTratamento"] = new Game.Text("Descrição tratamento ...", {font: "32px Arial", fill: 0x000000, align: "left"});
  item.balaoDescricaoTratamento.setPosition(810, 140);
  item.balaoDescricaoTratamento.setZorder(1);
  item.balaoDescricaoTratamento.disable();
  itensSobreDoenca.push(item.balaoDescricaoTratamento);

  // Aba Transmissao
  item["balaoAbaTransmissao"] = new Game.Item("abaDoBalao.png");
  item.balaoAbaTransmissao.setPosition(1590, 80);
  item.balaoAbaTransmissao.setZorder(2);
  item.balaoAbaTransmissao.setScale(1.3);
  item.balaoAbaTransmissao.setAlpha(0);
  item.balaoAbaTransmissao.disable();
  item.balaoAbaTransmissao.setInteractive(true);
  item.balaoAbaTransmissao.click = function(mouse) {
    item.balaoDescricaoSintomas.disable();
    item.balaoDescricaoTratamento.disable();
    item.balaoDescricaoTransmissao.enable();
    UpdateScreen();
  }
  itensSobreDoenca.push(item.balaoAbaTransmissao);

  item["balaoAbaTransmissaoTexto"] = new Game.Text("Transmissão", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaTransmissaoTexto.setPosition(1590, 80);
  item.balaoAbaTransmissaoTexto.setZorder(1);
  item.balaoAbaTransmissaoTexto.setAnchor(0.5, 0.5);
  item.balaoAbaTransmissaoTexto.setAlpha(0);
  item.balaoAbaTransmissaoTexto.disable();
  itensSobreDoenca.push(item.balaoAbaTransmissaoTexto);

  item["balaoDescricaoTransmissao"] = new Game.Text("Descrição transmissão ...", {font: "32px Arial", fill: 0x000000, align: "left"});
  item.balaoDescricaoTransmissao.setPosition(810, 140);
  item.balaoDescricaoTransmissao.setZorder(1);
  item.balaoDescricaoTransmissao.disable();
  itensSobreDoenca.push(item.balaoDescricaoTransmissao);

  // Botao OK, entendi
  item["botaoFinalizar"] = new Game.Item("abaDoBalao.png");
  item.botaoFinalizar.setPosition(1600, 320);
  item.botaoFinalizar.setZorder(2);
  item.botaoFinalizar.setScale(1.3);
  item.botaoFinalizar.setAlpha(0);
  item.botaoFinalizar.disable();
  item.botaoFinalizar.click = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 700; // Intervalo entre cada animacao

    // Oculta o estudante doente
    // Oculta o balao e as informacoes
    groupChangeAlpha(itensSobreDoenca, 0, 600);

    setTimeout(function() {
      // Desabilita as imagens que desapareceram
      groupDisable(itensSobreDoenca);

      // Volta a cena inicial
      item.estudanteBananaNormal.enable();
      item.estudanteBananaNormal.changeAlpha(1, 600);

      item.banana.enable();
      item.banana.changeAlpha(1, 600);

      item.setaJanela.enable();
      item.setaJanela.changeAlpha(1, 600);

      item.setaArmario.enable();
      item.setaArmario.changeAlpha(1, 600);

      item.carteiras.changeBrightness(255, 600);
      item.mesaProfessor.changeBrightness(255, 600);
      scene[0].background.changeBrightness(255, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensSobreDoenca.push(item.botaoFinalizar);

  item["botaoFinalizarTexto"] = new Game.Text("OK, entendi!", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.botaoFinalizarTexto.setPosition(1600, 320);
  item.botaoFinalizarTexto.setZorder(1);
  item.botaoFinalizarTexto.setAnchor(0.5, 0.5);
  item.botaoFinalizarTexto.setAlpha(0);
  item.botaoFinalizarTexto.disable();
  itensSobreDoenca.push(item.botaoFinalizarTexto);*/

}
