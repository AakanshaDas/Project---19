var gardenImg, garden
var thornImg, thorn, thornsGroup;
var grassImg, grass, grassGroup;
var girl, girlImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  gardenImg = loadImage("garden.png");
  thornImg = loadImage("thorn.jpeg");
  grassImg = loadImage("grass.jpeg");
  girlImg = loadImage("girl.jpg");
  
}

function setup() {
  createCanvas(600, 600);
  garden = createSprite(300,300);
  garden.addImage("garden",gardenImg);
  garden.velocityY = 1;
  thornsGroup = new Group()
  grassGroup = new Group()
  girl=createSprite(200,200,50,50)
  girl.scale=0.3
  girl.addImage("girl",girlImg)
}

function draw() {
  background(200);
  if(gameState==="play"){
    if(keyDown("left_arrow")){
      girl.x= girl.x-3
    }
    if(keyDown("right_arrow")){
      girl.x = girl.x+3
    }
    if(keyDown("space")){
      girl.velocityY= -5
    }
    girl.velocityY=girl.velocityY+0.8
    if(garden.y>400){
      garden.y = 300
    }
spawnThorns()
if(grassGroup.isTouching(girl)){
  girl.velocityY=0

}
if(invisibleBlockGroup.isTouching(girl)||girl.y>600){
  girl.destroy()
  gameState="end"
}
drawSprites()
}
if(gameState==="end"){
  stroke("yellow")
  fill("yellow")
  textSize(30)
  text("gameOver",230,250)
}
}
function spawnThorns(){
  
  if(frameCount%240===0){
    var thorn = createSprite(200,-50)
    thorn.addImage(thornImg)
    var grass = createSprite(200,10)
    var invisibleBlock= createSprite(200,15)
    invisibleBlock.width = grass.width
    invisibleBlock.height=2
    grass.addImage(grassImg)
    thorn.x = Math.round(random(120,400))
    thorn. velocityY = 1
    grass.x = thorn.x
    invisibleBlock.x = thorn.x
    grass.velocityY=1
    invisibleBlock.velocityY=1
    grass . lifetime = 800
    thorn.lifetime=800
    invisibleBlock.lifetime=800
    girl.depth=door.depth
    girl.depth+=1

    thornsGroup.add(thorn)
    invisibleBlock.debug=true
    grassGroup.add(grass)
    invisibleBlockGroup.add(invisibleBlock)

  }
}