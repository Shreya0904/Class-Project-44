var bird, elephant, doggy, oneeye, robot, tiger

var ocean, startingGround, startScreen, 
skip, quit, challangeScreen, background, 
leaderBoard, help, heart, blocks, characterScreen

function preload() {
ocean_png=loadImage("images/ocean.png")
startingGround_png=loadImage("images/startingGround.png")
startScreen_png=loadImage("images/startScreen.png")
skip_png=loadImage("images/skip.png")
quit_png=loadImage("images/quit.png")
challengeScreen_png=loadImage("images/challengeScreen.png")
Background_png=loadImage("images/Background.png")
leaderBoard_png=loadImage("images/leaderBoard.png")
help_png=loadImage("images/help.png")
heart_png=loadImage("images/heart.png")
blocks_png=loadImage("images/blocks.png")
characterScreen_png=loadImage ("images/characterScreen.png")

bird_png=loadImage("characters/bird.png")
elephant_png=loadImage("characters/elephant.png")
doggy_png=loadImage("characters/doggy.png")
oneeye_png=loadImage("characters/oneeye.png")
robot_png=loadImage("characters/robot.png")
tiger_png=loadImage("characters/tiger.png")
}

function setup() {
  createCanvas(800,400);
  player1=createSprite(400, 200, 50, 50);
  player1.addImage(bird_png);
  player1.scale=0.20;
  startingGround=createSprite(403,273,10,10);
  startingGround.addImage(startingGround_png)
  startingGround.scale=0.20;
}

function draw() {
  background(Background_png);  

  if(keyDown(UP_ARROW)){
    player1.velocityY=-10; 
  }
  player1.velocityY=player1.velocityY+0.8;
  player1.collide(startingGround)
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY);
}