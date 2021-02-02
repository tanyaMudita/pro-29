const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world ;
var ground,path1,path2,sling,polygon1; 
var box1, box2;

function setup() {
  var canvar= createCanvas(1000,700);
   
  engine=Engine.create();
  world=engine.world; 

  ground=new Ground(500,695,1000,20);
  path1=new Ground(400,500,300,10);
  path2=new Ground(740,300,300,10);
  
  box1=new Box(285,495); 
  box2=new Box(315,495); 
  box3=new Box(345,495); 
  box4=new Box(375,495); 
  box5=new Box(405,495);   
  box6=new Box(435,495); 
  box7=new Box(465,495); 
  box8=new Box(495,495); 
  box9=new Box(525,495); 

  // 2 layer

  box10=new Box(315,475); 
  box11=new Box(345,475); 
  box12=new Box(375,475); 
  box13=new Box(405,475); 
  box14=new Box(435,475); 
  box15=new Box(465,475); 
  box16=new Box(495,475); 

  // 3 layer

  box17=new Box(345,455); 
  box18=new Box(375,455); 
  box19=new Box(405,455); 
  box20=new Box(435,455); 
  box21=new Box(465,455); 

  // 4 layer

  box22=new Box(375,435); 
  box23=new Box(405,435); 
  box24=new Box(435,435); 

  // 5 layer

  box25=new Box(405,415); 

  // 1 layer

  box26=new Box(622,295); 
  box27=new Box(650,295); 
  box28=new Box(680,295); 
  box29=new Box(710,295); 
  box30=new Box(740,295); 
  box31=new Box(770,295); 
  box32=new Box(800,295); 
  box33=new Box(830,295); 
  box34=new Box(860,295); 

  // 2 layer
 
  box35=new Box(650,275); 
  box36=new Box(680,275); 
  box37=new Box(710,275); 
  box38=new Box(740,275); 
  box39=new Box(770,275); 
  box40=new Box(800,275); 
  box41=new Box(830,275); 

  // 3 layer

  box42=new Box(680,230); 
  box43=new Box(710,230); 
  box44=new Box(740,230); 
  box45=new Box(770,230); 
  box46=new Box(800,230); 

  // 4 layer

  box47=new Box(710,190); 
  box48=new Box(740,190); 
  box49=new Box(770,190); 

  // 5 layer

  box50=new Box(740,150); 

  polygon1=new polygon(100,300,30);

  sling = new SlingShot(polygon1.body,{x:100, y:400});


}

function draw() {
  background("lightblue");  
  
  Engine.update(engine);

  ground.display();
  path1.display();
  path2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
 
  box22.display();
  box23.display();
  box24.display();
  
  box25.display();
  
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
 
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();

  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();

  box47.display();
  box48.display();
  box49.display();

  box50.display();

  sling.display();

  polygon1.display();


}

function mouseDragged(){

  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  sling.fly();

}
