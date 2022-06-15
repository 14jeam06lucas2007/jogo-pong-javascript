//variáviaveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 30;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  mostrabolinha ();
  movimentabolinha();
  verificaColisaoBorda();
}
function mostrabolinha(){
  circle(xbolinha, ybolinha, diametro);
}


function movimentabolinha(){
  xbolinha += velocidadeXBolinha;
  ybolinha += velocidadeYBolinha;
}
 
function verificaColisaoBorda(){
  
  if (xbolinha + raio> width ||
     xbolinha - raio< 0){
  velocidadeXBolinha *= -1;
  }
  if (ybolinha > height ||
      ybolinha < 0){
    velocidadeYBolinha *= -1;
  }
}