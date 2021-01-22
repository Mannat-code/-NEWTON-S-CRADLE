var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5;
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

	bob1 = new bob(300,500,20);
	bob2 = new bob(340,500,20);
	bob3= new bob(380,500,20);
	bob4= new bob(420,500,20);
	bob5= new bob(460,500,20);
	roof1=new roof(380,300,200,20);
	rope1=new rope(bob1.body,roof1.body,-80,10);
	rope2=new rope(bob2.body,roof1.body,-40,10);

	rope3=new rope(bob3.body,roof1.body,0,10);

	rope4=new rope(bob4.body,roof1.body,40,10);
	rope5=new rope(bob5.body,roof1.body,80,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode ===DOWN_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-100,y:-20});
		
	}
}



