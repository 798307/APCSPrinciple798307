//  Andrew Matel
//09/03/19
//// Paddle
var balls = [];
var paddle;
var gameState = 1;
var score = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
}

function Intro(){
  background(0,0,255);
  fill(0,0,0);
  textSize(80);
  text("Save The Balls", 130, 200);
  for(var i = 0; i < 800; i = i+200){
    fill(i/2,i/2,1/2);
    rect(50+i, 600, 100, 50, 20);
  }
  for(var i = 0; i < 200 ; i++){
    fill(random(0,i+20), random(0,255-i), random(0, 1.5*i));
    ellipse(width/2, height/2, 200,200);
  }
  for(var i = 50; i <= 650; i = i + 200){
    if(i===50){
      textSize(20);
      fill(255,255,255);
      text("Easy", i+25, 620);
    }else if (i===250) {
      textSize(20);
      fill(255,255,255);
      text("Medium", i+10, 620);
    }else if (i===450) {
      textSize(20);
      fill(255,255,255);
      text("Hard", i+20, 620);
    }else if (i===650) {
      textSize(20);
      fill(0, 0, 0);
      text("Instructions", i, 620);
    }
  }
  if(mouseX > 50 && mouseX < 150 && mouseY > 600 && mouseY < 650){
    loadObjects(10);
    clear();
    gameState = 2;
  }
}

function Game(){
  background(255,255,255,20);
  runObjects();
  collision();
  textSize(30);
  fill(0,0,0);
  text("Score = "+score, 40, 40 )
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
  for (var i = balls.length-1; i >= 0; i--){
    if(balls[i].isColliding()){
      balls.splice(i,1);
      score = score +1;
      paddle.w = paddle.w - 50
    }
  }
}
