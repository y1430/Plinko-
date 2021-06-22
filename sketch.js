const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

  var engine,world;
  var particle;
  var particles=[particle];
  var plinkos=[];
  var divisions=[];
  var line;
  var divisionsHeight=300;

  var gameState="PLAY";

  var count=0;
  var score=0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height,width,20);
  
  //creating Divisions
  for (var k=0; k <=width; k=k+80) {
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));
  }

  for (var j=75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j=50; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j=75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j=50; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }


//creating Plinkos
/*for (var j=40; j<=width;j=j+50){
plinkos.push(new Plinko(j,75,10));
}

for (var j=15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175,10));
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,275,10));
    }

    for (var j=20; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j,375,10));
      }*/

}

function draw() {
  background("black");
  Engine.update(engine);

  textSize(35);
  fill("white");
  text("Score : "+ score,20,40);
  
textSize(35);
text("500" , 5, 550);
text("500" , 80, 550);
text("500" , 160, 550);
text("500" , 240, 550);
text("100" , 320, 550);
text("100" , 400, 550);
text("100" , 480, 550);
text("200" , 560, 550);
text("200" , 640, 550);
text("200" , 720, 550);


  ground.display();
if (gameState==="END"){
background("black");
fill("red");
textSize(100);
text("GAME OVER" , 200,400);
}

  for (var k=0; k<plinkos.length; k++) {
    plinkos[k].display();
  }
if (particle!=null){
  particle.display();

  if (particle.body.position.y>700){
    if (particle.body.position.x<300){
      score=score+500;
      particle=null;
      
      if (count>=5) gameState="END";
    }

    else if (particle.body.position.x<600 && particle.body.position.x>301){
      score=score+100;
      particle=null;
      if(count>=5) gameState="END";
    
    }

    else if (particle.body.position.x<900 && particle.body.position.x>601){
      score=score+200;
      particle=null;
      if (count>=5) gameState="END";
    }

  }
}



  for (var i=0; i< divisions.length; i++){
   divisions[i].display();
  }


 /*if (frameCount%60===0) {
   particles.push(new Particle(random(width/2-30,width/2+30),10,10));
 }

 for (var i=0; i<particles.length; i++) {
particles[i].display();
 }*/
 
  drawSprites();
}

function mousePressed() {
  if (gameState!== "END"){
    count++;
    particle=new Particle (mouseX,50,10,10);
  }
}