const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

 var ground;
 var world;
 var engine;
 var platform;
 var polygon;
 var sling;


 function setup() {
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,590,1200,50);
    platform = new Ground(540,420,270,10);
   

    //platform
    //layer1
    block1 = new Blueblock(460,419,35,60);
    block2 = new Blueblock(490,419,35,60);
    block3 = new Blueblock(510,419,35,60);
    block4 = new Blueblock(540,419,35,60);
    block5 = new Blueblock(570,419,35,60);
    block6 = new Blueblock(600,419,35,60);
    block7 = new Blueblock(630,419,35,60);
    //layer2
    block8 = new  Pinkblock(490,330,35,60);
    block9 = new  Pinkblock(520,330,35,60);
    block10 = new Pinkblock(550,330,35,60);
    block11 = new Pinkblock(580,330,35,60);
    block12 = new Pinkblock(619,330,35,60);
    //layer3
    block13 = new Greenblock(520,220,35,60);
    block14 = new Greenblock(555,230,35,60);
    block15 = new Greenblock(590,220,35,60);
    //layer4
    block16 = new Blueblock(555,170,35,60);

    polygon = new poly(150, 100, 20, 20)

    sling = new Slingshot(polygon.body, { x: 90, y: 90 });


 }

 function draw() {
  Engine.update(engine);
  background(250);
  textSize(20);
  fill("red");
  stroke(0);
  text("Drag and release the Polygon to knock down the blocks.",600,35)

  ground.display();
  platform.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  sling.display();

 }

 function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}