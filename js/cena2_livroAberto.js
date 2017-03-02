function carregaLivroAberto() {

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  // Criando a variavel que tera todos os livros
  var livro = {};
  var estiloTextoLivro = {
    "default": {fontFamily: "Book Antiqua", fontSize: "40px",
    dropShadow: true, dropShadowBlur: 10,
    fill: 0xFFFFFF, align: "left"
    }
  };
  var paginaAtual = null;

  var Page = function() {
    var content = [];
    this.z_order = 2;
    this.addContent = function(info) {
      content.push(this[info]);
    }
    this.draw = function(stage) {
      for (var i = 0; i < content.length; i++) {
        stage.addChild(content[i]);
      }
    }
  }

  scene[2].openBook = function(titulo) {
    disableInteractiveness();

    // Desabilita interação com os livros do armario
    groupDisable(scene[2].livros);

    // Mostra o livro
    item.livroAberto.enable();
    item.livroAberto.changeAlpha(1, 600);
    item.fechaLivro.enable();
    item.fechaLivro.changeAlpha(1, 600);

    livro[titulo].abre();

    setTimeout(function() {
      enableInteractiveness();
    }, 700);
  }

  // Conteudo dos livros

  // LIVRO: OBJETO DE APRENDIZAGEM
  livro.ObjetoDeApendizagem = {};
  livro.ObjetoDeApendizagem.abre = function() {
    item.livroObjetoDeApendizagemPagina0.texto.enable();
    item.livroObjetoDeApendizagemPagina0.texto.changeAlpha(1, 600);
    paginaAtual = livro.ObjetoDeApendizagem;
  }
  livro.ObjetoDeApendizagem.fecha = function() {
    item.livroObjetoDeApendizagemPagina0.texto.changeAlpha(0, 600);
    setTimeout(function() {
      item.livroObjetoDeApendizagemPagina0.texto.disable();
    }, 650);
  }

  // Conteúdo do livro Objeto de Aprendizagem
  item.livroObjetoDeApendizagemPagina0 = new Page();
  item.livroObjetoDeApendizagemPagina0.texto = new Game.Text("Texto sobre Objeto de Aprendizagem.", estiloTextoLivro);
  item.livroObjetoDeApendizagemPagina0.texto.setPosition(248, 172);
  item.livroObjetoDeApendizagemPagina0.texto.setAlpha(0);
  item.livroObjetoDeApendizagemPagina0.texto.disable();
  item.livroObjetoDeApendizagemPagina0.addContent("texto");

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

    // Esconde o livro
    item.livroAberto.changeAlpha(0, 600);
    item.fechaLivro.changeAlpha(0, 600);

    // Esconde o texto
    paginaAtual.fecha();
    paginaAtual = null;

    setTimeout(function() {
      item.livroAberto.disable();
      item.fechaLivro.disable();
      enableInteractiveness();
    }, 700);
  }

}
