var bgImage,injectionImage,virusImage,virus2Image;
var injection;
var virusGroup;

function preload(){
  bgImage = loadImage("images/bg.jpg")
  injectionImage = loadImage("images/injection.png")
  virusImage = loadAnimation("images/virus.png")
  virus2Image = loadAnimation("images/virus2.png")
}

function setup() {
  createCanvas(displayWidth, displayHeight-100)
  injection = createSprite(200,500,20,20)
  injection.addImage("injectionImage", injectionImage)
  injection.scale = 0.3

  virusGroup = new Group()
}

function draw(){
  background(bgImage)

  injection.x = mouseX
  injection.y = mouseY

  virus()
  drawSprites()
}

function virus(){
  if(frameCount%20 === 0){
  var corona = createSprite(Math.round(random(0,1800)), 0, 40, 40)
  corona.velocityY = 10
  corona.addAnimation("virusImage", virusImage)
  corona.scale = 0.2
  virusGroup.add(corona)
  }
}

