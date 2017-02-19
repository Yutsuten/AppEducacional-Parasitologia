function carregaCicloAscaris() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item["estTomateNormal"] = new Game.Item("estHngrSdv.png");
  item.estTomateNormal.setPosition(940, 590);
  item.estTomateNormal.setZorder(11);
  item.estTomateNormal.setBrightness(220);
  item.estTomateNormal.onMouseOver = function() {
    item.estTomateNormal.setBrightness(255);
    scene[0].setSubtitle("Ascaridíase");
  }
  item.estTomateNormal.onMouseOut = function() {
    item.estTomateNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estTomateNormal.click = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    // Fadeout unrelated images
    scene[0].background.changeBrightness(100, 600);
    item.carteiras.changeBrightness(100, 600);
    item.mesaProfessor.changeBrightness(100, 600);

    item.estBananaNormal.changeBrightness(100, 600);
    item.estPernNormal.changeBrightness(100, 600);
    item.estGatoNormal.changeBrightness(100, 600);
    item.setaJanela.changeAlpha(0, 600);
    item.setaArmario.changeAlpha(0, 600);

    item.estBananaNormal.setInteractive(false);
    item.estPernNormal.setInteractive(false);
    item.estGatoNormal.setInteractive(false);
    item.estTomateNormal.setInteractive(false);
    item.setaJanela.setInteractive(false);
    item.setaArmario.setInteractive(false);

    setTimeout(function() {
      scene[0].setSubtitle("");
      item.setaJanela.disable();
      item.setaArmario.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estTomateNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estTomateNormal.disable();
      item.estTomateCiclo.enable();
      item.estTomateCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateElem1.enable();
      item.tomateElem1.changeAlpha(1, 600);
      item.tomateNum1.enable();
      item.tomateNum1.changeAlpha(1, 600);
      item.tomateSetaElem1Est.enable();
      item.tomateSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateElem2a.enable();
      item.tomateElem2a.changeAlpha(1, 600);
      item.tomateNum2.enable();
      item.tomateNum2.changeAlpha(1, 600);
      item.tomateSetaElem2aElem2b.enable();
      item.tomateSetaElem2aElem2b.changeAlpha(1, 600);
      item.tomateElem2b.enable();
      item.tomateElem2b.changeAlpha(1, 600);
      item.tomateSetaElem2bEst.enable();
      item.tomateSetaElem2bEst.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateSetaEstElem3a.enable();
      item.tomateSetaEstElem3a.changeAlpha(1, 600);
      item.tomateElem3a.enable();
      item.tomateElem3a.changeAlpha(1, 600);
      item.tomateNum3.enable();
      item.tomateNum3.changeAlpha(1, 600);
      item.tomateSetaElem3aElem3b.enable();
      item.tomateSetaElem3aElem3b.changeAlpha(1, 600);
      item.tomateElem3b.enable();
      item.tomateElem3b.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateSetaEstElem4.enable();
      item.tomateSetaEstElem4.changeAlpha(1, 600);
      item.tomateNum4.enable();
      item.tomateNum4.changeAlpha(1, 600);
      item.tomateElem4.enable();
      item.tomateElem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateSetaElem4Elem5.enable();
      item.tomateSetaElem4Elem5.changeAlpha(1, 600);
      item.tomateNum5.enable();
      item.tomateNum5.changeAlpha(1, 600);
      item.tomateElem5.enable();
      item.tomateElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateFechar.enable();
      item.tomateFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensTomateCiclo = [];

  // Imagens ciclo
  item["estTomateCiclo"] = new Game.Image("estHngrClo.png");
  item.estTomateCiclo.setPosition(960, 550);
  item.estTomateCiclo.setScale(0.5);
  item.estTomateCiclo.setZorder(9);
  item.estTomateCiclo.setAlpha(0);
  item.estTomateCiclo.disable();
  itensTomateCiclo.push(item.estTomateCiclo);

  item["tomateElem1"] = new Game.Item("entamoebaCisto.png");
  item.tomateElem1.setPosition(485, 300);
  item.tomateElem1.setScale(0.7);
  item.tomateElem1.setZorder(6);
  item.tomateElem1.setAlpha(0);
  item.tomateElem1.disable();
  item.tomateElem1.onMouseOver = function() {
    scene[0].setSubtitle("Cisto de <i>Entamoeba coli</i>");
  }
  item.tomateElem1.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem1);

  item["tomateNum1"] = new Game.Text("1", estiloNumeros);
  item.tomateNum1.setAnchor(0.5, 0.6);
  item.tomateNum1.setPosition(650, 140);
  item.tomateNum1.setAlpha(0);
  item.tomateNum1.disable();
  itensTomateCiclo.push(item.tomateNum1);

  item["tomateSetaElem1Est"] = new Game.Line(485, 300, 915, 500, 4);
  item.tomateSetaElem1Est.setColor(0, 0, 0);
  item.tomateSetaElem1Est.setZorder(7);
  item.tomateSetaElem1Est.setAlpha(0);
  item.tomateSetaElem1Est.disable();
  itensTomateCiclo.push(item.tomateSetaElem1Est);

  item["tomateElem2a"] = new Game.Item("entamoebaCisto.png");
  item.tomateElem2a.setPosition(200, 750);
  item.tomateElem2a.setScale(0.4);
  item.tomateElem2a.setZorder(6);
  item.tomateElem2a.setAlpha(0);
  item.tomateElem2a.disable();
  item.tomateElem2a.onMouseOver = function() {
    scene[0].setSubtitle("Desencistamento de <i>Entamoeba coli</i>: cisto");
  }
  item.tomateElem2a.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem2a);

  item["tomateNum2"] = new Game.Text("2", estiloNumeros);
  item.tomateNum2.setAnchor(0.5, 0.6);
  item.tomateNum2.setPosition(350, 700);
  item.tomateNum2.setAlpha(0);
  item.tomateNum2.disable();
  itensTomateCiclo.push(item.tomateNum2);

  item["tomateSetaElem2aElem2b"] = new Game.Line(200, 750, 380, 750, 4);
  item.tomateSetaElem2aElem2b.setColor(0, 0, 0);
  item.tomateSetaElem2aElem2b.addArrowAtEnd();
  item.tomateSetaElem2aElem2b.setZorder(7);
  item.tomateSetaElem2aElem2b.setAlpha(0);
  item.tomateSetaElem2aElem2b.disable();
  itensTomateCiclo.push(item.tomateSetaElem2aElem2b);

  item["tomateElem2b"] = new Game.Item("entamoebaTrofozoito.png");
  item.tomateElem2b.setPosition(537, 750);
  item.tomateElem2b.setScale(0.53);
  item.tomateElem2b.setZorder(6);
  item.tomateElem2b.setAlpha(0);
  item.tomateElem2b.disable();
  item.tomateElem2b.onMouseOver = function() {
    scene[0].setSubtitle("Desencistamento de <i>E. coli</i>: trofozoíto");
  }
  item.tomateElem2b.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem2b);

  item["tomateSetaElem2bEst"] = new Game.Line(537, 750, 920, 800, 4);
  item.tomateSetaElem2bEst.setColor(0, 0, 0);
  item.tomateSetaElem2bEst.setZorder(7);
  item.tomateSetaElem2bEst.setAlpha(0);
  item.tomateSetaElem2bEst.disable();
  itensTomateCiclo.push(item.tomateSetaElem2bEst);

  item["tomateSetaEstElem3a"] = new Game.Line(1000, 780, 1330, 250, 4);
  item.tomateSetaEstElem3a.setColor(0, 0, 0);
  item.tomateSetaEstElem3a.setZorder(7);
  item.tomateSetaEstElem3a.setAlpha(0);
  item.tomateSetaEstElem3a.disable();
  itensTomateCiclo.push(item.tomateSetaEstElem3a);

  item["tomateElem3a"] = new Game.Item("entamoebaTrofozoito.png");
  item.tomateElem3a.setPosition(1330, 250);
  item.tomateElem3a.setScale(0.42);
  item.tomateElem3a.setZorder(6);
  item.tomateElem3a.setAlpha(0);
  item.tomateElem3a.disable();
  item.tomateElem3a.onMouseOver = function() {
    scene[0].setSubtitle("Encistamento de <i>E. coli</i>: trofozoíto");
  }
  item.tomateElem3a.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem3a);

  item["tomateNum3"] = new Game.Text("3", estiloNumeros);
  item.tomateNum3.setAnchor(0.5, 0.6);
  item.tomateNum3.setPosition(1480, 200);
  item.tomateNum3.setAlpha(0);
  item.tomateNum3.disable();
  itensTomateCiclo.push(item.tomateNum3);

  item["tomateSetaElem3aElem3b"] = new Game.Line(1330, 250, 1510, 250, 4);
  item.tomateSetaElem3aElem3b.setColor(0, 0, 0);
  item.tomateSetaElem3aElem3b.addArrowAtEnd();
  item.tomateSetaElem3aElem3b.setZorder(7);
  item.tomateSetaElem3aElem3b.setAlpha(0);
  item.tomateSetaElem3aElem3b.disable();
  itensTomateCiclo.push(item.tomateSetaElem3aElem3b);

  item["tomateElem3b"] = new Game.Item("entamoebaCisto.png");
  item.tomateElem3b.setPosition(1670, 250);
  item.tomateElem3b.setScale(0.55);
  item.tomateElem3b.setZorder(6);
  item.tomateElem3b.setAlpha(0);
  item.tomateElem3b.disable();
  item.tomateElem3b.onMouseOver = function() {
    scene[0].setSubtitle("Encistamento de <i>E. coli</i>: cisto");
  }
  item.tomateElem3b.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem3b);

  item["tomateSetaEstElem4"] = new Game.Line(1000, 810, 1180, 800, 4);
  item.tomateSetaEstElem4.setColor(0, 0, 0);
  item.tomateSetaEstElem4.addArrowAtEnd();
  item.tomateSetaEstElem4.setZorder(7);
  item.tomateSetaEstElem4.setAlpha(0);
  item.tomateSetaEstElem4.disable();
  itensTomateCiclo.push(item.tomateSetaEstElem4);

  item["tomateNum4"] = new Game.Text("4", estiloNumeros);
  item.tomateNum4.setAnchor(0.5, 0.6);
  item.tomateNum4.setPosition(1450, 660);
  item.tomateNum4.setAlpha(0);
  item.tomateNum4.disable();
  itensTomateCiclo.push(item.tomateNum4);

  item["tomateElem4"] = new Game.Item("fezesComMosca.png");
  item.tomateElem4.setPosition(1330, 800);
  item.tomateElem4.setScale(0.51);
  item.tomateElem4.setZorder(6);
  item.tomateElem4.setAlpha(0);
  item.tomateElem4.disable();
  item.tomateElem4.onMouseOver = function() {
    scene[0].setSubtitle("Moscas sendo infectadas por fezes com <i>E. coli</i>");
  }
  item.tomateElem4.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem4);

  item["tomateSetaElem4Elem5"] = new Game.Line(1330, 800, 1700, 800, 4);
  item.tomateSetaElem4Elem5.setColor(0, 0, 0);
  item.tomateSetaElem4Elem5.setZorder(7);
  item.tomateSetaElem4Elem5.setAlpha(0);
  item.tomateSetaElem4Elem5.disable();
  itensTomateCiclo.push(item.tomateSetaElem4Elem5);

  item["tomateNum5"] = new Game.Text("5", estiloNumeros);
  item.tomateNum5.setAnchor(0.5, 0.6);
  item.tomateNum5.setPosition(1851, 671);
  item.tomateNum5.setAlpha(0);
  item.tomateNum5.disable();
  itensTomateCiclo.push(item.tomateNum5);

  item["tomateElem5"] = new Game.Item("entamoebaCisto.png");
  item.tomateElem5.setPosition(1700, 800);
  item.tomateElem5.setScale(0.56);
  item.tomateElem5.setZorder(6);
  item.tomateElem5.setAlpha(0);
  item.tomateElem5.disable();
  item.tomateElem5.onMouseOver = function() {
    scene[0].setSubtitle("Cisto de <i>E. coli</i>");
  }
  item.tomateElem5.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem5);

  item["tomateFechar"] = new Game.Item("botaoFechar.png");
  item.tomateFechar.setPosition(1840, 70);
  item.tomateFechar.setRotation(180);
  item.tomateFechar.setZorder(1);
  item.tomateFechar.setAlpha(0);
  item.tomateFechar.disable();
  item.tomateFechar.onMouseOver = function() {
    item.tomateFechar.addGlow();
  }
  item.tomateFechar.onMouseOut = function() {
    item.tomateFechar.removeGlow();
  }
  item.tomateFechar.onClick = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensTomateCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensTomateCiclo);

      item.estTomateDoente.enable();
      item.estTomateDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensTomateCiclo);
      item.tomateBalaoSintoma.enable();
      item.tomateBalaoSintoma.changeAlpha(1, 600);
      item.tomateTextoSintomas.enable();
      item.tomateTextoSintomas.changeAlpha(1, 600);

      item.tomateAbaPrevencao.enable();
      item.tomateAbaPrevencao.changeAlpha(1, 600);
      item.tomateAbaTransmissao.enable();
      item.tomateAbaTransmissao.changeAlpha(1, 600);

      item.tomateBotaoOK.enable();
      item.tomateBotaoOK.changeAlpha(1, 600);

      item.tomateBalaoPrevencao.setAlpha(1);
      item.tomateBalaoTransmissao.setAlpha(1);
      item.tomateAbaSintomas.setAlpha(1);
      item.tomateBotaoOKhover.setAlpha(1);
      item.tomateTextoPrevencao.setAlpha(1);
      item.tomateTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensTomateCiclo.push(item.tomateFechar);

  var itensTomateDoente = [];

  item["estTomateDoente"] = new Game.Image("estHngrDte.png");
  item.estTomateDoente.setPosition(1218, 668);
  item.estTomateDoente.setZorder(11);
  item.estTomateDoente.setAlpha(0);
  item.estTomateDoente.disable();
  itensTomateDoente.push(item.estTomateDoente);

  item["tomateBalaoSintoma"] = new Game.Image("balSintEsq.png");
  item.tomateBalaoSintoma.setPosition(730, 300);
  item.tomateBalaoSintoma.setScale(0.25);
  item.tomateBalaoSintoma.setZorder(6);
  item.tomateBalaoSintoma.setAlpha(0);
  item.tomateBalaoSintoma.disable();
  itensTomateDoente.push(item.tomateBalaoSintoma);

  item["tomateBalaoPrevencao"] = new Game.Image("balPrevEsq.png");
  item.tomateBalaoPrevencao.setPosition(730, 300);
  item.tomateBalaoPrevencao.setScale(0.25);
  item.tomateBalaoPrevencao.setZorder(6);
  item.tomateBalaoPrevencao.disable();
  itensTomateDoente.push(item.tomateBalaoPrevencao);

  item["tomateBalaoTransmissao"] = new Game.Image("balTranEsq.png");
  item.tomateBalaoTransmissao.setPosition(730, 300);
  item.tomateBalaoTransmissao.setScale(0.25);
  item.tomateBalaoTransmissao.setZorder(6);
  item.tomateBalaoTransmissao.disable();
  itensTomateDoente.push(item.tomateBalaoTransmissao);


  item["tomateAbaSintomas"] = new Game.Item("abaSint.png");
  item.tomateAbaSintomas.setPosition(432, 71);
  item.tomateAbaSintomas.setScale(0.25);
  item.tomateAbaSintomas.setZorder(7);
  item.tomateAbaSintomas.disable();
  item.tomateAbaSintomas.onClick = function() {
    item.tomateBalaoSintoma.enable();
    item.tomateBalaoPrevencao.disable();
    item.tomateBalaoTransmissao.disable();

    item.tomateAbaSintomas.disable();
    item.tomateAbaPrevencao.enable();
    item.tomateAbaTransmissao.enable();

    item.tomateTextoSintomas.enable();
    item.tomateTextoPrevencao.disable();
    item.tomateTextoTransmissao.disable();
  }
  itensTomateDoente.push(item.tomateAbaSintomas);

  item["tomateTextoSintomas"] = new Game.Text("Texto sintomas.", estiloInfoBalao);
  item.tomateTextoSintomas.setPosition(432-130, 71+20);
  item.tomateTextoSintomas.setAlpha(0);
  item.tomateTextoSintomas.disable();
  itensTomateDoente.push(item.tomateTextoSintomas);

  /*item["tomateAbaSintomasHover"] = new Game.Item("abaSintHover.png");
  item.tomateAbaSintomasHover.setPosition(432, 71);
  item.tomateAbaSintomasHover.setScale(0.25);
  item.tomateAbaSintomasHover.setZorder(7);
  item.tomateAbaSintomasHover.disable();
  item.tomateAbaSintomasHover.setInteractive(false);
  item.tomateAbaSintomas.onMouseOut = function() {
    item.tomateAbaSintomas.enable();
    item.tomateAbaSintomasHover.disable();
  }*/

  item["tomateAbaPrevencao"] = new Game.Item("abaPrev.png");
  item.tomateAbaPrevencao.setPosition(432 + 232, 71);
  item.tomateAbaPrevencao.setScale(0.25);
  item.tomateAbaPrevencao.setZorder(7);
  item.tomateAbaPrevencao.setAlpha(0);
  item.tomateAbaPrevencao.disable();
  item.tomateAbaPrevencao.onClick = function() {
    item.tomateBalaoSintoma.disable();
    item.tomateBalaoPrevencao.enable();
    item.tomateBalaoTransmissao.disable();

    item.tomateAbaSintomas.enable();
    item.tomateAbaPrevencao.disable();
    item.tomateAbaTransmissao.enable();

    item.tomateTextoSintomas.disable();
    item.tomateTextoPrevencao.enable();
    item.tomateTextoTransmissao.disable();
  }
  itensTomateDoente.push(item.tomateAbaPrevencao);

  item["tomateTextoPrevencao"] = new Game.Text("Texto prevenção.", estiloInfoBalao);
  item.tomateTextoPrevencao.setPosition(432-130, 71+20);
  item.tomateTextoPrevencao.disable();
  itensTomateDoente.push(item.tomateTextoPrevencao);

  /*item["tomateAbaPrevencaoHover"] = new Game.Item("abaPrevHover.png");
  item.tomateAbaPrevencaoHover.setPosition(432 + 247, 71);
  item.tomateAbaPrevencaoHover.setScale(0.25);
  item.tomateAbaPrevencaoHover.setZorder(7);
  item.tomateAbaPrevencaoHover.setInteractive(false);
  item.tomateAbaPrevencaoHover.disable();
  item.tomateAbaPrevencaoHover.onMouseOut = function() {
    item.tomateAbaPrevencaoHover.setInteractive(false);
    item.tomateAbaPrevencaoHover.disable();
    item.tomateAbaPrevencao.setInteractive(true);
    item.tomateAbaPrevencao.enable();
  }*/

  item["tomateAbaTransmissao"] = new Game.Item("abaTran.png");
  item.tomateAbaTransmissao.setPosition(432 + 482, 71);
  item.tomateAbaTransmissao.setScale(0.25);
  item.tomateAbaTransmissao.setZorder(7);
  item.tomateAbaTransmissao.setAlpha(0);
  item.tomateAbaTransmissao.disable();
  item.tomateAbaTransmissao.onClick = function() {
    item.tomateBalaoSintoma.disable();
    item.tomateBalaoPrevencao.disable();
    item.tomateBalaoTransmissao.enable();

    item.tomateAbaSintomas.enable();
    item.tomateAbaPrevencao.enable();
    item.tomateAbaTransmissao.disable();

    item.tomateTextoSintomas.disable();
    item.tomateTextoPrevencao.disable();
    item.tomateTextoTransmissao.enable();
  }
  itensTomateDoente.push(item.tomateAbaTransmissao);

  item["tomateTextoTransmissao"] = new Game.Text("Texto transmissão.", estiloInfoBalao);
  item.tomateTextoTransmissao.setPosition(432-130, 71+20);
  item.tomateTextoTransmissao.disable();
  itensTomateDoente.push(item.tomateTextoTransmissao);

  /*item["tomateAbaTransmissaoHover"] = new Game.Item("abaTranHover.png");
  item.tomateAbaTransmissaoHover.setPosition(432 + 2*247, 71);
  item.tomateAbaTransmissaoHover.setScale(0.25);
  item.tomateAbaTransmissaoHover.setZorder(7);
  item.tomateAbaTransmissaoHover.disable();*/

  item["tomateBotaoOK"] = new Game.Item("okNormal.png");
  item.tomateBotaoOK.setScale(0.25);
  item.tomateBotaoOK.setPosition(432+450, 71+290);
  item.tomateBotaoOK.setAlpha(0);
  item.tomateBotaoOK.disable();
  item.tomateBotaoOK.onMouseOver = function() {
    item.tomateBotaoOK.disable();
    item.tomateBotaoOKhover.enable();
  }
  item.tomateBotaoOK.onClick = function() {
    item.tomateBotaoOKhover.onClick();
  }
  itensTomateDoente.push(item.tomateBotaoOK);

  item["tomateBotaoOKhover"] = new Game.Item("okHover.png");
  item.tomateBotaoOKhover.setScale(0.25);
  item.tomateBotaoOKhover.setPosition(432+450, 71+290);
  item.tomateBotaoOKhover.disable();
  item.tomateBotaoOKhover.onMouseOut = function() {
    item.tomateBotaoOKhover.disable();
    item.tomateBotaoOK.enable();
  }
  item.tomateBotaoOKhover.onClick = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensTomateDoente, 0, 600);

    setTimeout(function() {
      item.estTomateNormal.enable();
      item.estTomateNormal.setBrightness(220);
      item.estTomateNormal.changeAlpha(1, 600);

      scene[0].background.changeBrightness(210, 600);
      item.carteiras.changeBrightness(210, 600);
      item.mesaProfessor.changeBrightness(210, 600);

      item.estBananaNormal.changeBrightness(210, 600);
      item.estPernNormal.changeBrightness(210, 600);
      item.estGatoNormal.changeBrightness(210, 600);
      item.setaJanela.enable();
      item.setaArmario.enable();
      item.setaJanela.changeAlpha(1, 600);
      item.setaArmario.changeAlpha(1, 600);

      item.tomateBotaoOKhover.disable();
      item.tomateBalaoPrevencao.disable();
      item.tomateBalaoTransmissao.disable();
      item.tomateAbaSintomas.disable();
      item.tomateAbaPrevencao.disable();
      item.tomateAbaTransmissao.disable();
      item.tomateTextoPrevencao.disable();
      item.tomateTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estBananaNormal.setInteractive(true);
      item.estPernNormal.setInteractive(true);
      item.estGatoNormal.setInteractive(true);
      item.estTomateNormal.setInteractive(true);
      item.setaJanela.setInteractive(true);
      item.setaArmario.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensTomateDoente.push(item.tomateBotaoOKhover);

}
