
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body =  Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand1;

var block1,block2,block3,block4,block5,block6,block7, 
block8,block9,block10,block11,block12;

var block13,block14,block15,block22,block23,block24;
var block16,block17,block18,block19,block20,block21;

var block25;
var polygon,slingshot;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
    engine = Engine.create();
    world = engine.world;
  ground = new Ground(400,400,800,10);

  stand1 = new Ground(340,360,250,10);
  stand2 = new Ground(650,200,230,10);

  polygon = new Polygon(50,200,20);
slingshot = new SlingShot(polygon.body,{x:100,y:200});

  console.log(polygon.body.position);
//color baby blue
    block1 = new BaseClass(248,334);
    block2 = new BaseClass(278,334);
    block3 = new BaseClass(308,334); 
    block4 = new BaseClass(338,334);
    block5 = new BaseClass(368,334);
    block6 = new BaseClass(398,334);
    block7 = new BaseClass(428,334);
    block8 = new BaseClass(590,174);
    block9 = new BaseClass(620,174); 
   block10 = new BaseClass(650,174);
   block11 = new BaseClass(680,174);
   block12 = new BaseClass(710,174);
//color pink
   block13 = new BaseClass(620,132);
   block14 = new BaseClass(650,132);
   block15 = new BaseClass(680,132);
   block22 = new BaseClass(308,250);
   block23 = new BaseClass(338,250);
   block24 = new BaseClass(368,250);
//color turquoise
   block16 = new BaseClass(650,90);
   block17 = new BaseClass(278,292);
   block18 = new BaseClass(308,292); 
   block19 = new BaseClass(338,292);
   block20 = new BaseClass(368,292);
   block21 = new BaseClass(398,292);
//color grey
   block25 = new BaseClass(338,208);
   Engine.run(engine);   

}

function draw() {
  Engine.update(engine);
  background(54, 45, 44);  
  rectMode(CENTER);
  text("Drag the polygon to destroy the blocks",300,20);
  text("Press space to get a second chance to play",500,380);
ground.display();

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
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

stand1.display();
stand2.display();

polygon.display();
slingshot.display();

 // drawSprites();

}

function mouseDragged(){
 
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body,{x:100,y:100});
      slingshot.attach(polygon.body);
  }
}