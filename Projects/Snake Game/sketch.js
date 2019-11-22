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

function setup() {
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
  if(gamestate === 1){
    snakehead.run();
    food.run();
    fill(255,255,255);
    textSize(20);
    text("score = "+score, 700, 20);
  }
  if(gamestate === 2){
    background(0,0,0);
    fill(255,255,255);
    textSize(80);
    text("Game Over", 200, 100);
  }
  if(gamestate === 3){
    background(0,0,0);
    for(var i = 0; i < 1000; i++){
      fill(random(0,255),random(0,255),random(0,255));
    }
    textSize(80);
    text("Snake Game", 170, 200);
    textSize(50);
    text("Press 'space' to begin", 160, 600);
    if(keyCode === 32){
        gamestate = 1;
        score = 0;
    }
  }
}
