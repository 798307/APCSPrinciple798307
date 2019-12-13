//  Andrew Matel
// 	12/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var nums = [];
var length = 11;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadNumbers(length, nums);
}

//  The draw function is called @ 30 fps
function draw() {
}

function loadNumbers(n, l){
  for(var i = 0; i < n; i++){
    l.push(Math.floor(random(1,100)));
  }
}

function findAvg(n,l){
  var avg = 0;
  for(var i = 0; i < n; i++){
    avg= avg +l[i];
  }
  avg = avg/n;
  console.log(avg);
}

function logNums(l){
  console.log(l);
}

function findMedian(l, n){
  console.log();
}

function swap(a,x,y){
  var temp = a[x];
  a[x] = a[y];
  a[y] = temp;
}

function mySort(l){
  for(var i = 1; i < l.length; i++){
    for(var j = i; j > 0; j--){
      if(l[j] < l[j-1]){
        swap(l,j,j-1);
      }
    }
  }
}
mySort(nums);
logNums(nums);
findAvg(length,nums);
findMedian(nums, length);
