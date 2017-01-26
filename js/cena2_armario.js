'use strict';

sceneLoader[2] = function() {

  // Iniciando a nova cena
  scene[2] = new Game.Scene();
  // Adicionando musica na cena
  scene[2].setMusic("musicaSalaDeAula.mp3");

  // Adicionando uma imagem de fundo
  scene[2].background = new Game.Background("cenaArmarioBackground.jpg");
  // Para ajuda no desenvolvimento, colocando um evento de clique no fundo para
  // Mostrar as coordenadas
  var mostraCoordenadasAoClicar = true;
  scene[2].background.click = function(mouse) {
    if (mostraCoordenadasAoClicar) {
      var mousePosition = mouse.data.getLocalPosition(stage);
      console.log(Math.round(mousePosition.x) + "; " + Math.round(mousePosition.y));
    }
  }

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  // Adiciona a imagem do armario
  item["armarioDeLivros"] = new Game.Item("armarioLivros.jpg");
  item.armarioDeLivros.setPosition(990, 560);
  item.armarioDeLivros.setScale(0.8);

  // Adiciona uma seta para voltar na sala de aula
  item["setaSalaDeAula"] = new Game.Item("seta.png");
  item.setaSalaDeAula.setPosition(1735, 480);
  item.setaSalaDeAula.setScale(0.5);
  item.setaSalaDeAula.onMouseOver = function() {
    item.setaSalaDeAula.addGlow();
  }
  item.setaSalaDeAula.onMouseOut = function() {
    item.setaSalaDeAula.removeGlow();
  }
  item.setaSalaDeAula.click = function(mouse) {
    changeScene(0); // Muda para a cena exterior
  }

  scene[2].addAllItemsToScene();

}
