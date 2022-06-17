var homem, homemImg;
var cachorro, cachorroImg;
var rua, ruaImg;
var gameState = "PLAY";
var carro, carroImg;

function preload(){
homemImg.loadImage("homem.png");
cachorroImg.loadImage("cachorro.png");
ruaImg.loadImage("rua.png");
carroImg.loadImage("carro.jpg");
}

function setup() {
 createCanvas(400,400);
 rua = createSprite(400, 200);
 rua.addImage("rua", ruaImg);
 rua.velocityX = -2;
 homem = createSprite(350, 250);
 homem.addImage("homem", homemImg);
 cachorro = createSprite(300, 250);
 cachorro.addImage("cachorro", cachorroImg);
 cachorro.velocityX = 2;
}

function draw() {
 if (gameState == "START") {
 if (keyDown ("RIGHT_ARROW")) {
   homem.x = homem.x+2;
 }
 if (homem.isTouching(cachorro) || homem.isTouching(carro)) {
   homem.destroy();
   gameState = "END";
 }
} 
if (gameState == "END"){
  text("cabo", 230, 250);
  rua.velocityX = 0;
  carro.destroy();
  cachorro.velocityX = 0;
}
 spawnobstacles();
 drawSprites();
}

function spawnobstacles() {
if (frameCount%240 == 0) {
carro = createSprite(300, 250);
carro.addImage("carro", carroImg);
carro.velocityX = -2;
}
}