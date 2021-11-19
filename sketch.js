var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
ghost = createSprite(300,300)
ghost.addImage("ghost", ghostImg)
ghost.scale = 0.4

doorsGroup = new Group()
climbersGroup = new Group()

}

function draw() {
  background(200);
  
  if(gameState === "play") {

  
  if(tower.y > 400){
      tower.y = 300
    }

    if(keyDown("space")) {
ghost.velocityY = -10
    }
    ghost.velocityY = ghost.velocityY + 0.6

    if(keyDown("right")) {
ghost.x = ghost.x + 5
    }
    if(keyDown("left")) {
ghost.x = ghost.x - 5
    }
    spawnDoors()
  
  
  
if(climbersGroup.isTouching(ghost)) {
  ghost.velocityY = 0
  gameState = "end"


} 

    drawSprites()
}

if(gameState === "end") {
  text("GAME OVER", 230, 250)
  
}
}
function spawnDoors() {

  if(frameCount % 240 === 0) {
door = createSprite(100,-50)
door.addImage("door", doorImg)

climber = createSprite(100,10)
climber.addImage("climber", climberImg)


door.velocityY = 1
climber.velocityY = 1

door.x = Math.round(random(100, 400))
climber.x = door.x

door.lifetime = 700
climber.lifetime = 700


doorsGroup.add(door)
climbersGroup.add(climber)

ghost.depth = door.depth
ghost.depth = ghost.depth + 1
  }

}
