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
  for(var i = 50; i === 650; i = i + 200){
    if(i===50){
      textSize(10);
      fill(255,255,255);
      text("Easy", i, 610);
    }else if (i===250) {
      textSize(10);
      fill(255,255,255);
      text("Medium", i+50, 620);
    }else if (i===460) {
      textSize(10);
      fill(255,255,255);
      text("Hard", i+50, 620);
    }else if (i===650) {
      textSize(10);
      fill(255,255,255);
      text("Instruction", i+50, 620);
    }
  }


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
