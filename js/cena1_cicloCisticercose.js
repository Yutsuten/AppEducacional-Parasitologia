function carregaCicloCisticercose() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item["estCenouraNormal"] = new Game.Item("estHbrcSdv.png");
  item.estCenouraNormal.setPosition(375, 560);
  item.estCenouraNormal.setScale(0.7);
  item.estCenouraNormal.setZorder(9);
  item.estCenouraNormal.setBrightness(220);
  item.estCenouraNormal.onMouseOver = function() {
    item.estCenouraNormal.setBrightness(255);
    scene[1].setSubtitle("Cisticercose");
  }
  item.estCenouraNormal.onMouseOut = function() {
    item.estCenouraNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estCenouraNormal.click = function() {

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

      item.estPocoNormal.changeBrightness(100, 600);
      item.estVacaNormal.changeBrightness(100, 600);
      item.estPorcoNormal.changeBrightness(100, 600);
      item.setaSalaDeAula.changeAlpha(0, 600);

      item.estPocoNormal.setInteractive(false);
      item.estVacaNormal.setInteractive(false);
      item.estPorcoNormal.setInteractive(false);
      item.estCenouraNormal.setInteractive(false);
      item.setaSalaDeAula.setInteractive(false);

      setTimeout(function() {
        scene[1].setSubtitle("");
        item.setaSalaDeAula.disable();
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.estCenouraNormal.changeAlpha(0, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.estCenouraNormal.disable();
        item.estCenouraCiclo.enable();
        item.estCenouraCiclo.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraElem1.enable();
        item.cenouraElem1.changeAlpha(1, 600);
        item.cenouraNum1.enable();
        item.cenouraNum1.changeAlpha(1, 600);
        item.cenouraSetaElem1Est.enable();
        item.cenouraSetaElem1Est.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraElem2a.enable();
        item.cenouraElem2a.changeAlpha(1, 600);
        item.cenouraNum2.enable();
        item.cenouraNum2.changeAlpha(1, 600);
        item.cenouraSetaElem2aElem2b.enable();
        item.cenouraSetaElem2aElem2b.changeAlpha(1, 600);
        item.cenouraElem2b.enable();
        item.cenouraElem2b.changeAlpha(1, 600);
        item.cenouraSetaElem2bEst.enable();
        item.cenouraSetaElem2bEst.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraSetaEstElem3a.enable();
        item.cenouraSetaEstElem3a.changeAlpha(1, 600);
        item.cenouraElem3a.enable();
        item.cenouraElem3a.changeAlpha(1, 600);
        item.cenouraNum3.enable();
        item.cenouraNum3.changeAlpha(1, 600);
        item.cenouraSetaElem3aElem3b.enable();
        item.cenouraSetaElem3aElem3b.changeAlpha(1, 600);
        item.cenouraElem3b.enable();
        item.cenouraElem3b.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraSetaEstElem4.enable();
        item.cenouraSetaEstElem4.changeAlpha(1, 600);
        item.cenouraNum4.enable();
        item.cenouraNum4.changeAlpha(1, 600);
        item.cenouraElem4.enable();
        item.cenouraElem4.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraSetaElem4Elem5.enable();
        item.cenouraSetaElem4Elem5.changeAlpha(1, 600);
        item.cenouraNum5.enable();
        item.cenouraNum5.changeAlpha(1, 600);
        item.cenouraElem5.enable();
        item.cenouraElem5.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraFechar.enable();
        item.cenouraFechar.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        enableInteractiveness();
      }, currentTime += animationInterval);
  }

  var itensCenouraCiclo = [];

  // Imagens ciclo
  item["estCenouraCiclo"] = new Game.Image("estHbrcClo.png");
  item.estCenouraCiclo.setPosition(960, 550);
  item.estCenouraCiclo.setScale(0.5);
  item.estCenouraCiclo.setZorder(9);
  item.estCenouraCiclo.setAlpha(0);
  item.estCenouraCiclo.disable();
  itensCenouraCiclo.push(item.estCenouraCiclo);

  item["cenouraElem1"] = new Game.Item("entamoebaCisto.png");
  item.cenouraElem1.setPosition(485, 300);
  item.cenouraElem1.setScale(0.7);
  item.cenouraElem1.setZorder(6);
  item.cenouraElem1.setAlpha(0);
  item.cenouraElem1.disable();
  item.cenouraElem1.onMouseOver = function() {
    scene[1].setSubtitle("Cisto de <i>Entamoeba coli</i>");
  }
  item.cenouraElem1.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem1);

  item["cenouraNum1"] = new Game.Text("1", estiloNumeros);
  item.cenouraNum1.setAnchor(0.5, 0.6);
  item.cenouraNum1.setPosition(650, 140);
  item.cenouraNum1.setAlpha(0);
  item.cenouraNum1.disable();
  itensCenouraCiclo.push(item.cenouraNum1);

  item["cenouraSetaElem1Est"] = new Game.Line(485, 300, 915, 500, 4);
  item.cenouraSetaElem1Est.setColor(0, 0, 0);
  item.cenouraSetaElem1Est.setZorder(7);
  item.cenouraSetaElem1Est.setAlpha(0);
  item.cenouraSetaElem1Est.disable();
  itensCenouraCiclo.push(item.cenouraSetaElem1Est);

  item["cenouraElem2a"] = new Game.Item("entamoebaCisto.png");
  item.cenouraElem2a.setPosition(200, 750);
  item.cenouraElem2a.setScale(0.4);
  item.cenouraElem2a.setZorder(6);
  item.cenouraElem2a.setAlpha(0);
  item.cenouraElem2a.disable();
  item.cenouraElem2a.onMouseOver = function() {
    scene[1].setSubtitle("Desencistamento de <i>Entamoeba coli</i>: cisto");
  }
  item.cenouraElem2a.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem2a);

  item["cenouraNum2"] = new Game.Text("2", estiloNumeros);
  item.cenouraNum2.setAnchor(0.5, 0.6);
  item.cenouraNum2.setPosition(350, 700);
  item.cenouraNum2.setAlpha(0);
  item.cenouraNum2.disable();
  itensCenouraCiclo.push(item.cenouraNum2);

  item["cenouraSetaElem2aElem2b"] = new Game.Line(200, 750, 380, 750, 4);
  item.cenouraSetaElem2aElem2b.setColor(0, 0, 0);
  item.cenouraSetaElem2aElem2b.addArrowAtEnd();
  item.cenouraSetaElem2aElem2b.setZorder(7);
  item.cenouraSetaElem2aElem2b.setAlpha(0);
  item.cenouraSetaElem2aElem2b.disable();
  itensCenouraCiclo.push(item.cenouraSetaElem2aElem2b);

  item["cenouraElem2b"] = new Game.Item("entamoebaTrofozoito.png");
  item.cenouraElem2b.setPosition(537, 750);
  item.cenouraElem2b.setScale(0.53);
  item.cenouraElem2b.setZorder(6);
  item.cenouraElem2b.setAlpha(0);
  item.cenouraElem2b.disable();
  item.cenouraElem2b.onMouseOver = function() {
    scene[1].setSubtitle("Desencistamento de <i>E. coli</i>: trofozoíto");
  }
  item.cenouraElem2b.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem2b);

  item["cenouraSetaElem2bEst"] = new Game.Line(537, 750, 920, 800, 4);
  item.cenouraSetaElem2bEst.setColor(0, 0, 0);
  item.cenouraSetaElem2bEst.setZorder(7);
  item.cenouraSetaElem2bEst.setAlpha(0);
  item.cenouraSetaElem2bEst.disable();
  itensCenouraCiclo.push(item.cenouraSetaElem2bEst);

  item["cenouraSetaEstElem3a"] = new Game.Line(1000, 780, 1330, 250, 4);
  item.cenouraSetaEstElem3a.setColor(0, 0, 0);
  item.cenouraSetaEstElem3a.setZorder(7);
  item.cenouraSetaEstElem3a.setAlpha(0);
  item.cenouraSetaEstElem3a.disable();
  itensCenouraCiclo.push(item.cenouraSetaEstElem3a);

  item["cenouraElem3a"] = new Game.Item("entamoebaTrofozoito.png");
  item.cenouraElem3a.setPosition(1330, 250);
  item.cenouraElem3a.setScale(0.42);
  item.cenouraElem3a.setZorder(6);
  item.cenouraElem3a.setAlpha(0);
  item.cenouraElem3a.disable();
  item.cenouraElem3a.onMouseOver = function() {
    scene[1].setSubtitle("Encistamento de <i>E. coli</i>: trofozoíto");
  }
  item.cenouraElem3a.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem3a);

  item["cenouraNum3"] = new Game.Text("3", estiloNumeros);
  item.cenouraNum3.setAnchor(0.5, 0.6);
  item.cenouraNum3.setPosition(1480, 200);
  item.cenouraNum3.setAlpha(0);
  item.cenouraNum3.disable();
  itensCenouraCiclo.push(item.cenouraNum3);

  item["cenouraSetaElem3aElem3b"] = new Game.Line(1330, 250, 1510, 250, 4);
  item.cenouraSetaElem3aElem3b.setColor(0, 0, 0);
  item.cenouraSetaElem3aElem3b.addArrowAtEnd();
  item.cenouraSetaElem3aElem3b.setZorder(7);
  item.cenouraSetaElem3aElem3b.setAlpha(0);
  item.cenouraSetaElem3aElem3b.disable();
  itensCenouraCiclo.push(item.cenouraSetaElem3aElem3b);

  item["cenouraElem3b"] = new Game.Item("entamoebaCisto.png");
  item.cenouraElem3b.setPosition(1670, 250);
  item.cenouraElem3b.setScale(0.55);
  item.cenouraElem3b.setZorder(6);
  item.cenouraElem3b.setAlpha(0);
  item.cenouraElem3b.disable();
  item.cenouraElem3b.onMouseOver = function() {
    scene[1].setSubtitle("Encistamento de <i>E. coli</i>: cisto");
  }
  item.cenouraElem3b.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem3b);

  item["cenouraSetaEstElem4"] = new Game.Line(1000, 810, 1180, 800, 4);
  item.cenouraSetaEstElem4.setColor(0, 0, 0);
  item.cenouraSetaEstElem4.addArrowAtEnd();
  item.cenouraSetaEstElem4.setZorder(7);
  item.cenouraSetaEstElem4.setAlpha(0);
  item.cenouraSetaEstElem4.disable();
  itensCenouraCiclo.push(item.cenouraSetaEstElem4);

  item["cenouraNum4"] = new Game.Text("4", estiloNumeros);
  item.cenouraNum4.setAnchor(0.5, 0.6);
  item.cenouraNum4.setPosition(1450, 660);
  item.cenouraNum4.setAlpha(0);
  item.cenouraNum4.disable();
  itensCenouraCiclo.push(item.cenouraNum4);

  item["cenouraElem4"] = new Game.Item("fezesComMosca.png");
  item.cenouraElem4.setPosition(1330, 800);
  item.cenouraElem4.setScale(0.51);
  item.cenouraElem4.setZorder(6);
  item.cenouraElem4.setAlpha(0);
  item.cenouraElem4.disable();
  item.cenouraElem4.onMouseOver = function() {
    scene[1].setSubtitle("Moscas sendo infectadas por fezes com <i>E. coli</i>");
  }
  item.cenouraElem4.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem4);

  item["cenouraSetaElem4Elem5"] = new Game.Line(1330, 800, 1700, 800, 4);
  item.cenouraSetaElem4Elem5.setColor(0, 0, 0);
  item.cenouraSetaElem4Elem5.setZorder(7);
  item.cenouraSetaElem4Elem5.setAlpha(0);
  item.cenouraSetaElem4Elem5.disable();
  itensCenouraCiclo.push(item.cenouraSetaElem4Elem5);

  item["cenouraNum5"] = new Game.Text("5", estiloNumeros);
  item.cenouraNum5.setAnchor(0.5, 0.6);
  item.cenouraNum5.setPosition(1851, 671);
  item.cenouraNum5.setAlpha(0);
  item.cenouraNum5.disable();
  itensCenouraCiclo.push(item.cenouraNum5);

  item["cenouraElem5"] = new Game.Item("entamoebaCisto.png");
  item.cenouraElem5.setPosition(1700, 800);
  item.cenouraElem5.setScale(0.56);
  item.cenouraElem5.setZorder(6);
  item.cenouraElem5.setAlpha(0);
  item.cenouraElem5.disable();
  item.cenouraElem5.onMouseOver = function() {
    scene[1].setSubtitle("Cisto de <i>E. coli</i>");
  }
  item.cenouraElem5.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem5);

  item["cenouraFechar"] = new Game.Item("botaoFechar.png");
  item.cenouraFechar.setPosition(1840, 70);
  item.cenouraFechar.setRotation(180);
  item.cenouraFechar.setZorder(1);
  item.cenouraFechar.setAlpha(0);
  item.cenouraFechar.disable();
  item.cenouraFechar.onMouseOver = function() {
    item.cenouraFechar.addGlow();
  }
  item.cenouraFechar.onMouseOut = function() {
    item.cenouraFechar.removeGlow();
  }
  item.cenouraFechar.onClick = function(mouse) {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensCenouraCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensCenouraCiclo);

      item.estCenouraDoente.enable();
      item.estCenouraDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensCenouraCiclo);
      item.cenouraBalaoSintoma.enable();
      item.cenouraBalaoSintoma.changeAlpha(1, 600);
      item.cenouraTextoSintomas.enable();
      item.cenouraTextoSintomas.changeAlpha(1, 600);

      item.cenouraAbaPrevencao.enable();
      item.cenouraAbaPrevencao.changeAlpha(1, 600);
      item.cenouraAbaTransmissao.enable();
      item.cenouraAbaTransmissao.changeAlpha(1, 600);

      item.cenouraBotaoOK.enable();
      item.cenouraBotaoOK.changeAlpha(1, 600);

      item.cenouraBalaoPrevencao.setAlpha(1);
      item.cenouraBalaoTransmissao.setAlpha(1);
      item.cenouraAbaSintomas.setAlpha(1);
      item.cenouraBotaoOKhover.setAlpha(1);
      item.cenouraTextoPrevencao.setAlpha(1);
      item.cenouraTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensCenouraCiclo.push(item.cenouraFechar);

  var itensCenouraDoente = [];

  item["estCenouraDoente"] = new Game.Image("estHbrcDte.png");
  item.estCenouraDoente.setPosition(1218, 668);
  item.estCenouraDoente.setZorder(11);
  item.estCenouraDoente.setAlpha(0);
  item.estCenouraDoente.disable();
  itensCenouraDoente.push(item.estCenouraDoente);

  item["cenouraBalaoSintoma"] = new Game.Image("balSintEsq.png");
  item.cenouraBalaoSintoma.setPosition(730, 300);
  item.cenouraBalaoSintoma.setScale(0.25);
  item.cenouraBalaoSintoma.setZorder(6);
  item.cenouraBalaoSintoma.setAlpha(0);
  item.cenouraBalaoSintoma.disable();
  itensCenouraDoente.push(item.cenouraBalaoSintoma);

  item["cenouraBalaoPrevencao"] = new Game.Image("balPrevEsq.png");
  item.cenouraBalaoPrevencao.setPosition(730, 300);
  item.cenouraBalaoPrevencao.setScale(0.25);
  item.cenouraBalaoPrevencao.setZorder(6);
  item.cenouraBalaoPrevencao.disable();
  itensCenouraDoente.push(item.cenouraBalaoPrevencao);

  item["cenouraBalaoTransmissao"] = new Game.Image("balTranEsq.png");
  item.cenouraBalaoTransmissao.setPosition(730, 300);
  item.cenouraBalaoTransmissao.setScale(0.25);
  item.cenouraBalaoTransmissao.setZorder(6);
  item.cenouraBalaoTransmissao.disable();
  itensCenouraDoente.push(item.cenouraBalaoTransmissao);


  item["cenouraAbaSintomas"] = new Game.Item("abaSint.png");
  item.cenouraAbaSintomas.setPosition(432, 71);
  item.cenouraAbaSintomas.setScale(0.25);
  item.cenouraAbaSintomas.setZorder(7);
  item.cenouraAbaSintomas.disable();
  item.cenouraAbaSintomas.onClick = function() {
    item.cenouraBalaoSintoma.enable();
    item.cenouraBalaoPrevencao.disable();
    item.cenouraBalaoTransmissao.disable();

    item.cenouraAbaSintomas.disable();
    item.cenouraAbaPrevencao.enable();
    item.cenouraAbaTransmissao.enable();

    item.cenouraTextoSintomas.enable();
    item.cenouraTextoPrevencao.disable();
    item.cenouraTextoTransmissao.disable();
  }
  itensCenouraDoente.push(item.cenouraAbaSintomas);

  item["cenouraTextoSintomas"] = new Game.Text("Texto sintomas.", estiloInfoBalao);
  item.cenouraTextoSintomas.setPosition(432-130, 71+20);
  item.cenouraTextoSintomas.setAlpha(0);
  item.cenouraTextoSintomas.disable();
  itensCenouraDoente.push(item.cenouraTextoSintomas);

  /*item["cenouraAbaSintomasHover"] = new Game.Item("abaSintHover.png");
  item.cenouraAbaSintomasHover.setPosition(432, 71);
  item.cenouraAbaSintomasHover.setScale(0.25);
  item.cenouraAbaSintomasHover.setZorder(7);
  item.cenouraAbaSintomasHover.disable();
  item.cenouraAbaSintomasHover.setInteractive(false);
  item.cenouraAbaSintomas.onMouseOut = function() {
    item.cenouraAbaSintomas.enable();
    item.cenouraAbaSintomasHover.disable();
  }*/

  item["cenouraAbaPrevencao"] = new Game.Item("abaPrev.png");
  item.cenouraAbaPrevencao.setPosition(432 + 232, 71);
  item.cenouraAbaPrevencao.setScale(0.25);
  item.cenouraAbaPrevencao.setZorder(7);
  item.cenouraAbaPrevencao.setAlpha(0);
  item.cenouraAbaPrevencao.disable();
  item.cenouraAbaPrevencao.onClick = function() {
    item.cenouraBalaoSintoma.disable();
    item.cenouraBalaoPrevencao.enable();
    item.cenouraBalaoTransmissao.disable();

    item.cenouraAbaSintomas.enable();
    item.cenouraAbaPrevencao.disable();
    item.cenouraAbaTransmissao.enable();

    item.cenouraTextoSintomas.disable();
    item.cenouraTextoPrevencao.enable();
    item.cenouraTextoTransmissao.disable();
  }
  itensCenouraDoente.push(item.cenouraAbaPrevencao);

  item["cenouraTextoPrevencao"] = new Game.Text("Texto prevenção.", estiloInfoBalao);
  item.cenouraTextoPrevencao.setPosition(432-130, 71+20);
  item.cenouraTextoPrevencao.disable();
  itensCenouraDoente.push(item.cenouraTextoPrevencao);

  /*item["cenouraAbaPrevencaoHover"] = new Game.Item("abaPrevHover.png");
  item.cenouraAbaPrevencaoHover.setPosition(432 + 247, 71);
  item.cenouraAbaPrevencaoHover.setScale(0.25);
  item.cenouraAbaPrevencaoHover.setZorder(7);
  item.cenouraAbaPrevencaoHover.setInteractive(false);
  item.cenouraAbaPrevencaoHover.disable();
  item.cenouraAbaPrevencaoHover.onMouseOut = function() {
    item.cenouraAbaPrevencaoHover.setInteractive(false);
    item.cenouraAbaPrevencaoHover.disable();
    item.cenouraAbaPrevencao.setInteractive(true);
    item.cenouraAbaPrevencao.enable();
  }*/

  item["cenouraAbaTransmissao"] = new Game.Item("abaTran.png");
  item.cenouraAbaTransmissao.setPosition(432 + 482, 71);
  item.cenouraAbaTransmissao.setScale(0.25);
  item.cenouraAbaTransmissao.setZorder(7);
  item.cenouraAbaTransmissao.setAlpha(0);
  item.cenouraAbaTransmissao.disable();
  item.cenouraAbaTransmissao.onClick = function() {
    item.cenouraBalaoSintoma.disable();
    item.cenouraBalaoPrevencao.disable();
    item.cenouraBalaoTransmissao.enable();

    item.cenouraAbaSintomas.enable();
    item.cenouraAbaPrevencao.enable();
    item.cenouraAbaTransmissao.disable();

    item.cenouraTextoSintomas.disable();
    item.cenouraTextoPrevencao.disable();
    item.cenouraTextoTransmissao.enable();
  }
  itensCenouraDoente.push(item.cenouraAbaTransmissao);

  item["cenouraTextoTransmissao"] = new Game.Text("Texto transmissão.", estiloInfoBalao);
  item.cenouraTextoTransmissao.setPosition(432-130, 71+20);
  item.cenouraTextoTransmissao.disable();
  itensCenouraDoente.push(item.cenouraTextoTransmissao);

  /*item["cenouraAbaTransmissaoHover"] = new Game.Item("abaTranHover.png");
  item.cenouraAbaTransmissaoHover.setPosition(432 + 2*247, 71);
  item.cenouraAbaTransmissaoHover.setScale(0.25);
  item.cenouraAbaTransmissaoHover.setZorder(7);
  item.cenouraAbaTransmissaoHover.disable();*/

  item["cenouraBotaoOK"] = new Game.Item("okNormal.png");
  item.cenouraBotaoOK.setScale(0.25);
  item.cenouraBotaoOK.setPosition(432+450, 71+290);
  item.cenouraBotaoOK.setAlpha(0);
  item.cenouraBotaoOK.disable();
  item.cenouraBotaoOK.onMouseOver = function() {
    item.cenouraBotaoOK.disable();
    item.cenouraBotaoOKhover.enable();
  }
  item.cenouraBotaoOK.onClick = function() {
    item.cenouraBotaoOKhover.onClick();
  }
  itensCenouraDoente.push(item.cenouraBotaoOK);

  item["cenouraBotaoOKhover"] = new Game.Item("okHover.png");
  item.cenouraBotaoOKhover.setScale(0.25);
  item.cenouraBotaoOKhover.setPosition(432+450, 71+290);
  item.cenouraBotaoOKhover.disable();
  item.cenouraBotaoOKhover.onMouseOut = function() {
    item.cenouraBotaoOKhover.disable();
    item.cenouraBotaoOK.enable();
  }
  item.cenouraBotaoOKhover.onClick = function() {
    disableInteractiveness();
    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensCenouraDoente, 0, 600);

    setTimeout(function() {
      item.estCenouraNormal.enable();
      item.estCenouraNormal.setBrightness(220);
      item.estCenouraNormal.changeAlpha(1, 600);

      scene[1].background.changeBrightness(210, 600);
      item.chiqueiro.changeBrightness(210, 600);
      item.horta.changeBrightness(210, 600);
      item.latrina.changeBrightness(210, 600);
      item.lixeira.changeBrightness(210, 600);
      item.pocoExterior.changeBrightness(210, 600);
      item.vacaExterior.changeBrightness(210, 600);

      item.estPocoNormal.changeBrightness(210, 600);
      item.estVacaNormal.changeBrightness(210, 600);
      item.estPorcoNormal.changeBrightness(210, 600);
      item.setaSalaDeAula.enable();
      item.setaSalaDeAula.changeAlpha(1, 600);

      item.cenouraBotaoOKhover.disable();
      item.cenouraBalaoPrevencao.disable();
      item.cenouraBalaoTransmissao.disable();
      item.cenouraAbaSintomas.disable();
      item.cenouraAbaPrevencao.disable();
      item.cenouraAbaTransmissao.disable();
      item.cenouraTextoPrevencao.disable();
      item.cenouraTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPocoNormal.setInteractive(true);
      item.estVacaNormal.setInteractive(true);
      item.estPorcoNormal.setInteractive(true);
      item.estCenouraNormal.setInteractive(true);
      item.setaSalaDeAula.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensCenouraDoente.push(item.cenouraBotaoOKhover);

}
