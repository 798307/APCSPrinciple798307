//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var n = 10000;
var list = [7,5,2,6,3,8,4,10,9,1];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}
//  The draw function is called @ 30 fps
function draw() {};
console.log(list);
const len = list.length;
for (var i = 0; i < len; i++) {
 var el = list[i];
 var j;
 for (j = i - 1; j >= 0 && list[j] > el; j--) {
   list[j + 1] = list[j];
 }
 list[j + 1] = el;
}
console.log(list);
