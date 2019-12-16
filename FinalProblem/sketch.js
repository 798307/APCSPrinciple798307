//  Andrew Matel
// 	12/16/19
//  This is a comment
//  The setup function function is called once when your program begins
var ship;
var planets = [];
var move = 'no';
var numPlanets = 4;
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
  for(var i = 0; i < numPlanets; i++){
    planets[i] = new Planet(random(0,800),random(0,800), i);
  }
}

function runObjects(){
  ship.run();
  for(var i = 0; i < planets.length; i++){
    planets[i].run();
  }
}
