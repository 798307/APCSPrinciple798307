//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var barlist = [];
var x = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars(100);
}

//  The draw function is called @ 30 fps
function draw() {
runballs();
for(var i = 0; i < barlist.length; i++){
  
}
}

function loadBars(){
  for(var i = 0; i < 100; i++){
    barlist[i] = new Bar(x, Bar.h);
    x = x + 8
  }
}

function runballs(){
 for(var i = 0; i < barlist.length; i++){
   barlist[i].run();
 }
}
