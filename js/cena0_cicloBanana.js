function carregaCicloBanana() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estudanteBananaNormal"] = new Game.Image("estudanteNormal.png");
  item.estudanteBananaNormal.setPosition(960, 655);
  item.estudanteBananaNormal.setZorder(11);

  // Adiconando a banana
  item["banana"] = new Game.Item("banana.png");
  item.banana.setPosition(980, 730);
  item.banana.setScale(0.2);
  item.banana.setZorder(9);
  item.banana.onMouseOver = function() {
    item.banana.addGlow();
    scene[0].setSubtitle("Entamoeba Coli");
  }
  item.banana.onMouseOut = function() {
    item.banana.removeGlow();
    scene[0].setSubtitle("");
  }
  item.banana.click = function(mouse) {
    // Eventos que acontecem imediatamente apos clicar na banana
    disableInteractiveness();
    item.banana.removeGlow();
    scene[0].background.changeBrightness(100, 600);
    item.carteiras.changeBrightness(100, 600);
    item.mesaProfessor.changeBrightness(100, 600);
    item.setaJanela.changeAlpha(0, 600);
    item.setaArmario.changeAlpha(0, 600);

    // Eventos que acontecem apos 0.8 segundos do clique
    setTimeout(function() {
      scene[0].setSubtitle("");
      item.setaJanela.disable();
      item.setaArmario.disable();
    }, 800);

    // Eventos que acontecem apos 1.6 segundos do clique
    setTimeout(function() {
      item.banana.changeAlpha(0, 600);
      item.estudanteBananaNormal.changeAlpha(0, 600);
    }, 1600);

    // Eventos que acontecem apos 2.4 segundos do clique
    setTimeout(function() {
      item.sistemaDigestivo.enable();
      item.sistemaDigestivo.changeAlpha(1, 600);
    }, 2400);

    // Eventos que acontecem apos 3.2 segundos do clique
    setTimeout(function() {
      item.estudanteBananaNormal.disable();
      item.bananaInfectada.enable();
      item.bananaInfectada.changeAlpha(1, 600);
      item.zoomBanana.enable();
      item.zoomBanana.changeAlpha(1, 600);
    }, 3200);

    // Eventos que acontecem apos 3.6 segundos do clique
    setTimeout(function() {
    }, 3600);

    // Eventos que acontecem apos 4 segundos do clique
    setTimeout(function() {
      item.coliDesencistamento.enable();
      item.coliDesencistamento.changeAlpha(1, 600);
    }, 4000);

    // Eventos que acontecem apos 4.4 segundos do clique
    setTimeout(function() {
    }, 4400);

    // Eventos que acontecem apos 4.8 segundos do clique
    setTimeout(function() {
      item.coliEncistamento.enable();
      item.coliEncistamento.changeAlpha(1, 600);
    }, 4800);

    // Eventos que acontecem apos 5.2 segundos do clique
    setTimeout(function() {
    }, 5200);

    // Eventos que acontecem apos 5.6 segundos do clique
    setTimeout(function() {
      item.coliFezes.enable();
      item.coliFezes.changeAlpha(1, 600);
    }, 5600);

    // Eventos que acontecem apos 6.0 segundos do clique
    setTimeout(function() {
    }, 6000);

    // Eventos que acontecem apos 6.4 segundos do clique
    setTimeout(function() {
      item.coliMosca.enable();
      item.coliMosca.changeAlpha(1, 600);
    }, 6400);

    // Eventos que acontecem apos 6.8 segundos do clique
    setTimeout(function() {
      item.coliBotaoFechar.enable();
      item.coliBotaoFechar.changeAlpha(1, 600);
    }, 6800);

    // Eventos que acontecem apos 7.6 segundos do clique
    setTimeout(function() {
      enableInteractiveness();
    }, 7600);
  }

  // Adiciona a imagem do sistema digestivo - Ciclo Entamoeba Coli
  item["sistemaDigestivo"] = new Game.Image("sistemaDigestivo.png");
  item.sistemaDigestivo.setPosition(960, 550);
  item.sistemaDigestivo.setScale(1.3);
  item.sistemaDigestivo.setZorder(6);
  item.sistemaDigestivo.setInteractive(false);
  item.sistemaDigestivo.setAlpha(0);
  item.sistemaDigestivo.disable();

  // Adiciona a primeira imagem do ciclo Entamoeba Coli
  item["bananaInfectada"] = new Game.Image("temp.jpg");
  item.bananaInfectada.setPosition(335, 255);
  item.bananaInfectada.setZorder(4);
  item.bananaInfectada.setAlpha(0);
  item.bananaInfectada.disable();

  item["zoomBanana"] = new Game.Line(355, 255, 1030, 280, 3);
  item.zoomBanana.setColor(0, 0, 0);
  item.zoomBanana.setZorder(5);
  item.zoomBanana.setAlpha(0);
  item.zoomBanana.disable();

  // Adiciona a segunda imagem do ciclo Entamoeba Coli
  item["coliDesencistamento"] = new Game.Image("temp.jpg");
  item.coliDesencistamento.setPosition(335, 770);
  item.coliDesencistamento.setZorder(4);
  item.coliDesencistamento.setAlpha(0);
  item.coliDesencistamento.disable();

  // Adiciona a terceira imagem do ciclo Entamoeba Coli
  item["coliEncistamento"] = new Game.Image("temp.jpg");
  item.coliEncistamento.setPosition(1520, 200);
  item.coliEncistamento.setScale(0.8);
  item.coliEncistamento.setZorder(4);
  item.coliEncistamento.setAlpha(0);
  item.coliEncistamento.disable();

  // Adiciona a quarta imagem do ciclo Entamoeba Coli
  item["coliFezes"] = new Game.Image("fezes.png");
  item.coliFezes.setPosition(1520, 540);
  item.coliFezes.setScale(0.8);
  item.coliFezes.setZorder(4);
  item.coliFezes.setAlpha(0);
  item.coliFezes.disable();

  // Adiciona a quinta imagem do ciclo Entamoeba Coli
  item["coliMosca"] = new Game.Image("temp.jpg");
  item.coliMosca.setPosition(1520, 880);
  item.coliMosca.setScale(0.8);
  item.coliMosca.setZorder(4);
  item.coliMosca.setAlpha(0);
  item.coliMosca.disable();

  item["coliBotaoFechar"] = new Game.Item("botaoFechar.png");
  item.coliBotaoFechar.setPosition(1850, 78);
  item.coliBotaoFechar.setAlpha(0);
  item.coliBotaoFechar.disable();
  item.coliBotaoFechar.setInteractive(true);
  item.coliBotaoFechar.onMouseOver = function() {
    item.coliBotaoFechar.addGlow();
  }
  item.coliBotaoFechar.onMouseOut = function() {
    item.coliBotaoFechar.removeGlow();
  }
  item.coliBotaoFechar.click = function(mouse) {
    disableInteractiveness();

    // Fadeout em todas as imagens do ciclo
    item.sistemaDigestivo.changeAlpha(0, 600);
    item.bananaInfectada.changeAlpha(0, 600);
    item.zoomBanana.changeAlpha(0, 600);
    item.coliDesencistamento.changeAlpha(0, 600);
    item.coliEncistamento.changeAlpha(0, 600);
    item.coliFezes.changeAlpha(0, 600);
    item.coliMosca.changeAlpha(0, 600);
    item.coliBotaoFechar.changeAlpha(0, 600);

    // Eventos que acontecem apos 0.8 segundos do clique
    setTimeout(function() {
      // Desabilita todos os itens do ciclo
      item.sistemaDigestivo.disable();
      item.bananaInfectada.disable();
      item.zoomBanana.enable();
      item.coliDesencistamento.disable();
      item.coliEncistamento.disable();
      item.coliFezes.disable();
      item.coliMosca.disable();
      item.coliBotaoFechar.disable();

      // Mostra o estudante doente
      item.estudanteDoente.enable();
      item.estudanteDoente.changeAlpha(1, 600);

      // Mostra o balao e as informacoes
      item.balaoSobreColi.enable();
      item.balaoSobreColi.changeAlpha(1, 600);

      item.balaoAbaSintomas.enable();
      item.balaoAbaSintomas.changeAlpha(1, 600);

      item.balaoAbaSintomasTexto.enable();
      item.balaoAbaSintomasTexto.changeAlpha(1, 600);

      item.balaoAbaTratamento.enable();
      item.balaoAbaTratamento.changeAlpha(1, 600);

      item.balaoAbaTratamentoTexto.enable();
      item.balaoAbaTratamentoTexto.changeAlpha(1, 600);

      item.balaoAbaTransmissao.enable();
      item.balaoAbaTransmissao.changeAlpha(1, 600);

      item.balaoAbaTransmissaoTexto.enable();
      item.balaoAbaTransmissaoTexto.changeAlpha(1, 600);

      item.balaoDescricaoSintomas.enable();
      item.balaoDescricaoSintomas.changeAlpha(1, 600);

      item.botaoFinalizar.enable();
      item.botaoFinalizar.changeAlpha(1, 600);

      item.botaoFinalizarTexto.enable();
      item.botaoFinalizarTexto.changeAlpha(1, 600);
    }, 800);

    setTimeout(function() {
      enableInteractiveness();
    }, 1600);
  }

  item["estudanteDoente"] = new Game.Image("estudanteDoente.png");
  item.estudanteDoente.setPosition(600, 660);
  item.estudanteDoente.setZorder(11);
  item.estudanteDoente.setScale(1.3);
  item.estudanteDoente.setAlpha(0);
  item.estudanteDoente.disable();

  item["balaoSobreColi"] = new Game.Image("balao.png");
  item.balaoSobreColi.setPosition(1270, 260);
  item.balaoSobreColi.setZorder(3);
  item.balaoSobreColi.setScale(1.4);
  item.balaoSobreColi.setAlpha(0);
  item.balaoSobreColi.disable();

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

  item["balaoAbaSintomasTexto"] = new Game.Text("Sintomas", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaSintomasTexto.setPosition(950, 80);
  item.balaoAbaSintomasTexto.setZorder(1);
  item.balaoAbaSintomasTexto.setAnchor(0.5, 0.5);
  item.balaoAbaSintomasTexto.setAlpha(0);
  item.balaoAbaSintomasTexto.disable();

  item["balaoDescricaoSintomas"] = new Game.Text("Descrição sintomas ...", {font: "32px Arial", fill: 0x000000, align: "left"});
  item.balaoDescricaoSintomas.setPosition(810, 140);
  item.balaoDescricaoSintomas.setZorder(1);
  item.balaoDescricaoSintomas.setAlpha(0);
  item.balaoDescricaoSintomas.disable();

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

  item["balaoAbaTratamentoTexto"] = new Game.Text("Tratamento", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaTratamentoTexto.setPosition(1270, 80);
  item.balaoAbaTratamentoTexto.setZorder(1);
  item.balaoAbaTratamentoTexto.setAnchor(0.5, 0.5);
  item.balaoAbaTratamentoTexto.setAlpha(0);
  item.balaoAbaTratamentoTexto.disable();

  item["balaoDescricaoTratamento"] = new Game.Text("Descrição tratamento ...", {font: "32px Arial", fill: 0x000000, align: "left"});
  item.balaoDescricaoTratamento.setPosition(810, 140);
  item.balaoDescricaoTratamento.setZorder(1);
  item.balaoDescricaoTratamento.disable();

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

  item["balaoAbaTransmissaoTexto"] = new Game.Text("Transmissão", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaTransmissaoTexto.setPosition(1590, 80);
  item.balaoAbaTransmissaoTexto.setZorder(1);
  item.balaoAbaTransmissaoTexto.setAnchor(0.5, 0.5);
  item.balaoAbaTransmissaoTexto.setAlpha(0);
  item.balaoAbaTransmissaoTexto.disable();

  item["balaoDescricaoTransmissao"] = new Game.Text("Descrição transmissão ...", {font: "32px Arial", fill: 0x000000, align: "left"});
  item.balaoDescricaoTransmissao.setPosition(810, 140);
  item.balaoDescricaoTransmissao.setZorder(1);
  item.balaoDescricaoTransmissao.disable();

  // Botao OK, entendi
  item["botaoFinalizar"] = new Game.Item("abaDoBalao.png");
  item.botaoFinalizar.setPosition(1600, 320);
  item.botaoFinalizar.setZorder(2);
  item.botaoFinalizar.setScale(1.3);
  item.botaoFinalizar.setAlpha(0);
  item.botaoFinalizar.disable();
  item.botaoFinalizar.setInteractive(true);
  item.botaoFinalizar.click = function(mouse) {
    disableInteractiveness();

    // Oculta o estudante doente
    item.estudanteDoente.changeAlpha(0, 600);
    // Oculta o balao e as informacoes
    item.balaoSobreColi.changeAlpha(0, 600);
    item.balaoAbaSintomas.changeAlpha(0, 600);
    item.balaoAbaSintomasTexto.changeAlpha(0, 600);
    item.balaoAbaTratamento.changeAlpha(0, 600);
    item.balaoAbaTratamentoTexto.changeAlpha(0, 600);
    item.balaoAbaTransmissao.changeAlpha(0, 600);
    item.balaoAbaTransmissaoTexto.changeAlpha(0, 600);
    item.balaoDescricaoSintomas.changeAlpha(0, 600);
    item.botaoFinalizar.changeAlpha(0, 600);
    item.botaoFinalizarTexto.changeAlpha(0, 600);
    item.balaoDescricaoSintomas.changeAlpha(0, 600);
    item.balaoDescricaoTratamento.changeAlpha(0, 600);
    item.balaoDescricaoTransmissao.changeAlpha(0, 600);

    setTimeout(function() {
      // Desabilita as imagens que desapareceram
      item.estudanteDoente.disable();
      item.balaoSobreColi.disable();
      item.balaoAbaSintomas.disable();
      item.balaoAbaSintomasTexto.disable();
      item.balaoAbaTratamento.disable();
      item.balaoAbaTratamentoTexto.disable();
      item.balaoAbaTransmissao.disable();
      item.balaoAbaTransmissaoTexto.disable();
      item.balaoDescricaoSintomas.disable();
      item.botaoFinalizar.disable();
      item.botaoFinalizarTexto.disable();

      item.balaoDescricaoSintomas.disable();
      item.balaoDescricaoTratamento.disable();
      item.balaoDescricaoTransmissao.disable();

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
    }, 800);

    setTimeout(function() {
      enableInteractiveness();
    }, 1600);
  }

  item["botaoFinalizarTexto"] = new Game.Text("OK, entendi!", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.botaoFinalizarTexto.setPosition(1600, 320);
  item.botaoFinalizarTexto.setZorder(1);
  item.botaoFinalizarTexto.setAnchor(0.5, 0.5);
  item.botaoFinalizarTexto.setAlpha(0);
  item.botaoFinalizarTexto.disable();

}
