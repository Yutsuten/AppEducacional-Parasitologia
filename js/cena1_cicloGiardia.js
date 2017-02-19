function carregaCicloGiardia() {
  // Criando um aliase de scene[1].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estPocoNormal"] = new Game.Item("estMbrcSdv.png");
  item.estPocoNormal.setPosition(1500, 650);
  item.estPocoNormal.setZorder(9);
  item.estPocoNormal.setBrightness(220);
  item.estPocoNormal.onMouseOver = function() {
    item.estPocoNormal.setBrightness(255);
    scene[1].setSubtitle("Giardíase");
  }
  item.estPocoNormal.onMouseOut = function() {
    item.estPocoNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estPocoNormal.click = function() {
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
    item.estPorcoNormal.changeBrightness(100, 600);
    item.setaSalaDeAula.changeAlpha(0, 600);

    item.estCenouraNormal.setInteractive(false);
    item.estVacaNormal.setInteractive(false);
    item.estPorcoNormal.setInteractive(false);
    item.estPocoNormal.setInteractive(false);
    item.setaSalaDeAula.setInteractive(false);

    setTimeout(function() {
      scene[1].setSubtitle("");
      item.setaSalaDeAula.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPocoNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPocoNormal.disable();
      item.estPocoCiclo.enable();
      item.estPocoCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoElem1.enable();
      item.pocoElem1.changeAlpha(1, 600);
      item.pocoNum1.enable();
      item.pocoNum1.changeAlpha(1, 600);
      item.pocoSetaElem1Est.enable();
      item.pocoSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoElem2a.enable();
      item.pocoElem2a.changeAlpha(1, 600);
      item.pocoNum2.enable();
      item.pocoNum2.changeAlpha(1, 600);
      item.pocoSetaElem2aElem2b.enable();
      item.pocoSetaElem2aElem2b.changeAlpha(1, 600);
      item.pocoElem2b.enable();
      item.pocoElem2b.changeAlpha(1, 600);
      item.pocoSetaElem2bEst.enable();
      item.pocoSetaElem2bEst.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoSetaEstElem3a.enable();
      item.pocoSetaEstElem3a.changeAlpha(1, 600);
      item.pocoElem3a.enable();
      item.pocoElem3a.changeAlpha(1, 600);
      item.pocoNum3.enable();
      item.pocoNum3.changeAlpha(1, 600);
      item.pocoSetaElem3aElem3b.enable();
      item.pocoSetaElem3aElem3b.changeAlpha(1, 600);
      item.pocoElem3b.enable();
      item.pocoElem3b.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoSetaEstElem4.enable();
      item.pocoSetaEstElem4.changeAlpha(1, 600);
      item.pocoNum4.enable();
      item.pocoNum4.changeAlpha(1, 600);
      item.pocoElem4.enable();
      item.pocoElem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoSetaElem4Elem5.enable();
      item.pocoSetaElem4Elem5.changeAlpha(1, 600);
      item.pocoNum5.enable();
      item.pocoNum5.changeAlpha(1, 600);
      item.pocoElem5.enable();
      item.pocoElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoFechar.enable();
      item.pocoFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensPocoCiclo = [];

  // Imagens ciclo
  item["estPocoCiclo"] = new Game.Image("estMbrcClo.png");
  item.estPocoCiclo.setPosition(960, 550);
  item.estPocoCiclo.setScale(0.5);
  item.estPocoCiclo.setZorder(9);
  item.estPocoCiclo.setAlpha(0);
  item.estPocoCiclo.disable();
  itensPocoCiclo.push(item.estPocoCiclo);

  item["pocoElem1"] = new Game.Item("entamoebaCisto.png");
  item.pocoElem1.setPosition(485, 300);
  item.pocoElem1.setScale(0.7);
  item.pocoElem1.setZorder(6);
  item.pocoElem1.setAlpha(0);
  item.pocoElem1.disable();
  item.pocoElem1.onMouseOver = function() {
    scene[1].setSubtitle("Cisto de <i>Entamoeba coli</i>");
  }
  item.pocoElem1.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem1);

  item["pocoNum1"] = new Game.Text("1", estiloNumeros);
  item.pocoNum1.setAnchor(0.5, 0.6);
  item.pocoNum1.setPosition(650, 140);
  item.pocoNum1.setAlpha(0);
  item.pocoNum1.disable();
  itensPocoCiclo.push(item.pocoNum1);

  item["pocoSetaElem1Est"] = new Game.Line(485, 300, 915, 500, 4);
  item.pocoSetaElem1Est.setColor(0, 0, 0);
  item.pocoSetaElem1Est.setZorder(7);
  item.pocoSetaElem1Est.setAlpha(0);
  item.pocoSetaElem1Est.disable();
  itensPocoCiclo.push(item.pocoSetaElem1Est);

  item["pocoElem2a"] = new Game.Item("entamoebaCisto.png");
  item.pocoElem2a.setPosition(200, 750);
  item.pocoElem2a.setScale(0.4);
  item.pocoElem2a.setZorder(6);
  item.pocoElem2a.setAlpha(0);
  item.pocoElem2a.disable();
  item.pocoElem2a.onMouseOver = function() {
    scene[1].setSubtitle("Desencistamento de <i>Entamoeba coli</i>: cisto");
  }
  item.pocoElem2a.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem2a);

  item["pocoNum2"] = new Game.Text("2", estiloNumeros);
  item.pocoNum2.setAnchor(0.5, 0.6);
  item.pocoNum2.setPosition(350, 700);
  item.pocoNum2.setAlpha(0);
  item.pocoNum2.disable();
  itensPocoCiclo.push(item.pocoNum2);

  item["pocoSetaElem2aElem2b"] = new Game.Line(200, 750, 380, 750, 4);
  item.pocoSetaElem2aElem2b.setColor(0, 0, 0);
  item.pocoSetaElem2aElem2b.addArrowAtEnd();
  item.pocoSetaElem2aElem2b.setZorder(7);
  item.pocoSetaElem2aElem2b.setAlpha(0);
  item.pocoSetaElem2aElem2b.disable();
  itensPocoCiclo.push(item.pocoSetaElem2aElem2b);

  item["pocoElem2b"] = new Game.Item("entamoebaTrofozoito.png");
  item.pocoElem2b.setPosition(537, 750);
  item.pocoElem2b.setScale(0.53);
  item.pocoElem2b.setZorder(6);
  item.pocoElem2b.setAlpha(0);
  item.pocoElem2b.disable();
  item.pocoElem2b.onMouseOver = function() {
    scene[1].setSubtitle("Desencistamento de <i>E. coli</i>: trofozoíto");
  }
  item.pocoElem2b.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem2b);

  item["pocoSetaElem2bEst"] = new Game.Line(537, 750, 920, 800, 4);
  item.pocoSetaElem2bEst.setColor(0, 0, 0);
  item.pocoSetaElem2bEst.setZorder(7);
  item.pocoSetaElem2bEst.setAlpha(0);
  item.pocoSetaElem2bEst.disable();
  itensPocoCiclo.push(item.pocoSetaElem2bEst);

  item["pocoSetaEstElem3a"] = new Game.Line(1000, 780, 1330, 250, 4);
  item.pocoSetaEstElem3a.setColor(0, 0, 0);
  item.pocoSetaEstElem3a.setZorder(7);
  item.pocoSetaEstElem3a.setAlpha(0);
  item.pocoSetaEstElem3a.disable();
  itensPocoCiclo.push(item.pocoSetaEstElem3a);

  item["pocoElem3a"] = new Game.Item("entamoebaTrofozoito.png");
  item.pocoElem3a.setPosition(1330, 250);
  item.pocoElem3a.setScale(0.42);
  item.pocoElem3a.setZorder(6);
  item.pocoElem3a.setAlpha(0);
  item.pocoElem3a.disable();
  item.pocoElem3a.onMouseOver = function() {
    scene[1].setSubtitle("Encistamento de <i>E. coli</i>: trofozoíto");
  }
  item.pocoElem3a.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem3a);

  item["pocoNum3"] = new Game.Text("3", estiloNumeros);
  item.pocoNum3.setAnchor(0.5, 0.6);
  item.pocoNum3.setPosition(1480, 200);
  item.pocoNum3.setAlpha(0);
  item.pocoNum3.disable();
  itensPocoCiclo.push(item.pocoNum3);

  item["pocoSetaElem3aElem3b"] = new Game.Line(1330, 250, 1510, 250, 4);
  item.pocoSetaElem3aElem3b.setColor(0, 0, 0);
  item.pocoSetaElem3aElem3b.addArrowAtEnd();
  item.pocoSetaElem3aElem3b.setZorder(7);
  item.pocoSetaElem3aElem3b.setAlpha(0);
  item.pocoSetaElem3aElem3b.disable();
  itensPocoCiclo.push(item.pocoSetaElem3aElem3b);

  item["pocoElem3b"] = new Game.Item("entamoebaCisto.png");
  item.pocoElem3b.setPosition(1670, 250);
  item.pocoElem3b.setScale(0.55);
  item.pocoElem3b.setZorder(6);
  item.pocoElem3b.setAlpha(0);
  item.pocoElem3b.disable();
  item.pocoElem3b.onMouseOver = function() {
    scene[1].setSubtitle("Encistamento de <i>E. coli</i>: cisto");
  }
  item.pocoElem3b.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem3b);

  item["pocoSetaEstElem4"] = new Game.Line(1000, 810, 1180, 800, 4);
  item.pocoSetaEstElem4.setColor(0, 0, 0);
  item.pocoSetaEstElem4.addArrowAtEnd();
  item.pocoSetaEstElem4.setZorder(7);
  item.pocoSetaEstElem4.setAlpha(0);
  item.pocoSetaEstElem4.disable();
  itensPocoCiclo.push(item.pocoSetaEstElem4);

  item["pocoNum4"] = new Game.Text("4", estiloNumeros);
  item.pocoNum4.setAnchor(0.5, 0.6);
  item.pocoNum4.setPosition(1450, 660);
  item.pocoNum4.setAlpha(0);
  item.pocoNum4.disable();
  itensPocoCiclo.push(item.pocoNum4);

  item["pocoElem4"] = new Game.Item("fezesComMosca.png");
  item.pocoElem4.setPosition(1330, 800);
  item.pocoElem4.setScale(0.51);
  item.pocoElem4.setZorder(6);
  item.pocoElem4.setAlpha(0);
  item.pocoElem4.disable();
  item.pocoElem4.onMouseOver = function() {
    scene[1].setSubtitle("Moscas sendo infectadas por fezes com <i>E. coli</i>");
  }
  item.pocoElem4.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem4);

  item["pocoSetaElem4Elem5"] = new Game.Line(1330, 800, 1700, 800, 4);
  item.pocoSetaElem4Elem5.setColor(0, 0, 0);
  item.pocoSetaElem4Elem5.setZorder(7);
  item.pocoSetaElem4Elem5.setAlpha(0);
  item.pocoSetaElem4Elem5.disable();
  itensPocoCiclo.push(item.pocoSetaElem4Elem5);

  item["pocoNum5"] = new Game.Text("5", estiloNumeros);
  item.pocoNum5.setAnchor(0.5, 0.6);
  item.pocoNum5.setPosition(1851, 671);
  item.pocoNum5.setAlpha(0);
  item.pocoNum5.disable();
  itensPocoCiclo.push(item.pocoNum5);

  item["pocoElem5"] = new Game.Item("entamoebaCisto.png");
  item.pocoElem5.setPosition(1700, 800);
  item.pocoElem5.setScale(0.56);
  item.pocoElem5.setZorder(6);
  item.pocoElem5.setAlpha(0);
  item.pocoElem5.disable();
  item.pocoElem5.onMouseOver = function() {
    scene[1].setSubtitle("Cisto de <i>E. coli</i>");
  }
  item.pocoElem5.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem5);

  item["pocoFechar"] = new Game.Item("botaoFechar.png");
  item.pocoFechar.setPosition(1840, 70);
  item.pocoFechar.setRotation(180);
  item.pocoFechar.setZorder(1);
  item.pocoFechar.setAlpha(0);
  item.pocoFechar.disable();
  item.pocoFechar.onMouseOver = function() {
    item.pocoFechar.addGlow();
  }
  item.pocoFechar.onMouseOut = function() {
    item.pocoFechar.removeGlow();
  }
  item.pocoFechar.onClick = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPocoCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensPocoCiclo);

      item.estPocoDoente.enable();
      item.estPocoDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensPocoCiclo);
      item.pocoBalaoSintoma.enable();
      item.pocoBalaoSintoma.changeAlpha(1, 600);
      item.pocoTextoSintomas.enable();
      item.pocoTextoSintomas.changeAlpha(1, 600);

      item.pocoAbaPrevencao.enable();
      item.pocoAbaPrevencao.changeAlpha(1, 600);
      item.pocoAbaTransmissao.enable();
      item.pocoAbaTransmissao.changeAlpha(1, 600);

      item.pocoBotaoOK.enable();
      item.pocoBotaoOK.changeAlpha(1, 600);

      item.pocoBalaoPrevencao.setAlpha(1);
      item.pocoBalaoTransmissao.setAlpha(1);
      item.pocoAbaSintomas.setAlpha(1);
      item.pocoBotaoOKhover.setAlpha(1);
      item.pocoTextoPrevencao.setAlpha(1);
      item.pocoTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensPocoCiclo.push(item.pocoFechar);

  var itensPocoDoente = [];

  item["estPocoDoente"] = new Game.Image("estMbrcDte.png");
  item.estPocoDoente.setPosition(1218, 668);
  item.estPocoDoente.setZorder(11);
  item.estPocoDoente.setAlpha(0);
  item.estPocoDoente.disable();
  itensPocoDoente.push(item.estPocoDoente);

  item["pocoBalaoSintoma"] = new Game.Image("balSintEsq.png");
  item.pocoBalaoSintoma.setPosition(730, 300);
  item.pocoBalaoSintoma.setScale(0.25);
  item.pocoBalaoSintoma.setZorder(6);
  item.pocoBalaoSintoma.setAlpha(0);
  item.pocoBalaoSintoma.disable();
  itensPocoDoente.push(item.pocoBalaoSintoma);

  item["pocoBalaoPrevencao"] = new Game.Image("balPrevEsq.png");
  item.pocoBalaoPrevencao.setPosition(730, 300);
  item.pocoBalaoPrevencao.setScale(0.25);
  item.pocoBalaoPrevencao.setZorder(6);
  item.pocoBalaoPrevencao.disable();
  itensPocoDoente.push(item.pocoBalaoPrevencao);

  item["pocoBalaoTransmissao"] = new Game.Image("balTranEsq.png");
  item.pocoBalaoTransmissao.setPosition(730, 300);
  item.pocoBalaoTransmissao.setScale(0.25);
  item.pocoBalaoTransmissao.setZorder(6);
  item.pocoBalaoTransmissao.disable();
  itensPocoDoente.push(item.pocoBalaoTransmissao);


  item["pocoAbaSintomas"] = new Game.Item("abaSint.png");
  item.pocoAbaSintomas.setPosition(432, 71);
  item.pocoAbaSintomas.setScale(0.25);
  item.pocoAbaSintomas.setZorder(7);
  item.pocoAbaSintomas.disable();
  item.pocoAbaSintomas.onClick = function() {
    item.pocoBalaoSintoma.enable();
    item.pocoBalaoPrevencao.disable();
    item.pocoBalaoTransmissao.disable();

    item.pocoAbaSintomas.disable();
    item.pocoAbaPrevencao.enable();
    item.pocoAbaTransmissao.enable();

    item.pocoTextoSintomas.enable();
    item.pocoTextoPrevencao.disable();
    item.pocoTextoTransmissao.disable();
  }
  itensPocoDoente.push(item.pocoAbaSintomas);

  item["pocoTextoSintomas"] = new Game.Text("Texto sintomas.", estiloInfoBalao);
  item.pocoTextoSintomas.setPosition(432-130, 71+20);
  item.pocoTextoSintomas.setAlpha(0);
  item.pocoTextoSintomas.disable();
  itensPocoDoente.push(item.pocoTextoSintomas);

  /*item["pocoAbaSintomasHover"] = new Game.Item("abaSintHover.png");
  item.pocoAbaSintomasHover.setPosition(432, 71);
  item.pocoAbaSintomasHover.setScale(0.25);
  item.pocoAbaSintomasHover.setZorder(7);
  item.pocoAbaSintomasHover.disable();
  item.pocoAbaSintomasHover.setInteractive(false);
  item.pocoAbaSintomas.onMouseOut = function() {
    item.pocoAbaSintomas.enable();
    item.pocoAbaSintomasHover.disable();
  }*/

  item["pocoAbaPrevencao"] = new Game.Item("abaPrev.png");
  item.pocoAbaPrevencao.setPosition(432 + 232, 71);
  item.pocoAbaPrevencao.setScale(0.25);
  item.pocoAbaPrevencao.setZorder(7);
  item.pocoAbaPrevencao.setAlpha(0);
  item.pocoAbaPrevencao.disable();
  item.pocoAbaPrevencao.onClick = function() {
    item.pocoBalaoSintoma.disable();
    item.pocoBalaoPrevencao.enable();
    item.pocoBalaoTransmissao.disable();

    item.pocoAbaSintomas.enable();
    item.pocoAbaPrevencao.disable();
    item.pocoAbaTransmissao.enable();

    item.pocoTextoSintomas.disable();
    item.pocoTextoPrevencao.enable();
    item.pocoTextoTransmissao.disable();
  }
  itensPocoDoente.push(item.pocoAbaPrevencao);

  item["pocoTextoPrevencao"] = new Game.Text("Texto prevenção.", estiloInfoBalao);
  item.pocoTextoPrevencao.setPosition(432-130, 71+20);
  item.pocoTextoPrevencao.disable();
  itensPocoDoente.push(item.pocoTextoPrevencao);

  /*item["pocoAbaPrevencaoHover"] = new Game.Item("abaPrevHover.png");
  item.pocoAbaPrevencaoHover.setPosition(432 + 247, 71);
  item.pocoAbaPrevencaoHover.setScale(0.25);
  item.pocoAbaPrevencaoHover.setZorder(7);
  item.pocoAbaPrevencaoHover.setInteractive(false);
  item.pocoAbaPrevencaoHover.disable();
  item.pocoAbaPrevencaoHover.onMouseOut = function() {
    item.pocoAbaPrevencaoHover.setInteractive(false);
    item.pocoAbaPrevencaoHover.disable();
    item.pocoAbaPrevencao.setInteractive(true);
    item.pocoAbaPrevencao.enable();
  }*/

  item["pocoAbaTransmissao"] = new Game.Item("abaTran.png");
  item.pocoAbaTransmissao.setPosition(432 + 482, 71);
  item.pocoAbaTransmissao.setScale(0.25);
  item.pocoAbaTransmissao.setZorder(7);
  item.pocoAbaTransmissao.setAlpha(0);
  item.pocoAbaTransmissao.disable();
  item.pocoAbaTransmissao.onClick = function() {
    item.pocoBalaoSintoma.disable();
    item.pocoBalaoPrevencao.disable();
    item.pocoBalaoTransmissao.enable();

    item.pocoAbaSintomas.enable();
    item.pocoAbaPrevencao.enable();
    item.pocoAbaTransmissao.disable();

    item.pocoTextoSintomas.disable();
    item.pocoTextoPrevencao.disable();
    item.pocoTextoTransmissao.enable();
  }
  itensPocoDoente.push(item.pocoAbaTransmissao);

  item["pocoTextoTransmissao"] = new Game.Text("Texto transmissão.", estiloInfoBalao);
  item.pocoTextoTransmissao.setPosition(432-130, 71+20);
  item.pocoTextoTransmissao.disable();
  itensPocoDoente.push(item.pocoTextoTransmissao);

  /*item["pocoAbaTransmissaoHover"] = new Game.Item("abaTranHover.png");
  item.pocoAbaTransmissaoHover.setPosition(432 + 2*247, 71);
  item.pocoAbaTransmissaoHover.setScale(0.25);
  item.pocoAbaTransmissaoHover.setZorder(7);
  item.pocoAbaTransmissaoHover.disable();*/

  item["pocoBotaoOK"] = new Game.Item("okNormal.png");
  item.pocoBotaoOK.setScale(0.25);
  item.pocoBotaoOK.setPosition(432+450, 71+290);
  item.pocoBotaoOK.setAlpha(0);
  item.pocoBotaoOK.disable();
  item.pocoBotaoOK.onMouseOver = function() {
    item.pocoBotaoOK.disable();
    item.pocoBotaoOKhover.enable();
  }
  item.pocoBotaoOK.onClick = function() {
    item.pocoBotaoOKhover.onClick();
  }
  itensPocoDoente.push(item.pocoBotaoOK);

  item["pocoBotaoOKhover"] = new Game.Item("okHover.png");
  item.pocoBotaoOKhover.setScale(0.25);
  item.pocoBotaoOKhover.setPosition(432+450, 71+290);
  item.pocoBotaoOKhover.disable();
  item.pocoBotaoOKhover.onMouseOut = function() {
    item.pocoBotaoOKhover.disable();
    item.pocoBotaoOK.enable();
  }
  item.pocoBotaoOKhover.onClick = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPocoDoente, 0, 600);

    setTimeout(function() {
      item.estPocoNormal.enable();
      item.estPocoNormal.setBrightness(220);
      item.estPocoNormal.changeAlpha(1, 600);

      scene[1].background.changeBrightness(210, 600);
      item.chiqueiro.changeBrightness(210, 600);
      item.horta.changeBrightness(210, 600);
      item.latrina.changeBrightness(210, 600);
      item.lixeira.changeBrightness(210, 600);
      item.pocoExterior.changeBrightness(210, 600);
      item.vacaExterior.changeBrightness(210, 600);

      item.estCenouraNormal.changeBrightness(210, 600);
      item.estVacaNormal.changeBrightness(210, 600);
      item.estPorcoNormal.changeBrightness(210, 600);
      item.setaSalaDeAula.enable();
      item.setaSalaDeAula.changeAlpha(1, 600);

      item.pocoBotaoOKhover.disable();
      item.pocoBalaoPrevencao.disable();
      item.pocoBalaoTransmissao.disable();
      item.pocoAbaSintomas.disable();
      item.pocoAbaPrevencao.disable();
      item.pocoAbaTransmissao.disable();
      item.pocoTextoPrevencao.disable();
      item.pocoTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estCenouraNormal.setInteractive(true);
      item.estVacaNormal.setInteractive(true);
      item.estPorcoNormal.setInteractive(true);
      item.estPocoNormal.setInteractive(true);
      item.setaSalaDeAula.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensPocoDoente.push(item.pocoBotaoOKhover);

}
