'use strict';

sceneLoader[1] = function() {

  // Iniciando a nova cena
  scene[1] = new Game.Scene();
  // Adicionando musica na cena
  scene[1].setMusic("musicaCenaExterna.mp3");

  // Adicionando uma imagem de fundo
  scene[1].background = new Game.Background("cenaExterior.png");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  var mostraCoordenadasAoClicar = true;
  scene[1].background.click = function(mouse) {
    if (mostraCoordenadasAoClicar) {
      var mousePosition = mouse.data.getLocalPosition(stage);
      console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
    }
  }

  // Criando um aliase de scene[1].item
  var item = scene[1].item;

  // Adiciona uma seta para voltar na sala de aula
  item["setaSalaDeAula"] = new Game.Item("seta.png");
  item.setaSalaDeAula.setPosition(210, 480);
  item.setaSalaDeAula.setScale(0.5);
  item.setaSalaDeAula.setRotation(180);
  item.setaSalaDeAula.onMouseOver = function() {
    item.setaSalaDeAula.addGlow();
  }
  item.setaSalaDeAula.onMouseOut = function() {
    item.setaSalaDeAula.removeGlow();
  }
  item.setaSalaDeAula.click = function(mouse) {
    changeScene(0); // Muda para a sala de aula
  }

  scene[1].addAllItemsToScene();
}
