//  Andrew Matel
//09/03/19
//// Attraction Repulsion
//  The setup function function is called once when your program begins
var balls = []
var mainBall
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  // b1 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  // b2 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  // b3 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  // b4 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  loadBalls(1000);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20,50)
  runBalls();


}
function loadBalls(n){
  for(var i = 0; i < n; i++){
    //balls[i] = new Ball(random(width), random(height), random(-5,5), random(-5,5));
    balls[i] = new Ball(random(width), random(height), random(-8,8), random(-8,8), 10, 10);
    }
  mainBall=new Ball(height/2,width/2, 0, 0, 400, 400, 1);

}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
  mainBall.run();
}
