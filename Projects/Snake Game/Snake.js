//Andrew Matel
//10/31/19
class Snake{
  constructor(){
    this.loc = createVector(width/2, height/2);
    this.move = 'false';
    this.clr = color(0,255,0);
  }

  run(){
    this.render();
    this.update();
  }

  update(){
    frameRate(10);
    if(keyCode === RIGHT_ARROW){
      this.loc.y = this.loc.y + w;
      direction = 1;
    }
    if(keyCode === LEFT_ARROW ){
      this.loc.y = this.loc.y - w;
      direction = 2;
    }
    if(keyCode === UP_ARROW){
      this.loc.x = this.loc.x - w;
      direction = 3;
    }
    if(keyCode === DOWN_ARROW){
      this.loc.x = this.loc.x + w;
      direction = 4;
    }
  }

  checkEdges(){
    if((this.loc.x + 10 > width) || (this.loc.x < 0) || (this.loc.y < 0) || (this.loc.y + 10 > height)){
      fill(255,255,255);
      textSize(80);
      text("U suc", 100, 100);
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.y, this.loc.x, w, w);
  }

}
