function carregaLivroAberto() {

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  var livro = new Game.Bookshelf();
  var tituloLivroAberto = null;

  scene[2].openBook = function(titulo) {
    disableInteractiveness();

    // Salva nome do livro
    tituloLivroAberto = titulo;

    // Desabilita interação com os livros do armario
    groupDisable(scene[2].livros);
    item.setaSalaDeAula.setInteractive(false);

    // Mostra o livro
    item.livroAberto.enable();
    item.livroAberto.changeAlpha(1, 600);
    item.fechaLivro.enable();
    item.fechaLivro.changeAlpha(1, 600);

    livro[tituloLivroAberto].open();

    setTimeout(function() {
      enableInteractiveness();
    }, 700);
  }

  // Conteudo dos livros

  // LIVRO: OBJETO DE APRENDIZAGEM
  livro.newBook("ObjetoDeApendizagem");

  /*livro.ObjetoDeApendizagem.abre = function() {
    paginaAtualIndice = 0;
    paginaAtual = item.livroObjetoDeApendizagemPagina0;
    paginaAtual.show();
    livroAtual = livro.ObjetoDeApendizagem;
  }
  livro.ObjetoDeApendizagem.fecha = function() {
    paginaAtual.hide();
  }
  livro.ObjetoDeApendizagem.proximo = function() {
    paginaAtualIndice++;
  }*/

  // Conteúdo do livro Objeto de Aprendizagem
  livro.ObjetoDeApendizagem.pagina[0] = new Game.Page();
  livro.ObjetoDeApendizagem.pagina[0].titulo = new Game.Text(
    "       O Objeto de Aprendizagem"
  , estiloTitulo);
  /*item.livroObjetoDeApendizagemPagina0 = new Game.Page();
  item.livroObjetoDeApendizagemPagina0.titulo = new Game.Text(
    "       O Objeto de Aprendizagem"
  , estiloTitulo);
  item.livroObjetoDeApendizagemPagina0.titulo.setPosition(248, 120);
  item.livroObjetoDeApendizagemPagina0.titulo.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.titulo.disable();

  item.livroObjetoDeApendizagemPagina0.texto1 = new Game.Text(
    "     Os Objetos de Aprendizagem são uma\n" +
    "tecnologia recente que abre caminhos na\n" +
    "educação à distância e que serve de material\n" +
    "de apoio a aula presencial tradicional. São\n" +
    "elementos de uma nova metodologia de\n" +
    "ensino e aprendizagem baseada no uso do\n" +
    "computador e da Internet.\n" +
    "     Apesar de sua definição ainda ser vaga, o\n" +
    "o consenso é de que o Objeto de Aprendiza-\n" +
    "gem deva possuir um propósito educacional\n" +
    "definido, um elemento que estimule a refle-\n" +
    "xão do estudante e que sua construção seja\n" +
    "de forma a facilitar a reutilização dentro de\n" +
    "outros contextos de aprendizagem.\n" +
    "     Desta forma, as autoras apresentam o\n" +
    "presente Objeto de Aprendizagem em Para-\n" +
    "sitologia.\n" +
    "     O software (ou “jogo”) conta com regiões\n" +
    "clicáveis e interativas, as quais revelarão ao\n" +
    "usuário informações adicionais sobre o objeto\n" +
    "interativo, como os ciclos de vida dos para-\n" +
    "sitas em questão e as suas consequentes doen-"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemPagina0.texto1.setPosition(248, 190);
  item.livroObjetoDeApendizagemPagina0.texto1.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.texto1.disable();

  item.livroObjetoDeApendizagemPagina0.texto2 = new Game.Text(
    "ças. Visualmente, o jogo é repleto de imagens\n" +
    "e se é intencionado que estas sejam autoexpli-\n" +
    "cativas, contando, num primeiro momento,\n" +
    "com os auxílios das legendas.\n" +
    "     São expostas três telas: a principal, a sala\n" +
    "de aula, na qual serão encontradas representa-\n" +
    "ções de quatro doenças e seus respectivos\n" +
    "parasitas. À direita da tela principal será ex-\n" +
    "posto o exterior da escola, com mais quatro\n" +
    "doenças e seus três parasitas. À esquerda da\n" +
    "sala de aula será apresentada uma estante re-\n" +
    "pleta de livros interativos, nos quais serão\n" +
    "explicadas as teorias sobre o Parasitismo e\n" +
    "cada parasita abordado neste Objeto de Apren-\n" +
    "dizagem."
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemPagina0.texto2.setPosition(990, 120);
  item.livroObjetoDeApendizagemPagina0.texto2.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.texto2.disable();

  item.livroObjetoDeApendizagemPagina0.texto3 = new Game.Text(
    "Vamos lá!"
    , estiloTextoLivro);
  item.livroObjetoDeApendizagemPagina0.texto3.setPosition(1414, 669);
  item.livroObjetoDeApendizagemPagina0.texto3.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.texto3.disable();*/

  // LIVRO: PARASITOLOGIA
  /*livro.Parasitologia = {};
  livro.Parasitologia.abre = function() {
    item.livroParasitologiaPagina0.show();
    livroAtual = livro.Parasitologia;
  }
  livro.Parasitologia.fecha = function() {
    item.livroParasitologiaPagina0.hide();
  }*/

  // Conteúdo do livro Objeto de Aprendizagem
  item.livroParasitologiaPagina0 = new Game.Page();
  item.livroParasitologiaPagina0.titulo = new Game.Text(
    "                   Parasitologia"
  , estiloTitulo);
  item.livroParasitologiaPagina0.titulo.setPosition(248, 120);
  item.livroParasitologiaPagina0.titulo.setAlpha(0);
  item.livroParasitologiaPagina0.titulo.disable();

  item.livroParasitologiaPagina0.texto1 = new Game.Text(
    "     A parasitologia é o estudo dos parasitas\n" +
    "animais e vegetais e da relação entre parasi-\n" +
    "tas e seus hospedeiros.\n" +
    "     O parasitismo é a associação entre os se-\n" +
    "res vivos, na qual existe unilateralidade de\n" +
    "benefícios, ou seja, apenas um dos lados é\n" +
    "beneficiado. Neste sentido, o hospedeiro\n" +
    "provê abrigo e proteção ao parasita, o qual\n" +
    "prejudica e promove danos ao hospedeiro.\n" +
    "De um modo geral, afirma-se que a associa-\n" +
    "ção parasitária tende ao equilíbrio porque se\n" +
    "o hospedeiro morre, o parasita também morre.\n" +
    "Entretanto, percebe-se que na prática tal fato\n" +
    "não ocorre, visto que ao evitar a morte, o pa-\n" +
    "rasita não mata seu hospedeiro.\n" +
    "     Para haver doenças parasitárias é necessá-\n" +
    "rio que existam alguns fatores, quanto:\n" +
    "     - ao parasito: como o número de indivídu-\n" +
    "os que atingirão o hospedeiro, a sua virulência\n" +
    "e a localização do parasito;\n" +
    "     - ao hospedeiro: idade, nutrição, tipo de\n" +
    "resposta imune."
    , estiloTextoLivro);
  item.livroParasitologiaPagina0.texto1.setPosition(248, 190);
  item.livroParasitologiaPagina0.texto1.setAlpha(0);
  item.livroParasitologiaPagina0.texto1.disable();

  item.livroParasitologiaPagina0.texto2 = new Game.Text(
    "     A ação do parasita no hospedeiro é de gran-\n" +
    "de importância na parasitologia, visto que é\n" +
    "através dela que ocorrem as doenças. Dentre os\n" +
    "tipos de ação dos parasitos, os principais são:\n" +
    "     - Mecânica: ação obstrutiva ou destrutiva\n" +
    "que parasito exerce sobre algum órgão do hos-\n" +
    "pedeiro;\n" +
    "      - Espoliativa: ocorre quando o parasito re-\n" +
    "tira nutrientes do hospedeiro;\n" +
    "      - Traumática: quando o parasito promove\n" +
    "traumas no hospedeiro, como fixação e migra-\n" +
    "ção;\n" +
    "      - Tóxica: produtos do metabolismo do pa-\n" +
    "rasito é tóxico ao hospedeiro."
    , estiloTextoLivro);
  item.livroParasitologiaPagina0.texto2.setPosition(990, 120);
  item.livroParasitologiaPagina0.texto2.setAlpha(0);
  item.livroParasitologiaPagina0.texto2.disable();

  item.livroParasitologiaPagina0.texto3 = new Game.Text(
    "     Os helmintos (ou vermes) são grandes e vi-\n" +
    "síveis a olho nu. Podem ser metazoários, para-\n" +
    "sitos de animais, vegetais ou de vida livre.\n" +
    "     São classificados em quatro filos:\n" +
    "     - Platyelminthes: vermes achatados, os\n" +
    "quais se subdividem em duas classes: Trema-\n" +
    "toda: vermes em forma de folha e Cestoda:\n" +
    "vermes em forma de fita."
    , estiloTextoLivro);
  item.livroParasitologiaPagina0.texto3.setPosition(990, 650);
  item.livroParasitologiaPagina0.texto3.setAlpha(0);
  item.livroParasitologiaPagina0.texto3.disable();

  item.livroParasitologiaPagina1 = new Game.Page();
  item.livroParasitologiaPagina1.texto1 = new Game.Text(
    "     YYYYYYYYY é o estudo dos parasitas\n" +
    "animais e vegetais e da relação entre parasi-\n" +
    "tas e seus hospedeiros.\n" +
    "     O parasitismo é a associação entre os se-\n" +
    "res vivos, na qual existe unilateralidade de\n" +
    "benefícios, ou seja, apenas um dos lados é\n" +
    "beneficiado. Neste sentido, o hospedeiro\n" +
    "provê abrigo e proteção ao parasita, o qual\n" +
    "prejudica e promove danos ao hospedeiro.\n" +
    "De um modo geral, afirma-se que a associa-\n" +
    "ção parasitária tende ao equilíbrio porque se\n" +
    "o hospedeiro morre, o parasita também morre.\n" +
    "Entretanto, percebe-se que na prática tal fato\n" +
    "não ocorre, visto que ao evitar a morte, o pa-\n" +
    "rasita não mata seu hospedeiro.\n" +
    "     Para haver doenças parasitárias é necessá-\n" +
    "rio que existam alguns fatores, quanto:\n" +
    "     - ao parasito: como o número de indivídu-\n" +
    "os que atingirão o hospedeiro, a sua virulência\n" +
    "e a localização do parasito;\n" +
    "     - ao hospedeiro: idade, nutrição, tipo de\n" +
    "resposta imune."
    , estiloTextoLivro);
  item.livroParasitologiaPagina1.texto1.setPosition(248, 190);
  item.livroParasitologiaPagina1.texto1.setAlpha(0);
  item.livroParasitologiaPagina1.texto1.disable();

  // Cria os itens com o conteudo dos livros
  livro.createItems();

  // Margem direita - Para debug
  item.margemDir1 = new Game.Line(800, 120, 800, 950, 2);
  item.margemDir1.setZorder(1);

  item.margemDir2 = new Game.Line(1550, 120, 1550, 950, 2);
  item.margemDir2.setZorder(1);

  // Margem inferior
  item.margemInf = new Game.Line(220, 935, 1580, 935, 2);
  item.margemInf.setZorder(1);

  // Imagens do livro e do X de fechar
  item.livroAberto = new Game.Image("livroAberto.png");
  item.livroAberto.setZorder(4);
  item.livroAberto.setPosition(960, 540);
  item.livroAberto.setAlpha(0);
  item.livroAberto.disable();

  item.fechaLivro = new Game.Item("botaoFechar.png");
  item.fechaLivro.setPosition(1840, 70);
  item.fechaLivro.setZorder(1);
  item.fechaLivro.setAlpha(0);
  item.fechaLivro.disable();
  item.fechaLivro.onMouseOver = function() {
    item.fechaLivro.addGlow();
  }
  item.fechaLivro.onMouseOut = function() {
    item.fechaLivro.removeGlow();
  }
  item.fechaLivro.onClick = function(mouse) {
    disableInteractiveness();

    // Habilita interação com os livros do armario
    groupEnable(scene[2].livros);
    item.setaSalaDeAula.setInteractive(true);

    // Esconde o livro
    item.livroAberto.changeAlpha(0, 600);
    item.fechaLivro.changeAlpha(0, 600);

    // Esconde o texto
    livro[tituloLivroAberto].close();

    setTimeout(function() {
      item.livroAberto.disable();
      item.fechaLivro.disable();
      enableInteractiveness();
    }, 700);
  }

}
