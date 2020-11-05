var tela = 0;
var largura1 = 275;
var largura2 = 410;
var largura3 = 350;
var altura = 100;
var xMenu1 = 360;
var xMenu2 = 290;
var xMenu3 = 320;
var yMenu1 = 225;
var yMenu2 = 325;
var yMenu3 = 425;
var img;

function preload() {
  img = loadImage('Espaço.png');
}

function setup() {
  createCanvas(960, 540);
}

function draw() {
  image(img, 0, 0);
  if(tela == 0){
    menu();
  }
  if(tela == 1){
    textAlign(CENTER);
    textSize(100);
    text('Jogar', 495, 100);
    
  }
  if(tela == 2){
    textAlign(CENTER);
    textSize(100);
    text('Instruções', 495, 100);
  }
  if(tela == 3){
    textAlign(CENTER);
    textSize(100);
    text('Créditos', 495, 100);  
  }
}

function menu(){
  textAlign(CENTER);
  noFill();
  stroke(255, 204, 0);
  strokeWeight(3);
  textSize(100);
  fill(255, 0, 0);
  text("Desafio Espacial",495 ,100);
  textSize(75);
    
  if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    
    stroke(255, 204, 0);
    strokeWeight(3);
    fill(255, 0, 0);
    noFill();
    rect(xMenu1, yMenu1, largura1, altura, 15);
    if(mouseIsPressed){
      tela = 1;
    }
  }
  
  fill(255, 0, 0);  
  stroke(255, 204, 0);
  strokeWeight(3);
  text("Jogar", 495, 300);
    
  if(mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    stroke(255, 204, 0);
    strokeWeight(3);
    fill(255, 0, 0);
    noFill();
    rect(xMenu2, yMenu2, largura2, altura, 15);
    if(mouseIsPressed){
      tela = 2;
    }
  }
    
  fill(255, 0, 0);  
  stroke(255, 204, 0);
  strokeWeight(3);
  text("Instruções", 495, 400);
    
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(255, 204, 0);
    strokeWeight(3);
    fill(255, 0, 0);
    noFill();
    rect(xMenu3, yMenu3, largura3, altura, 15);
    if(mouseIsPressed){
      tela = 3;
    }
  }
    
  fill(255, 0, 0);  
  stroke(255, 204, 0);
  strokeWeight(3);
  text("Créditos", 495, 500);
}

function keyPressed(){
  if(key == 'Escape'){
    tela = 0;
  }
}