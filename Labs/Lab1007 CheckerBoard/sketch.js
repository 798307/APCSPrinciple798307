//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var squares = [];
var row = 0;
var collumn = -1;
var number = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}

//  The draw function is called @ 30 fps
function draw() {
  runSquares();
}

function LoadSquares(){
  for(var i = 0; i < 8; i = i + 100){
    collumn = collumn + 1;
    for(var j = 0; i < 8; j = j + 100){
      squares[collumn] = new Square(j, i , 100, 100);
      number = number + 1;
    }
    row = row + 1;
  }
}

function runSquares(){
  for(var i = 0; i <= squares.length; i++){
    console.log(squares[i]);
    squares[i].run();
  }
}
