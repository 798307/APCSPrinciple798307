//Andrew Matel
//09/13/19
//Paddle Game
class Button{
  constructor(x,y,h,w,msg,id){
    this.loc = createVector(x,y);
    this.clr = color(random(255),random(255),random(255));
    this.w = w;
    this.h = h;
    this.msg = msg;
  }
  run(){
    this.update();
    this.render();
  }

  update(){
    if(mouseX > 150 && mouseX < 650 && mouseY > 500 && mouseY < 525 && mouseIsPressed && this.id === 1){
      loadObjects(10);
      clear();
      gameState = 2;
      difficulty = 0;
      time = 150;
      console.log(1);
    }else if(mouseX > 150 && mouseX < 650 && mouseY > 570 && mouseY < 595 && mouseIsPressed && this.id === 2){
      loadObjects(20);
      clear();
      gameState = 2;
      difficulty = 1;
      time = 150;
    }else if(mouseX > 150 && mouseX < 650 && mouseY > 640 && mouseY < 665 && mouseIsPressed && this.id === 3){
      loadObjects(30);
      clear();
      gameState = 2;
      difficulty = 2;
      time = 150;
    }else if(mouseX > 150 && mouseX < 650 && mouseY > 710 && mouseY < 735 && mouseIsPressed && this.id === 1){
      clear();
      gameState = 4;
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    fill(0,0,0);
    textSize(20);
    text(this.msg, (this.loc.x + this.w)/2, (this.loc.y - (this.h/2)));
  }
}
