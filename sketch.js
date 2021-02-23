const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box
var polygon
var ground

function setup (){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(335,600,340,20)
   

    polygon=new hexagon(200,200,50,50)

    box1=new Box(200,570,40,40)
    box2=new Box(245,570,40,40)
    box3=new Box(290,570,40,40)
    box4=new Box(335,570,40,40)
    box5=new Box(380,570,40,40)
    box6=new Box(425,570,40,40)
    box7=new Box(470,570,40,40)
    box8=new Box(220,525,40,40)
    box9=new Box(265,525,40,40)
    box10=new Box(310,525,40,40)
    box11=new Box(355,525,40,40)
    box12=new Box(400,525,40,40)
    box13=new Box(445,525,40,40)
    box14=new Box(240,480,40,40)
    box15=new Box(285,480,40,40)
    box16=new Box(330,480,40,40)
    box17=new Box(375,480,40,40)
    box18=new Box(420,480,40,40)
    box19=new Box(260,435,40,40)
    box20=new Box(305,435,40,40)
    box21=new Box(350,435,40,40)
    box22=new Box(395,435,40,40)
    box23=new Box(280,390,40,40)
    box24=new Box(325,390,40,40)
    box25=new Box(370,390,40,40)
    box26=new Box(300,345,40,40)
    box27=new Box(345,345,40,40)
    box28=new Box(325,300,40,40)
}

function draw(){
background("brown")

textSize(20)
fill("black")
text("Drag the Haxagonal Stone and release it,to launch it towards the box",200,200)

ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()
box26.display()
box27.display()
box28.display()

polygon.display()
}

