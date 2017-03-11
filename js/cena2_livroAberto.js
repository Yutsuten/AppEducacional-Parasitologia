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

  // Objeto de Aprendizagem: Pagina 0
  livro.ObjetoDeApendizagem.pagina[0] = new Game.Page();

  livro.ObjetoDeApendizagem.pagina[0].titulo = new Game.Text(
    "       O Objeto de Aprendizagem"
  , estiloTitulo);
  livro.ObjetoDeApendizagem.pagina[0].titulo.setPosition(248, 120);

  livro.ObjetoDeApendizagem.pagina[0].texto1 = new Game.Text(
    "     Os Objetos de Aprendizagem são uma tec-\n" +
    "nologia recente que abre caminhos na educa-\n" +
    "ção à distância e que serve de material de\n" +
    "apoio a aula presencial tradicional. São ele-\n" +
    "mentos de uma nova metodologia de ensino\n" +
    "e aprendizagem baseada no uso do computa-\n" +
    "dor e da Internet.\n" +
    "     Apesar de sua definição ainda ser vaga, o\n" +
    "o consenso é de que o Objeto de Aprendiza-\n" +
    "gem deva possuir um propósito educacional\n" +
    "definido, um elemento que estimule a refle-\n" +
    "xão do estudante e que sua construção seja\n" +
    "de forma a facilitar a reutilização dentro de\n" +
    "outros contextos de aprendizagem.\n" +
    "     Desta forma, as autoras apresentam o\n" +
    "presente Objeto de Aprendizagem em Parasi-\n" +
    "tologia.\n" +
    "     O software (ou “jogo”) conta com regiões\n" +
    "clicáveis e interativas, as quais revelarão ao\n" +
    "usuário informações adicionais sobre o objeto\n" +
    "interativo, como os ciclos de vida dos para-\n" +
    "sitas em questão e as suas consequentes doen-"
    , estiloTextoLivro);
  livro.ObjetoDeApendizagem.pagina[0].texto1.setPosition(248, 190);

  livro.ObjetoDeApendizagem.pagina[0].texto2 = new Game.Text(
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
  livro.ObjetoDeApendizagem.pagina[0].texto2.setPosition(990, 120);

  livro.ObjetoDeApendizagem.pagina[0].texto3 = new Game.Text(
    "Vamos lá!"
    , estiloTextoLivro);
  livro.ObjetoDeApendizagem.pagina[0].texto3.setPosition(1414, 669);

  // LIVRO: PARASITOLOGIA
  livro.newBook("Parasitologia");

  // Parasitologia: Pagina 0
  livro.Parasitologia.pagina[0] = new Game.Page();

  livro.Parasitologia.pagina[0].titulo = new Game.Text(
    "                   Parasitologia"
  , estiloTitulo);
  livro.Parasitologia.pagina[0].titulo.setPosition(248, 120);

  livro.Parasitologia.pagina[0].texto1 = new Game.Text(
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
  livro.Parasitologia.pagina[0].texto1.setPosition(248, 190);

  livro.Parasitologia.pagina[0].texto2 = new Game.Text(
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
  livro.Parasitologia.pagina[0].texto2.setPosition(990, 120);

  livro.Parasitologia.pagina[0].texto3 = new Game.Text(
    "     Os helmintos (ou vermes) são grandes e vi-\n" +
    "síveis a olho nu. Podem ser metazoários, para-\n" +
    "sitos de animais, vegetais ou de vida livre.\n" +
    "     São classificados em quatro filos:\n" +
    "     - Platyelminthes: vermes achatados, os\n" +
    "quais se subdividem em duas classes: Trema-\n" +
    "toda: vermes em forma de folha e Cestoda:\n" +
    "vermes em forma de fita."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[0].texto3.setPosition(990, 650);

  // Parasitologia: Pagina 1
  livro.Parasitologia.pagina[1] = new Game.Page();

  livro.Parasitologia.pagina[1].texto1 = new Game.Text(
    "     - Nematoda: vermes redondos, os quais se\n" +
    "subdividem em: Adenophorea (não-parasitas\n" +
    "do ser humano) e Sercenentea (parasitam o\n" +
    "Homem e animais).\n" +
    "      - Acanthocephala: vermes pseudoceloma-\n" +
    "dos e pseudossegmentados.\n" +
    "      - Annelida: grupo de metazoários, como a\n" +
    "classe Oligochaeta (minhocas) e Hirudinea\n" +
    "(sanguessugas).\n" +
    "      No interior, ou não, de um hospedeiro, o\n" +
    "parasita se desenvolve por meio de seu ciclo\n" +
    "biológico. Como resultado da evolução dos\n" +
    "parasitas, algumas fases de seus ciclos bioló-\n" +
    "gicos são complicadas e outras mais simples,\n" +
    "obtendo, de uma forma ou de outra, sucesso\n" +
    "em sua reprodução e dispersão."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[1].texto1.setPosition(248, 120);

  livro.Parasitologia.pagina[1].titulo = new Game.Text(
    "      Glossário"
  , estiloTitulo);
  livro.Parasitologia.pagina[1].titulo.setPosition(248, 680);

  livro.Parasitologia.pagina[1].texto2 = new Game.Text(
    "     - Agente infeccioso: todo parasito capaz de\n" +
    "produzir infecção ou doença infecciosa.\n" +
    "     - Agente etiológico: é o agente causador ou\n" +
    "responsável pela origem da doença. Sendo as-\n" +
    "sim, pode respresentar um fungo, bactéria, ví-\n" +
    "rus, protozoário ou helminto."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[1].texto2.setPosition(248, 720);

  livro.Parasitologia.pagina[1].tabela = new Game.Image("tabelaParasitologia.png");
  livro.Parasitologia.pagina[1].tabela.setPosition(1270, 270);
  livro.Parasitologia.pagina[1].tabela.setScale(1.1);
  livro.Parasitologia.pagina[1].tabela.setTint(200, 194, 177);

  livro.Parasitologia.pagina[1].legendaTabela = new Game.Text(
    "Tabela referente aos organismos\n" +
    "que parasitam os humanos"
    , estiloLegenda);
  livro.Parasitologia.pagina[1].legendaTabela.setPosition(1260, 460);
  livro.Parasitologia.pagina[1].legendaTabela.setAnchor(0.5, 0.5);

  livro.Parasitologia.pagina[1].texto3 = new Game.Text(
    "     - Contaminação: é a presença de um agente\n" +
    "infeccioso na superfície do corpo, roupas, brin-\n" +
    "quedos, água, alimentos etc.\n" +
    "     - Fase aguda: corresponde ao período logo\n" +
    "após a infecção, no qual os sintomas são mais\n" +
    "marcantes (febre alta, dores de cabeça e abdo-\n" +
    "minais etc). É um período de definição: o indi-\n" +
    "víduo ou se cura, ou entra na fase crônica ou \n" +
    "falece.\n" +
    "     - Fase crônica: período que se segue à fase\n" +
    "aguda; caracteriza-se pela diminuição dos sin-\n" +
    "tomas e por um equilíbrio elativo entre o hos-"
    , estiloTextoLivro);
  livro.Parasitologia.pagina[1].texto3.setPosition(990, 520);

  // Parasitologia: Pagina 2
  livro.Parasitologia.pagina[2] = new Game.Page();

  livro.Parasitologia.pagina[2].texto1 = new Game.Text(
    "pedeiro e o parasita. Este equilíbrio pode ser\n" +
    "quebrado em favor de amobos os lados.\n" +
    "      - Hospedeiro definitivo: o hospedeiro é\n" +
    "aquele que contém o parasito. O hospedeiro\n" +
    "definitivo é o que apresenta o parasito em sua\n" +
    "fase matura ou em fase de atividade sexual.\n" +
    "Exemplo: o hospedeiro definitivo de <i>T. gondii</i>\n" +
    "é o gato, enquanto que o da <i>Taenia</i> sp é o ser\n" +
    "humano.\n" +
    "      - Hospedeiro intermediário: é aquele que\n" +
    "possui o parasito em sua forma larvária ou as-\n" +
    "sexuada. Exemplo: os bovinos ou suínos são\n" +
    "hospedeiros intermediários de <i>Taenia</i> sp e o\n" +
    "humano do <i>Plasmodium</i> sp.\n" +
    "      - Infecção: penetração e desenvolvimento\n" +
    "de um agente infeccioso (vírus, bactérias, pro-\n" +
    "tozoários ou helmintos) dentro de um organis-\n" +
    "mo.\n" +
    "      - Patogenia: é o mecanismo pelo qual um\n" +
    "agente infeccioso provoca lesões no hospedei-\n" +
    "ro. Exemplo: a <i>Giardia lamblia</i> adere ao intes-\n" +
    "tino dificultando a absorção de nutrientes e\n" +
    "causando lesões na parede intestinal, provo-\n" +
    "cando diarréias e respostas inflamatórias."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[2].texto1.setPosition(248, 120);

  livro.Parasitologia.pagina[2].texto2 = new Game.Text(
    "      - Patogenicidade: é a habilidade de um a-\n" +
    "gente infeccioso em provocar lesões. Exemplo:\n" +
    "<i>Taenia saginata</i> tem patogenicidade baixa.\n" +
    "      - Vetor: é qualquer organismo que sirva de\n" +
    "veículo para o parasito entre dois hospederei-\n" +
    "ros, podendo ser um artrópode ou molusco.\n" +
    "Exemplo: Mosquito que transmite a malária, o\n" +
    "<i>Anopheles</i> sp.\n" +
    "      - Virulência: é a severidade e rapidez com\n" +
    "as quais o agente infeccioso provoca lesões no\n" +
    "hospedeiro. Exemplo: a <i>E. histolytica</i> provoca\n" +
    "lesões severas rapidamente.\n" +
    "      - Zoonose: doenças e infecções que são\n" +
    "transmitidos entre animais vertebrados e os hu-\n" +
    "manos. Atualmente são conhecidas 100 zoono-\n" +
    "ses. Exemplo: doenças de Chagas, toxoplasmo-\n" +
    "se e raiva."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[2].texto2.setPosition(990, 120);

  // LIVRO: AMEBIASE
  livro.newBook("Amebiase");

  // Amebiase: Pagina 0
  livro.Amebiase.pagina[0] = new Game.Page();

  livro.Amebiase.pagina[0].titulo = new Game.Text(
    "                     Amebíase"
  , estiloTitulo);
  livro.Amebiase.pagina[0].titulo.setPosition(248, 120);

  livro.Amebiase.pagina[0].texto1 = new Game.Text(
    "     A Amebíase é causada pelo agente etioló-\n" +
    "gico <i>Entamoeba histolytica</i>. É de grande im-\n" +
    "portância médica, pois, até o ano de 2011 era\n" +
    "caracterizada como a segunda doença parasi-\n" +
    "tária que mais levava o Homem à morte. En-\n" +
    "tretanto, apesar da alta taxa de mortalidade,\n" +
    "muitos casos de infecções assintomáticas\n" +
    "ocorrem.\n" +
    "     A classificação do agente etiológico é:\n" +
    "     Reino: Protista\n" +
    "     Filo: Amoebozoa\n" +
    "     Classe: Archamoebae\n" +
    "     Ordem: Mastigamoebida\n" +
    "     Família: Entamoedbidae\n" +
    "     Gênero: <i>Entamoeba</i>\n" +
    "     Espécie: <i>E. histolytica</i>\n" +
    "     A <i>E. histolytica</i> vive no intestino grosso de\n" +
    "humanos e animais. O ciclo de vida consiste\n" +
    "em duas formas de vida: cistos arredondados\n" +
    "com quatro núcleos e trofozoítos alongados\n" +
    "com um só núcleo."
    , estiloTextoLivro);
  livro.Amebiase.pagina[0].texto1.setPosition(248, 190);

  livro.Amebiase.pagina[0].cicloDeVida = new Game.Text(
    "      Ciclo de vida"
  , estiloTitulo);
  livro.Amebiase.pagina[0].cicloDeVida.setPosition(990, 120);

  livro.Amebiase.pagina[0].texto2 = new Game.Text(
    "      O ciclo se inicia pela ingestão de cistos\n" +
    "maduros, junto de alimentos ou água contami-\n" +
    "nados. Os cistos são resistentes ao suco gástri-\n" +
    "co, assim passam pelo estômago e alcançam o\n" +
    "final do intestino delgado ou início do grosso.\n" +
    "Neste local ocorre o desencistamento: processo\n" +
    "no qual o cisto libera o metacisto, que sofre\n" +
    "divisões nucleares e citoplasmáticas, culminan-\n" +
    "do no trofozoíto.\n" +
    "      Os trofozoítos gerados migram para o in-\n" +
    "testino grosso e ali se colonizam. Estes aderem-\n" +
    "se à mucosa do intestino e, através desta, ali-\n" +
    "mentam-se de detritos e bactérias."
    , estiloTextoLivro);
  livro.Amebiase.pagina[0].texto2.setPosition(990, 170);

  livro.Amebiase.pagina[0].cisto = new Game.Image("entamoebaCisto.png");
  livro.Amebiase.pagina[0].cisto.setPosition(1120, 730);
  livro.Amebiase.pagina[0].cisto.setScale(0.4);

  livro.Amebiase.pagina[0].legendaCisto = new Game.Text(
    "Foto do cisto da\n" +
    "<i>E. histolytica</i>"
    , estiloLegenda);
  livro.Amebiase.pagina[0].legendaCisto.setPosition(1120, 880);
  livro.Amebiase.pagina[0].legendaCisto.setAnchor(0.5, 0.5);

  livro.Amebiase.pagina[0].trofozoito = new Game.Image("entamoebaTrofozoito.png");
  livro.Amebiase.pagina[0].trofozoito.setPosition(1400, 730);
  livro.Amebiase.pagina[0].trofozoito.setScale(0.4);

  livro.Amebiase.pagina[0].legendaTrofozoito = new Game.Text(
    "Foto do trofozoíto\n" +
    "da <i>E. histolytica</i>"
    , estiloLegenda);
  livro.Amebiase.pagina[0].legendaTrofozoito.setPosition(1400, 880);
  livro.Amebiase.pagina[0].legendaTrofozoito.setAnchor(0.5, 0.5);

  // Amebiase: Pagina 1
  livro.Amebiase.pagina[1] = new Game.Page();

  livro.Amebiase.pagina[1].texto1 = new Game.Text(
    "      Sob certa cisrcuntâncias (não bem descri-\n" +
    "tas), o trofozoíto desliga-se da parede intestinal\n" +
    "e sofre desidratação, transformando-se em pré-\n" +
    "cisto, o qual irá sofrer divisões nucleares e se\n" +
    "transformará em cisto maduro que será elimi-\n" +
    "nado pelas fezes, recomeçando o ciclo."
    , estiloTextoLivro);
  livro.Amebiase.pagina[1].texto1.setPosition(248, 120);

  // LIVRO: MALARIA
  livro.newBook("Malaria");

  // Malaria: Pagina 0
  livro.Malaria.pagina[0] = new Game.Page();

  livro.Malaria.pagina[0].titulo = new Game.Text(
    "                      Malária"
  , estiloTitulo);
  livro.Malaria.pagina[0].titulo.setPosition(248, 120);

  livro.Malaria.pagina[0].texto1 = new Game.Text(
    "     Apesar de muito antiga, a Malária ainda é\n" +
    "um os principais problemas de saúde pública\n" +
    "mundial. Esta doença é causada pelo parasita\n" +
    "<i>Plasmodium</i> sp.\n" +
    "     Reino: Protozoa\n" +
    "     Filo: Apicomplexa\n" +
    "     Classe: Aconoidasida\n" +
    "     Ordem: Haemosporida\n" +
    "     Família: Plasmodiidae\n" +
    "     Gênero: <i>Plasmodium</i>\n" +
    "     Espécie: <i>P. falciparum; P. vivax; P. mala-\n" +
    "riae; P. ovale</i>"
    , estiloTextoLivro);
  livro.Malaria.pagina[0].texto1.setPosition(248, 190);

  livro.Malaria.pagina[0].cicloDeVida = new Game.Text(
    "      Ciclo de vida"
  , estiloTitulo);
  livro.Malaria.pagina[0].cicloDeVida.setPosition(248, 610);

  livro.Malaria.pagina[0].texto2 = new Game.Text(
    "     A infecção do hospedeiro ocorre quando o\n" +
    "vetor, o mosquito fêmea Anopheles sp, inocu-\n" +
    "la, sob a pele do mesmo, esporozítos de <i>Plas-\n" +
    "modium</i> sp, que se movimentam e migram até\n" +
    "a corrente sanguínea ou vasos linfáticos do\n" +
    "hospedeiro.\n" +
    "     No caso de migração para o sistema linfá-\n" +
    "tico, os esporozoítos alcançam um linfonodo e"
    , estiloTextoLivro);
  livro.Malaria.pagina[0].texto2.setPosition(248, 660);

  livro.Malaria.pagina[0].mosquito = new Game.Image("mosquito.png");
  livro.Malaria.pagina[0].mosquito.setPosition(1120, 220);
  livro.Malaria.pagina[0].mosquito.setTint(200, 194, 177);
  livro.Malaria.pagina[0].mosquito.setScale(0.4);

  livro.Malaria.pagina[0].legendaMosquito = new Game.Text(
    "Mosquito\n" +
    "<i>Anopheles</i> sp"
    , estiloLegenda);
  livro.Malaria.pagina[0].legendaMosquito.setPosition(1120, 370);
  livro.Malaria.pagina[0].legendaMosquito.setAnchor(0.5, 0.5);

  livro.Malaria.pagina[0].picada = new Game.Image("picada.png");
  livro.Malaria.pagina[0].picada.setPosition(1400, 220);
  livro.Malaria.pagina[0].picada.setScale(0.4);

  livro.Malaria.pagina[0].legendaPicada = new Game.Text(
    "Inoculação de espo-\n" +
    "rozoítos na corrente\n" +
    "sanguínea"
    , estiloLegenda);
  livro.Malaria.pagina[0].legendaPicada.setPosition(1400, 385);
  livro.Malaria.pagina[0].legendaPicada.setAnchor(0.5, 0.5);

  livro.Malaria.pagina[0].texto3 = new Game.Text(
    "lá são destruídos. Em migração à corrente san-\n" +
    "guínea, os esporozoítos podem adentrar em\n" +
    "várias células e, assim, serem transportados\n" +
    "para outras regiões e órgãos do corpo, antes de\n" +
    "ocorrer a infecção de um hepatócito (célula que\n" +
    "constitui o fígado). Nesta célula específica é\n" +
    "onde ocorre o desenvolvimento do parasita.\n" +
    "     Após invadir o hepatócito, os esporozoítos\n" +
    "se diferenciam em trofozoítos, os quais, por\n" +
    "reprodução assexuada, multiplicam-se e geram\n" +
    "milhares de merozoítos, os quais poderão inva-\n" +
    "dir as hemácias presentes no sangue. Dentro\n" +
    "delas, os merozoítos também se multiplicam\n" +
    "(reprodução assexuada), gerando novos mero-"
    , estiloTextoLivro);
  livro.Malaria.pagina[0].texto3.setPosition(990, 460);

  // Malaria: Pagina 1
  livro.Malaria.pagina[1] = new Game.Page();

  livro.Malaria.pagina[1].texto1 = new Game.Text(
    "zoítos, os quais invadem novas hemácias. De-\n" +
    "pois de algumas gerações de merozoítos, estes\n" +
    "irão se diferenciar em gametócitos feminino e\n" +
    "masculino, o estágio sexuado do parasita."
    , estiloTextoLivro);
  livro.Malaria.pagina[1].texto1.setPosition(248, 120);

  livro.Malaria.pagina[1].merozoito = new Game.Image("merozoito.png");
  livro.Malaria.pagina[1].merozoito.setPosition(360, 380);
  livro.Malaria.pagina[1].merozoito.setScale(0.4);

  livro.Malaria.pagina[1].legendaMerozoito = new Game.Text(
    "Merozoítos de\n" +
    "<i>Plasmodium</i> sp"
    , estiloLegenda);
  livro.Malaria.pagina[1].legendaMerozoito.setPosition(360, 530);
  livro.Malaria.pagina[1].legendaMerozoito.setAnchor(0.5, 0.5);

  livro.Malaria.pagina[1].hemacia = new Game.Image("hemaciaComMerozoito.png");
  livro.Malaria.pagina[1].hemacia.setPosition(640, 380);
  livro.Malaria.pagina[1].hemacia.setScale(0.4);

  livro.Malaria.pagina[1].legendaHemacia = new Game.Text(
    "Merozoítos inva-\n" +
    "dem as hemácias"
    , estiloLegenda);
  livro.Malaria.pagina[1].legendaHemacia.setPosition(640, 530);
  livro.Malaria.pagina[1].legendaHemacia.setAnchor(0.5, 0.5);

  livro.Malaria.pagina[1].texto2 = new Game.Text(
    "     No ser humano, o desenvolvimento do pa-\n" +
    "rasita termina quando ocorre a formação dos\n" +
    "gametócitos. O ciclo continua no interior do\n" +
    "mosquito, assim, o <i>Plasmodium</i> sp depende do\n" +
    "hospedeiro infectado ser novamente picado e,\n" +
    "consequentemente, que outro <i>Anopheles</i> sp se\n" +
    "infecte, para que seu ciclo termine.\n" +
    "     A reprodução sexuada que ocorre no inte-\n" +
    "rior do mosquito gera esporozoítos e, assim, o\n" +
    "ciclo se completa."
    , estiloTextoLivro);
  livro.Malaria.pagina[1].texto2.setPosition(248, 590);

  livro.Malaria.pagina[1].gametocito = new Game.Image("gametocitoPlasmodium.png");
  livro.Malaria.pagina[1].gametocito.setPosition(1120, 220);
  livro.Malaria.pagina[1].gametocito.setTint(200, 194, 177);
  livro.Malaria.pagina[1].gametocito.setScale(0.4);

  livro.Malaria.pagina[1].legendaGametocito = new Game.Text(
    "Gametócitos de \n" +
    "<i>Plasmodium</i> sp"
    , estiloLegenda);
  livro.Malaria.pagina[1].legendaGametocito.setPosition(1120, 370);
  livro.Malaria.pagina[1].legendaGametocito.setAnchor(0.5, 0.5);

  // LIVRO: TOXOPLASMOSE
  livro.newBook("Toxoplasmose");

  // Toxoplasmose: Pagina 0
  livro.Toxoplasmose.pagina[0] = new Game.Page();

  livro.Toxoplasmose.pagina[0].titulo = new Game.Text(
    "                     Toxoplasmose"
  , estiloTitulo);
  livro.Toxoplasmose.pagina[0].titulo.setPosition(248, 120);

  livro.Toxoplasmose.pagina[0].texto1 = new Game.Text(
    "     O parasita causador de Toxoplasmose é o\n" +
    "<i>Toxoplasma gondii</i>. Este protozoário está dis-\n" +
    "tribuído por todo o mundo e, em indivíduos\n" +
    "com o sistema mune comprometido, pode le-\n" +
    "var à encefalite e doença sistêmica, por exem-\n" +
    "plo.\n" +
    "     A toxoplasmose é uma zoonose (doença\n" +
    "presente em animais, mas que pode ser trans-\n" +
    "mitida ao Homem) presente em espécies de\n" +
    "animais, como: carneiro, cabra, aves e gato\n" +
    "não-imunes ao parasito. O ciclo da doença se\n" +
    "completa em duas partes, uma no Homem e\n" +
    "outra no gato, assim, o gato é o hospedeiro\n" +
    "definitivo do parasita e o ser humano, outros\n" +
    "mamíferos e aves são intermediários.\n" +
    "     Reino: Eucoccidiorida\n" +
    "     Família: Sarcocystidae\n" +
    "     Gênero: <i>Toxoplasma</i>\n" +
    "     Espécie: <i>T. gondii</i>"
    , estiloTextoLivro);
  livro.Toxoplasmose.pagina[0].texto1.setPosition(248, 190);

  livro.Toxoplasmose.pagina[0].cicloBiologico = new Game.Text(
    "      Ciclo biológico"
  , estiloTitulo);
  livro.Toxoplasmose.pagina[0].cicloBiologico.setPosition(990, 120);

  livro.Toxoplasmose.pagina[0].texto2 = new Game.Text(
    "      Existem duas fases de desenvolvimento do\n" +
    "ciclo: a fase assexuada, que ocorre no hospe-\n" +
    "deiro intermediário e a sexuada, que ocorre nos\n" +
    "gatos não-imunes.\n" +
    "      O Homem infecta-se com o parasito ao in-\n" +
    "gerir oocistos maduros, os quais contém os es-\n" +
    "porozoítos, encontrados em alimentos, água ou\n" +
    "fezes de gato contaminados. Cada esporozoíto\n" +
    "transforma-se em taquizoíto, o chegar no estô-\n" +
    "mago. No epitélio intestinal, tais taquizoítos\n" +
    "sofrerão multiplicação intracelular e invadirão\n" +
    "outras células do organismo, nas quais também\n" +
    "irão se multiplicar, formando novos taquizoítos.\n" +
    "A grande quantidade de taquizoítos dentro de\n" +
    "uma célula fará com que a mesma se rompa e\n" +
    "libere os parasitos, que irão infectar novas cé-\n" +
    "lulas, através do sistema linfático e sanguíneo,\n" +
    "e assim por diante. Nesta fase da doença, cha\n" +
    "mada de fase proliferativa, a evolução dos sin-\n" +
    "tomas é muito rápida, caracterizando a fase\n" +
    "aguda da doença. Fetos ou pessoas com o sis-\n" +
    "tema imune comprometido podem morrer."
    , estiloTextoLivro);
  livro.Toxoplasmose.pagina[0].texto2.setPosition(990, 170);

  // Toxoplasmose: Pagina 1
  livro.Toxoplasmose.pagina[1] = new Game.Page();

  livro.Toxoplasmose.pagina[1].toxoplamose = new Game.Image("toxoplamose.png");
  livro.Toxoplasmose.pagina[1].toxoplamose.setPosition(640, 220);
  livro.Toxoplasmose.pagina[1].toxoplamose.setScale(0.4);

  livro.Toxoplasmose.pagina[1].legendaToxoplamose = new Game.Text(
    "Oocisto de <i>Toxo\n" +
    "plasma gondii</i>"
    , estiloLegenda);
  livro.Toxoplasmose.pagina[1].legendaToxoplamose.setPosition(640, 370);
  livro.Toxoplasmose.pagina[1].legendaToxoplamose.setAnchor(0.5, 0.5);

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
