//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var w = 20;
var snakehead;
var food;
var segments = [];
var direction = 0;
var numofsegments = 0;
var touch = false;
var gamestate = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  snakehead = new Snake(w,w,0);
  food = new Food();
  segments[0] = snakehead;
}

//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5);
  if(gamestate === 1){
    snakehead.run();
    food.run();
    if(touch){
      numofsegments = numofsegments + 1;
      segments[numofsegments] = new Snake(segments[numofsegments-1].loc.x,segments[numofsegments-1].loc.y,numofsegments);
      segments[numofsegments].run();
      touch = false;
      console.log(numofsegments);
      console.log(segments);
    }
  }
  if(gamestate === 2){
    background(255,255,255);
    fill(0,0,0);
    textSize(80);
    text("U suc", 100, 100);
  }
}
