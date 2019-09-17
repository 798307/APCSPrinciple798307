//  Andrew Matel
//09/03/19
//// Paddle
var balls = [];
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(10);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20,50);
  runObjects();


}
function loadObjects(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-2,2), random(-2,2));
    }
  paddle = new Paddle(width/2, 700);
}

function runObjects(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
  paddle.run();
}
