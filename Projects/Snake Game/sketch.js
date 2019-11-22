//  Andrew Matel
// 10/31/19
//  Snake Game
//  The setup function function is called once when your program begins
var w = 20;
var snakehead;
var food;
var direction = 0;
var numofsegments = 0;
var gamestate = 3;
var score = 0;

function setup() {//makes canvas and sets variables to correct class objects
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  snakehead = new Snake(w,w);
  food = new Food();
}

//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5);
  if(gamestate === 1){//Plays game
    snakehead.run();
    food.run();
    fill(255,255,255);
    textSize(20);
    text("score = "+score, 700, 20);
  }
  if(gamestate === 2){//makes end screen
    background(0,0,0);
    fill(255,255,255);
    textSize(80);
    text("Game Over", 200, 100);
    rect(200,300,400,100);
    fill(0,0,0);
    text("Start Over?", 200, 400);//button title
    if(mouseX > 200 && mouseX < 600 && mouseY > 300 && mouseY < 400 && mouseIsPressed){//detects if button is pressed
      gamestate = 3;
    }
  }
  if(gamestate === 3){//Intro Screen
    background(0,0,0);
    for(var i = 0; i < 1000; i++){//changes title color
      fill(random(0,255),random(0,255),random(0,255));
    }
    textSize(80);
    text("Snake Game", 170, 200);//title of game
    textSize(50);
    text("Press 'space' to begin", 160, 600);
    if(keyCode === 32){//if space is pressed, the game
        gamestate = 1;
        score = 0;
        keyCode = 0;
    }
  }
}
