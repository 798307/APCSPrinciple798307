//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var barlist = [];
var x = 0;
var n = 100;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars(100);
  frameRate(20);
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

//  The draw function is called @ 30 fps
function draw() {
  background(0,0,0);
  runbars();
  for(var j = 0; j < barlist.length-1; j++){
    if(barlist[j].h > barlist[j+1].h){
      swap(barlist, j, j+1);
      changelocation(barlist, j, j+1);
    }
  }
}

function loadBars(){
  for(var i = 0; i < n; i++){
    numbars = n
    barlist[i] = new Bar(x, Bar.h);
    x = x + width / n;
  }
}

function runbars(){
 for(var i = 0; i < barlist.length; i++){
   barlist[i].run();
 }
}
