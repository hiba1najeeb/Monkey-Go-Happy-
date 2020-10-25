

var monkey , monkey_running
var groud,groudImage;
var FoodGroup, obstacleGroup,o1,o2;
var score
var invisibleGround;
var jumpSound;
var checkpoint;

function preload(){
  

    monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
                                                             "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png",
"sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   groundImage =loadImage("2122.jpg");
  jumpSound =loadSound("jump.mp3");
  m2 =loadSound("123.mp3");
  o1 =loadImage("wood.png")
  o2 =loadImage("stone.png")

}



function setup() {
  createCanvas(450,300)
ground =createSprite(0,0,10,10);
  ground.addImage("g1",groundImage);
  ground.x =ground.width/2;
  ground.scale =2;
  ground.velocityX=-4;
  
    FoodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey=createSprite(50,260,10,10);
  monkey.addAnimation("m1",monkey_running);
  monkey.scale = 0.10;
  
  score =0;

  
  invisibleGround=createSprite(70,260,800,5);
  invisibleGround.visible =false;
}





function draw() {
background("white");
  
  banana();
  obstacle();
  monkey.collide(invisibleGround);
  

  
  if(ground.x<0){
    ground.x =ground.width/2
}
  
  if(keyDown("space")&& monkey.y>200 )   {
    monkey.velocityY=-13;
    jumpSound.play();
  }
  
   monkey.velocityY = monkey.velocityY + 0.5
  

    switch (score){ 
        case 10 :monkey.scale = 0.12;
              break;
        case 20 :monkey.scale =0.14;
              break;
          case 30 :monkey.scale =0.16;
              break;     
            case 40 :monkey.scale =0.18;
              break;
              case 50: monkey.scale =0.20;
              default:break;
  if(FoodGroup .isTouching(monkey)){
    score =score + 2

    
   
  }
   
  }
                         if(obstacleGroup .isTouching(monkey)){
    monkey.scale = 0.10; 
    score =score-2; 
                       obstacleGroup.destroyEach();  
                           m2.play();
  }   

  
  drawSprites();
  textSize(20);
  fill("peach");
  text("Score : "+ score,20 ,30)
  
     obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
   
  monkey.debug=false;
  
 monkey.setCollider("circle",0,0);
  
}

function banana (){
  if(frameCount%80 ===0){
  var banana = createSprite (400,200,10,10);
    banana.addImage ("b1",bananaImage);
    banana.scale =0.020;
    banana.y=Math.round(random(120,180))
    banana.velocityX=-4;
    banana.lifetime =120;
    FoodGroup.add(banana);
}      if(FoodGroup .isTouching(monkey)){
    score =score + 2
  FoodGroup.destroyEach();
   
   
  }
  
}

function obstacle(){
  if(frameCount%300 === 0){
    var obstacle =createSprite(400,240,10,10)
  

  
       obstacle.addImage("o2",o2 )
      obstacle.scale =0.15;
    obstacle.velocityX =-4;
    obstacle.lifetime = 120;
    obstacleGroup.add(obstacle);
  }
  
  
}


