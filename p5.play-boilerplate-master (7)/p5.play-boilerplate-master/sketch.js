 let timer=10;

 var player,plr;

 var virus,vr,virus2,virus3,virus4,virus5,virus6,virus7,virus8;
 var w1,w2,w3,w4,w5;
 var bg;
 var bulletGroup;

function preload(){
 bg=loadImage('images/images.jpg');
 vr=loadImage('images/virus.png');
 plr=loadImage('images/plr.jpg');
}

function setup() {
  createCanvas(800,600);
   virus=createSprite(200,200,50,50);
   virus.velocityX=3;
   virus.velocityY=3;
   virus.scale=0.5;
   virus.addImage(vr);
   
   bulletGroup=createGroup();

   var txt =createElement("h3")
   txt.html("Save your computer from virus!!! (press space to shoot)");

   virus2=createSprite(200,200,50,50);
   virus2.velocityX=10;
   virus2.velocityY=10;
   virus2.scale=0.5;
   virus2.addImage(vr);
   
   virus3=createSprite(300,200,50,50);
   virus3.velocityX=7;
   virus3.velocityY=7;
   virus3.scale=0.5;
   virus3.addImage(vr);
   
   virus4=createSprite(700,200,50,50);
   virus4.velocityX=10;
   virus4.velocityY=5;
   virus4.scale=0.5;
   virus4.addImage(vr);
   
   virus5=createSprite(200,500,50,50);
   virus5.velocityX=8;
   virus5.velocityY=6;
   virus5.scale=0.5;
   virus5.addImage(vr);
   
   virus6=createSprite(200,400,50,50);
   virus6.velocityX=9;
   virus6.velocityY=7;
   virus6.scale=0.5;
   virus6.addImage(vr);
  
   virus7=createSprite(400,200,50,50);
   virus7.velocityX=3;
   virus7.velocityY=3;
   virus7.scale=0.5;
   virus7.addImage(vr);
   
   virus8=createSprite(600,200,50,50);
   virus8.velocityX=3;
   virus8.velocityY=3;
   virus8.scale=0.5;
   virus8.addImage(vr);

   w1=createSprite(400,0,1000,50);
   w1.visible=false;
   w2=createSprite(0,100,50,1000);
   w2.visible=false;
   w3=createSprite(800,100,50,1000);
   w3.visible=false;
   w4=createSprite(400,600,1000,50);
   w4.visible=false;
   w5=createSprite(400,520,1000,10);
   w5.visible=false;
   
   player=createSprite(400,540,20,20);
   player.addImage(plr);
  
   player.scale=0.5;
}

function draw() {
  background(bg);
  player.x=mouseX;
  virus.bounceOff(w1);
  virus.bounceOff(w2);
  virus.bounceOff(w3);
  virus.bounceOff(w4);
  virus.bounceOff(w5);

  virus2.bounceOff(w1);
  virus2.bounceOff(w2);
  virus2.bounceOff(w3);
  virus2.bounceOff(w4);
  virus2.bounceOff(w5);

  virus3.bounceOff(w1);
  virus3.bounceOff(w2);
  virus3.bounceOff(w3);
  virus3.bounceOff(w4);
  virus3.bounceOff(w5);

  virus4.bounceOff(w1);
  virus4.bounceOff(w2);
  virus4.bounceOff(w3);
  virus4.bounceOff(w4);
  virus4.bounceOff(w5);

  virus5.bounceOff(w1);
  virus5.bounceOff(w2);
  virus5.bounceOff(w3);
  virus5.bounceOff(w4);
  virus5.bounceOff(w5);

  virus6.bounceOff(w1);
  virus6.bounceOff(w2);
  virus6.bounceOff(w3);
  virus6.bounceOff(w4);
  virus6.bounceOff(w5);

  virus7.bounceOff(w1);
  virus7.bounceOff(w2);
  virus7.bounceOff(w3);
  virus7.bounceOff(w4);
  virus7.bounceOff(w5);

  virus8.bounceOff(w1);
  virus8.bounceOff(w2);
  virus8.bounceOff(w3);
  virus8.bounceOff(w4);
  virus8.bounceOff(w5);
  textAlign(CENTER, CENTER);
  textSize(100);
  fill(255);
  text(timer, width/2, height/2);
  
  if(World.frameCount%50===0 && timer>0){
     timer--
}
   if(timer===0 ){
    fill(255)
    text("game over",400,400);
    player.destroy();
    bulletGroup.setVelocityEach(5000);
   }

   
  
   if (keyDown("space")){
    createBullet(player.x);
    
   }
   if (bulletGroup.isTouching(virus)) {
    virus.destroy();
    bulletGroup.destroyEach();
    
    
  }
  if (bulletGroup.isTouching(virus2)) {
    virus2.destroy();
    bulletGroup.destroyEach();
    
  }
  if (bulletGroup.isTouching(virus3)) {
    virus3.destroy();
    
    bulletGroup.destroyEach();
    
  }
  if (bulletGroup.isTouching(virus4)) {
    virus4.destroy();
    bulletGroup.destroyEach();
    
    
  }
  if (bulletGroup.isTouching(virus5)) {
    virus5.destroy();
    bulletGroup.destroyEach();
    
    
  }
  if (bulletGroup.isTouching(virus6)) {
    virus6.destroy();
    bulletGroup.destroyEach();
    
    
  }
  if (bulletGroup.isTouching(virus7)) {
    virus7.destroy();
    bulletGroup.destroyEach();
    
    
  }
  if (bulletGroup.isTouching(virus8)) {
    virus8.destroy();
    bulletGroup.destroyEach();
    
}

  drawSprites();
  
}

function createBullet(x) {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = 560;
  bullet.x = x;                                           
  bullet.shapeColor = "red";
  bullet.velocityY = -4;
  bullet.lifetime = 100;
  bulletGroup.add(bullet);
}