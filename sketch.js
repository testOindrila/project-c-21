var canvas;
var fix1 , fix2 , fix3 , fix4;
var move;
var music;

function preload()
{
  music = loadSound("music.mp3"); 
}

function setup()
{
    canvas = createCanvas(800,600);

    move = createSprite(random(10 , 750) , 300 , 20 , 20);
    move.shapeColor = "white";
    move.velocityX = 3;
    move.velocityY = 3;

    fix1 = createSprite(100 , 590 , 180 , 20);
    fix1.shapeColor = "red";
    
    fix2 = createSprite(300 , 590 , 180 , 20);
    fix2.shapeColor = "green";

    fix3 = createSprite(500 , 590 , 180 , 20);
    fix3.shapeColor = "blue";

    fix4 = createSprite(700 , 590 , 180 , 20);
    fix4.shapeColor = "yellow";
}

function draw()
{
    background(rgb(169,169,169));
    
    if(move.x < 0)
    {
        music.stop();
        move.velocityX = 3;
    }
    else if(move.x > 800)
    {
        music.stop();
        move.velocityX = -3;
    }
     
    if(isTouching(move , fix4))
    {
        music.play();
        move.shapeColor = "yellow";
        bounceOff(move , fix4);
    }
    else if(isTouching(move , fix3))
    {
        music.stop();
        move.shapeColor = "blue";
        bounceOff(move , fix3);
    }
    else if(isTouching(move , fix2))
    {
        music.stop();
        move.shapeColor = "green";
        bounceOff(move , fix2);
        move.velocityX = 0;
        move.velocityY = 0;
    }
    else if(isTouching(move , fix1))
    {
        music.stop();
        move.shapeColor = "red";
        bounceOff(move , fix1);
    }

    if(move.y > 0)
    {
        music.stop();
        move.velocityY = 3;
    }
    drawSprites();
}

function isTouching(object1 , object2)
{
    if(object1.x - object2.x < object1.width/2 + object2.width/2
      && object2.x - object1.x < object1.width/2 + object2.width/2
      && object1.y - object2.y < object1.height/2 + object2.height/2
      && object2.y - object1.y < object1.height/2 + object2.height/2)
      {
          return true();
      }
      else
      {
          return false();
      }
}

function bounceOff(object1 , object2)
{
    if(object1.x - object2.x < object2.width/2 + object2.width/2
      && object2.x - object1.x < object1.width/2 + object2.width/2 )
    {
        object1.velocityX = object1.velocityX * -1;
        object2.velocityX = object2.velocityX * -1;
    }

    if(object1.y - object2.y < object1.height/2 + object2.height/2
      && object2.y - object1.y < object1.height/2 + object2.height/2)
    {
        object1.velocityY = object1.velocityY * -1;
        object2.velocityY = object2.velocityY * -1;
    }

    if(object1.x < 0)
    {
        object1.velocityX = 3;
    }

    else if(object2.x > 1200)
    {
        object2.velocityX = -3;
    }
}