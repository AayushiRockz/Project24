
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftSide,rightSide,base;
var ball;

function setup()  {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//creating Dust bin
	base = new DustBin(1000,750,300,50);
	leftSide = new DustBin(829,675,50,200);
	rightSide = new DustBin(1129,675,50,200);

	
	// making paper ball
	ball = new Paper(100,100,80);


//ground
	ground = new Ground(600,height,1200,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100,0,100);
  Engine.update(engine);

  ground.display();
  base.display();
  leftSide.display();
  rightSide.display();
  ball.display();
  keypressed();
}

function keypressed(){
	if(keyCode === UP_ARROW)
{
	Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

}

}