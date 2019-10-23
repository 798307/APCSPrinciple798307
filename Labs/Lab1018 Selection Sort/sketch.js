//  Andrew Matel
// 	18/10/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [7,5,2,6,3,8,4,10,1,9];
var numofswaps = 0;
var numofcompares = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}

//  The draw function is called @ 30 fps
var test = random(0,10);//this is a test to see if random works so because it hasnt been working
console.log(test);

function draw() {
}

console.log(list);
var t1 = millis();//millis won't work
for (var i = 0; i < list.length - 1; i++){
  var index = i;
  for (var j = i + 1; j < list.length; j++){
    if (list[j] < list[index]){
       index = j;
    }
    numofcompares = numofcompares + 1;
  }
  var smallerNumber = list[index];
  list[index] = list[i];
  list[i] = smallerNumber;
  numofswaps = numofswaps + 1;
}
var t2 = millis();//I don't know why
console.log(list);
console.log("The number of swaps is " + numofswaps);
console.log("The Number or compares is " + numofcompares);
console.log("It took " + ((t2 - t1)/1000) + " seconds");
