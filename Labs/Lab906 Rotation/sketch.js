//  Andrew Matel
//09/03/19
//// Attraction Repulsion
var ships = [];
var attractor, repellor;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadObjects(500);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20,20,20,50)
  runObjects();


}
function loadObjects(n){
  for(var i = 0; i < n; i++){
    //balls[i] = new Ball(random(width), random(height), random(-5,5), random(-5,5));
    ships[i] = new Ship(random(width), random(height), random(-2,2), random(-2,2));
    }
  attractor=new Ball(width/2,height/2, random(-2.0,2.0), random(-2.0,2.0), 1);
  repellor=new Ball(width/4,height/4, random(-2.0,2.0), random(-2.0,2.0), 2);

}

function runObjects(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
  attractor.run();
  repellor.run();
}
