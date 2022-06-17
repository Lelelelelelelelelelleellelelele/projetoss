var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = 0.3;
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
}

function draw() {
  background(200);
  if (gameState == "play") {
  
  if (keyDown ("LEFT_ARROW")) {
   ghost.x = ghost.x-5;
   }
  if (keyDown ("RIGHT_ARROW")) {
    ghost.x = ghost.x+5;
   }
  if (keyDown ("SPACE")) {
   ghost.velocityY = -7;
   }
   ghost.velocityY = ghost.velocityY+0.8;
  if(tower.y > 400){
    tower.y = 300;
 }
 spawndoors();
  if (climbersGroup.isTouching(ghost)) {
   ghost.velocityY = 0;

   }
  if (invisibleBlockGroup.isTouching(ghost) || ghost.y > 600) {
   ghost.detroy();
   gameState = "end";
   }
   
   drawSprites();
 } 
  if (gameState == "end") {
   stroke("red");
   fill("black");
   textSize = (70);
   text("Fim de jogo pro c", 230,250);
  }
 
}
function spawndoors () {
if (frameCount%240 == 0) {
  door = createSprite(200,50);
  door.addImage("door",doorImg);
  door.x = Math.round(random (120, 400));
  door.velocityY = 1;
  door.timelife = 800;
  climber = createSprite(200, 120);
  climber.addImage("climber", climberImg);
  climber.velocityY = 1;
  climber.x = door.x;
  ghost.depth = door.depth;
  ghost.depth += 1;
  climbersGroup.add(climber);
  invisibleBlock = createSprite(200,140);
  invisibleBlock.width = climber.width;
  invisibleBlock.height = 2;
  invisibleBlock.x = door.x;
  invisibleBlock.velocityY = 1;
  invisibleBlockGroup.add(invisibleBlock);
 }
}