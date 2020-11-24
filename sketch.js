

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BG, OG;
var score = 0;
var jungle
var gamestate

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  jungleI = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600,600);
  
  jungle = createSprite(200,200);
  jungle.addImage(jungleI);
  jungle.velocityX = -3;
  jungle.scale = 1.5
  
  monkey = createSprite(70,480)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.3;
  
  ground = createSprite(600,570,1200,15);
  ground.velocityX = -3;
  ground.visible = false;
  
  BG = createGroup();
  OG = createGroup();
  
}


function draw() {
  background("white");
  
  if(ground.x<0){
     ground.x = 600;  
     }
  
  if(jungle.x<0){
     jungle.x = 600;
     }
  
  console.log(monkey.y);
  
  if(keyDown("space")){
    monkey.velocityY = -20
    }
  
  monkey.velocityY = monkey.velocityY + 1;             
  monkey.collide(ground);
  
  food();
  obstacles();
  
  if(monkey.isTouching(BG)){
    score = score + 2;
    BG.destroyEach();
  }
  
  if(monkey.isTouching(OG)){
     monkey.scale = 0.3
  }
   
  
  
  switch(score){
      case 10: monkey.scale = 0.33;
      break;
      case 20: monkey.scale = 0.36;
      break;
      case 30: monkey.scale = 0.39;
      break;
      case 40: monkey.scale = 0.42;
      break;
      case 50: monkey.scale = 0.45;
      break;
      default: break;
      
  }
  
  drawSprites();
  
  textSize(30);
  fill("black");
  text("Survival Time:"+ score, 300,50);
}

function food(){
  if(frameCount % 80 === 0){
    banana= createSprite(550,200);
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -4
    
    banana.y = Math.round(random(100,320));
    BG.add(banana); 
    //banana.lifetime = 125;
  }
    
}
  
function obstacles(){
  if(frameCount % 500 === 0 ){
     stone = createSprite(550,500)
     stone.addImage(obstaceImage);
     stone.velocityX = -4
     stone.scale = 0.5
    
      OG.add(stone);
     //stone.lifetime = 125;
     }
}