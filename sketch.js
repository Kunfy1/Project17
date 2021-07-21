var ball;

function setup(){
    createCanvas(600,600);
    ball=createSprite(300,300,10,10);
    ball.shapeColor="red";
}

function draw(){
    background("blue");
    if(keyDown("down")){
        ball.y=ball.y+2
        
    }
    if(keyDown("up")){
        ball.y=ball.y-2
    }
    if(keyDown("left")){
        ball.x=ball.x-2
    }
    if(keyDown("right")){
        ball.x=ball.x+2
    }

    drawSprites();
}