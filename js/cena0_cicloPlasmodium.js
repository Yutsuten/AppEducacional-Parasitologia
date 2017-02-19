function carregaCicloPlasmodium() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estPernNormal"] = new Game.Item("estMngrSdv.png");
  item.estPernNormal.setPosition(1586, 838);
  item.estPernNormal.setZorder(9);
  item.estPernNormal.setBrightness(220);
  item.estPernNormal.onMouseOver = function() {
    item.estPernNormal.setBrightness(255);
    scene[0].setSubtitle("Malária");
  }
  item.estPernNormal.onMouseOut = function() {
    item.estPernNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estPernNormal.click = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    // Fadeout unrelated images
    scene[0].background.changeBrightness(100, 600);
    item.carteiras.changeBrightness(100, 600);
    item.mesaProfessor.changeBrightness(100, 600);

    item.estTomateNormal.changeBrightness(100, 600);
    item.estBananaNormal.changeBrightness(100, 600);
    item.estGatoNormal.changeBrightness(100, 600);
    item.setaJanela.changeAlpha(0, 600);
    item.setaArmario.changeAlpha(0, 600);

    item.estTomateNormal.setInteractive(false);
    item.estBananaNormal.setInteractive(false);
    item.estGatoNormal.setInteractive(false);
    item.estPernNormal.setInteractive(false);
    item.setaJanela.setInteractive(false);
    item.setaArmario.setInteractive(false);

    setTimeout(function() {
      scene[0].setSubtitle("");
      item.setaJanela.disable();
      item.setaArmario.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPernNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPernNormal.disable();
      item.estPernCiclo.enable();
      item.estPernCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernElem1.enable();
      item.pernElem1.changeAlpha(1, 600);
      item.pernNum1.enable();
      item.pernNum1.changeAlpha(1, 600);
      item.pernSetaElem1Est.enable();
      item.pernSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernElem2a.enable();
      item.pernElem2a.changeAlpha(1, 600);
      item.pernNum2.enable();
      item.pernNum2.changeAlpha(1, 600);
      item.pernSetaElem2aElem2b.enable();
      item.pernSetaElem2aElem2b.changeAlpha(1, 600);
      item.pernElem2b.enable();
      item.pernElem2b.changeAlpha(1, 600);
      item.pernSetaElem2bEst.enable();
      item.pernSetaElem2bEst.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernSetaEstElem3a.enable();
      item.pernSetaEstElem3a.changeAlpha(1, 600);
      item.pernElem3a.enable();
      item.pernElem3a.changeAlpha(1, 600);
      item.pernNum3.enable();
      item.pernNum3.changeAlpha(1, 600);
      item.pernSetaElem3aElem3b.enable();
      item.pernSetaElem3aElem3b.changeAlpha(1, 600);
      item.pernElem3b.enable();
      item.pernElem3b.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernSetaEstElem4.enable();
      item.pernSetaEstElem4.changeAlpha(1, 600);
      item.pernNum4.enable();
      item.pernNum4.changeAlpha(1, 600);
      item.pernElem4.enable();
      item.pernElem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernSetaElem4Elem5.enable();
      item.pernSetaElem4Elem5.changeAlpha(1, 600);
      item.pernNum5.enable();
      item.pernNum5.changeAlpha(1, 600);
      item.pernElem5.enable();
      item.pernElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernFechar.enable();
      item.pernFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensPernCiclo = [];

  // Imagens ciclo
  item["estPernCiclo"] = new Game.Image("estMngrClo.png");
  item.estPernCiclo.setPosition(960, 550);
  item.estPernCiclo.setScale(0.5);
  item.estPernCiclo.setZorder(9);
  item.estPernCiclo.setAlpha(0);
  item.estPernCiclo.disable();
  itensPernCiclo.push(item.estPernCiclo);

  item["pernElem1"] = new Game.Item("entamoebaCisto.png");
  item.pernElem1.setPosition(485, 300);
  item.pernElem1.setScale(0.7);
  item.pernElem1.setZorder(6);
  item.pernElem1.setAlpha(0);
  item.pernElem1.disable();
  item.pernElem1.onMouseOver = function() {
    scene[0].setSubtitle("Cisto de <i>Entamoeba coli</i>");
  }
  item.pernElem1.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem1);

  item["pernNum1"] = new Game.Text("1", estiloNumeros);
  item.pernNum1.setAnchor(0.5, 0.6);
  item.pernNum1.setPosition(650, 140);
  item.pernNum1.setAlpha(0);
  item.pernNum1.disable();
  itensPernCiclo.push(item.pernNum1);

  item["pernSetaElem1Est"] = new Game.Line(485, 300, 915, 500, 4);
  item.pernSetaElem1Est.setColor(0, 0, 0);
  item.pernSetaElem1Est.setZorder(7);
  item.pernSetaElem1Est.setAlpha(0);
  item.pernSetaElem1Est.disable();
  itensPernCiclo.push(item.pernSetaElem1Est);

  item["pernElem2a"] = new Game.Item("entamoebaCisto.png");
  item.pernElem2a.setPosition(200, 750);
  item.pernElem2a.setScale(0.4);
  item.pernElem2a.setZorder(6);
  item.pernElem2a.setAlpha(0);
  item.pernElem2a.disable();
  item.pernElem2a.onMouseOver = function() {
    scene[0].setSubtitle("Desencistamento de <i>Entamoeba coli</i>: cisto");
  }
  item.pernElem2a.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem2a);

  item["pernNum2"] = new Game.Text("2", estiloNumeros);
  item.pernNum2.setAnchor(0.5, 0.6);
  item.pernNum2.setPosition(350, 700);
  item.pernNum2.setAlpha(0);
  item.pernNum2.disable();
  itensPernCiclo.push(item.pernNum2);

  item["pernSetaElem2aElem2b"] = new Game.Line(200, 750, 380, 750, 4);
  item.pernSetaElem2aElem2b.setColor(0, 0, 0);
  item.pernSetaElem2aElem2b.addArrowAtEnd();
  item.pernSetaElem2aElem2b.setZorder(7);
  item.pernSetaElem2aElem2b.setAlpha(0);
  item.pernSetaElem2aElem2b.disable();
  itensPernCiclo.push(item.pernSetaElem2aElem2b);

  item["pernElem2b"] = new Game.Item("entamoebaTrofozoito.png");
  item.pernElem2b.setPosition(537, 750);
  item.pernElem2b.setScale(0.53);
  item.pernElem2b.setZorder(6);
  item.pernElem2b.setAlpha(0);
  item.pernElem2b.disable();
  item.pernElem2b.onMouseOver = function() {
    scene[0].setSubtitle("Desencistamento de <i>E. coli</i>: trofozoíto");
  }
  item.pernElem2b.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem2b);

  item["pernSetaElem2bEst"] = new Game.Line(537, 750, 920, 800, 4);
  item.pernSetaElem2bEst.setColor(0, 0, 0);
  item.pernSetaElem2bEst.setZorder(7);
  item.pernSetaElem2bEst.setAlpha(0);
  item.pernSetaElem2bEst.disable();
  itensPernCiclo.push(item.pernSetaElem2bEst);

  item["pernSetaEstElem3a"] = new Game.Line(1000, 780, 1330, 250, 4);
  item.pernSetaEstElem3a.setColor(0, 0, 0);
  item.pernSetaEstElem3a.setZorder(7);
  item.pernSetaEstElem3a.setAlpha(0);
  item.pernSetaEstElem3a.disable();
  itensPernCiclo.push(item.pernSetaEstElem3a);

  item["pernElem3a"] = new Game.Item("entamoebaTrofozoito.png");
  item.pernElem3a.setPosition(1330, 250);
  item.pernElem3a.setScale(0.42);
  item.pernElem3a.setZorder(6);
  item.pernElem3a.setAlpha(0);
  item.pernElem3a.disable();
  item.pernElem3a.onMouseOver = function() {
    scene[0].setSubtitle("Encistamento de <i>E. coli</i>: trofozoíto");
  }
  item.pernElem3a.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem3a);

  item["pernNum3"] = new Game.Text("3", estiloNumeros);
  item.pernNum3.setAnchor(0.5, 0.6);
  item.pernNum3.setPosition(1480, 200);
  item.pernNum3.setAlpha(0);
  item.pernNum3.disable();
  itensPernCiclo.push(item.pernNum3);

  item["pernSetaElem3aElem3b"] = new Game.Line(1330, 250, 1510, 250, 4);
  item.pernSetaElem3aElem3b.setColor(0, 0, 0);
  item.pernSetaElem3aElem3b.addArrowAtEnd();
  item.pernSetaElem3aElem3b.setZorder(7);
  item.pernSetaElem3aElem3b.setAlpha(0);
  item.pernSetaElem3aElem3b.disable();
  itensPernCiclo.push(item.pernSetaElem3aElem3b);

  item["pernElem3b"] = new Game.Item("entamoebaCisto.png");
  item.pernElem3b.setPosition(1670, 250);
  item.pernElem3b.setScale(0.55);
  item.pernElem3b.setZorder(6);
  item.pernElem3b.setAlpha(0);
  item.pernElem3b.disable();
  item.pernElem3b.onMouseOver = function() {
    scene[0].setSubtitle("Encistamento de <i>E. coli</i>: cisto");
  }
  item.pernElem3b.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem3b);

  item["pernSetaEstElem4"] = new Game.Line(1000, 810, 1180, 800, 4);
  item.pernSetaEstElem4.setColor(0, 0, 0);
  item.pernSetaEstElem4.addArrowAtEnd();
  item.pernSetaEstElem4.setZorder(7);
  item.pernSetaEstElem4.setAlpha(0);
  item.pernSetaEstElem4.disable();
  itensPernCiclo.push(item.pernSetaEstElem4);

  item["pernNum4"] = new Game.Text("4", estiloNumeros);
  item.pernNum4.setAnchor(0.5, 0.6);
  item.pernNum4.setPosition(1450, 660);
  item.pernNum4.setAlpha(0);
  item.pernNum4.disable();
  itensPernCiclo.push(item.pernNum4);

  item["pernElem4"] = new Game.Item("fezesComMosca.png");
  item.pernElem4.setPosition(1330, 800);
  item.pernElem4.setScale(0.51);
  item.pernElem4.setZorder(6);
  item.pernElem4.setAlpha(0);
  item.pernElem4.disable();
  item.pernElem4.onMouseOver = function() {
    scene[0].setSubtitle("Moscas sendo infectadas por fezes com <i>E. coli</i>");
  }
  item.pernElem4.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem4);

  item["pernSetaElem4Elem5"] = new Game.Line(1330, 800, 1700, 800, 4);
  item.pernSetaElem4Elem5.setColor(0, 0, 0);
  item.pernSetaElem4Elem5.setZorder(7);
  item.pernSetaElem4Elem5.setAlpha(0);
  item.pernSetaElem4Elem5.disable();
  itensPernCiclo.push(item.pernSetaElem4Elem5);

  item["pernNum5"] = new Game.Text("5", estiloNumeros);
  item.pernNum5.setAnchor(0.5, 0.6);
  item.pernNum5.setPosition(1851, 671);
  item.pernNum5.setAlpha(0);
  item.pernNum5.disable();
  itensPernCiclo.push(item.pernNum5);

  item["pernElem5"] = new Game.Item("entamoebaCisto.png");
  item.pernElem5.setPosition(1700, 800);
  item.pernElem5.setScale(0.56);
  item.pernElem5.setZorder(6);
  item.pernElem5.setAlpha(0);
  item.pernElem5.disable();
  item.pernElem5.onMouseOver = function() {
    scene[0].setSubtitle("Cisto de <i>E. coli</i>");
  }
  item.pernElem5.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem5);

  item["pernFechar"] = new Game.Item("botaoFechar.png");
  item.pernFechar.setPosition(1840, 70);
  item.pernFechar.setRotation(180);
  item.pernFechar.setZorder(1);
  item.pernFechar.setAlpha(0);
  item.pernFechar.disable();
  item.pernFechar.onMouseOver = function() {
    item.pernFechar.addGlow();
  }
  item.pernFechar.onMouseOut = function() {
    item.pernFechar.removeGlow();
  }
  item.pernFechar.onClick = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPernCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensPernCiclo);

      item.estPernDoente.enable();
      item.estPernDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensPernCiclo);
      item.pernBalaoSintoma.enable();
      item.pernBalaoSintoma.changeAlpha(1, 600);
      item.pernTextoSintomas.enable();
      item.pernTextoSintomas.changeAlpha(1, 600);

      item.pernAbaPrevencao.enable();
      item.pernAbaPrevencao.changeAlpha(1, 600);
      item.pernAbaTransmissao.enable();
      item.pernAbaTransmissao.changeAlpha(1, 600);

      item.pernBotaoOK.enable();
      item.pernBotaoOK.changeAlpha(1, 600);

      item.pernBalaoPrevencao.setAlpha(1);
      item.pernBalaoTransmissao.setAlpha(1);
      item.pernAbaSintomas.setAlpha(1);
      item.pernBotaoOKhover.setAlpha(1);
      item.pernTextoPrevencao.setAlpha(1);
      item.pernTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensPernCiclo.push(item.pernFechar);

  var itensPernDoente = [];

  item["estPernDoente"] = new Game.Image("estMngrDte.png");
  item.estPernDoente.setPosition(1218, 668);
  item.estPernDoente.setZorder(11);
  item.estPernDoente.setAlpha(0);
  item.estPernDoente.disable();
  itensPernDoente.push(item.estPernDoente);

  item["pernBalaoSintoma"] = new Game.Image("balSintEsq.png");
  item.pernBalaoSintoma.setPosition(730, 300);
  item.pernBalaoSintoma.setScale(0.25);
  item.pernBalaoSintoma.setZorder(6);
  item.pernBalaoSintoma.setAlpha(0);
  item.pernBalaoSintoma.disable();
  itensPernDoente.push(item.pernBalaoSintoma);

  item["pernBalaoPrevencao"] = new Game.Image("balPrevEsq.png");
  item.pernBalaoPrevencao.setPosition(730, 300);
  item.pernBalaoPrevencao.setScale(0.25);
  item.pernBalaoPrevencao.setZorder(6);
  item.pernBalaoPrevencao.disable();
  itensPernDoente.push(item.pernBalaoPrevencao);

  item["pernBalaoTransmissao"] = new Game.Image("balTranEsq.png");
  item.pernBalaoTransmissao.setPosition(730, 300);
  item.pernBalaoTransmissao.setScale(0.25);
  item.pernBalaoTransmissao.setZorder(6);
  item.pernBalaoTransmissao.disable();
  itensPernDoente.push(item.pernBalaoTransmissao);


  item["pernAbaSintomas"] = new Game.Item("abaSint.png");
  item.pernAbaSintomas.setPosition(432, 71);
  item.pernAbaSintomas.setScale(0.25);
  item.pernAbaSintomas.setZorder(7);
  item.pernAbaSintomas.disable();
  item.pernAbaSintomas.onClick = function() {
    item.pernBalaoSintoma.enable();
    item.pernBalaoPrevencao.disable();
    item.pernBalaoTransmissao.disable();

    item.pernAbaSintomas.disable();
    item.pernAbaPrevencao.enable();
    item.pernAbaTransmissao.enable();

    item.pernTextoSintomas.enable();
    item.pernTextoPrevencao.disable();
    item.pernTextoTransmissao.disable();
  }
  itensPernDoente.push(item.pernAbaSintomas);

  item["pernTextoSintomas"] = new Game.Text("Texto sintomas.", estiloInfoBalao);
  item.pernTextoSintomas.setPosition(432-130, 71+20);
  item.pernTextoSintomas.setAlpha(0);
  item.pernTextoSintomas.disable();
  itensPernDoente.push(item.pernTextoSintomas);

  /*item["pernAbaSintomasHover"] = new Game.Item("abaSintHover.png");
  item.pernAbaSintomasHover.setPosition(432, 71);
  item.pernAbaSintomasHover.setScale(0.25);
  item.pernAbaSintomasHover.setZorder(7);
  item.pernAbaSintomasHover.disable();
  item.pernAbaSintomasHover.setInteractive(false);
  item.pernAbaSintomas.onMouseOut = function() {
    item.pernAbaSintomas.enable();
    item.pernAbaSintomasHover.disable();
  }*/

  item["pernAbaPrevencao"] = new Game.Item("abaPrev.png");
  item.pernAbaPrevencao.setPosition(432 + 232, 71);
  item.pernAbaPrevencao.setScale(0.25);
  item.pernAbaPrevencao.setZorder(7);
  item.pernAbaPrevencao.setAlpha(0);
  item.pernAbaPrevencao.disable();
  item.pernAbaPrevencao.onClick = function() {
    item.pernBalaoSintoma.disable();
    item.pernBalaoPrevencao.enable();
    item.pernBalaoTransmissao.disable();

    item.pernAbaSintomas.enable();
    item.pernAbaPrevencao.disable();
    item.pernAbaTransmissao.enable();

    item.pernTextoSintomas.disable();
    item.pernTextoPrevencao.enable();
    item.pernTextoTransmissao.disable();
  }
  itensPernDoente.push(item.pernAbaPrevencao);

  item["pernTextoPrevencao"] = new Game.Text("Texto prevenção.", estiloInfoBalao);
  item.pernTextoPrevencao.setPosition(432-130, 71+20);
  item.pernTextoPrevencao.disable();
  itensPernDoente.push(item.pernTextoPrevencao);

  /*item["pernAbaPrevencaoHover"] = new Game.Item("abaPrevHover.png");
  item.pernAbaPrevencaoHover.setPosition(432 + 247, 71);
  item.pernAbaPrevencaoHover.setScale(0.25);
  item.pernAbaPrevencaoHover.setZorder(7);
  item.pernAbaPrevencaoHover.setInteractive(false);
  item.pernAbaPrevencaoHover.disable();
  item.pernAbaPrevencaoHover.onMouseOut = function() {
    item.pernAbaPrevencaoHover.setInteractive(false);
    item.pernAbaPrevencaoHover.disable();
    item.pernAbaPrevencao.setInteractive(true);
    item.pernAbaPrevencao.enable();
  }*/

  item["pernAbaTransmissao"] = new Game.Item("abaTran.png");
  item.pernAbaTransmissao.setPosition(432 + 482, 71);
  item.pernAbaTransmissao.setScale(0.25);
  item.pernAbaTransmissao.setZorder(7);
  item.pernAbaTransmissao.setAlpha(0);
  item.pernAbaTransmissao.disable();
  item.pernAbaTransmissao.onClick = function() {
    item.pernBalaoSintoma.disable();
    item.pernBalaoPrevencao.disable();
    item.pernBalaoTransmissao.enable();

    item.pernAbaSintomas.enable();
    item.pernAbaPrevencao.enable();
    item.pernAbaTransmissao.disable();

    item.pernTextoSintomas.disable();
    item.pernTextoPrevencao.disable();
    item.pernTextoTransmissao.enable();
  }
  itensPernDoente.push(item.pernAbaTransmissao);

  item["pernTextoTransmissao"] = new Game.Text("Texto transmissão.", estiloInfoBalao);
  item.pernTextoTransmissao.setPosition(432-130, 71+20);
  item.pernTextoTransmissao.disable();
  itensPernDoente.push(item.pernTextoTransmissao);

  /*item["pernAbaTransmissaoHover"] = new Game.Item("abaTranHover.png");
  item.pernAbaTransmissaoHover.setPosition(432 + 2*247, 71);
  item.pernAbaTransmissaoHover.setScale(0.25);
  item.pernAbaTransmissaoHover.setZorder(7);
  item.pernAbaTransmissaoHover.disable();*/

  item["pernBotaoOK"] = new Game.Item("okNormal.png");
  item.pernBotaoOK.setScale(0.25);
  item.pernBotaoOK.setPosition(432+450, 71+290);
  item.pernBotaoOK.setAlpha(0);
  item.pernBotaoOK.disable();
  item.pernBotaoOK.onMouseOver = function() {
    item.pernBotaoOK.disable();
    item.pernBotaoOKhover.enable();
  }
  item.pernBotaoOK.onClick = function() {
    item.pernBotaoOKhover.onClick();
  }
  itensPernDoente.push(item.pernBotaoOK);

  item["pernBotaoOKhover"] = new Game.Item("okHover.png");
  item.pernBotaoOKhover.setScale(0.25);
  item.pernBotaoOKhover.setPosition(432+450, 71+290);
  item.pernBotaoOKhover.disable();
  item.pernBotaoOKhover.onMouseOut = function() {
    item.pernBotaoOKhover.disable();
    item.pernBotaoOK.enable();
  }
  item.pernBotaoOKhover.onClick = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPernDoente, 0, 600);

    setTimeout(function() {
      item.estPernNormal.enable();
      item.estPernNormal.setBrightness(220);
      item.estPernNormal.changeAlpha(1, 600);

      scene[0].background.changeBrightness(210, 600);
      item.carteiras.changeBrightness(210, 600);
      item.mesaProfessor.changeBrightness(210, 600);

      item.estTomateNormal.changeBrightness(210, 600);
      item.estBananaNormal.changeBrightness(210, 600);
      item.estGatoNormal.changeBrightness(210, 600);
      item.setaJanela.enable();
      item.setaArmario.enable();
      item.setaJanela.changeAlpha(1, 600);
      item.setaArmario.changeAlpha(1, 600);

      item.pernBotaoOKhover.disable();
      item.pernBalaoPrevencao.disable();
      item.pernBalaoTransmissao.disable();
      item.pernAbaSintomas.disable();
      item.pernAbaPrevencao.disable();
      item.pernAbaTransmissao.disable();
      item.pernTextoPrevencao.disable();
      item.pernTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estTomateNormal.setInteractive(true);
      item.estBananaNormal.setInteractive(true);
      item.estGatoNormal.setInteractive(true);
      item.estPernNormal.setInteractive(true);
      item.setaJanela.setInteractive(true);
      item.setaArmario.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensPernDoente.push(item.pernBotaoOKhover);

}
