
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,iron;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	hammer=new Hammer(10,100);
	iron=new Iron(300,350);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background("white");
  Engine.update(engine);

  hammer.display()
  iron.display()
  
  drawSprites();
 
}



