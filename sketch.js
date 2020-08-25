var fixedRect, movingRect;
var bouncingRect1,bouncingRect2;

var gObj1, gObj2, gObj3, gObj4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600, 200, 80, 50);
  bouncingRect1 = createSprite(25,40,50,80);
  bouncingRect2 = createSprite(25,360,50,80);


  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  bouncingRect1.shapeColor = "green";
  bouncingRect2.shapeColor = "green";


  fixedRect.debug = true;
  movingRect.debug = true;
  bouncingRect1.velocityY = 5;
  bouncingRect2.velocityY = -5;

  gObj1 = createSprite(100, 200, 50, 80);
  gObj2 = createSprite(200, 200, 50, 80);
  gObj3 = createSprite(300, 200, 50, 80);
  gObj4 = createSprite(500, 200, 50, 80);

  gObj3.velocityX = 5;
  gObj4.velocityX = -5;

  gObj1.shapeColor = "green";
  gObj2.shapeColor = "green";
  gObj3.shapeColor = "green";
  gObj4.shapeColor = "green";
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(isTouching(movingRect,gObj1)){
    gObj1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    gObj1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  

  if(isTouching(movingRect,gObj2)){
    gObj2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    gObj2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(bouncingRect1,bouncingRect2);
  
 bounceOff(gObj3,gObj4);

 drawSprites();
}

