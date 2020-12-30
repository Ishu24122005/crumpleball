var ball,rect1,rect2,rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rect1=createSprite(400,650,400,20)
rect2=createSprite(200,600,20,150);
rect3=createSprite(600,600,20,150);
ball=createSprite(50,50,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



