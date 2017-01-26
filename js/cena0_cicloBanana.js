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
  item.coliBotaoFechar.onMouseOver = function() {
    item.coliBotaoFechar.addGlow();
  }
  item.coliBotaoFechar.onMouseOut = function() {
    item.coliBotaoFechar.removeGlow();
  }
  item.coliBotaoFechar.click = function(mouse) {
    // Fadeout em todas as imagens do ciclo
    item.sistemaDigestivo.fadeout(600);
    item.bananaInfectada.fadeout(600);
    item.coliSeta_12.fadeout(600);
    item.coliDesencistamento.fadeout(600);
    item.coliSeta_23.fadeout(600);
    item.coliEncistamento.fadeout(600);
    item.coliSeta_34.fadeout(600);
    item.coliFezes.fadeout(600);
    item.coliSeta_45.fadeout(600);
    item.coliMosca.fadeout(600);
    item.coliBotaoFechar.fadeout(600);

    // Eventos que acontecem apos 0.8 segundos do clique
    setTimeout(function() {
      // Desabilita todos os itens do ciclo
      item.sistemaDigestivo.disable();
      item.bananaInfectada.disable();
      item.coliSeta_12.disable();
      item.coliDesencistamento.disable();
      item.coliSeta_23.disable();
      item.coliEncistamento.disable();
      item.coliSeta_34.disable();
      item.coliFezes.disable();
      item.coliSeta_45.disable();
      item.coliMosca.disable();
      item.coliBotaoFechar.disable();

      // Mostra o estudante doente
      item.estudanteDoente.enable();
      item.estudanteDoente.fadein(600);

      // Mostra o balao e as informacoes
      item.balaoSobreColi.enable();
      item.balaoSobreColi.fadein(600);

      item.balaoAbaSintomas.enable();
      item.balaoAbaSintomas.fadein(600);

      item.balaoAbaSintomasTexto.enable();
      item.balaoAbaSintomasTexto.fadein(600);

      item.balaoAbaTratamento.enable();
      item.balaoAbaTratamento.fadein(600);

      item.balaoAbaTratamentoTexto.enable();
      item.balaoAbaTratamentoTexto.fadein(600);

      item.balaoAbaTransmissao.enable();
      item.balaoAbaTransmissao.fadein(600);

      item.balaoAbaTransmissaoTexto.enable();
      item.balaoAbaTransmissaoTexto.fadein(600);

      item.balaoDescricaoSintomas.enable();
      item.balaoDescricaoSintomas.fadein(600);

      item.botaoFinalizar.enable();
      item.botaoFinalizar.fadein(600);

      item.botaoFinalizarTexto.enable();
      item.botaoFinalizarTexto.fadein(600);
    }, 800);
  }

  item["estudanteDoente"] = new Game.Item("estudanteDoente.png");
  item.estudanteDoente.setPosition(600, 660);
  item.estudanteDoente.setZorder(11);
  item.estudanteDoente.setScale(1.3);
  item.estudanteDoente.setAlpha(0);
  item.estudanteDoente.disable();

  item["balaoSobreColi"] = new Game.Item("balao.png");
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
  item.balaoAbaSintomas.click = function(mouse) {
    item.balaoDescricaoSintomas.enable();
    item.balaoDescricaoTratamento.disable();
    item.balaoDescricaoTransmissao.disable();
    UpdateScreen();
  }

  item["balaoAbaSintomasTexto"] = new Game.Text("Sintomas", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaSintomasTexto.setPosition(950, 80);
  item.balaoAbaSintomasTexto.setZorder(1);
  item.balaoAbaSintomasTexto.setAchor(0.5, 0.5);
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
  item.balaoAbaTratamento.click = function(mouse) {
    item.balaoDescricaoSintomas.disable();
    item.balaoDescricaoTratamento.enable();
    item.balaoDescricaoTransmissao.disable();
    UpdateScreen();
  }

  item["balaoAbaTratamentoTexto"] = new Game.Text("Tratamento", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaTratamentoTexto.setPosition(1270, 80);
  item.balaoAbaTratamentoTexto.setZorder(1);
  item.balaoAbaTratamentoTexto.setAchor(0.5, 0.5);
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
  item.balaoAbaTransmissao.click = function(mouse) {
    item.balaoDescricaoSintomas.disable();
    item.balaoDescricaoTratamento.disable();
    item.balaoDescricaoTransmissao.enable();
    UpdateScreen();
  }

  item["balaoAbaTransmissaoTexto"] = new Game.Text("Transmissão", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.balaoAbaTransmissaoTexto.setPosition(1590, 80);
  item.balaoAbaTransmissaoTexto.setZorder(1);
  item.balaoAbaTransmissaoTexto.setAchor(0.5, 0.5);
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
  item.botaoFinalizar.click = function(mouse) {
    // Oculta o estudante doente
    item.estudanteDoente.fadeout(600);
    // Oculta o balao e as informacoes
    item.balaoSobreColi.fadeout(600);
    item.balaoAbaSintomas.fadeout(600);
    item.balaoAbaSintomasTexto.fadeout(600);
    item.balaoAbaTratamento.fadeout(600);
    item.balaoAbaTratamentoTexto.fadeout(600);
    item.balaoAbaTransmissao.fadeout(600);
    item.balaoAbaTransmissaoTexto.fadeout(600);
    item.balaoDescricaoSintomas.fadeout(600);
    item.botaoFinalizar.fadeout(600);
    item.botaoFinalizarTexto.fadeout(600);

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

      // Volta a cena inicial
      item.estudanteBananaNormal.enable();
      item.estudanteBananaNormal.fadein(600);

      item.banana.enable();
      item.banana.fadein(600);

      item.setaJanela.enable();
      item.setaJanela.fadein(600);

      item.setaArmario.enable();
      item.setaArmario.fadein(600);

      item.carteiras.changeBrightness(255, 600);
      item.mesaProfessor.changeBrightness(255, 600);
      scene[0].background.changeBrightness(255, 600);
    }, 800);
  }

  item["botaoFinalizarTexto"] = new Game.Text("OK, entendi!", {font: "30px Arial", fill: 0x000000, align: "left"});
  item.botaoFinalizarTexto.setPosition(1600, 320);
  item.botaoFinalizarTexto.setZorder(1);
  item.botaoFinalizarTexto.setAchor(0.5, 0.5);
  item.botaoFinalizarTexto.setAlpha(0);
  item.botaoFinalizarTexto.disable();

}
