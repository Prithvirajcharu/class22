
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground,rightWall,leftWall,topWall;
var ball;
var wall,wall2;
var b1,b2;

function setup() {
	createCanvas(600, 400);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
ground = new Ground(300,390,600,20);
rightWall = new Ground(590,200,20,400);
leftWall = new Ground(10,200,20,400);
topWall = new Ground(300,10,600,20);
wall = new Ground(450,350,10,60);
wall2 = new Ground(520,350,10,60);
 var ball_options= {
	 isStatic:false,
	 restitution:0.95,
  friction:0,
  density:1.2

 }
 ball = Bodies.circle(50,50,10,ball_options);
 World.add(world,ball);
	
 b1 = createImg("right.jpg");
 b1.position(400,30);
 b1.size(50,50);
 b1.mouseClicked(hForce);
 b2 = createImg("left.jpg");
 b2.position(200,30);
 b2.size(50,50);
 b2.mouseClicked(hForce);
 rectMode(CENTER);
 ellipseMode(RADIUS);
 
}


function draw() {
 background(51);
 ground.show();
 rightWall.show();
 leftWall.show();
 topWall.show();
 wall.show();
 wall2.show();
 ellipse(ball.position.x,ball.position.y,10)
 Engine.update(engine);
  drawSprites();
 
}
function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.30,y:0});
}
function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.20});
}
