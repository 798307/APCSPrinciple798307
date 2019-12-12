//  Andrew Matel
// 	12/12/19
//  This is a comment
//  The setup function function is called once when your program begins
var ships = [];
var planet;
var move = 'no';
var sliderAttraction, sliderAcceleration, sliderText;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects();
  sliderText = createP("This changes Attraction and Velocity");

  sliderText.position(0,370);
  sliderAcceleration = createSlider(0,10,1);
  sliderAcceleration.position(0,470);
  sliderAttraction = createSlider(0,10,1);
  sliderAttraction.position(0,570);
}

//  The draw function is called @ 30 fps
function draw() {
  speed = sliderAcceleration.value();
  accel = sliderAttraction.value();
  background(0,0,0,100);
  runObjects();
}

function loadObjects(){
  for(var i = 0;i < 10; i++){
    ships[i] = new Ship(random(width), random(height), random(-10,10), random(-10, 10));
  }
  planet = new Planet(400,400,random(-2,2),random(-2,2));
}

function runObjects(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }
  planet.run();
}
