// Variaveis de Imagem

let imgEstrada;
let imgAtor1;
let imgAtor2;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarro4;
let imgCarro5;
let imgCarro6;

//Sons do jogo

let somTrilha;
let somColisao;
let somPonto;

//Funções que importam as imagens

function preload(){
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
  
  imgEstrada = loadImage("imagens/estrada.png");
  imgAtor1 = loadImage("imagens/ator-1.png");
  imgAtor2 = loadImage("imagens/ator-2.png");
  imgCarro1 = loadImage("imagens/carro-1.png");
  imgCarro2 = loadImage("imagens/carro-2.png");
  imgCarro3 = loadImage("imagens/carro-3.png");
  imgCarro4 = loadImage("imagens/carro-4.png");
  imgCarro5 = loadImage("imagens/carro-5.png");
  imgCarro6 = loadImage("imagens/carro-6.png");
  imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro4, imgCarro5, imgCarro6];
  
}