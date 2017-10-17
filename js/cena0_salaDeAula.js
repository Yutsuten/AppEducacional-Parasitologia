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

  item.intProf = new Game.Item("professoresInstrucoes.png");
  item.intProf.setPosition(1270, 400);
  item.intProf.setZorder(0);
  item.intProf.setBrightness(210);
  item.intProf.onMouseOver = function() {
    scene[0].setSubtitle("Instruções aos professores");
    item.intProfHover.enable();
  }
  item.intProf.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.intProfHover.disable();
  }
  item.intProf.onClick = function() {
    somClique();
    item.intProf.setInteractive(false);
    item.intAluno.setInteractive(false);
    item.intProfHover.disable();
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

  item.intProfHover = new Game.Item("professoresInstrucoesHover.png");
  item.intProfHover.setPosition(1270, 400);
  item.intProfHover.setZorder(-1);
  item.intProfHover.setBrightness(210);
  item.intProfHover.setInteractive(false);
  item.intProfHover.disable(false);

  item.intAluno = new Game.Item("alunosIntrucoes.png");
  item.intAluno.setPosition(1270, 580);
  item.intAluno.setZorder(0);
  item.intAluno.setBrightness(210);
  item.intAluno.onMouseOver = function() {
    scene[0].setSubtitle("Instruções aos alunos");
    item.intAlunoHover.enable();
  }
  item.intAluno.onMouseOut = function() {
    scene[0].setSubtitle("");
    item.intAlunoHover.disable();
  }
  item.intAluno.onClick = function() {
    somClique();
    item.intProf.setInteractive(false);
    item.intAluno.setInteractive(false);
    item.intAlunoHover.disable();
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
    item.livroObjetoDeApendizagemTexto8.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto9.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto10.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto11.changeAlpha(1, 600);
  }

  item.intAlunoHover = new Game.Item("alunosIntrucoesHover.png");
  item.intAlunoHover.setPosition(1270, 580);
  item.intAlunoHover.setZorder(-1);
  item.intAlunoHover.setBrightness(210);
  item.intAlunoHover.setInteractive(false);
  item.intAlunoHover.disable();

  item.livroObjetoDeApendizagemTitulo = new Game.Text(
    "       O Objeto de Aprendizagem"
  , estiloTitulo);
  item.livroObjetoDeApendizagemTitulo.setPosition(248, 120);
  item.livroObjetoDeApendizagemTitulo.setAlpha(0);

  item.livroObjetoDeApendizagemTexto1 = new Game.Text(
    "     Professor(a), os Objetos de Aprendizagem\n" +
    "(OAs) são materiais didáticos virtuais que\n" +
    "servem como apoio à aula presencial tradi-\n" +
    "cional ou objeto de utilização no Ensino a\n" +
    "distância. são elementos de uma nova meto-\n" +
    "dologia de ensino-aprendizagem baseada no\n" +
    "uso do computador e da internet.\n" +
    "     O OA \"Aprendendo sobre Parasitologia\"\n" +
    "tem como objetivo a potencialização do ensino-\n" +
    "aprendizagem dos usuários. Desta forma, o\n" +
    "software conta com elementos clicáveis e inte-\n" +
    "rativos, os quais revelarão ao usuário informa-\n" +
    "ções teóricas sobre as parasitoses, quais são\n" +
    "seus causadores e como é a ecologia dos mesmos.\n" +
    "     Antes de liberar a navegação aos seus alunos,\n" +
    "defina o que é um Objeto de Aprendizagem,\n" +
    "pois nas “Instruções aos alunos” este termo é\n" +
    "amplamente utilizado.\n" +
    "     Visualmente, o jogo é repleto de imagens, as \n" +
    "quais possuem legendas, para uma maior in-\n" +
    "dependência do aluno durante a sua navega-"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto1.setPosition(248, 190);
  item.livroObjetoDeApendizagemTexto1.setAlpha(0);

  item.livroObjetoDeApendizagemTexto2 = new Game.Text(
    "ção pelo OA. São expostas três telas: a sala de\n" +
    "aula (principal), o exterior da escola (à direita)\n" +
    "e o armário (à esquerda). Nas duas primeiras\n" +
    "cenas os indivíduos representados estão expos-\n" +
    "tos a fatores ambientais e sociais favoráveis ao\n" +
    "acometimento de parasitoses. Neste contexto,\n" +
    "doenças como Teníase e Cisticercose estão rela-\n" +
    "cionadas aos fatores ambientais e sociais repre-\n" +
    "sentados na cena exterior à sala de aula, en-\n" +
    "quanto doenças como Ascaridíase e Toxoplas-\n" +
    "mose são representadas dentro da sala de aula.\n" +
    "     Professor(a), o OA conta ainda com um ar-\n" +
    "mário, onde estão representados livros didáticos\n" +
    "com conteúdos mais explicativos sobre a Parasi-\n" +
    "tologia e sobre cada doença abordada. O OA está\n" +
    "trabalhando com termos científicos, como nomes\n" +
    "de parasitas e suas classificações. Não há termos\n" +
    "reducionistas ou simplificados, entretanto, todos\n" +
    "os termos estão explicados nos livros didáticos\n" +
    "presentes no armário, desta forma, estimule seus\n" +
    "alunos a acessarem esta cena, para que eles resol-\n" +
    "vam de forma ativa e independente a maioria de\n" +
    "suas dúvidas."
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto2.setPosition(990, 120);
  item.livroObjetoDeApendizagemTexto2.setAlpha(0);

  item.livroObjetoDeApendizagemTitulo3 = new Game.Text(
    "       Intruções aos alunos"
  , estiloTitulo);
  item.livroObjetoDeApendizagemTitulo3.setPosition(248, 120);
  item.livroObjetoDeApendizagemTitulo3.setAlpha(0);

  item.livroObjetoDeApendizagemTexto6 = new Game.Text(
    "     <big>Como navegar pelo Objeto de\n" +
    "Aprendizagem:</big>"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemTexto6.setPosition(248, 190);
  item.livroObjetoDeApendizagemTexto6.setAlpha(0);

  item.livroObjetoDeApendizagemTexto7 = new Game.Text(
    "     <c1>- Há vários elementos clicáveis nas\n" +
    "cenas que se acenderão quando o mou-\n" +
    "se passar por eles. Ao clicar, você verá\n" +
    "o ciclo de vida do parasita correspon-\n" +
    "dente à doença que ele causa;</c1>"
    , estiloTextoLivro1);
  item.livroObjetoDeApendizagemTexto7.setPosition(248, 300);
  item.livroObjetoDeApendizagemTexto7.setAlpha(0);

  item.livroObjetoDeApendizagemTexto8 = new Game.Text(
    "     <c2>- Ao final de cada ciclo de cada doen-\n" +
    "ça, aparecerão informações sobre os mo-\n" +
    "dos de transmissão e prevenção e os sin-\n" +
    "tomas das doenças, juntamente com o\n" +
    "desenho do indivíduo sintomático</c2>"
    , estiloTextoLivro1);
  item.livroObjetoDeApendizagemTexto8.setPosition(248, 700);
  item.livroObjetoDeApendizagemTexto8.setAlpha(0);

  item.livroObjetoDeApendizagemTexto9 = new Game.Text(
    "     <c3>- Leia as legendas das imagens e dos\n" +
    "ciclos de vida que vão aparecer quando\n" +
    "você passar o mouse por cima deles;</c3>"
    , estiloTextoLivro1);
  item.livroObjetoDeApendizagemTexto9.setPosition(248, 540);
  item.livroObjetoDeApendizagemTexto9.setAlpha(0);

  item.livroObjetoDeApendizagemTexto10 = new Game.Text(
    "     <c4>- Navegue pelos desenhos do Objeto\n" +
    "de Aprendizagem: eles terão informações\n" +
    "adicionais para te ajudar a compreender\n" +
    "como as doenças podem ser contraídas;</c4>"
    , estiloTextoLivro1);
  item.livroObjetoDeApendizagemTexto10.setPosition(990, 120);
  item.livroObjetoDeApendizagemTexto10.setAlpha(0);

  item.livroObjetoDeApendizagemTexto11 = new Game.Text(
    "     <c5>- Se tiver alguma dúvida, leia os li-\n" +
    "vros na cena do \"Armário\". Lá existem \n" +
    "informações extras para te ajudar.\n" +
    "Se ainda houver dúvida, pergunte ao\n" +
    "seu professor.</c5>"
    , estiloTextoLivro1);
  item.livroObjetoDeApendizagemTexto11.setPosition(990, 340);
  item.livroObjetoDeApendizagemTexto11.setAlpha(0);

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
    item.livroPagina1.setInteractive(false);
    item.livroPagina1.setBrightness(120);
    item.livroPagina2.enable();
    item.livroPagina2.setInteractive(true);
    item.livroPagina2.setBrightness(220);
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
    scene[0].setSubtitle("Intruções aos alunos");
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
    item.livroObjetoDeApendizagemTitulo3.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto6.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto7.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto8.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto9.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto10.changeAlpha(1, 600);
    item.livroObjetoDeApendizagemTexto11.changeAlpha(1, 600);
    item.fechaLivro.enable();
    item.fechaLivro.changeAlpha(1, 600);
    item.livroPagina1.disable();
    item.livroPagina2.disable();
    scene[0].setSubtitle("");
  }

  item.livroAberto = new Game.Item("livroAberto.png");
  item.livroAberto.setZorder(6);
  item.livroAberto.setPosition(960, 540);
  item.livroAberto.enable();
  item.livroAberto.setAlpha(1);

  item.fechaLivroHover = new Game.Item("comecarHover.png");
  item.fechaLivroHover.setPosition(1270, 750);
  item.fechaLivroHover.setZorder(0);
  item.fechaLivroHover.setInteractive(false);
  item.fechaLivroHover.disable();

  item.fechaLivro = new Game.Item("comecar.png");
  item.fechaLivro.setPosition(1270, 750);
  item.fechaLivro.setZorder(1);
  item.fechaLivro.disable();
  item.fechaLivro.setAlpha(0);
  item.fechaLivro.onMouseOver = function() {
    item.fechaLivroHover.enable();
  }
  item.fechaLivro.onMouseOut = function() {
    item.fechaLivroHover.disable();
  }
  item.fechaLivro.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    // Esconde o livro
    item.livroAberto.changeAlpha(0, 600);
    item.fechaLivro.changeAlpha(0, 600);
    item.fechaLivroHover.disable();

    // Esconde o texto
    item.livroObjetoDeApendizagemTitulo3.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto6.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto7.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto8.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto9.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto10.changeAlpha(0, 600);
    item.livroObjetoDeApendizagemTexto11.changeAlpha(0, 600);

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
      item.livroObjetoDeApendizagemTitulo3.disable();
      item.livroPagina1.disable();
      item.livroPagina2.disable();

      enableInteractiveness();
    }, 650);
  }

  scene[0].addAllItemsToScene();
}
