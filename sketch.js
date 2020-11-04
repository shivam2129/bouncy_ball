const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Myengine,Myworld;
var ground;
var ball;
function setup() {
  createCanvas(800,400);

  Myengine = Engine.create();
  Myworld = Myengine.world;

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,400,800,40,ground_options);
  World.add(Myworld,ground);
  
  var ball_options = {
    restitution : 1.5
  }
  
  ball = Bodies.circle(400,50,10,ball_options);
  World.add(Myworld,ball);
}

function draw() {
  background(0);  
  Engine.update(Myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,40);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10)
}