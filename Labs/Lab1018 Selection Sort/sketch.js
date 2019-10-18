//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var lowest = 100000000000000000
var list = [7,5,2,6,3,8,4,10,1,9]
var newlist = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
}

for(var i = 0; i === list.length; i++){
  i = 0:
  for(var j = list.length; j > 0; j--){
    if(list[j] < lowest){
      lowest = list[j];
      console.log(lowest);
    }
  }
  list.splice(lowest);
  newlist.push(lowest);
}
console.log(list);
console.log(newlist);
