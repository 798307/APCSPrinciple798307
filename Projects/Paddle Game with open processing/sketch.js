//  Andrew Matel
//09/13/19
//// Paddle Game
//contains all of the balls
var balls = [];
//the player moved paddle
var paddle;
//intro, game, and end game
var gameState = 0;
//different for all difficulties
var score = 0;
//hard, medium, and easy
var difficulty = 0;
//shows at end and can be used to try and get high score
var time = 0;
//used to debug
var win = 'no';
//variables for buttons
var btn1 = 1;
var btn2 = 2;
var btn3 = 3;
var btn4 = 4;
var highscore = 10000000000000;
var xOffset = 0;       // Perlin x-offset
var yOffset = 0;       // Perlin y-offset
var offsetInc = 0.006; // Perlin offset increment
var inc = 1;           // Perin increment
var s = 1;             // Start size of perlin ring
var m = 1.005;         // Size multiplier
done = 'nah';
function setup() {//sets up the canvas size and color, along with the buttons on the beginning screen
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  makeButtons();
  textFont('Comic Sans MS')
  blendMode(ADD);
  noFill();
  stroke(255, 64, 8, 128);
}
function Instructions(){//The game's instuctions
  background(255,255,255);
  textSize(30);
  fill(0,0,0);
  text("Catch or block all of the balls as quickly as\npossible. Do not let the balls touch the bottom\nof the paddle or you will lose.", (width/2) - 300, height/4);
  rect((width/2) - 50, height/2, 100, 50);
  fill(255,255,255);
  textSize(20);
  text("X Back", width/2 - 45, height/2 + 25);
  if(mouseX > 350 && mouseX < 450 && mouseY > 400 && mouseY < 550 && mouseIsPressed){
    clear();
    gameState = 1;
 }
}

function Intro(){//the beginning screen
  background(0,0,255);
  fill(0,0,0);
  console.log("bruh");
  textSize(80);
  textStyle(ITALIC);
  text("Save The Balls", 130, 200);
  fill(255,255,255);
  textSize(15);
  text("The High Score is " + highscore + " seconds", 500, 50 )
  for(var i = 0; i < 200 ; i++){//makes graphic
    fill(random(0,255), random(0,255), random(0, 255));
    ellipse(width/2, height/2 - 50, 200,200);
    RunButtons();
  }
  if(mouseX > 150 && mouseX < 650 && mouseY > 500 && mouseY < 525 && mouseIsPressed){//if buttons are pressed
    loadObjects(10);
    clear();
    gameState = 2;
    difficulty = 0;
    time = 0;
    score = 0;
  }else if(mouseX > 150 && mouseX < 650 && mouseY > 570 && mouseY < 595 && mouseIsPressed){
    loadObjects(20);
    clear();
    gameState = 2;
    difficulty = 1;
    time = 0;
    score = 0;
  }else if(mouseX > 150 && mouseX < 650 && mouseY > 640 && mouseY < 665 && mouseIsPressed){
    loadObjects(30);
    clear();
    gameState = 2;
    difficulty = 2;
    time = 0;
    score = 0;
  }else if(mouseX > 150 && mouseX < 650 && mouseY > 710 && mouseY < 735 && mouseIsPressed){
    clear();
    gameState = 4;
  }
}

function Game(){//gameplay
  background(255,255,255,20);
  runObjects();//runs all objects during the game phase
  collision();//what happens when the balls hit the paddle
  textSize(30);
  fill(0,0,0);
  text("Score = " + score, 40, 40 );
  if(difficulty === 0 && score === 10){//win conditions
    win = 'yes';
    console.log(win);
    gameState = 3;
  }
  if(difficulty === 1 && score === 20){
    win = 'yes';
    gameState = 3;
  }
  if(difficulty === 2 && score === 30){
    win = 'yes';
    gameState = 3;
  }
}
function EndGame(){//final screen
  if(win === 'no'){
     background(255,255,255);
     textSize(80);
     fill(0,0,0);
     text("You Lose", width/2 - 200, height/2);
   }
  if(win === 'yes'){
    background(255,255,255);
    textSize(80);
    fill(0,0,0);
    text("You Win!", width/2 - 200, height/2);
    textSize(50);
    fill(0,0,0);
    text("You took "+(Math.round(time/300))+" seconds", width/2 - 225, (height/2)+200);//displays your time
    if(Math.round(time/30) < highscore){//replaces highscore
      fill(0,0,0);
      textSize(20)
      text("That's a High Score!", 500, 50);
      highscore = Math.round(time/300);
    }
  }
  fill(0,0,0);//play again button
  rect(150, 710, 500, 25);
  fill(255,255,255);
  textSize(20);
  text("Play Again?", 325, 725);
  if(mouseX > 150 && mouseX < 650 && mouseY > 710 && mouseY < 735 && mouseIsPressed){
    gameState = 1;
    score = 0;
    win = 'no';
    time = 150;
    for(var i = balls.length; i !== 0; i--){
      balls.splice(i);
    }
  }
}
function cooldesign(){
  verycool();

}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState===0){
    cooldesign();
  }
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

function RunButtons(){//runs all buttons that have different functions
  btn1.run();
  btn2.run();
  btn3.run();
  btn4.run();
}


function loadObjects(n){//creates all gameplay objects
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0,500), random(-2,2), random(-2,2), i);
    }
  paddle = new Paddle(10, 700);
}

function runObjects(){//runs all gameplay objects
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
  paddle.run();
}

function collision(){//deletes ball and adds to score hwne a ball collides with the paddle
  for (var i = balls.length-1; i >= 0; i--){
    time = time + 1//timer
    if(balls[i].isColliding()){
      balls.splice(i,1);
      score = score + 1;
      if(difficulty === 0){//different paddle size reductions for different difficulties
        paddle.w = paddle.w - 50;
      }else if(difficulty === 1){
        paddle.w = paddle.w - 25;
      }else if(difficulty === 2){
        paddle.w = paddle.w - 16;
      }
    }
  }
}

function makeButtons(){//creates the buttons, similar to loadObjects
  btn1 = new Button(150,500,25, 500, "Easy", 1 );
  btn2 = new Button(150,570, 25, 500, "Medium", 2 );
  btn3 = new Button(150, 640, 25, 500, "Hard", 3);
  btn4 = new Button(150, 710, 25, 500, "Instructions",4);
}
function verycool(){
  translate(width * 0.5, height * 0.5);

  if (s < 2000) {
    // Create a series of perlin rings from big to small
    for (var nTimes = 0; nTimes < 10; nTimes++) {

      // Less points for smaller rings
      nPoints = int(2 * PI * s);
      nPoints = min(nPoints, 500);

      // Create ring
      beginShape();
      for (var i = 0; i < nPoints; i++) {
        var a = i / nPoints * TAU;
        var p = p5.Vector.fromAngle(i / nPoints * TAU);
        var n = noise(xOffset + p.x * inc, yOffset + p.y * inc) * s;
        p.mult(n);
        vertex(p.x, p.y);
      }
      endShape(CLOSE);

      // Increment perlin offset for next ring
      xOffset += offsetInc;
      yOffset += offsetInc;

      // Update size
      s *= m;
    }
  } else {
    noLoop();
  }
  done = 'ye';
}
