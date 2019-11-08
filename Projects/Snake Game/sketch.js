//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var w = 20;
var snakehead;
var food;
var direction = 0;
var numofsegments = 0;
var gamestate = 1;
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
  }
  if(gamestate === 2){
    fill(255,255,255);
    textSize(80);
    text("U suc", 100, 100);
  }
}
