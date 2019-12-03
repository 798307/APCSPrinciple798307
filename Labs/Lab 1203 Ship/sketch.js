//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var ship;
var planet;
var move = 'no';
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();

}

//  The draw function is called @ 30 fps
function draw() {
  background(0,0,0,100);
  runObjects();
}

function loadObjects(){
  ship = new Ship(10,10, random(-10,10), random(-10, 10));
  planet = new Planet(400,400,random(-2,2),random(-2,2));
}

function runObjects(){
  ship.run();
  planet.run();
}
