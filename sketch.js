
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImg;
var paper1,ground1;
var binleftBody,binRightBody,binBaseBody;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground1=new Ground(width/2, 650, width, 10);
	paper1=new Paper(100,640);
// dustbin left side
	binleftBody=new Dustbin(500,610,20,100);
//	dustbin base
	binBaseBody=new Dustbin(600,650,200,20);
	//dustbin right side
	binRightBody=new Dustbin(700,610,20,100);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	background(0);
	ground1.display();
	paper1.display();
	binleftBody.display();
	binBaseBody.display();
	binRightBody.display();
	drawSprites();
  

 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});

	}
}



