'use strict';

sceneLoader[2] = function() {

  // Iniciando a nova cena
  scene[2] = new Game.Scene();
  // Adicionando musica na cena
  scene[2].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  scene[2].background = new Game.Background("armario.jpg");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  scene[2].background.setInteractive(true);
  scene[2].background.click = function(mouse) {
    var mousePosition = mouse.data.getLocalPosition(stage);
    console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
  }

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  // Adiciona uma seta para voltar na sala de aula
  item["setaSalaDeAula"] = new Game.Item("seta.png");
  item.setaSalaDeAula.setPosition(1735, 480);
  item.setaSalaDeAula.setScale(0.3);
  item.setaSalaDeAula.setInteractive(true);
  item.setaSalaDeAula.onMouseOver = function() {
    scene[2].setSubtitle("Sala de aula");
    item.setaSalaDeAula.addGlow();
  }
  item.setaSalaDeAula.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.setaSalaDeAula.removeGlow();
  }
  item.setaSalaDeAula.onClick = function(mouse) {
    changeScene(0); // Muda para a cena exterior
  }

  scene[2].addAllItemsToScene();

}
