//  Andrew Matel
// 	10/15/19
//  Bubble Sort
//  The setup function function is called once when your program begins
var list = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}


//  The draw function is called @ 30 fps
function draw() {
  makelist(10,list);
  for(var i = 0; i < list.length-1; i++){
    for(var j = 0; j < list.length-1-i; j++){
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

function makelist(n,l){
  for(var i = 0; i !== n - 1; i++){
    var number = int(random(0,n));
    while(number in list){
      if(number in l){
        number = int(random(0,n));
      }
    }
    l.push(number);
  }
  console.log(l);
}
