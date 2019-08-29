//  Andrew Matel
//08/21/19
////  This is a comment
//  The setup function function is called once when your program begins
var balls = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  // b1 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  // b2 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  // b3 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  // b4 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  loadBalls(1);
}

//  The draw function is called @ 30 fps
function draw() {
  runBalls();


}
function loadBalls(n){
  for(var i = 0; i < n; i++){
    //balls[i] = new Ball(random(width), random(height), random(-5,5), random(-5,5));
    balls[i] = new Ball(100, random(height), random(-5,5), random(-5,5));
  }
    console.log(balls);
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }

}
