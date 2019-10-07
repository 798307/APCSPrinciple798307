//  Andrew Matel
// 	10/5/19
//  This is a comment
//  The setup function function is called once when your program begins
var list =[];
var sortedlist = [];
var lowest = 100;
function setup() {
  list =[3,6,1,8,2,9];
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = list.length; i >= 0; i--){
    for(var i = 0; i<=list.length; i++){
      if(list[i] < list[i+1]){
        lowest = list[i];
      }
    }
    sortedlist[i] = lowest;
    list.splice[i];
    console.log(list);
    console.log(sortedlist);
  }
}

//  The draw function is called @ 30 fps
function draw() {
}

function swap(l, a, b){
  var temp = l[a];
  l[a] = l[b];
  l[b] = l[a];
  console.log(l)
}
