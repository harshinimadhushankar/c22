
const Engine = Matter.Engine; 
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, ground;
function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
  
  var objectOptions = {
    isStatic : true
  }
  var ballOptions = {
    restitution : 1.0
  }

  ground = Bodies.rectangle(200,390,200,20,objectOptions);
  World.add(world, ground);
  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world, ball);
}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);
  rectMode(CENTER);
 rect(ground.position.x, ground.position.y, 400, 20);

 ellipseMode(RADIUS);
 ellipse(ball.position.x, ball.position.y,20,20);
}
