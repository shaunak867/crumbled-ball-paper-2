var paper,ground,dustbin;

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
paper = new Paper(100,600);
ground = new Ground(400,650,800,20);
dustbin = new Dustbin(700,640);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();
  paper.display();
  dustbin.display();
  ground.display();
  
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  
  Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60})
  
  }
}


