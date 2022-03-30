var PLAY =1 ;
END =0;
var gameState = PLAY;

var bgImg, bg;
var birdImg, bird;
var obstacle1Img, obstacle1 ,obstacle1opp;
var obstacle2Img , obstacle2,obstacle2opp, obstacleGroup;

var bird_collided;

var gameOverImg , gameOver;
var coinImg, coin;
var restartImg,reset; 
var score = 0 ;

function preload(){
  bgImg = loadImage("assets/bg.jpg");
  obstacle1Img = loadImage("assets/pillar1.png ")
  birdImg = loadAnimation("assets/bird1.png", "assets/bird2.png", "assets/bird3.png");
  obstacle2Img = loadImage("assets/pillar2.png ")
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg =loadImage ("assets/restart.png")
  bird_collided=loadAnimation("assets/bird2.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2,displayHeight/2,windowWidth,windowHeight);
  bg.addImage(bgImg);
  

  bird = createSprite(100,displayHeight/2);
  bird.addAnimation("flying", birdImg);
  bird.scale = 0.85

  bg.velocityX -= 4;
  bg.x = bg.width/2;

  gameOver = createSprite(800,430);
  gameOver.addImage("img",gameOverImg);

  restart = createSprite(800,500);
  restart.addImage(restartImg);

  gameOver.scale = 1.5; 
  restart.scale = 0.1;

  gameOver.visible = false;
  restart.visible=false;

  obstacleGroup = new Group();
}


function draw() {
  background(255,255,255);  
 if(gameState === PLAY){
 
  if(bg.x < 0){
    bg.x = bg.width/2; 
  }

  if(keyDown("space")){
    bird.velocityY -= 2;
  }

 

  if(keyDown("right")){
    bird.velocityX += 2 ; 
  }
  
  if(keyDown("down")){
    bird.velocityY += 1 ; 
  }

//gravity
  bird.velocityY = bird.velocityY + 0.8;

  spawnObstacles()
  
  if(obstacleGroup.isTouching(bird)){
    gameState=END;
 }
 }
 
 else if(gameState === END){   
    gameOver.visible= true;
    restart.visible=true;

    bird.velocityX=0;
    bird.velocityY = 0;
    bg.velocityX = 0;
    obstacleGroup.velocityX=0;  
    
    bird.changeAnimation("collide",bird_collided);

    if(mousePressedOver(restart)) {
      reset();
  }
 }

   drawSprites();
}


function spawnObstacles(){
  if(frameCount %80===0){

  obstacle1 = createSprite(450, displayHeight - 95 , 50, 50);
  obstacle1.addImage("1down", obstacle1Img);
  obstacle1.scale = 0.65;
  obstacle1.debug = false; 
  obstacle1.setCollider("rectangle",0,0,60,500,0);

  obstacle1opp = createSprite(450, 150 , 50, 50);
  obstacle1opp.addImage("1up", obstacle1Img);
  obstacle1opp.scale = 0.65
  obstacle1opp.rotation = 180
  obstacle1opp.debug = false; 
  obstacle1opp.setCollider("rectangle",0,0,60,500,0);

  obstacle2 = createSprite(600, displayHeight - 15 , 50, 50);
  obstacle2.addImage("2down", obstacle2Img);
  obstacle2.scale = 1;
  obstacle2.debug = false; 
  obstacle2.setCollider("rectangle",0,0,60,190,0)
  
  obstacle2opp = createSprite(600, 105 , 50, 50);
  obstacle2opp.addImage("2up", obstacle2Img);
  obstacle2opp.scale = 1;
  obstacle2opp.rotation = 180;
  obstacle2opp.debug = false; 
  obstacle2opp.setCollider("rectangle",0,0,60,190,0);

  obstacle3 = createSprite(750, displayHeight - 95 , 50, 50);
  obstacle3.addImage("1down", obstacle1Img);
  obstacle3.scale = 0.65
  obstacle3.debug = false; 
  obstacle3.setCollider("rectangle",0,0,60,500,0)

  obstacle3opp = createSprite(750, 150 , 50, 50);
  obstacle3opp.addImage("1up", obstacle1Img);
  obstacle3opp.scale = 0.65
  obstacle3opp.rotation = 180
  obstacle3opp.debug = false; 
  obstacle3opp.setCollider("rectangle",0,0,60,500,0);

  obstacle4 = createSprite(900, displayHeight - 15 , 50, 50);
  obstacle4.addImage("2down", obstacle2Img);
  obstacle4.scale = 1;
  obstacle4.debug = false; 
  obstacle4.setCollider("rectangle",0,0,60,190,0)
  
  obstacle4opp = createSprite(900, 105 , 50, 50);
  obstacle4opp.addImage("2up", obstacle2Img);
  obstacle4opp.scale = 1;
  obstacle4opp.rotation = 180;
  obstacle4opp.debug = false; 
  obstacle4opp.setCollider("rectangle",0,0,60,190,0);
  
  obstacle5 = createSprite(1050, displayHeight - 95 , 50, 50);
  obstacle5.addImage("5down", obstacle1Img);
  obstacle5.scale = 0.65
  obstacle5.debug = false; 
  obstacle5.setCollider("rectangle",0,0,60,500,0)

  obstacle5opp = createSprite(1050, 150 , 50, 50);
  obstacle5opp.addImage("5up", obstacle1Img);
  obstacle5opp.scale = 0.65
  obstacle5opp.rotation = 180
  obstacle5opp.debug = false; 
  obstacle5opp.setCollider("rectangle",0,0,60,500,0);

  obstacle6 = createSprite(1200, displayHeight - 15 , 50, 50);
  obstacle6.addImage("6down", obstacle2Img);
  obstacle6.scale = 1;
  obstacle6.debug = false; 
  obstacle6.setCollider("rectangle",0,0,60,190,0)
  
  
  obstacle6opp = createSprite(1200, 105 , 50, 50);
  obstacle6opp.addImage("6up", obstacle2Img);
  obstacle6opp.scale = 1;
  obstacle6opp.rotation = 180;
  obstacle6opp.debug = false; 
  obstacle6opp.setCollider("rectangle",0,0,60,190,0);


  obstacle7 = createSprite(1350, displayHeight - 95 , 50, 50);
  obstacle7.addImage("5down", obstacle1Img);
  obstacle7.scale = 0.65
  obstacle7.debug = false; 
  obstacle7.setCollider("rectangle",0,0,60,500,0)


  obstacle7opp = createSprite(1350, 150 , 50, 50);
  obstacle7opp.addImage("5up", obstacle1Img);
  obstacle7opp.debug = false; 
  obstacle7opp.setCollider("rectangle",0,0,60,500,0);

  obstacle8 = createSprite(1500, displayHeight - 15 , 50, 50);
  obstacle8.addImage("6down", obstacle2Img);
  obstacle8.scale = 1;
  obstacle8.debug = false; 
  obstacle8.setCollider("rectangle",0,0,60,190,0)
  
  obstacle8opp = createSprite(1500, 105 , 50, 50);
  obstacle8opp.addImage("6up", obstacle2Img);
  obstacle8opp.scale = 1;
  obstacle8opp.rotation = 180;
  obstacle8opp.debug = false; 
  obstacle8opp.setCollider("rectangle",0,0,60,190,0);


  obstacleGroup.add(obstacle1);
  obstacleGroup.add(obstacle2);
  obstacleGroup.add(obstacle3);
  obstacleGroup.add(obstacle4);
  obstacleGroup.add(obstacle5);
  obstacleGroup.add(obstacle6);
  obstacleGroup.add(obstacle7);
  obstacleGroup.add(obstacle8);
  obstacleGroup.add(obstacle1opp);
  obstacleGroup.add(obstacle2opp);
  obstacleGroup.add(obstacle3opp);
  obstacleGroup.add(obstacle4opp);
  obstacleGroup.add(obstacle5opp);
  obstacleGroup.add(obstacle7opp);
  obstacleGroup.add(obstacle8opp);
  obstacleGroup.add(obstacle6opp);

  }
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  bg.visible = true;
 obstacleGroup.destroyEach();
}
