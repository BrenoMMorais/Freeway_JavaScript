//Posição dos Carros
let xCarros = [630, 630, 630, -30, -30, -30];
let yCarros = [45, 100, 156, 216, 266, 326];
let veloCarros = [4, 3.5, 4.2, 3, 4.5, 3.7];

//Tamanho dos Carros
let larguraCarro = 50;
let alturaCarro = 30;

//Posições dos extremos
let posicaoDireita = 630;
let posicaoEsquerda = -30;


//Funções de Movimenta Carro
function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], larguraCarro,         alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i <= 2 ; i++){
    xCarros[i] -= veloCarros[i];
  }
  for (let u = 3; u <= 6; u++){
    xCarros[u] += veloCarros[u];
  }
}

function voltaInicioCarro(){
  for (let i = 0; i <= 2; i++){
    if(xCarros[i] < posicaoEsquerda){
    xCarros[i] = posicaoDireita;
    }
  }
  
  for (let u = 3; u <= 6; u++){
    if(xCarros[u] > posicaoDireita){
    xCarros[u] = posicaoEsquerda;
    }
  }
}