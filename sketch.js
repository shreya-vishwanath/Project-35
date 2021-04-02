var balloonImg,backgroundImg;
function preload(){
  backgroundImg=loadImage("background.png");
  balloonImg=loadImage("Hot Air Balloon-02.png","Hot Air Balloon-03.png","Hot Air Balloon-04.png");

}
function setup() {
  database=firebase.database();
  console.log();
  createCanvas(500,500);

  balloon=createSprite(100,400,20,20);
  balloon.addAnimation("balloon",balloonImg);
  balloon.scale=0.4;
}

function draw() {
  background(backgroundImg);
  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }  
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(keyDown(LEFT_ARROW)){
    balloon.y=balloon.y+10;
    
  }
  drawSprites();
}