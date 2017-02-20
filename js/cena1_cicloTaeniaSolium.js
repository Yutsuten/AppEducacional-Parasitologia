function carregaCicloTaeniaSolium() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estPorcoNormal"] = new Game.Item("estHjpnSdv.png");
  item.estPorcoNormal.setPosition(150, 308);
  item.estPorcoNormal.setZorder(11);
  item.estPorcoNormal.setBrightness(220);
  item.estPorcoNormal.onMouseOver = function() {
    item.estPorcoNormal.setBrightness(255);
    scene[1].setSubtitle("Teníase");
  }
  item.estPorcoNormal.onMouseOut = function() {
    item.estPorcoNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estPorcoNormal.click = function() {
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
    item.estVacaNormal.changeBrightness(100, 600);
    item.estPocoNormal.changeBrightness(100, 600);
    item.setaSalaDeAula.changeAlpha(0, 600);

    item.estCenouraNormal.setInteractive(false);
    item.estVacaNormal.setInteractive(false);
    item.estPocoNormal.setInteractive(false);
    item.estPorcoNormal.setInteractive(false);
    item.setaSalaDeAula.setInteractive(false);

    setTimeout(function() {
      scene[1].setSubtitle("");
      item.setaSalaDeAula.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPorcoNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPorcoNormal.disable();
      item.estPorcoCiclo.enable();
      item.estPorcoCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoElem1.enable();
      item.porcoElem1.changeAlpha(1, 600);
      item.porcoNum1.enable();
      item.porcoNum1.changeAlpha(1, 600);
      item.porcoSetaElem1Est.enable();
      item.porcoSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoElem2a.enable();
      item.porcoElem2a.changeAlpha(1, 600);
      item.porcoNum2.enable();
      item.porcoNum2.changeAlpha(1, 600);
      item.porcoSetaElem2aElem2b.enable();
      item.porcoSetaElem2aElem2b.changeAlpha(1, 600);
      item.porcoElem2b.enable();
      item.porcoElem2b.changeAlpha(1, 600);
      item.porcoSetaElem2bEst.enable();
      item.porcoSetaElem2bEst.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaEstElem3a.enable();
      item.porcoSetaEstElem3a.changeAlpha(1, 600);
      item.porcoElem3a.enable();
      item.porcoElem3a.changeAlpha(1, 600);
      item.porcoNum3.enable();
      item.porcoNum3.changeAlpha(1, 600);
      item.porcoSetaElem3aElem3b.enable();
      item.porcoSetaElem3aElem3b.changeAlpha(1, 600);
      item.porcoElem3b.enable();
      item.porcoElem3b.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaEstElem4.enable();
      item.porcoSetaEstElem4.changeAlpha(1, 600);
      item.porcoNum4.enable();
      item.porcoNum4.changeAlpha(1, 600);
      item.porcoElem4.enable();
      item.porcoElem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaElem4Elem5.enable();
      item.porcoSetaElem4Elem5.changeAlpha(1, 600);
      item.porcoNum5.enable();
      item.porcoNum5.changeAlpha(1, 600);
      item.porcoElem5.enable();
      item.porcoElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoFechar.enable();
      item.porcoFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensPorcoCiclo = [];

  // Imagens ciclo
  item["estPorcoCiclo"] = new Game.Image("estHjpnClo.png");
  item.estPorcoCiclo.setPosition(960, 550);
  item.estPorcoCiclo.setScale(0.5);
  item.estPorcoCiclo.setZorder(9);
  item.estPorcoCiclo.setAlpha(0);
  item.estPorcoCiclo.disable();
  itensPorcoCiclo.push(item.estPorcoCiclo);

  item["porcoElem1"] = new Game.Item("entamoebaCisto.png");
  item.porcoElem1.setPosition(485, 300);
  item.porcoElem1.setScale(0.7);
  item.porcoElem1.setZorder(6);
  item.porcoElem1.setAlpha(0);
  item.porcoElem1.disable();
  item.porcoElem1.onMouseOver = function() {
    scene[1].setSubtitle("Cisto de <i>Entamoeba coli</i>");
  }
  item.porcoElem1.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem1);

  item["porcoNum1"] = new Game.Text("1", estiloNumeros);
  item.porcoNum1.setAnchor(0.5, 0.6);
  item.porcoNum1.setPosition(650, 140);
  item.porcoNum1.setAlpha(0);
  item.porcoNum1.disable();
  itensPorcoCiclo.push(item.porcoNum1);

  item["porcoSetaElem1Est"] = new Game.Line(485, 300, 915, 500, 4);
  item.porcoSetaElem1Est.setColor(0, 0, 0);
  item.porcoSetaElem1Est.setZorder(7);
  item.porcoSetaElem1Est.setAlpha(0);
  item.porcoSetaElem1Est.disable();
  itensPorcoCiclo.push(item.porcoSetaElem1Est);

  item["porcoElem2a"] = new Game.Item("entamoebaCisto.png");
  item.porcoElem2a.setPosition(200, 750);
  item.porcoElem2a.setScale(0.4);
  item.porcoElem2a.setZorder(6);
  item.porcoElem2a.setAlpha(0);
  item.porcoElem2a.disable();
  item.porcoElem2a.onMouseOver = function() {
    scene[1].setSubtitle("Desencistamento de <i>Entamoeba coli</i>: cisto");
  }
  item.porcoElem2a.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem2a);

  item["porcoNum2"] = new Game.Text("2", estiloNumeros);
  item.porcoNum2.setAnchor(0.5, 0.6);
  item.porcoNum2.setPosition(350, 700);
  item.porcoNum2.setAlpha(0);
  item.porcoNum2.disable();
  itensPorcoCiclo.push(item.porcoNum2);

  item["porcoSetaElem2aElem2b"] = new Game.Line(200, 750, 380, 750, 4);
  item.porcoSetaElem2aElem2b.setColor(0, 0, 0);
  item.porcoSetaElem2aElem2b.addArrowAtEnd();
  item.porcoSetaElem2aElem2b.setZorder(7);
  item.porcoSetaElem2aElem2b.setAlpha(0);
  item.porcoSetaElem2aElem2b.disable();
  itensPorcoCiclo.push(item.porcoSetaElem2aElem2b);

  item["porcoElem2b"] = new Game.Item("entamoebaTrofozoito.png");
  item.porcoElem2b.setPosition(537, 750);
  item.porcoElem2b.setScale(0.53);
  item.porcoElem2b.setZorder(6);
  item.porcoElem2b.setAlpha(0);
  item.porcoElem2b.disable();
  item.porcoElem2b.onMouseOver = function() {
    scene[1].setSubtitle("Desencistamento de <i>E. coli</i>: trofozoíto");
  }
  item.porcoElem2b.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem2b);

  item["porcoSetaElem2bEst"] = new Game.Line(537, 750, 920, 800, 4);
  item.porcoSetaElem2bEst.setColor(0, 0, 0);
  item.porcoSetaElem2bEst.setZorder(7);
  item.porcoSetaElem2bEst.setAlpha(0);
  item.porcoSetaElem2bEst.disable();
  itensPorcoCiclo.push(item.porcoSetaElem2bEst);

  item["porcoSetaEstElem3a"] = new Game.Line(1000, 780, 1330, 250, 4);
  item.porcoSetaEstElem3a.setColor(0, 0, 0);
  item.porcoSetaEstElem3a.setZorder(7);
  item.porcoSetaEstElem3a.setAlpha(0);
  item.porcoSetaEstElem3a.disable();
  itensPorcoCiclo.push(item.porcoSetaEstElem3a);

  item["porcoElem3a"] = new Game.Item("entamoebaTrofozoito.png");
  item.porcoElem3a.setPosition(1330, 250);
  item.porcoElem3a.setScale(0.42);
  item.porcoElem3a.setZorder(6);
  item.porcoElem3a.setAlpha(0);
  item.porcoElem3a.disable();
  item.porcoElem3a.onMouseOver = function() {
    scene[1].setSubtitle("Encistamento de <i>E. coli</i>: trofozoíto");
  }
  item.porcoElem3a.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem3a);

  item["porcoNum3"] = new Game.Text("3", estiloNumeros);
  item.porcoNum3.setAnchor(0.5, 0.6);
  item.porcoNum3.setPosition(1480, 200);
  item.porcoNum3.setAlpha(0);
  item.porcoNum3.disable();
  itensPorcoCiclo.push(item.porcoNum3);

  item["porcoSetaElem3aElem3b"] = new Game.Line(1330, 250, 1510, 250, 4);
  item.porcoSetaElem3aElem3b.setColor(0, 0, 0);
  item.porcoSetaElem3aElem3b.addArrowAtEnd();
  item.porcoSetaElem3aElem3b.setZorder(7);
  item.porcoSetaElem3aElem3b.setAlpha(0);
  item.porcoSetaElem3aElem3b.disable();
  itensPorcoCiclo.push(item.porcoSetaElem3aElem3b);

  item["porcoElem3b"] = new Game.Item("entamoebaCisto.png");
  item.porcoElem3b.setPosition(1670, 250);
  item.porcoElem3b.setScale(0.55);
  item.porcoElem3b.setZorder(6);
  item.porcoElem3b.setAlpha(0);
  item.porcoElem3b.disable();
  item.porcoElem3b.onMouseOver = function() {
    scene[1].setSubtitle("Encistamento de <i>E. coli</i>: cisto");
  }
  item.porcoElem3b.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem3b);

  item["porcoSetaEstElem4"] = new Game.Line(1000, 810, 1180, 800, 4);
  item.porcoSetaEstElem4.setColor(0, 0, 0);
  item.porcoSetaEstElem4.addArrowAtEnd();
  item.porcoSetaEstElem4.setZorder(7);
  item.porcoSetaEstElem4.setAlpha(0);
  item.porcoSetaEstElem4.disable();
  itensPorcoCiclo.push(item.porcoSetaEstElem4);

  item["porcoNum4"] = new Game.Text("4", estiloNumeros);
  item.porcoNum4.setAnchor(0.5, 0.6);
  item.porcoNum4.setPosition(1450, 660);
  item.porcoNum4.setAlpha(0);
  item.porcoNum4.disable();
  itensPorcoCiclo.push(item.porcoNum4);

  item["porcoElem4"] = new Game.Item("fezesComMosca.png");
  item.porcoElem4.setPosition(1330, 800);
  item.porcoElem4.setScale(0.51);
  item.porcoElem4.setZorder(6);
  item.porcoElem4.setAlpha(0);
  item.porcoElem4.disable();
  item.porcoElem4.onMouseOver = function() {
    scene[1].setSubtitle("Moscas sendo infectadas por fezes com <i>E. coli</i>");
  }
  item.porcoElem4.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem4);

  item["porcoSetaElem4Elem5"] = new Game.Line(1330, 800, 1700, 800, 4);
  item.porcoSetaElem4Elem5.setColor(0, 0, 0);
  item.porcoSetaElem4Elem5.setZorder(7);
  item.porcoSetaElem4Elem5.setAlpha(0);
  item.porcoSetaElem4Elem5.disable();
  itensPorcoCiclo.push(item.porcoSetaElem4Elem5);

  item["porcoNum5"] = new Game.Text("5", estiloNumeros);
  item.porcoNum5.setAnchor(0.5, 0.6);
  item.porcoNum5.setPosition(1851, 671);
  item.porcoNum5.setAlpha(0);
  item.porcoNum5.disable();
  itensPorcoCiclo.push(item.porcoNum5);

  item["porcoElem5"] = new Game.Item("entamoebaCisto.png");
  item.porcoElem5.setPosition(1700, 800);
  item.porcoElem5.setScale(0.56);
  item.porcoElem5.setZorder(6);
  item.porcoElem5.setAlpha(0);
  item.porcoElem5.disable();
  item.porcoElem5.onMouseOver = function() {
    scene[1].setSubtitle("Cisto de <i>E. coli</i>");
  }
  item.porcoElem5.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem5);

  item["porcoFechar"] = new Game.Item("botaoFechar.png");
  item.porcoFechar.setPosition(1840, 70);
  item.porcoFechar.setRotation(180);
  item.porcoFechar.setZorder(1);
  item.porcoFechar.setAlpha(0);
  item.porcoFechar.disable();
  item.porcoFechar.onMouseOver = function() {
    item.porcoFechar.addGlow();
  }
  item.porcoFechar.onMouseOut = function() {
    item.porcoFechar.removeGlow();
  }
  item.porcoFechar.onClick = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPorcoCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensPorcoCiclo);

      item.estPorcoDoente.enable();
      item.estPorcoDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensPorcoCiclo);
      item.porcoBalaoSintoma.enable();
      item.porcoBalaoSintoma.changeAlpha(1, 600);
      item.porcoTextoSintomas.enable();
      item.porcoTextoSintomas.changeAlpha(1, 600);

      item.porcoAbaPrevencao.enable();
      item.porcoAbaPrevencao.changeAlpha(1, 600);
      item.porcoAbaTransmissao.enable();
      item.porcoAbaTransmissao.changeAlpha(1, 600);

      item.porcoBotaoOK.enable();
      item.porcoBotaoOK.changeAlpha(1, 600);

      item.porcoBalaoPrevencao.setAlpha(1);
      item.porcoBalaoTransmissao.setAlpha(1);
      item.porcoAbaSintomas.setAlpha(1);
      item.porcoBotaoOKhover.setAlpha(1);
      item.porcoTextoPrevencao.setAlpha(1);
      item.porcoTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensPorcoCiclo.push(item.porcoFechar);

  var itensPorcoDoente = [];

  item["estPorcoDoente"] = new Game.Image("estHjpnDte.png");
  item.estPorcoDoente.setPosition(1218, 668);
  item.estPorcoDoente.setZorder(11);
  item.estPorcoDoente.setAlpha(0);
  item.estPorcoDoente.disable();
  itensPorcoDoente.push(item.estPorcoDoente);

  item["porcoBalaoSintoma"] = new Game.Image("balSintEsq.png");
  item.porcoBalaoSintoma.setPosition(730, 300);
  item.porcoBalaoSintoma.setScale(0.25);
  item.porcoBalaoSintoma.setZorder(6);
  item.porcoBalaoSintoma.setAlpha(0);
  item.porcoBalaoSintoma.disable();
  itensPorcoDoente.push(item.porcoBalaoSintoma);

  item["porcoBalaoPrevencao"] = new Game.Image("balPrevEsq.png");
  item.porcoBalaoPrevencao.setPosition(730, 300);
  item.porcoBalaoPrevencao.setScale(0.25);
  item.porcoBalaoPrevencao.setZorder(6);
  item.porcoBalaoPrevencao.disable();
  itensPorcoDoente.push(item.porcoBalaoPrevencao);

  item["porcoBalaoTransmissao"] = new Game.Image("balTranEsq.png");
  item.porcoBalaoTransmissao.setPosition(730, 300);
  item.porcoBalaoTransmissao.setScale(0.25);
  item.porcoBalaoTransmissao.setZorder(6);
  item.porcoBalaoTransmissao.disable();
  itensPorcoDoente.push(item.porcoBalaoTransmissao);


  item["porcoAbaSintomas"] = new Game.Item("abaSint.png");
  item.porcoAbaSintomas.setPosition(432, 71);
  item.porcoAbaSintomas.setScale(0.25);
  item.porcoAbaSintomas.setZorder(7);
  item.porcoAbaSintomas.disable();
  item.porcoAbaSintomas.onClick = function() {
    item.porcoBalaoSintoma.enable();
    item.porcoBalaoPrevencao.disable();
    item.porcoBalaoTransmissao.disable();

    item.porcoAbaSintomas.disable();
    item.porcoAbaPrevencao.enable();
    item.porcoAbaTransmissao.enable();

    item.porcoTextoSintomas.enable();
    item.porcoTextoPrevencao.disable();
    item.porcoTextoTransmissao.disable();
  }
  itensPorcoDoente.push(item.porcoAbaSintomas);

  item["porcoTextoSintomas"] = new Game.Text("Texto sintomas.", estiloInfoBalao);
  item.porcoTextoSintomas.setPosition(432-130, 71+20);
  item.porcoTextoSintomas.setAlpha(0);
  item.porcoTextoSintomas.disable();
  itensPorcoDoente.push(item.porcoTextoSintomas);

  /*item["porcoAbaSintomasHover"] = new Game.Item("abaSintHover.png");
  item.porcoAbaSintomasHover.setPosition(432, 71);
  item.porcoAbaSintomasHover.setScale(0.25);
  item.porcoAbaSintomasHover.setZorder(7);
  item.porcoAbaSintomasHover.disable();
  item.porcoAbaSintomasHover.setInteractive(false);
  item.porcoAbaSintomas.onMouseOut = function() {
    item.porcoAbaSintomas.enable();
    item.porcoAbaSintomasHover.disable();
  }*/

  item["porcoAbaPrevencao"] = new Game.Item("abaPrev.png");
  item.porcoAbaPrevencao.setPosition(432 + 232, 71);
  item.porcoAbaPrevencao.setScale(0.25);
  item.porcoAbaPrevencao.setZorder(7);
  item.porcoAbaPrevencao.setAlpha(0);
  item.porcoAbaPrevencao.disable();
  item.porcoAbaPrevencao.onClick = function() {
    item.porcoBalaoSintoma.disable();
    item.porcoBalaoPrevencao.enable();
    item.porcoBalaoTransmissao.disable();

    item.porcoAbaSintomas.enable();
    item.porcoAbaPrevencao.disable();
    item.porcoAbaTransmissao.enable();

    item.porcoTextoSintomas.disable();
    item.porcoTextoPrevencao.enable();
    item.porcoTextoTransmissao.disable();
  }
  itensPorcoDoente.push(item.porcoAbaPrevencao);

  item["porcoTextoPrevencao"] = new Game.Text("Texto prevenção.", estiloInfoBalao);
  item.porcoTextoPrevencao.setPosition(432-130, 71+20);
  item.porcoTextoPrevencao.disable();
  itensPorcoDoente.push(item.porcoTextoPrevencao);

  /*item["porcoAbaPrevencaoHover"] = new Game.Item("abaPrevHover.png");
  item.porcoAbaPrevencaoHover.setPosition(432 + 247, 71);
  item.porcoAbaPrevencaoHover.setScale(0.25);
  item.porcoAbaPrevencaoHover.setZorder(7);
  item.porcoAbaPrevencaoHover.setInteractive(false);
  item.porcoAbaPrevencaoHover.disable();
  item.porcoAbaPrevencaoHover.onMouseOut = function() {
    item.porcoAbaPrevencaoHover.setInteractive(false);
    item.porcoAbaPrevencaoHover.disable();
    item.porcoAbaPrevencao.setInteractive(true);
    item.porcoAbaPrevencao.enable();
  }*/

  item["porcoAbaTransmissao"] = new Game.Item("abaTran.png");
  item.porcoAbaTransmissao.setPosition(432 + 482, 71);
  item.porcoAbaTransmissao.setScale(0.25);
  item.porcoAbaTransmissao.setZorder(7);
  item.porcoAbaTransmissao.setAlpha(0);
  item.porcoAbaTransmissao.disable();
  item.porcoAbaTransmissao.onClick = function() {
    item.porcoBalaoSintoma.disable();
    item.porcoBalaoPrevencao.disable();
    item.porcoBalaoTransmissao.enable();

    item.porcoAbaSintomas.enable();
    item.porcoAbaPrevencao.enable();
    item.porcoAbaTransmissao.disable();

    item.porcoTextoSintomas.disable();
    item.porcoTextoPrevencao.disable();
    item.porcoTextoTransmissao.enable();
  }
  itensPorcoDoente.push(item.porcoAbaTransmissao);

  item["porcoTextoTransmissao"] = new Game.Text("Texto transmissão.", estiloInfoBalao);
  item.porcoTextoTransmissao.setPosition(432-130, 71+20);
  item.porcoTextoTransmissao.disable();
  itensPorcoDoente.push(item.porcoTextoTransmissao);

  /*item["porcoAbaTransmissaoHover"] = new Game.Item("abaTranHover.png");
  item.porcoAbaTransmissaoHover.setPosition(432 + 2*247, 71);
  item.porcoAbaTransmissaoHover.setScale(0.25);
  item.porcoAbaTransmissaoHover.setZorder(7);
  item.porcoAbaTransmissaoHover.disable();*/

  item["porcoBotaoOK"] = new Game.Item("okNormal.png");
  item.porcoBotaoOK.setScale(0.25);
  item.porcoBotaoOK.setPosition(432+450, 71+290);
  item.porcoBotaoOK.setAlpha(0);
  item.porcoBotaoOK.disable();
  item.porcoBotaoOK.onMouseOver = function() {
    item.porcoBotaoOK.disable();
    item.porcoBotaoOKhover.enable();
  }
  item.porcoBotaoOK.onClick = function() {
    item.porcoBotaoOKhover.onClick();
  }
  itensPorcoDoente.push(item.porcoBotaoOK);

  item["porcoBotaoOKhover"] = new Game.Item("okHover.png");
  item.porcoBotaoOKhover.setScale(0.25);
  item.porcoBotaoOKhover.setPosition(432+450, 71+290);
  item.porcoBotaoOKhover.disable();
  item.porcoBotaoOKhover.onMouseOut = function() {
    item.porcoBotaoOKhover.disable();
    item.porcoBotaoOK.enable();
  }
  item.porcoBotaoOKhover.onClick = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPorcoDoente, 0, 600);

    setTimeout(function() {
      item.estPorcoNormal.enable();
      item.estPorcoNormal.setBrightness(220);
      item.estPorcoNormal.changeAlpha(1, 600);

      scene[1].background.changeBrightness(210, 600);
      item.chiqueiro.changeBrightness(210, 600);
      item.horta.changeBrightness(210, 600);
      item.latrina.changeBrightness(210, 600);
      item.lixeira.changeBrightness(210, 600);
      item.pocoExterior.changeBrightness(210, 600);
      item.vacaExterior.changeBrightness(210, 600);

      item.estCenouraNormal.changeBrightness(210, 600);
      item.estVacaNormal.changeBrightness(210, 600);
      item.estPocoNormal.changeBrightness(210, 600);
      item.setaSalaDeAula.enable();
      item.setaSalaDeAula.changeAlpha(1, 600);

      item.porcoBotaoOKhover.disable();
      item.porcoBalaoPrevencao.disable();
      item.porcoBalaoTransmissao.disable();
      item.porcoAbaSintomas.disable();
      item.porcoAbaPrevencao.disable();
      item.porcoAbaTransmissao.disable();
      item.porcoTextoPrevencao.disable();
      item.porcoTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estCenouraNormal.setInteractive(true);
      item.estVacaNormal.setInteractive(true);
      item.estPocoNormal.setInteractive(true);
      item.estPorcoNormal.setInteractive(true);
      item.setaSalaDeAula.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensPorcoDoente.push(item.porcoBotaoOKhover);

}
