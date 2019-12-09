//  Andrew Matel
// 	12/09/19
//  Ball Sort
//  The setup function function is called once when your program begins
var balls = [];
var numballs = 100;
var i = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  fill(200, 30, 150);
  loadBalls(numballs);

}

//  The draw function is called @ 30 fps
function draw() {
  frameRate(10);
  background(100,100,100);
  runBalls();
  i = i + 1;
  for(var j = 0; j < balls.length-1; j++){
    if(balls[j].clr > balls[j+1].clr){
      swap(balls, j, j+1);
      changelocation(balls, j, j+1);
    }
  }
}
function swap(a,x,y){
  var temp = a[x];
  a[x] = a[y];
  a[y] = temp;
}

function changelocation(l,x,y){
  var temploc = l[x].loc.x;
  l[x].loc.x = l[y].loc.x;
  l[y].loc.x = temploc;
}
function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball((800/numballs)*i,400, random(255));
  }
}
function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
