const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,390,1200,20);
    platform1 = new Ground(655,300, 260, 20);
    platform2 = new Ground(1050,200, 260, 20);
    //level three
    block1 = new Box(550,235,30,40);
    block2 = new Box(585,235,30,40);
    block3 = new Box(620,235,30,40);
    block4 = new Box(655,235,30,40);
    block5 = new Box(690,235,30,40);
    block6 = new Box(725,235,30,40);
    block7 = new Box(760,235,30,40);
    //level two
    block8 = new Box(585,185,30,40);
    block9 = new Box(620,185,30,40);
    block10 = new Box(655,185,30,40);
    block11 = new Box(690,185,30,40);
    block12 = new Box(725,185,30,40);
    //level one
    block13 = new Box(620,140,30,40);
    block14 = new Box(655,140,30,40);
    block15 = new Box(690,140,30,40);
    //top
    block16 = new Box(655,105,30,40);

    //level three
    block17 = new Box(945,105,30,40);
    block18 = new Box(980,105,30,40);
    block19 = new Box(1015,105,30,40);
    block20 = new Box(1050,105,30,40);
    block21 = new Box(1085,105,30,40);
    block22 = new Box(1120,105,30,40);
    block23 = new Box(1155,105,30,40);
    //level two
    block24 = new Box(980,85,30,40);
    block25 = new Box(1015,85,30,40);
    block26 = new Box(1050,85,30,40);
    block27 = new Box(1085,85,30,40);
    block28 = new Box(1120,85,30,40);
    //level one
    block29 = new Box(1015,40,30,40);
    block30 = new Box(1050,40,30,40);
    block31 = new Box(1085,40,30,40);
    //top
    block32 = new Box(1050,5,30,40);
    polygon = new Polygon(40, 40, 30)
    slingShot = new SlingShot(polygon.body,{x:100, y:200});
    
    
}

function draw(){
   background("black");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    platform1.display();
    platform2.display();
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
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    slingShot.display();
    polygon.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}