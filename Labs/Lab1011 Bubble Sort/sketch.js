//  Andrew Matel
// 	10/11/19
//  Bubble Sort
//  The setup function function is called once when your program begins
var list =[7,4,6,3,1,8,5,2];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  for(var i = 0; i < list.length; i++){
    for(var j = 0; j < list.length; j++){
      if(list[j] > list[j+1]){
        swap(list,j+1 ,j);
      }
    }
  }
  console.log(list);
}
function swap(l, a, b){
  var temp = l[a];
  l[a] = l[b];
  l[b] = temp;
}
console.log(list);
