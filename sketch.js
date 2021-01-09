
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject4;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,180,400,20)
	bobObject1 = new Bob(200,525,50)
	bobObject2 = new Bob(250,525,50)
	bobObject3 = new Bob(300,525,50)
	bobObject4 = new Bob(350,525,50)
	bobObject5 = new Bob(400,525,50)
	rope = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: 4,y: -7});
	
	}
	}



