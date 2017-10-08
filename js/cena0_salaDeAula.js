'use strict';

sceneLoader[0] = function() {

  // Iniciando a nova cena
  scene[0] = new Game.Scene();
  // Adicionando musica na cena
  scene[0].setMusic("musicaSala.wav", 1.0);

  // Adicionando uma imagem de fundo
  scene[0].background = new Game.Background("salaDeAula.jpg");
  scene[0].background.setBrightness(210);

  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  item.caixaDeAreia = new Game.Item("salaDeAula_caixaDeAreia.png");
  item.caixaDeAreia.setPosition(554, 478);
  item.caixaDeAreia.setZorder(20);
  item.caixaDeAreia.setBrightness(210);
  item.caixaDeAreia.onMouseOver = function() {
    scene[0].setSubtitle("Caixa de areia");
    item.popupFlores.disable();
    item.popupFloresTexto.disable();
  }
  item.caixaDeAreia.onMouseOut = function() {
    scene[0].setSubtitle("");
  }

  item.carteiras = new Game.Image("salaDeAula_carteiras.png");
  item.carteiras.setPosition(960, 857);
  item.carteiras.setZorder(10);
  item.carteiras.setBrightness(200);

  item.mesaProfessor = new Game.Image("salaDeAula_mesaProfessor.png");
  item.mesaProfessor.setPosition(1400, 550);
  item.mesaProfessor.setZorder(15);
  item.mesaProfessor.setBrightness(200);

  item.vasoDeFlores = new Game.Item("salaDeAula_vasoDeFlores.png");
  item.vasoDeFlores.setPosition(1630, 400);
  item.vasoDeFlores.setZorder(20);
  item.vasoDeFlores.setBrightness(210);
  item.vasoDeFlores.onMouseOver = function() {
    scene[0].setSubtitle("Vaso com água parada");
    somPopup();
    item.popupFlores.enable();
    item.popupFloresTexto.enable();
  }
  item.vasoDeFlores.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.popupFlores.disable();
    item.popupFloresTexto.disable();
  }

  item.popupFlores = new Game.Image("popupFlores.png");
  item.popupFlores.setPosition(1400, 210);
  item.popupFlores.setScale(0.32);
  item.popupFlores.disable();

  item.popupFloresTexto = new Game.Text(
    "Vaso de planta com água\n" +
    "parada. Este é um local\n" +
    "propício para a postura\n" +
    "de ovos e desenvolvi-\n" +
    "mento de larvas de mos-\n" +
    "quitos, como, por exem-\n" +
    "plo, o <i>Anopheles</i> sp,\n" +
    "vetor da malária."
    ,estiloInfoPopup);
  item.popupFloresTexto.setPosition(1315, 160);
  item.popupFloresTexto.setAnchor(0.5, 0.5);
  item.popupFloresTexto.setZorder(4);
  item.popupFloresTexto.disable();

  // Adiciona uma seta para levar a cena externa
  item.setaJanela = new Game.Item("seta.png");
  item.setaJanela.setPosition(1735, 480);
  item.setaJanela.setBrightness(220);
  item.setaJanela.setScale(0.3);
  item.setaJanela.setZorder(1);
  item.setaJanela.setAlpha(0);
  item.setaJanela.disable();
  item.setaJanela.onMouseOver = function() {
    scene[0].setSubtitle("Ambiente externo");
    item.setaJanela.setBrightness(255);
    item.popupFlores.disable();
    item.popupFloresTexto.disable();
  }
  item.setaJanela.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.setaJanela.setBrightness(220);
  }
  item.setaJanela.onClick = function(mouse) {
    somSeta();
    scene[0].setSubtitle("");
    changeScene(1); // Muda para a cena exterior
  }

  // Adiciona uma seta para levar ao armario
  item.setaArmario = new Game.Item("seta.png");
  item.setaArmario.setPosition(210, 480);
  item.setaArmario.setBrightness(220);
  item.setaArmario.setScale(0.3);
  item.setaArmario.setRotation(180);
  item.setaArmario.setZorder(1);
  item.setaArmario.setAlpha(0);
  item.setaArmario.disable();
  item.setaArmario.onMouseOver = function() {
    scene[0].setSubtitle("Armário");
    item.setaArmario.setBrightness(255);
    item.popupFlores.disable();
    item.popupFloresTexto.disable();
  }
  item.setaArmario.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.setaArmario.setBrightness(220);
  }
  item.setaArmario.onClick = function(mouse) {
    somSeta();
    scene[0].setSubtitle("");
    changeScene(2); // Muda para o armario
  }

  // Carrega ciclos
  carregaCicloEhistolytica();
  carregaCicloAscaris();
  carregaCicloPlasmodium();
  carregaCicloToxoplasmose();

  // Livro inicial
  item.livroOAIntroducao = new Game.Text(
    "Bem vindos ao Objeto de\n" +
    "Aprendizagem:"
  , estiloTitulo1 );
  item.livroOAIntroducao.setPosition(248, 350);

  item.livroOAIntroducaoTitulo = new Game.Text(
    "\"Aprendendo sobre\n" +
    "Parasitologia\""
  , estiloTitulo2);
  item.livroOAIntroducaoTitulo.setPosition(248, 470);

  item.intProf = new Game.Item("salaDeAula_caixaDeAreia.png");
  item.intProf .setPosition(1200, 430);
  item.intProf.setZorder(0);
  item.intProf.setBrightness(210);
  item.intProf.onMouseOver = function() {
    scene[0].setSubtitle("Instruções aos professores");
  }
  item.intProf.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  item.intProf.onClick = function() {
    item.intProf.setInteractive(false);
    item.intAluno.setInteractive(false);
    scene[0].setSubtitle("");
    item.livroOAIntroducao.changeAlpha(0, 600);
    item.livroOAIntroducaoTitulo.changeAlpha(0, 600);
    item.intProf.changeAlpha(0, 600);
    item.intAluno.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTitulo.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto1.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto2.changeAlpha(1, 600);
    item.livroPagina1.changeAlpha(1, 600);
    item.livroPagina2.setInteractive(true);
    item.livroPagina2.changeAlpha(1, 600);
  }

  item.intAluno = new Game.Item("salaDeAula_caixaDeAreia.png");
  item.intAluno .setPosition(1200, 550);
  item.intAluno.setZorder(0);
  item.intAluno.setBrightness(210);
  item.intAluno.onMouseOver = function() {
    scene[0].setSubtitle("Instruções aos alunos");
  }
  item.intAluno.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  item.intAluno.onClick = function() {
    item.intProf.setInteractive(false);
    item.intAluno.setInteractive(false);
    item.livroOAIntroducao.changeAlpha(0, 600);
    item.livroOAIntroducaoTitulo.changeAlpha(0, 600);
    item.intProf.changeAlpha(0, 600);
    item.intAluno.changeAlpha(0, 600);
    scene[0].setSubtitle("");
    item.fechaLivro.enable();
    item.fechaLivro.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTitulo3.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto6.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto7.changeAlpha(1, 600);
  }

  item.livroObjetoDeApendizagemTitulo = new Game.Text(
    "       O Objeto de Aprendizagem"
  , estiloTitulo);
  item.livroObjetoDeApendizagemTitulo.setPosition(248, 120);
  item.livroObjetoDeApendizagemTitulo.setAlpha(0);

  item.livroObjetoDeApendizagemTexto1 = new Game.Text(
    "     Os Objetos de Aprendizagem são uma\n" +
    "tecnologia recente que abre caminhos na\n" +
    "educação à distância e que serve de mate-\n" +
    "rial de apoio a aula presencial tradicional.\n" +
    "São elementos de uma nova metodologia\n" +
    "de ensino e aprendizagem baseada no uso\n" +
    "do computador e da Internet.\n" +
    "     Apesar de sua definição ainda ser vaga,\n" +
    "o consenso é de que o Objeto de Aprendi-\n" +
    "zagem deva possuir um propósito educa-\n" +
    "cional definido, um elemento que estimule\n" +
    "a reflexão do estudante e que sua constru-\n" +
    "ção seja de forma a facilitar a reutilização\n" +
    "dentro de outros contextos de aprendiza-\n" +
    "gem.\n" +
    "     Desta forma, as autoras apresentam o\n" +
    "presente Objeto de Aprendizagem em Pa-\n" +
    "rasitologia.\n" +
    "     O software (ou “jogo”) conta com regi-\n" +
    "ões clicáveis e interativas, as quais revela-\n" +
    "rão ao usuário informações adicionais so-"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto1.setPosition(248, 190);
  item.livroObjetoDeApendizagemTexto1.setAlpha(0);

  item.livroObjetoDeApendizagemTexto2 = new Game.Text(
    "bre o objeto interativo, como os ciclos de vida\n" +
    "dos parasitas em questão e as suas consequen-\n" +
    "tes doenças. Visualmente, o jogo é repleto de\n" +
    "imagens e se é intencionado que estas sejam\n" +
    "autoexplicativas, contando, num primeiro mo-\n" +
    "mento, com os auxílios das legendas.\n" +
    "     São expostas três telas: a principal, a sala\n" +
    "de aula, na qual serão encontradas representa-\n" +
    "ções de quatro doenças e seus respectivos pa-\n" +
    "rasitas. À direita da tela principal será exposto\n" +
    "o exterior da escola, com mais quatro doenças\n" +
    "e seus três parasitas. À esquerda da sala de au-\n" +
    "la será apresentada uma estante repleta de li-\n" +
    "vros interativos, nos quais serão explicadas as\n" +
    "teorias sobre o Parasitismo e cada parasita abor-\n" +
    "dado neste Objeto de Aprendizagem."
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto2.setPosition(990, 120);
  item.livroObjetoDeApendizagemTexto2.setAlpha(0);

  item.livroObjetoDeApendizagemTexto3 = new Game.Text(
    "Vamos lá!"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto3.setPosition(1414, 700);
  item.livroObjetoDeApendizagemTexto3.setAlpha(0);

  item.livroObjetoDeApendizagemTitulo2 = new Game.Text(
    "       Pagina 2"
  , estiloTitulo);
  item.livroObjetoDeApendizagemTitulo2.setPosition(248, 120);
  item.livroObjetoDeApendizagemTitulo2.setAlpha(0);

  item.livroObjetoDeApendizagemTexto4 = new Game.Text(
    "     Pagina2\n" +
    "tecnologia recente que abre caminhos na\n" +
    "educação à distância e que serve de mate-\n" +
    "rial de apoio a aula presencial tradicional.\n" +
    "São elementos de uma nova metodologia\n" +
    "de ensino e aprendizagem baseada no uso\n" +
    "do computador e da Internet.\n" +
    "     Apesar de sua definição ainda ser vaga,\n" +
    "o consenso é de que o Objeto de Aprendi-\n" +
    "zagem deva possuir um propósito educa-\n" +
    "cional definido, um elemento que estimule\n" +
    "a reflexão do estudante e que sua constru-\n" +
    "ção seja de forma a facilitar a reutilização\n" +
    "dentro de outros contextos de aprendiza-\n" +
    "gem.\n" +
    "     Desta forma, as autoras apresentam o\n" +
    "presente Objeto de Aprendizagem em Pa-\n" +
    "rasitologia.\n" +
    "     O software (ou “jogo”) conta com regi-\n" +
    "ões clicáveis e interativas, as quais revela-\n" +
    "rão ao usuário informações adicionais so-"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto4.setPosition(248, 190);
  item.livroObjetoDeApendizagemTexto4.setAlpha(0);

  item.livroObjetoDeApendizagemTexto5 = new Game.Text(
    "Pagina2\n" +
    "dos parasitas em questão e as suas consequen-\n" +
    "tes doenças. Visualmente, o jogo é repleto de\n" +
    "imagens e se é intencionado que estas sejam\n" +
    "autoexplicativas, contando, num primeiro mo-\n" +
    "mento, com os auxílios das legendas.\n" +
    "     São expostas três telas: a principal, a sala\n" +
    "de aula, na qual serão encontradas representa-\n" +
    "ções de quatro doenças e seus respectivos pa-\n" +
    "rasitas. À direita da tela principal será exposto\n" +
    "o exterior da escola, com mais quatro doenças\n" +
    "e seus três parasitas. À esquerda da sala de au-\n" +
    "la será apresentada uma estante repleta de li-\n" +
    "vros interativos, nos quais serão explicadas as\n" +
    "teorias sobre o Parasitismo e cada parasita abor-\n" +
    "dado neste Objeto de Aprendizagem."
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto5.setPosition(990, 120);
  item.livroObjetoDeApendizagemTexto5.setAlpha(0);

  item.livroObjetoDeApendizagemTitulo3 = new Game.Text(
    "       Intruções aos alunos"
  , estiloTitulo);
  item.livroObjetoDeApendizagemTitulo3.setPosition(248, 120);
  item.livroObjetoDeApendizagemTitulo3.setAlpha(0);

  item.livroObjetoDeApendizagemTexto6 = new Game.Text(
    "     Aluno\n" +
    "tecnologia recente que abre caminhos na\n" +
    "educação à distância e que serve de mate-\n" +
    "rial de apoio a aula presencial tradicional.\n" +
    "São elementos de uma nova metodologia\n" +
    "de ensino e aprendizagem baseada no uso\n" +
    "do computador e da Internet.\n" +
    "     Apesar de sua definição ainda ser vaga,\n" +
    "o consenso é de que o Objeto de Aprendi-\n" +
    "zagem deva possuir um propósito educa-\n" +
    "cional definido, um elemento que estimule\n" +
    "a reflexão do estudante e que sua constru-\n" +
    "ção seja de forma a facilitar a reutilização\n" +
    "dentro de outros contextos de aprendiza-\n" +
    "gem.\n" +
    "     Desta forma, as autoras apresentam o\n" +
    "presente Objeto de Aprendizagem em Pa-\n" +
    "rasitologia.\n" +
    "     O software (ou “jogo”) conta com regi-\n" +
    "ões clicáveis e interativas, as quais revela-\n" +
    "rão ao usuário informações adicionais so-"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto6.setPosition(248, 190);
  item.livroObjetoDeApendizagemTexto6.setAlpha(0);

  item.livroObjetoDeApendizagemTexto7 = new Game.Text(
    "Aluno\n" +
    "dos parasitas em questão e as suas consequen-\n" +
    "tes doenças. Visualmente, o jogo é repleto de\n" +
    "imagens e se é intencionado que estas sejam\n" +
    "autoexplicativas, contando, num primeiro mo-\n" +
    "mento, com os auxílios das legendas.\n" +
    "     São expostas três telas: a principal, a sala\n" +
    "de aula, na qual serão encontradas representa-\n" +
    "ções de quatro doenças e seus respectivos pa-\n" +
    "rasitas. À direita da tela principal será exposto\n" +
    "o exterior da escola, com mais quatro doenças\n" +
    "e seus três parasitas. À esquerda da sala de au-\n" +
    "la será apresentada uma estante repleta de li-\n" +
    "vros interativos, nos quais serão explicadas as\n" +
    "teorias sobre o Parasitismo e cada parasita abor-\n" +
    "dado neste Objeto de Aprendizagem."
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto7.setPosition(990, 120);
  item.livroObjetoDeApendizagemTexto7.setAlpha(0);

  item.livroPagina1 = new Game.Item("seta.png");
  item.livroPagina1.setPosition(110, 500);
  item.livroPagina1.setBrightness(120);
  item.livroPagina1.setScale(0.3);
  item.livroPagina1.setZorder(0);
  item.livroPagina1.setAlpha(0);
  item.livroPagina1.setRotation(180);
  item.livroPagina1.setInteractive(false);
  item.livroPagina1.enable();
  item.livroPagina1.onMouseOver = function() {
    scene[0].setSubtitle("Página anterior");
    item.livroPagina1.setBrightness(255);
  }
  item.livroPagina1.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.livroPagina1.setBrightness(220);
  }
  item.livroPagina1.onClick = function(mouse) {
    somSeta();
    item.livroObjetoDeApendizagemTitulo.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto1.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto2.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto3.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTitulo2.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto4.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto5.changeAlpha(0, 600);
    item.livroPagina1.setInteractive(false);
    item.livroPagina1.setBrightness(120);
    item.livroPagina2.enable();
    item.livroPagina3.disable();
    /*item.livroPagina2.setInteractive(true);
    item.livroPagina2.setBrightness(220);*/
    item.fechaLivro.disable();
    item.fechaLivro.changeAlpha(0, 600);
    scene[0].setSubtitle("");
  }

  item.livroPagina2 = new Game.Item("seta.png");
  item.livroPagina2.setPosition(1670, 500);
  item.livroPagina2.setBrightness(220);
  item.livroPagina2.setScale(0.3);
  item.livroPagina2.setZorder(0);
  item.livroPagina2.setAlpha(0);
  item.livroPagina2.enable();
  item.livroPagina2.onMouseOver = function() {
    scene[0].setSubtitle("Próxima página");
    item.livroPagina2.setBrightness(255);
  }
  item.livroPagina2.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.livroPagina2.setBrightness(220);
  }
  item.livroPagina2.onClick = function(mouse) {
    somSeta();
    item.livroObjetoDeApendizagemTitulo.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto1.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto2.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto3.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTitulo2.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto4.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto5.changeAlpha(1, 600);
    item.livroPagina1.setInteractive(true);
    item.livroPagina1.setBrightness(220);
    item.livroPagina2.disable();
    item.livroPagina3.enable();
    /*item.livroPagina2.setInteractive(false);
    item.livroPagina2.setBrightness(120);*/
    scene[0].setSubtitle("");
  }

  item.livroPagina3 = new Game.Item("seta.png");
  item.livroPagina3.setPosition(1670, 500);
  item.livroPagina3.setBrightness(220);
  item.livroPagina3.setScale(0.3);
  item.livroPagina3.setZorder(0);
  item.livroPagina3.setAlpha(1);
  item.livroPagina3.disable();
  item.livroPagina3.onMouseOver = function() {
    scene[0].setSubtitle("Intruções aos alunos");
    item.livroPagina3.setBrightness(255);
  }
  item.livroPagina3.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.livroPagina2.setBrightness(220);
  }
  item.livroPagina3.onClick = function(mouse) {
    somSeta();
    item.livroObjetoDeApendizagemTitulo2.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto4.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto5.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTitulo3.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto6.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto7.changeAlpha(1, 600);
    item.livroPagina1.disable();
    item.livroPagina2.disable();
    item.livroPagina3.disable();
    scene[0].setSubtitle("");
  }

  item.livroAberto = new Game.Item("livroAberto.png");
  item.livroAberto.setZorder(6);
  item.livroAberto.setPosition(960, 540);
  item.livroAberto.enable();
  item.livroAberto.setAlpha(1);

  item.fechaLivro = new Game.Item("botaoFechar.png");
  item.fechaLivro.setPosition(1240, 800);
  item.fechaLivro.setZorder(1);
  item.fechaLivro.setBrightness(200);
  item.fechaLivro.setScale(0.14);
  item.fechaLivro.disable();
  item.fechaLivro.setAlpha(0);
  item.fechaLivro.onMouseOver = function() {
    item.fechaLivro.setBrightness(255);
  }
  item.fechaLivro.onMouseOut = function() {
    item.fechaLivro.setBrightness(200);
  }
  item.fechaLivro.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    // Esconde o livro
    item.livroAberto.changeAlpha(0, 600);
    item.fechaLivro.changeAlpha(0, 600);

    // Esconde o texto
    item.livroObjetoDeApendizagemTitulo2.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto4.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto5.changeAlpha(0, 600);

    item.livroPagina1.changeAlpha(0, 600);
    item.livroPagina2.changeAlpha(0, 600);

    // Mostra setas da sala de aula
    item.setaJanela.enable();
    item.setaArmario.enable();
    item.setaJanela.changeAlpha(1, 600);
    item.setaArmario.changeAlpha(1, 600);

    setTimeout(function() {
      item.livroAberto.disable();
      item.fechaLivro.disable();
      item.livroObjetoDeApendizagemTitulo2.disable();
      item.livroObjetoDeApendizagemTexto4.disable();
      item.livroObjetoDeApendizagemTexto5.disable();
      item.livroPagina1.disable();
      item.livroPagina2.disable();

      enableInteractiveness();
    }, 650);
  }

  scene[0].addAllItemsToScene();
}
