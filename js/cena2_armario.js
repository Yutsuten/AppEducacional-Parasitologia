'use strict';

sceneLoader[2] = function() {

  // Iniciando a nova cena
  scene[2] = new Game.Scene();
  // Adicionando musica na cena
  scene[2].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  scene[2].background = new Game.Background("armario.jpg");
  scene[2].background.setBrightness(210);
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  scene[2].background.setInteractive(true);
  scene[2].background.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  item["livroObjetoDeApendizagem"] = new Game.Item("livroObjetoDeApendizagem.png");
  item.livroObjetoDeApendizagem.setPosition(565, 204);
  item.livroObjetoDeApendizagem.setZorder(20);
  item.livroObjetoDeApendizagem.setBrightness(210);
  item.livroObjetoDeApendizagem.onMouseOver = function() {
    scene[2].setSubtitle("Objeto de aprendizagem");
    item.livroObjetoDeApendizagem.setBrightness(255);
  }
  item.livroObjetoDeApendizagem.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroObjetoDeApendizagem.setBrightness(210);
  }

  item["livroParasitologia"] = new Game.Item("livroParasitologia.png");
  item.livroParasitologia.setPosition(972, 200);
  item.livroParasitologia.setZorder(20);
  item.livroParasitologia.setBrightness(210);
  item.livroParasitologia.onMouseOver = function() {
    scene[2].setSubtitle("livroParasitologia");
    item.livroParasitologia.setBrightness(255);
  }
  item.livroParasitologia.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroParasitologia.setBrightness(210);
  }

  item["livroAmebiase"] = new Game.Item("livroAmebiase.png");
  item.livroAmebiase.setPosition(1218, 196);
  item.livroAmebiase.setZorder(20);
  item.livroAmebiase.setBrightness(210);
  item.livroAmebiase.onMouseOver = function() {
    scene[2].setSubtitle("livroAmebiase");
    item.livroAmebiase.setBrightness(255);
  }
  item.livroAmebiase.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroAmebiase.setBrightness(210);
  }

  item["livroMalaria"] = new Game.Item("livroMalaria.png");
  item.livroMalaria.setPosition(698, 642);
  item.livroMalaria.setZorder(20);
  item.livroMalaria.setBrightness(210);
  item.livroMalaria.onMouseOver = function() {
    scene[2].setSubtitle("livroMalaria");
    item.livroMalaria.setBrightness(255);
  }
  item.livroMalaria.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroMalaria.setBrightness(210);
  }

  item["livroToxoplamose"] = new Game.Item("livroToxoplamose.png");
  item.livroToxoplamose.setPosition(850, 590);
  item.livroToxoplamose.setZorder(20);
  item.livroToxoplamose.setBrightness(210);
  item.livroToxoplamose.onMouseOver = function() {
    scene[2].setSubtitle("livroToxoplamose");
    item.livroToxoplamose.setBrightness(255);
  }
  item.livroToxoplamose.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroToxoplamose.setBrightness(210);
  }

  item["livroAscaridiase"] = new Game.Item("livroAscaridiase.png");
  item.livroAscaridiase.setPosition(1314, 636);
  item.livroAscaridiase.setZorder(20);
  item.livroAscaridiase.setBrightness(210);
  item.livroAscaridiase.onMouseOver = function() {
    scene[2].setSubtitle("livroAscaridiase");
    item.livroAscaridiase.setBrightness(255);
  }
  item.livroAscaridiase.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroAscaridiase.setBrightness(210);
  }

  item["livroTeniase"] = new Game.Item("livroTeniase.png");
  item.livroTeniase.setPosition(768, 924);
  item.livroTeniase.setZorder(20);
  item.livroTeniase.setBrightness(210);
  item.livroTeniase.onMouseOver = function() {
    scene[2].setSubtitle("livroTeniase");
    item.livroTeniase.setBrightness(255);
  }
  item.livroTeniase.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroTeniase.setBrightness(210);
  }

  item["livroGiardíase"] = new Game.Item("livroGiardíase.png");
  item.livroGiardíase.setPosition(1168, 1058);
  item.livroGiardíase.setZorder(20);
  item.livroGiardíase.setBrightness(210);
  item.livroGiardíase.onMouseOver = function() {
    scene[2].setSubtitle("livroGiardíase");
    item.livroGiardíase.setBrightness(255);
  }
  item.livroGiardíase.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroGiardíase.setBrightness(210);
  }

  item["livroAgradecimentos"] = new Game.Item("livroAgradecimentos.png");
  item.livroAgradecimentos.setPosition(1345, 940);
  item.livroAgradecimentos.setZorder(20);
  item.livroAgradecimentos.setBrightness(210);
  item.livroAgradecimentos.onMouseOver = function() {
    scene[2].setSubtitle("livroAgradecimentos");
    item.livroAgradecimentos.setBrightness(255);
  }
  item.livroAgradecimentos.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroAgradecimentos.setBrightness(210);
  }

  // Adiciona uma seta para voltar na sala de aula
  item["setaSalaDeAula"] = new Game.Item("seta.png");
  item.setaSalaDeAula.setPosition(1735, 480);
  item.setaSalaDeAula.setBrightness(220);
  item.setaSalaDeAula.setScale(0.3);
  item.setaSalaDeAula.setInteractive(true);
  item.setaSalaDeAula.onMouseOver = function() {
    scene[2].setSubtitle("Sala de aula");
    item.setaSalaDeAula.setBrightness(255);
  }
  item.setaSalaDeAula.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.setaSalaDeAula.setBrightness(220);
  }
  item.setaSalaDeAula.onClick = function(mouse) {
    changeScene(0); // Muda para a cena exterior
  }

  carregaLivroAberto();

  scene[2].addAllItemsToScene();

}
