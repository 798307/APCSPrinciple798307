//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var squares = [];
var rowNum = 0;
var number = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  LoadSquares();
}

//  The draw function is called @ 30 fps
function LoadSquares() {
  for(var n = 0; n<8; n++){
    rowNum  = n;
    for(var i = 0; i<8; i++){
      number = i;
      squares[i] = new Square(100*i, 100*n);
      squares[i].run();
    }
  }
}
