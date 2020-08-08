// CANVAS VARIABLES
const width = 1280/2;
const height = 720/2;

// BALL VARIABLES
const ball_radius = 20

var ballx;
var bally;

var ballx_move = 20;
var bally_move = 20;

// PADDLE VARIABLES
const paddle_width = 10;
const paddle_height = 100;
const paddle_move = 20;

// LEFT PADDLE VARIABLES
var paddlex;
var paddley;

// RIGHT PADDLE VARIABLES
var Rpaddlex;
var Rpaddley;

// GAME VARIABLES
var player_score = 0;
var computer_score = 0;

function setup(){
    createCanvas(width,height);
    ballx = width/2;
    bally = height/2;
    
    paddlex = 10;
    paddley = height/2 - paddle_height/2;
    
    Rpaddlex = width - (10 + paddle_width);
    Rpaddley = height/2 - paddle_height/2;
    
    //ballx_move = Math.floor(Math.random()*(20-14+1)+10);
    console.log(ballx_move);
    
}

function draw(){
    background(0);
    ellipse(ballx,bally,ball_radius,ball_radius);
    
    fill(255);
    noStroke();
    rect(paddlex,paddley,paddle_width,paddle_height);
    rect(Rpaddlex,Rpaddley,paddle_width,paddle_height);
    rect(width/2,0,1,height);
    
    // COLLISION WITH WALLS
    if(bally<ball_radius || bally>height-ball_radius){bally_move=-bally_move}
    
    // COLLISION WITH LEFT PADDLE
    if(bally>paddley && bally<paddley+paddle_height && ballx<=paddlex+paddle_width+ball_radius){
        ballx_move=15
    }
    // COLLISION WITH RIGHT PADDLE
    if(bally>Rpaddley && bally<Rpaddley+paddle_height && ballx+ball_radius/2>=Rpaddlex){
        ballx_move=-15
    }
    
    // CHECK FOR BALL OUT OF PLAY AREA
    if(ballx<ball_radius){
        computer_score+=1;
        setup();
    }
    else if(ballx>width-ball_radius){
        player_score+=1;
        setup();
    }
    // DISPLAY SCORE
    fill(255);
    textSize(25);
    text("YOU : "+player_score,20,30);
    text("COMPUTER : "+computer_score,width/2+20,30);
    
    
    // MOVE RIGHT PADDLE
    if(Rpaddley>=bally-ball_radius/2 && ballx>=width/2){
        if(Rpaddley>0){
            Rpaddley-=paddle_move;
        }
    }
    if(Rpaddley+paddle_height<=bally+ball_radius/2 && ballx>=width/2){
        if(Rpaddley<height-paddle_height){
            Rpaddley+=paddle_move;
        }
    }
    
    ballx+=ballx_move;
    bally+=bally_move;
    
    keyPressed();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        if(paddley>0){paddley-=paddle_move;}
        
    }else if(keyCode === DOWN_ARROW){
        if(paddley<height-paddle_height){paddley+=paddle_move;}
        
    }
}
