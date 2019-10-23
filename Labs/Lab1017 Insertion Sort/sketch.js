//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function is called once when your program begins
var n = 10000;

var list = [7,5,2,6,3,8,4,10,1,9];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}
//  The draw function is called @ 30 fps
function swap(a,x,y){
  var temp = a[x];
  a[x] = a[y];
  a[y] = temp;
}

console.log(list);
for(var i = 1; i < list.length; i++){
  for(var j = i; j > 0; j--){
    if(list[j] < list[j-1]){
      swap(list,j,j-1);
    }
  }
}
console.log(list);
console.log("The number of swaps is " + numofswaps);
console.log("The Number or compares is " + numofcompares);
console.log("It took " + ((t2 - t1)/1000) + " seconds");
