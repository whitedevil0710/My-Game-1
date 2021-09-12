function preload(){
  backgroundImage = loadImage("images/bg.jpg");
  playerImage = loadImage("images/Player.png")
  bulletImage = loadImage("images/bullet.png")
  enemyImage1  = loadImage("images/enemy1.png")
  enemyImage2  = loadImage("images/enemy2.png")
  
}
function setup() {
  createCanvas(1200,800);
  player = createSprite(600,700,50,50)
  player.addImage(playerImage)
  //background = createSprite(400, 200, 50, 50);
 //background.addImage(backgroundImage)
}

function draw() {
  background(backgroundImage);  
  fill("red")
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(keyWentDown("UP"))
  {
  bullet(player.x,player.y)
  }
  spawnEnemy()
  drawSprites();
}
function bullet(x,y){

var bullet = createSprite(player.x,player.y-100)
bullet.velocityY = -2;
bullet.addImage(bulletImage)
}
function spawnEnemy(){
if (frameCount % 60===0){
 
  position=Math.round(random(1,2));
  enemy =createSprite(400,random(300,600),50,50);
  if(position==1){
    enemy.addImage("movingleft",enemyImage1)
    enemy.x=1200;
    enemy.velocityX = -7;
    enemy.scale=0.5;
  
}
  else if(position==2){
    enemy.addImage("movingright",enemyImage2)
    enemy.x=0;
    enemy.velocityX = 7;
    enemy.scale=0.5;
    
  }
  
}
}