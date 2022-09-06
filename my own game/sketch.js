var startRectangle,startRectangleImg
var restartButton, restartButtonImg
var ladyRunning, ladyRunningImg
var ladyStanding, ladyStandingImg

function preload(){
  startRectangleImg = loadImage("rectangeBasicStarter.png")
  restartButtonImg = loadImage("restartButton.png")
  ladyRunningImg = loadImage("ladyRunning.png")
  ladyStandingImg = loadImage("animatedlady.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  startRectangle = createSprite(width/2,height/2, 50, 50)
  startRectangle.addImage(startRectangleImg)
  restartButton = createSprite(width/2,height/2, 80, 80)
  restartButton.addImage(restartButtonImg)
  ladyRunning = createSprite(width/2,height/2, 100, 100)
  ladyRunning.addImage(ladyRunningImg)
  ladyStanding = createSprite(width/2,height/2, 90, 90)
  ladyStanding.addImage(ladyStandingImg)
}

function draw(){
  background(0)
  drawSprites()

}