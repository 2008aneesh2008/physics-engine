const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ground,ball,ball1;
function setup() {
  var canvas =createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  var ball_options={
    restitution:1.0
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options)
  console.log(ground);
  World.add(world,ground)
  ball= Bodies.circle(200,100,20,ball_options)
  ball1= Bodies.circle(100,50,50,ball_options)
  World.add(world,ball) 
  World.add(world,ball1)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,350,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipse(ball.position.x,ball1.position.y,20,20)
 // drawSprites();
}