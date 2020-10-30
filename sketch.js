var fixedRect, movingRect;
var gameObject1,gameObject2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = false;
  gameObject1 = createSprite(100,100,50,50)
  gameObject1.shapeColor = "blue";
  gameObject2 = createSprite(200,100,50,50)
  gameObject2.shapeColor = "blue";
}

function draw() {
  background("yellow");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  
  drawSprites();
}

