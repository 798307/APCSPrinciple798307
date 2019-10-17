//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var n = 10000;
var list = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = 0; i < n; i++){
    var number = random(10);
    list[i] = number;
   }
}
console.log(list);
