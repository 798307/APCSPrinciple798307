//  Andrew Matel
//09/03/19
//// Paddle
var balls = [];
var paddle;
var gameState = 1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(10)
}

function Intro(){
  background(255,1,1);
  fill(0,0,0);
  rect(200, 600, 100, 50, 20);
  fill(0,0,0);
  textSize(80);
  text("Save The Balls", 130, 200);
  }

function Game(){
  background(20,20,20,20);
  runObjects();
  collision();
}
function EndGame(){
  background(255,255,255);
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState===1){
    Intro();
  }
  if(gameState===2){
    Game();
  }
  if(gameState===3){
    EndGame();
  }
}


function loadObjects(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0,500), random(-2,2), random(-2,2), i);
    }
  paddle = new Paddle(width/2, 700);
}

function runObjects(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
  paddle.run();
}

function collision(){
  for (var i = 0; i < balls.length; i++){
    if(balls[i] === true){
      balls.splice(i);
    }
  }
}
