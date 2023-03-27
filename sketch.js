//---- Variaveis ----//

//---- Funções ----//

function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor1();
  mostraCarro();
  movimentaCarro();
  movimentaAtor1();
  voltaInicioCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}