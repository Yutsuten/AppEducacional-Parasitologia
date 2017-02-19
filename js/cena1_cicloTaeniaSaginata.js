function carregaCicloTaeniaSaginata() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estVacaNormal"] = new Game.Item("estMprdSdv.png");
  item.estVacaNormal.setPosition(1150, 250);
  item.estVacaNormal.setZorder(11);
  item.estVacaNormal.setBrightness(220);
  item.estVacaNormal.onMouseOver = function() {
    item.estVacaNormal.setBrightness(255);
    scene[1].setSubtitle("Teníase");
  }
  item.estVacaNormal.onMouseOut = function() {
    item.estVacaNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estVacaNormal.click = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    // Fadeout unrelated images
    scene[1].background.changeBrightness(100, 600);
    item.chiqueiro.changeBrightness(100, 600);
    item.horta.changeBrightness(100, 600);
    item.latrina.changeBrightness(100, 600);
    item.lixeira.changeBrightness(100, 600);
    item.pocoExterior.changeBrightness(100, 600);
    item.vacaExterior.changeBrightness(100, 600);

    item.estCenouraNormal.changeBrightness(100, 600);
    item.estPocoNormal.changeBrightness(100, 600);
    item.estPorcoNormal.changeBrightness(100, 600);
    item.setaSalaDeAula.changeAlpha(0, 600);

    item.estCenouraNormal.setInteractive(false);
    item.estPocoNormal.setInteractive(false);
    item.estPorcoNormal.setInteractive(false);
    item.estVacaNormal.setInteractive(false);
    item.setaSalaDeAula.setInteractive(false);

    setTimeout(function() {
      scene[1].setSubtitle("");
      item.setaSalaDeAula.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estVacaNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estVacaNormal.disable();
      item.estVacaCiclo.enable();
      item.estVacaCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaElem1.enable();
      item.vacaElem1.changeAlpha(1, 600);
      item.vacaNum1.enable();
      item.vacaNum1.changeAlpha(1, 600);
      item.vacaSetaElem1Est.enable();
      item.vacaSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaElem2a.enable();
      item.vacaElem2a.changeAlpha(1, 600);
      item.vacaNum2.enable();
      item.vacaNum2.changeAlpha(1, 600);
      item.vacaSetaElem2aElem2b.enable();
      item.vacaSetaElem2aElem2b.changeAlpha(1, 600);
      item.vacaElem2b.enable();
      item.vacaElem2b.changeAlpha(1, 600);
      item.vacaSetaElem2bEst.enable();
      item.vacaSetaElem2bEst.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaEstElem3a.enable();
      item.vacaSetaEstElem3a.changeAlpha(1, 600);
      item.vacaElem3a.enable();
      item.vacaElem3a.changeAlpha(1, 600);
      item.vacaNum3.enable();
      item.vacaNum3.changeAlpha(1, 600);
      item.vacaSetaElem3aElem3b.enable();
      item.vacaSetaElem3aElem3b.changeAlpha(1, 600);
      item.vacaElem3b.enable();
      item.vacaElem3b.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaEstElem4.enable();
      item.vacaSetaEstElem4.changeAlpha(1, 600);
      item.vacaNum4.enable();
      item.vacaNum4.changeAlpha(1, 600);
      item.vacaElem4.enable();
      item.vacaElem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaElem4Elem5.enable();
      item.vacaSetaElem4Elem5.changeAlpha(1, 600);
      item.vacaNum5.enable();
      item.vacaNum5.changeAlpha(1, 600);
      item.vacaElem5.enable();
      item.vacaElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaFechar.enable();
      item.vacaFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensVacaCiclo = [];

  // Imagens ciclo
  item["estVacaCiclo"] = new Game.Image("estMprdClo.png");
  item.estVacaCiclo.setPosition(960, 550);
  item.estVacaCiclo.setScale(0.5);
  item.estVacaCiclo.setZorder(9);
  item.estVacaCiclo.setAlpha(0);
  item.estVacaCiclo.disable();
  itensVacaCiclo.push(item.estVacaCiclo);

  item["vacaElem1"] = new Game.Item("entamoebaCisto.png");
  item.vacaElem1.setPosition(485, 300);
  item.vacaElem1.setScale(0.7);
  item.vacaElem1.setZorder(6);
  item.vacaElem1.setAlpha(0);
  item.vacaElem1.disable();
  item.vacaElem1.onMouseOver = function() {
    scene[1].setSubtitle("Cisto de <i>Entamoeba coli</i>");
  }
  item.vacaElem1.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem1);

  item["vacaNum1"] = new Game.Text("1", estiloNumeros);
  item.vacaNum1.setAnchor(0.5, 0.6);
  item.vacaNum1.setPosition(650, 140);
  item.vacaNum1.setAlpha(0);
  item.vacaNum1.disable();
  itensVacaCiclo.push(item.vacaNum1);

  item["vacaSetaElem1Est"] = new Game.Line(485, 300, 915, 500, 4);
  item.vacaSetaElem1Est.setColor(0, 0, 0);
  item.vacaSetaElem1Est.setZorder(7);
  item.vacaSetaElem1Est.setAlpha(0);
  item.vacaSetaElem1Est.disable();
  itensVacaCiclo.push(item.vacaSetaElem1Est);

  item["vacaElem2a"] = new Game.Item("entamoebaCisto.png");
  item.vacaElem2a.setPosition(200, 750);
  item.vacaElem2a.setScale(0.4);
  item.vacaElem2a.setZorder(6);
  item.vacaElem2a.setAlpha(0);
  item.vacaElem2a.disable();
  item.vacaElem2a.onMouseOver = function() {
    scene[1].setSubtitle("Desencistamento de <i>Entamoeba coli</i>: cisto");
  }
  item.vacaElem2a.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem2a);

  item["vacaNum2"] = new Game.Text("2", estiloNumeros);
  item.vacaNum2.setAnchor(0.5, 0.6);
  item.vacaNum2.setPosition(350, 700);
  item.vacaNum2.setAlpha(0);
  item.vacaNum2.disable();
  itensVacaCiclo.push(item.vacaNum2);

  item["vacaSetaElem2aElem2b"] = new Game.Line(200, 750, 380, 750, 4);
  item.vacaSetaElem2aElem2b.setColor(0, 0, 0);
  item.vacaSetaElem2aElem2b.addArrowAtEnd();
  item.vacaSetaElem2aElem2b.setZorder(7);
  item.vacaSetaElem2aElem2b.setAlpha(0);
  item.vacaSetaElem2aElem2b.disable();
  itensVacaCiclo.push(item.vacaSetaElem2aElem2b);

  item["vacaElem2b"] = new Game.Item("entamoebaTrofozoito.png");
  item.vacaElem2b.setPosition(537, 750);
  item.vacaElem2b.setScale(0.53);
  item.vacaElem2b.setZorder(6);
  item.vacaElem2b.setAlpha(0);
  item.vacaElem2b.disable();
  item.vacaElem2b.onMouseOver = function() {
    scene[1].setSubtitle("Desencistamento de <i>E. coli</i>: trofozoíto");
  }
  item.vacaElem2b.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem2b);

  item["vacaSetaElem2bEst"] = new Game.Line(537, 750, 920, 800, 4);
  item.vacaSetaElem2bEst.setColor(0, 0, 0);
  item.vacaSetaElem2bEst.setZorder(7);
  item.vacaSetaElem2bEst.setAlpha(0);
  item.vacaSetaElem2bEst.disable();
  itensVacaCiclo.push(item.vacaSetaElem2bEst);

  item["vacaSetaEstElem3a"] = new Game.Line(1000, 780, 1330, 250, 4);
  item.vacaSetaEstElem3a.setColor(0, 0, 0);
  item.vacaSetaEstElem3a.setZorder(7);
  item.vacaSetaEstElem3a.setAlpha(0);
  item.vacaSetaEstElem3a.disable();
  itensVacaCiclo.push(item.vacaSetaEstElem3a);

  item["vacaElem3a"] = new Game.Item("entamoebaTrofozoito.png");
  item.vacaElem3a.setPosition(1330, 250);
  item.vacaElem3a.setScale(0.42);
  item.vacaElem3a.setZorder(6);
  item.vacaElem3a.setAlpha(0);
  item.vacaElem3a.disable();
  item.vacaElem3a.onMouseOver = function() {
    scene[1].setSubtitle("Encistamento de <i>E. coli</i>: trofozoíto");
  }
  item.vacaElem3a.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem3a);

  item["vacaNum3"] = new Game.Text("3", estiloNumeros);
  item.vacaNum3.setAnchor(0.5, 0.6);
  item.vacaNum3.setPosition(1480, 200);
  item.vacaNum3.setAlpha(0);
  item.vacaNum3.disable();
  itensVacaCiclo.push(item.vacaNum3);

  item["vacaSetaElem3aElem3b"] = new Game.Line(1330, 250, 1510, 250, 4);
  item.vacaSetaElem3aElem3b.setColor(0, 0, 0);
  item.vacaSetaElem3aElem3b.addArrowAtEnd();
  item.vacaSetaElem3aElem3b.setZorder(7);
  item.vacaSetaElem3aElem3b.setAlpha(0);
  item.vacaSetaElem3aElem3b.disable();
  itensVacaCiclo.push(item.vacaSetaElem3aElem3b);

  item["vacaElem3b"] = new Game.Item("entamoebaCisto.png");
  item.vacaElem3b.setPosition(1670, 250);
  item.vacaElem3b.setScale(0.55);
  item.vacaElem3b.setZorder(6);
  item.vacaElem3b.setAlpha(0);
  item.vacaElem3b.disable();
  item.vacaElem3b.onMouseOver = function() {
    scene[1].setSubtitle("Encistamento de <i>E. coli</i>: cisto");
  }
  item.vacaElem3b.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem3b);

  item["vacaSetaEstElem4"] = new Game.Line(1000, 810, 1180, 800, 4);
  item.vacaSetaEstElem4.setColor(0, 0, 0);
  item.vacaSetaEstElem4.addArrowAtEnd();
  item.vacaSetaEstElem4.setZorder(7);
  item.vacaSetaEstElem4.setAlpha(0);
  item.vacaSetaEstElem4.disable();
  itensVacaCiclo.push(item.vacaSetaEstElem4);

  item["vacaNum4"] = new Game.Text("4", estiloNumeros);
  item.vacaNum4.setAnchor(0.5, 0.6);
  item.vacaNum4.setPosition(1450, 660);
  item.vacaNum4.setAlpha(0);
  item.vacaNum4.disable();
  itensVacaCiclo.push(item.vacaNum4);

  item["vacaElem4"] = new Game.Item("fezesComMosca.png");
  item.vacaElem4.setPosition(1330, 800);
  item.vacaElem4.setScale(0.51);
  item.vacaElem4.setZorder(6);
  item.vacaElem4.setAlpha(0);
  item.vacaElem4.disable();
  item.vacaElem4.onMouseOver = function() {
    scene[1].setSubtitle("Moscas sendo infectadas por fezes com <i>E. coli</i>");
  }
  item.vacaElem4.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem4);

  item["vacaSetaElem4Elem5"] = new Game.Line(1330, 800, 1700, 800, 4);
  item.vacaSetaElem4Elem5.setColor(0, 0, 0);
  item.vacaSetaElem4Elem5.setZorder(7);
  item.vacaSetaElem4Elem5.setAlpha(0);
  item.vacaSetaElem4Elem5.disable();
  itensVacaCiclo.push(item.vacaSetaElem4Elem5);

  item["vacaNum5"] = new Game.Text("5", estiloNumeros);
  item.vacaNum5.setAnchor(0.5, 0.6);
  item.vacaNum5.setPosition(1851, 671);
  item.vacaNum5.setAlpha(0);
  item.vacaNum5.disable();
  itensVacaCiclo.push(item.vacaNum5);

  item["vacaElem5"] = new Game.Item("entamoebaCisto.png");
  item.vacaElem5.setPosition(1700, 800);
  item.vacaElem5.setScale(0.56);
  item.vacaElem5.setZorder(6);
  item.vacaElem5.setAlpha(0);
  item.vacaElem5.disable();
  item.vacaElem5.onMouseOver = function() {
    scene[1].setSubtitle("Cisto de <i>E. coli</i>");
  }
  item.vacaElem5.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem5);

  item["vacaFechar"] = new Game.Item("botaoFechar.png");
  item.vacaFechar.setPosition(1840, 70);
  item.vacaFechar.setRotation(180);
  item.vacaFechar.setZorder(1);
  item.vacaFechar.setAlpha(0);
  item.vacaFechar.disable();
  item.vacaFechar.onMouseOver = function() {
    item.vacaFechar.addGlow();
  }
  item.vacaFechar.onMouseOut = function() {
    item.vacaFechar.removeGlow();
  }
  item.vacaFechar.onClick = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensVacaCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensVacaCiclo);

      item.estVacaDoente.enable();
      item.estVacaDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensVacaCiclo);
      item.vacaBalaoSintoma.enable();
      item.vacaBalaoSintoma.changeAlpha(1, 600);
      item.vacaTextoSintomas.enable();
      item.vacaTextoSintomas.changeAlpha(1, 600);

      item.vacaAbaPrevencao.enable();
      item.vacaAbaPrevencao.changeAlpha(1, 600);
      item.vacaAbaTransmissao.enable();
      item.vacaAbaTransmissao.changeAlpha(1, 600);

      item.vacaBotaoOK.enable();
      item.vacaBotaoOK.changeAlpha(1, 600);

      item.vacaBalaoPrevencao.setAlpha(1);
      item.vacaBalaoTransmissao.setAlpha(1);
      item.vacaAbaSintomas.setAlpha(1);
      item.vacaBotaoOKhover.setAlpha(1);
      item.vacaTextoPrevencao.setAlpha(1);
      item.vacaTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensVacaCiclo.push(item.vacaFechar);

  var itensVacaDoente = [];

  item["estVacaDoente"] = new Game.Image("estMprdDte.png");
  item.estVacaDoente.setPosition(1218, 668);
  item.estVacaDoente.setZorder(11);
  item.estVacaDoente.setAlpha(0);
  item.estVacaDoente.disable();
  itensVacaDoente.push(item.estVacaDoente);

  item["vacaBalaoSintoma"] = new Game.Image("balSintEsq.png");
  item.vacaBalaoSintoma.setPosition(730, 300);
  item.vacaBalaoSintoma.setScale(0.25);
  item.vacaBalaoSintoma.setZorder(6);
  item.vacaBalaoSintoma.setAlpha(0);
  item.vacaBalaoSintoma.disable();
  itensVacaDoente.push(item.vacaBalaoSintoma);

  item["vacaBalaoPrevencao"] = new Game.Image("balPrevEsq.png");
  item.vacaBalaoPrevencao.setPosition(730, 300);
  item.vacaBalaoPrevencao.setScale(0.25);
  item.vacaBalaoPrevencao.setZorder(6);
  item.vacaBalaoPrevencao.disable();
  itensVacaDoente.push(item.vacaBalaoPrevencao);

  item["vacaBalaoTransmissao"] = new Game.Image("balTranEsq.png");
  item.vacaBalaoTransmissao.setPosition(730, 300);
  item.vacaBalaoTransmissao.setScale(0.25);
  item.vacaBalaoTransmissao.setZorder(6);
  item.vacaBalaoTransmissao.disable();
  itensVacaDoente.push(item.vacaBalaoTransmissao);


  item["vacaAbaSintomas"] = new Game.Item("abaSint.png");
  item.vacaAbaSintomas.setPosition(432, 71);
  item.vacaAbaSintomas.setScale(0.25);
  item.vacaAbaSintomas.setZorder(7);
  item.vacaAbaSintomas.disable();
  item.vacaAbaSintomas.onClick = function() {
    item.vacaBalaoSintoma.enable();
    item.vacaBalaoPrevencao.disable();
    item.vacaBalaoTransmissao.disable();

    item.vacaAbaSintomas.disable();
    item.vacaAbaPrevencao.enable();
    item.vacaAbaTransmissao.enable();

    item.vacaTextoSintomas.enable();
    item.vacaTextoPrevencao.disable();
    item.vacaTextoTransmissao.disable();
  }
  itensVacaDoente.push(item.vacaAbaSintomas);

  item["vacaTextoSintomas"] = new Game.Text("Texto sintomas.", estiloInfoBalao);
  item.vacaTextoSintomas.setPosition(432-130, 71+20);
  item.vacaTextoSintomas.setAlpha(0);
  item.vacaTextoSintomas.disable();
  itensVacaDoente.push(item.vacaTextoSintomas);

  /*item["vacaAbaSintomasHover"] = new Game.Item("abaSintHover.png");
  item.vacaAbaSintomasHover.setPosition(432, 71);
  item.vacaAbaSintomasHover.setScale(0.25);
  item.vacaAbaSintomasHover.setZorder(7);
  item.vacaAbaSintomasHover.disable();
  item.vacaAbaSintomasHover.setInteractive(false);
  item.vacaAbaSintomas.onMouseOut = function() {
    item.vacaAbaSintomas.enable();
    item.vacaAbaSintomasHover.disable();
  }*/

  item["vacaAbaPrevencao"] = new Game.Item("abaPrev.png");
  item.vacaAbaPrevencao.setPosition(432 + 232, 71);
  item.vacaAbaPrevencao.setScale(0.25);
  item.vacaAbaPrevencao.setZorder(7);
  item.vacaAbaPrevencao.setAlpha(0);
  item.vacaAbaPrevencao.disable();
  item.vacaAbaPrevencao.onClick = function() {
    item.vacaBalaoSintoma.disable();
    item.vacaBalaoPrevencao.enable();
    item.vacaBalaoTransmissao.disable();

    item.vacaAbaSintomas.enable();
    item.vacaAbaPrevencao.disable();
    item.vacaAbaTransmissao.enable();

    item.vacaTextoSintomas.disable();
    item.vacaTextoPrevencao.enable();
    item.vacaTextoTransmissao.disable();
  }
  itensVacaDoente.push(item.vacaAbaPrevencao);

  item["vacaTextoPrevencao"] = new Game.Text("Texto prevenção.", estiloInfoBalao);
  item.vacaTextoPrevencao.setPosition(432-130, 71+20);
  item.vacaTextoPrevencao.disable();
  itensVacaDoente.push(item.vacaTextoPrevencao);

  /*item["vacaAbaPrevencaoHover"] = new Game.Item("abaPrevHover.png");
  item.vacaAbaPrevencaoHover.setPosition(432 + 247, 71);
  item.vacaAbaPrevencaoHover.setScale(0.25);
  item.vacaAbaPrevencaoHover.setZorder(7);
  item.vacaAbaPrevencaoHover.setInteractive(false);
  item.vacaAbaPrevencaoHover.disable();
  item.vacaAbaPrevencaoHover.onMouseOut = function() {
    item.vacaAbaPrevencaoHover.setInteractive(false);
    item.vacaAbaPrevencaoHover.disable();
    item.vacaAbaPrevencao.setInteractive(true);
    item.vacaAbaPrevencao.enable();
  }*/

  item["vacaAbaTransmissao"] = new Game.Item("abaTran.png");
  item.vacaAbaTransmissao.setPosition(432 + 482, 71);
  item.vacaAbaTransmissao.setScale(0.25);
  item.vacaAbaTransmissao.setZorder(7);
  item.vacaAbaTransmissao.setAlpha(0);
  item.vacaAbaTransmissao.disable();
  item.vacaAbaTransmissao.onClick = function() {
    item.vacaBalaoSintoma.disable();
    item.vacaBalaoPrevencao.disable();
    item.vacaBalaoTransmissao.enable();

    item.vacaAbaSintomas.enable();
    item.vacaAbaPrevencao.enable();
    item.vacaAbaTransmissao.disable();

    item.vacaTextoSintomas.disable();
    item.vacaTextoPrevencao.disable();
    item.vacaTextoTransmissao.enable();
  }
  itensVacaDoente.push(item.vacaAbaTransmissao);

  item["vacaTextoTransmissao"] = new Game.Text("Texto transmissão.", estiloInfoBalao);
  item.vacaTextoTransmissao.setPosition(432-130, 71+20);
  item.vacaTextoTransmissao.disable();
  itensVacaDoente.push(item.vacaTextoTransmissao);

  /*item["vacaAbaTransmissaoHover"] = new Game.Item("abaTranHover.png");
  item.vacaAbaTransmissaoHover.setPosition(432 + 2*247, 71);
  item.vacaAbaTransmissaoHover.setScale(0.25);
  item.vacaAbaTransmissaoHover.setZorder(7);
  item.vacaAbaTransmissaoHover.disable();*/

  item["vacaBotaoOK"] = new Game.Item("okNormal.png");
  item.vacaBotaoOK.setScale(0.25);
  item.vacaBotaoOK.setPosition(432+450, 71+290);
  item.vacaBotaoOK.setAlpha(0);
  item.vacaBotaoOK.disable();
  item.vacaBotaoOK.onMouseOver = function() {
    item.vacaBotaoOK.disable();
    item.vacaBotaoOKhover.enable();
  }
  item.vacaBotaoOK.onClick = function() {
    item.vacaBotaoOKhover.onClick();
  }
  itensVacaDoente.push(item.vacaBotaoOK);

  item["vacaBotaoOKhover"] = new Game.Item("okHover.png");
  item.vacaBotaoOKhover.setScale(0.25);
  item.vacaBotaoOKhover.setPosition(432+450, 71+290);
  item.vacaBotaoOKhover.disable();
  item.vacaBotaoOKhover.onMouseOut = function() {
    item.vacaBotaoOKhover.disable();
    item.vacaBotaoOK.enable();
  }
  item.vacaBotaoOKhover.onClick = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensVacaDoente, 0, 600);

    setTimeout(function() {
      item.estVacaNormal.enable();
      item.estVacaNormal.setBrightness(220);
      item.estVacaNormal.changeAlpha(1, 600);

      scene[1].background.changeBrightness(210, 600);
      item.chiqueiro.changeBrightness(210, 600);
      item.horta.changeBrightness(210, 600);
      item.latrina.changeBrightness(210, 600);
      item.lixeira.changeBrightness(210, 600);
      item.pocoExterior.changeBrightness(210, 600);
      item.vacaExterior.changeBrightness(210, 600);

      item.estCenouraNormal.changeBrightness(210, 600);
      item.estPocoNormal.changeBrightness(210, 600);
      item.estPorcoNormal.changeBrightness(210, 600);
      item.setaSalaDeAula.enable();
      item.setaSalaDeAula.changeAlpha(1, 600);

      item.vacaBotaoOKhover.disable();
      item.vacaBalaoPrevencao.disable();
      item.vacaBalaoTransmissao.disable();
      item.vacaAbaSintomas.disable();
      item.vacaAbaPrevencao.disable();
      item.vacaAbaTransmissao.disable();
      item.vacaTextoPrevencao.disable();
      item.vacaTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estCenouraNormal.setInteractive(true);
      item.estPocoNormal.setInteractive(true);
      item.estPorcoNormal.setInteractive(true);
      item.estVacaNormal.setInteractive(true);
      item.setaSalaDeAula.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensVacaDoente.push(item.vacaBotaoOKhover);

}
