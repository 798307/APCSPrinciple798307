//  Andrew Matel
// 	8/15
//  This is a comment
//  The setup function function is called once when your program begins

var x, y;//declaration
var speedX, speedY;

function setup() {
  x = 0;// init
  y = 0;
  speedX = 2;
  speedY = 3;
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(20, 20, 20);


}

//  The draw function is called @ 30 fps
function draw() {
  x = x + speedX
  y = y + speedY
//background(5, 5, 5);
  fill(0,200,0,1);
  rect(0,400,800,400,);
  fill(0,0,200,2);
  rect(0,0,800,400);
  fill(200,200,200);
  ellipse(200,120,200,100);
  fill(200,200,200);
  ellipse(600,200,200,100);
  fill(0,200,0);
  rect(385,445,30,200);
  fill(200,0,0);//  red circle
  ellipse(400,400,200,200);
  fill(200,200,0);
  ellipse(400,400,100,100,200);
  fill(0,200,0);
  triangle(350,560,385,540,385,580);
  fill(200,200,0);
  ellipse(x,y,100,80);
  fill(0,0,0);
  triangle(548,335,550,350,580,340);
  fill(0,0,0);
  ellipse(480,330,10,10);
  fill(200,200,200,2);
  ellipse(520,320,70,20);
}
