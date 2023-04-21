var quadrado 

function setup() {
  createCanvas(400,400);
  quadrado = createSprite (200, 200, 10, 10)
}

function draw() 
{
  background(30);
  if(keyDown("right")){
    quadrado.velocityX = 2;
  }


  drawSprites();

}




