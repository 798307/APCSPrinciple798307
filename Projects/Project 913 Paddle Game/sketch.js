//  Andrew Matel
//09/13/19
//// Paddle
var balls = [];
var paddle;
var gameState = 1;
var score = 0;
var difficulty = 0;
var time = 0;
var time = 0;
var win = 'no';
var btn1 = 1;
var btn2 = 2;
var btn3 = 3;
var btn4 = 4;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  makeButtons();
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

// function Time(){
//   for(var i = time; i > 0; i++){
//     time = i;
//     if (time/30 === 1){
//       if(gameState !== 3){
//         win = 'no';
//         gameState = 3;
//       }
//     }
//   }
// }

function Intro(){
  background(0,0,255);
  fill(0,0,0);
  textSize(80);
  text("Save The Balls", 130, 200);
  for(var i = 0; i < 200 ; i++){
    fill(random(0,255), random(0,255), random(0, 255));
    ellipse(width/2, height/2 - 50, 200,200);
    RunButtons();
  }
  if(mouseX > 150 && mouseX < 650 && mouseY > 500 && mouseY < 525 && mouseIsPressed){
    loadObjects(10);
    clear();
    gameState = 2;
    difficulty = 0;
    time = 150;
  }else if(mouseX > 150 && mouseX < 650 && mouseY > 570 && mouseY < 595 && mouseIsPressed){
    loadObjects(20);
    clear();
    gameState = 2;
    difficulty = 1;
    time = 150;
  }else if(mouseX > 150 && mouseX < 650 && mouseY > 640 && mouseY < 665 && mouseIsPressed){
    loadObjects(30);
    clear();
    gameState = 2;
    difficulty = 2;
    time = 150;
  }else if(mouseX > 150 && mouseX < 650 && mouseY > 710 && mouseY < 735 && mouseIsPressed){
    clear();
    gameState = 4;
  }
}

function Game(){
  background(255,255,255,20);
  for(var i = 0; i !== 0; i++){
    time = i;
  }
  runObjects();
  collision();
  textSize(30);
  fill(0,0,0);
  text("Score = " + score, 40, 40 );
  if(difficulty === 0 && score === 10 && time > 1){
    win = 'yes';
    gameState = 3;
  }else if(difficulty === 1 && score === 20 && time > 1){
    win = 'yes';
    gameState = 3;
  }else if(difficulty === 2 && score === 30 && time > 1){
    win = 'yes';
    gameState = 3;
  }else if(time === 1){
    win = 'no';
    gameState = 3;
  }
}
function EndGame(){
  if(win = 'no'){
    background(255,255,255);
    textSize(80);
    fill(0,0,0);
    text("You Lose.", width/2 - 200, height/2);
  }
  if(win = 'yes'){
    background(255,255,255);
    textSize(80);
    fill(0,0,0);
    text("You Win!", width/2 - 200, height/2);
  }
  fill(0,0,0);
  rect(150, 710, 500, 25);
  fill(255,255,255);
  textSize(20);
  text("Play Again?", 325, 722);
  textSize(50);
  fill(0,0,0);
  text("You took"+(time/30)+"seconds", width/2, (hieght/2)-300);
  if(mouseX > 150 && mouseX < 650 && mouseY > 710 && mouseY < 735 && mouseIsPressed){
    gameState = 1;
    score = 0;
    win = 'no';
    time = 150;
  }
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

function RunButtons(){
  btn1.run();
  btn2.run();
  btn3.run();
  btn4.run();
}


function loadObjects(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0,500), random(-2,2), random(-2,2), i);
    }
  paddle = new Paddle(10, 700);
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

function makeButtons(){
  btn1 = new Button(150,500,25, 500, "Easy", 1 );
  btn2 = new Button(150,570, 25, 500, "Medium", 2 );
  btn3 = new Button(150, 640, 25, 500, "Hard", 3);
  btn4 = new Button(150, 710, 25, 500, "Instructions",4);
}
