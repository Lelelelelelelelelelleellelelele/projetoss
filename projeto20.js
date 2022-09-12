
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane_options={
	isStatic : true
}
var block1_options = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0,
}
var block2_options = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1,
}
var block3_options = {
	restitution:0.01,
	friction:1,
	frictionAir:0.3,
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block2_options);
	World.add(world,block2);
	
	block3 = Bodies.rectangle(350,50,10,10,block3_options);
	World.add(world,block3);

	fill();
	rectMode();
	ellipseMode();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ellipse() //esqueci como se faz essa parte 
	rect()
	rect()

  drawSprites();
 
}



