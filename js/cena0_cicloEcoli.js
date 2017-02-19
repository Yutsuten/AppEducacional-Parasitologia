var estiloNumeros = {
  fontFamily: "CircleCaps",
  dropShadow: true,
  dropShadowBlur: 10,
  fill: 0xFFFFFF,
  fontSize: "200px"
}

function carregaCicloEcoli() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estBananaNormal"] = new Game.Item("estHprdSdv.png");
  item.estBananaNormal.setPosition(1220, 630);
  item.estBananaNormal.setZorder(11);
  item.estBananaNormal.setBrightness(220);
  item.estBananaNormal.onMouseOver = function() {
    item.estBananaNormal.setBrightness(255);
    scene[0].setSubtitle("Amebíase");
  }
  item.estBananaNormal.onMouseOut = function() {
    item.estBananaNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estBananaNormal.onClick = function() {
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
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estBananaNormal.changeBrightness(100, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {

    }, currentTime += animationInterval);
  }

  var itensCiclo = [];

  // Imagens ciclo
  item["estBananaCiclo"] = new Game.Image("estHprdClo.png");
  item.estBananaCiclo.setPosition(960, 550);
  item.estBananaCiclo.setScale(0.5);
  item.estBananaCiclo.setZorder(9);
  //item.estBananaCiclo.setAlpha(0);
  //item.estBananaCiclo.disable();
  itensCiclo.push(item.estBananaCiclo);

  item["bananaElem1"] = new Game.Image("entamoebaCisto.png");
  item.bananaElem1.setPosition(485, 300);
  item.bananaElem1.setScale(0.7);
  item.bananaElem1.setZorder(6);
  //item.bananaElem1.setAlpha(0);
  //item.bananaElem1.disable();
  itensCiclo.push(item.bananaElem1);

  item["bananaNum1"] = new Game.Text("1", estiloNumeros);
  item.bananaNum1.setAnchor(0.5, 0.6);
  item.bananaNum1.setPosition(650, 140);
  itensCiclo.push(item.bananaNum1);

  item["bananaSetaElem1Est"] = new Game.Line(485, 300, 915, 500, 4);
  item.bananaSetaElem1Est.setColor(0, 0, 0);
  item.bananaSetaElem1Est.setZorder(7);
  itensCiclo.push(item.bananaSetaElem1Est);

  item["bananaElem2a"] = new Game.Image("entamoebaCisto.png");
  item.bananaElem2a.setPosition(200, 750);
  item.bananaElem2a.setScale(0.4);
  item.bananaElem2a.setZorder(6);
  //item.bananaElem2a.setAlpha(0);
  //item.bananaElem2a.disable();
  itensCiclo.push(item.bananaElem2a);

  item["bananaNum2"] = new Game.Text("2", estiloNumeros);
  item.bananaNum2.setAnchor(0.5, 0.6);
  item.bananaNum2.setPosition(350, 700);
  itensCiclo.push(item.bananaNum2);

  item["bananaSetaElem2aElem2b"] = new Game.Line(200, 750, 380, 750, 4);
  item.bananaSetaElem2aElem2b.setColor(0, 0, 0);
  item.bananaSetaElem2aElem2b.addArrowAtEnd();
  item.bananaSetaElem2aElem2b.setZorder(7);
  itensCiclo.push(item.bananaSetaElem2aElem2b);

  item["bananaElem2b"] = new Game.Image("entamoebaTrofozoito.png");
  item.bananaElem2b.setPosition(537, 750);
  item.bananaElem2b.setScale(0.53);
  item.bananaElem2b.setZorder(6);
  //item.bananaElem2b.setAlpha(0);
  //item.bananaElem2b.disable();
  itensCiclo.push(item.bananaElem2b);

  item["bananaSetaElem2bEst"] = new Game.Line(537, 750, 920, 800, 4);
  item.bananaSetaElem2bEst.setColor(0, 0, 0);
  item.bananaSetaElem2bEst.setZorder(7);
  itensCiclo.push(item.bananaSetaElem2bEst);

  item["bananaSetaEstElem3a"] = new Game.Line(1000, 780, 1330, 250, 4);
  item.bananaSetaEstElem3a.setColor(0, 0, 0);
  item.bananaSetaEstElem3a.setZorder(7);
  itensCiclo.push(item.bananaSetaEstElem3a);

  item["bananaElem3a"] = new Game.Image("entamoebaTrofozoito.png");
  item.bananaElem3a.setPosition(1330, 250);
  item.bananaElem3a.setScale(0.42);
  item.bananaElem3a.setZorder(6);
  //item.bananaElem3a.setAlpha(0);
  //item.bananaElem3a.disable();
  itensCiclo.push(item.bananaElem3a);

  item["bananaNum3"] = new Game.Text("3", estiloNumeros);
  item.bananaNum3.setAnchor(0.5, 0.6);
  item.bananaNum3.setPosition(1480, 200);
  itensCiclo.push(item.bananaNum3);

  item["bananaSetaElem3aElem3b"] = new Game.Line(1330, 250, 1510, 250, 4);
  item.bananaSetaElem3aElem3b.setColor(0, 0, 0);
  item.bananaSetaElem3aElem3b.addArrowAtEnd();
  item.bananaSetaElem3aElem3b.setZorder(7);
  itensCiclo.push(item.bananaSetaElem3aElem3b);

  item["bananaElem3b"] = new Game.Image("entamoebaCisto.png");
  item.bananaElem3b.setPosition(1670, 250);
  item.bananaElem3b.setScale(0.55);
  item.bananaElem3b.setZorder(6);
  //item.bananaElem3b.setAlpha(0);
  //item.bananaElem3b.disable();
  itensCiclo.push(item.bananaElem3b);

  item["bananaSetaEstElem4"] = new Game.Line(1000, 810, 1170, 800, 4);
  item.bananaSetaEstElem4.setColor(0, 0, 0);
  item.bananaSetaEstElem4.addArrowAtEnd();
  item.bananaSetaEstElem4.setZorder(7);
  itensCiclo.push(item.bananaSetaEstElem4);

  item["bananaNum4"] = new Game.Text("4", estiloNumeros);
  item.bananaNum4.setAnchor(0.5, 0.6);
  item.bananaNum4.setPosition(1450, 660);
  itensCiclo.push(item.bananaNum4);

  item["bananaElem4"] = new Game.Image("fezesComMosca.png");
  item.bananaElem4.setPosition(1330, 800);
  item.bananaElem4.setScale(0.51);
  item.bananaElem4.setZorder(6);
  //item.bananaElem4.setAlpha(0);
  //item.bananaElem4.disable();
  itensCiclo.push(item.bananaElem4);

  item["bananaSetaElem4Elem5"] = new Game.Line(1330, 800, 1700, 800, 4);
  item.bananaSetaElem4Elem5.setColor(0, 0, 0);
  item.bananaSetaElem4Elem5.setZorder(7);
  itensCiclo.push(item.bananaSetaElem4Elem5);

  item["bananaNum5"] = new Game.Text("5", estiloNumeros);
  item.bananaNum5.setAnchor(0.5, 0.6);
  item.bananaNum5.setPosition(1851, 671);
  itensCiclo.push(item.bananaNum5);

  item["bananaElem5"] = new Game.Image("entamoebaCisto.png");
  item.bananaElem5.setPosition(1700, 800);
  item.bananaElem5.setScale(0.56);
  item.bananaElem5.setZorder(6);
  //item.bananaElem5.setAlpha(0);
  //item.bananaElem5.disable();
  itensCiclo.push(item.bananaElem5);

  /*var itensSobreDoenca = [];

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
