'use strict';

function somSeta() {
  playSoundEffect("somSetas.wav", 0.3);
}

function somPopup() {
  playSoundEffect("somPopup.wav", 0.6);
}

function somLivroMudaPagina() {
  playSoundEffect("somLivro.wav", 0.6);
}

function somClique() {
  playSoundEffect("somClique.wav", 0.5);
}

var estiloInfoPopup = {
  "default" : {
    fontFamily: "Roboto",
    fill: 0x010101,
    fontSize: "24px"
  },
  "i" : {
    fontStyle: "italic"
  },
  "b" : {
    fontStyle: "bold"
  }
}

var estiloNumeros = {
  "default" : {
    fontFamily: "CircleCaps",
    dropShadow: true,
    dropShadowBlur: 10,
    fill: 0xFFFFFF,
    fontSize: "200px"
  }
}

var estiloInfoBalao = {
  "default" : {
    fontFamily: "Roboto",
    fill: 0x010101,
    fontSize: "28px"
  },
  "i" : {
    fontStyle: "italic"
  },
  "b" : {
    fontStyle: "bold"
  }
}

var estiloTitulo = {
  "default" : {
    fontFamily: "Book Antiqua",
    fontSize: "34px",
    fontStyle: "bold",
    fill: 0x010101,
    align: "left"
  },
  "big" : {
    fontSize: "42px"
  }
};

var estiloTitulo1 = {
  "default" : {fontFamily: "Book Antiqua", fontSize: "40px",
    fill: 0x010101, align: "left"
  },
  "i" : {
    fontStyle: "italic"
  },
  "b" : {
    fontStyle: "bold"
  },
  "gray" : {
    fill: 0x333333
  },
  "big" : {
    fontSize: "36px"
  }
};

var estiloTitulo2 = {
  "default" : {
    fontFamily: "Book Antiqua",
    fontSize: "60px",
    fontStyle: "bold",
    fill: 0x010101,
    align: "left"
  },
  "big" : {
    fontSize: "42px"
  }
};

var estiloTextoLivro = {
  "default" : {fontFamily: "Book Antiqua", fontSize: "28px",
  fill: 0x010101, align: "left"
  },
  "i" : {
    fontStyle: "italic"
  },
  "b" : {
    fontStyle: "bold"
  },
  "gray" : {
    fill: 0x333333
  },
  "big" : {
    fontSize: "36px"
  }
};

var estiloTextoLivro1 = {
  "default" : {fontFamily: "Book Antiqua", fontSize: "33px",
  /*dropShadow: true, dropShadowBlur: 30,*/ fill: 0x010101, align: "left"
  },
  "i" : {
    fontStyle: "italic"
  },
  "b" : {
    fontStyle: "bold"
  },
  "c1" : {
    fill: 0x56FF41
  },
  "c3" : {
    fill: 0xE8C055
  },
  "c2" : {
    fill: 0xFF544F
  },
  "c4" : {
    fill: 0x583DE8
  },
  "c5" : {
    fill: 0x7EFFDF
  },
  "big" : {
    fontSize: "36px"
  }
};

var estiloLegenda = {
  "default": {fontFamily: "Book Antiqua", fontSize: "28px",
  fontStyle: "bold", fill: 0x010101, align: "center"
  },
  "i" : {
    fontStyle: "bold italic"
  }
}
