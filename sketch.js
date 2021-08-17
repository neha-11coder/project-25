const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ground;
var dustbin;
var rect1,rect2,rect3;

var paperball;
function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

ground=new Ground();
dustbin=new Dustbin(800,420);
paperball=new Paperball();

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(225);


 
ground.display();
dustbin.display();
paperball.display();



console.log(paperball.body.position.y)
drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:49,y:-50})
	
}
}



