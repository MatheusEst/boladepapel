
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola
var chao,cesta1,cesta2

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var bolaxd = {
		restitution:0.3,
		friction:0,
		density:1.2
	}
	bola = Matter.Bodies.circle(200,200,20,bolaxd)
	World.add(world,bola);
	var anchored = {
		isStatic:true
	}
	chao = Matter.Bodies.rectangle(350,450,2000,20,anchored);
	World.add(world,chao);
	cesta1 = Matter.Bodies.rectangle(750,430,20,50,anchored);
	World.add(world,cesta1);
	cesta2 = Matter.Bodies.rectangle(850,430,20,50,anchored);
	World.add(world,cesta2);
	Engine.run(engine);


}

function keyPressed(){
	if(keyCode == 32){
	Matter.Body.applyForce(bola,{x:0,y:0},{x:5,y:-5})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
    ellipseMode(RADIUS)
  drawSprites();
  fill("Yellow")
  ellipse(bola.position.x,bola.position.y,20)
   rect(cesta1.position.x,cesta1.position.y,20,50)
  rect(cesta2.position.x,cesta2.position.y,20,50)
  rect(chao.position.x,chao.position.y,2000,20)
 
}



