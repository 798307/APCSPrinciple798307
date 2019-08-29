//  Andrew Matel
// 	08/20
//  This is a comment
//  The setup function function is called once when your program begins
var x;
var y;
var a;
var b;
var c;
var d;
var speedX;
var speedY;
var speeda;
var speedb;
var speedc;
var speedd;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x = 400
  y = 400
  a = 200
  b = 200
  c = 200
  d = 200
  speedX = random(-10.0,10.0)
  speedY = random(-10.0,10.0)
  speeda = random(-10.0,10.0)
  speedb = random(-10.0,10.0)
  speedc = random(-10.0,10.0)
  speedd = random(-10.0,10.0)
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  fill(200,0,0);
  ellipse(x,y,50,50);
  fill(0,200,0);
  ellipse(a,b,50,50)
  fill(0,0,200);
  ellipse(c,d,50,50)
  if(x < 0){
    speedX = -speedX
  }
  if(x>width){
    speedX = -speedX
  }
  if(y>800){
    speedY = -speedY
  }
  if(y<0){
    speedY = -speedY
  }
  if(a < 0){
    speedX = -speedX
  }
  if(a>width){
    speedX = -speedX
  }
  if(b>800){
    speedY = -speedY
  }
  if(b<0){
    speedY = -speedY
  }
  if(c < 0){
    speedX = -speedX
  }
  if(c>width){
    speedX = -speedX
  }
  if(d>800){
    speedY = -speedY
  }
  if(d<0){
    speedY = -speedY
  }
  x = x + speedX
  y = y + speedY
  a = a + speedX//not Done
  y = y + speedY
  x = x + speedX
  y = y + speedY
  x = x + speedX
  y = y + speedY

}
