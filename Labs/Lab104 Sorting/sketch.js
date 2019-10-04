//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list =[3,6,1,8,2,9];
var sortedlist = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = 0; i>=list.length; i++){
    for(var i = 0; i >= list.length; i = i+2){
      if(list[i] < list[i+1]){
        lowest = list[i+1];
        }
      }
      sortedlist[i];
      list.splice[lowest];
    }
  }
}
function swap(l, a, b){
  var temp = l[a];
  l[a] = l[b];
  l[b] = l[a];
  console.log(l)
}
