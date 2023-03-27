//Movimentos Ator

let xAtor1 = 100;
let yAtor1 = 366;
let colisao = false;

let meusPontos = 0;

//Funções de Movimento ator

function mostraAtor1(){
  image(imgAtor1, xAtor1, yAtor1, 30, 30);
}

function movimentaAtor1(){
  if(keyIsDown(UP_ARROW)){
    yAtor1 -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor1 += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor1 -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor1 += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor1, yAtor1, 15)
    if (colisao){
      colidiu();
      if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }
      somColisao.play();
    }
  }
}

function colidiu(){
  yAtor1 = 366;
  xAtor1 = 100;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor1 < 15){
    meusPontos += 1;
    colidiu();
    somPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor1 < 366;
}