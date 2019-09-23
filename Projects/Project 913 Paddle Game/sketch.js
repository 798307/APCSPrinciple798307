//  Andrew Matel
//09/03/19
//// Paddle
var balls = [];
var paddle;
var gameState = 1;
var score = 0;
var difficulty = 0;
var time = 0;
var win = 'no';
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
}
function Instructions(){
  background(255,255,255);
  textSize(30);
  fill(0,0,0);
  text("Catch the balls before the time runs out.", (width/2) - 300, height/4);
  rect((width/2) - 50, height/2, 100, 50);
  fill(255,255,255);
  textSize(20);
  text("X Back", width/2 - 45, height/2 + 25);
  if(mouseX > 350 && mouseX < 450 && mouseY > 400 && mouseY < 550 && mouseIsPressed){
    clear();
    gameState = 1;
 }
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
      textSize(18);
      fill(0, 0, 0);
      text("Instructions", i, 620);
    }
  }
  if(mouseX > 50 && mouseX < 150 && mouseY > 600 && mouseY < 650 && mouseIsPressed){
    loadObjects(10);
    clear();
    gameState = 2;
    difficulty = 0;
    time = 150;
  }else if(mouseX > 250 && mouseX < 350 && mouseY > 600 && mouseY < 650 && mouseIsPressed){
    loadObjects(20);
    clear();
    gameState = 2;
    difficulty = 1;
    time = 150;
  }else if(mouseX > 450 && mouseX < 550 && mouseY > 600 && mouseY < 650 && mouseIsPressed){
    loadObjects(30);
    clear();
    gameState = 2;
    difficulty = 2;
    time = 150;
  }else if(mouseX > 650 && mouseX < 750 && mouseY > 600 && mouseY < 650 && mouseIsPressed){
    clear();
    gameState = 4;
  }

}

function Game(){
  background(255,255,255,20);
  runObjects();
  collision();
  textSize(30);
  fill(0,0,0);
  text("Score = " + score, 40, 40 );
  for(var i = 300; i > 0; i--){
    time = i
    text("Time = "+ int(time/30), 600, 40);
  }
  if(difficulty === 0 && score === 10){
    gameState = 3;
  }else if(difficulty === 1 && score === 20){
    gameState = 3;
  }else if(difficulty === 2 && score === 30){
    gameState = 3;
  }
  if(time === 0 && win === 'no'){
      gameState = 3;
  }
  if(time === 0 && win === 'yes'){
    gameState = 3;
  }
}

function EndGame(){
  background(255,255,255);
  textSize(80);
  text("Game Over", width/2 - 200, height/2);
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
  if(gameState===4){
    Instructions();
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
      if(difficulty === 0){
        paddle.w = paddle.w - 50;
      }else if(difficulty === 1){
        paddle.w = paddle.w - 25;
      }else if(difficulty === 2){
        paddle.w = paddle.w - 16;
      }
    }
  }
}
