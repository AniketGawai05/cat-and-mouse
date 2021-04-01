var background
var tom,jerry

var tomImage1,tomImage2,jerryImage1,jerryImage2,backgroundImage;


function preload() {

    //load the images here
  backgroundImage = loadImage("images/garden.png");
  tomImage1 = loadImage("tomImage1.png");
  tomImage2 = loadImage("tomImage2.png");
  jerryImage1 = loadImage("jerryImage.png");
  jerryImage2 = loadImage("jerryImage.png");
}



function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

 canvas = createCanvas(800,800);

 tom = creatSprite(800,600);
 tom.addImage("tomSleeping",tomImage1);
 tom.scale = 0.2;

 jerry = crateSprite(200,600);
 jerry.addImage("jerryStanding",jerryImage1);
 jerry.scale = 15;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x < (tom.width - jerry.width)/2)
{
tom.velocityX = 0;
tom.addAnimation("tomLastImage",tomImage3);
tom.x = 300;
tom.scale = 0.2;
tom.changeAnimation("tomLastImage");
jerry.addAnimation("jerryLastImage",jerryImage3);
jerry.scale = 0.10;
jerry.changeAnimation("jerryLastImage");
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
  tom.velocityX = -5;
  tom.addAnimation("catRunning",tomImage2);
  tom.changeAnimation("catRunning");
}

if(keyCode === LEFT_ARROW){
jerry.addAnimation("jerryTeasing",jerryImage2);
jerry.changeAnimation("jerryTeasing");


}



}
