var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;
// var sling;
var engine;
var world;
var backgroundimage;
function preload(){
backgroundimage = loadImage('background.jpg');
}
function setup(){
    createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(600, 380, 50, 50);
    box2 = new Box(700, 380, 50, 50);
    log1 = new Log(650, 330, 200, 0);
    box3 = new Box(600, 320, 50, 50);
    box4 = new Box(700, 320, 50, 50);
    log2 = new Log(650, 170, 200, 0);
    box6 = new Box(650, 160, 50, 50);
    
    pig1 = new Pig(650,380,30,30);
    pig2 = new Pig(650,320,30,30);
    log3 = new Log(670, 160, 100, PI/4);
    log4 = new Log(630, 160, 100, -PI/4);
    ground = new Ground(400,450,width,20);
    bird = new Bird(100,100);
    log5 = new Log(150,100,100,0);
    slingShot = new Constraint1(bird.body,log5.body);
//     var options = {
//         bodyA: bird.body,
//         bodyB: log5.body,
//         length: 70,
//         stiffness: 0.04
//     };
//     sling = Constraint.create(options);
//     Worlds.add(world,sling);
 }
function draw(){
    // background('yellow');
    //background(backgroundimage);
    imageMode(CENTER);
    image(backgroundimage,400,250,800,500);
    Engine.update(engine);
    strokeWeight(4);
   // line(sling.bodyA.position.x,sling.bodyA.position.y,sling.bodyB.position.x,sling.bodyB.position.y);
    box1.display();
    box2.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box6.display();
    pig1.display();
    pig2.display();
    log3.display();
    log4.display();
    ground.display();
    bird.display();
    log5.display();
    slingShot.display();
}