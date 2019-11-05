//Andrew Matel
//10/31/19
class Snake{
  constructor(x,y,id){
    this.loc = createVector(x,y);
    this.clr = color(0,255,0);
    this.id = id;
  }

  run(){
    this.render();
    this.update();
  }

  update(){
    frameRate(10);
    if(this.id === 0){
      console.log(this.loc.x);
      console.log(this.loc.y);
      if(keyCode === RIGHT_ARROW){
        this.loc.y = (this.loc.y) + w;
        direction = 1;
      }
      if(keyCode === LEFT_ARROW ){
        this.loc.y = (this.loc.y) - w;
        direction = 2;
      }
      if(keyCode === UP_ARROW){
        this.loc.x = (this.loc.x) - w;
        direction = 3;
      }
      if(keyCode === DOWN_ARROW){
        this.loc.x = (this.loc.x) + w;
        direction = 4;
      }
    }
    if(this.id !== 0){
      if(direction === 4){
        this.loc.x = segments[this.id - 1].loc.x;
        this.loc.y = segments[this.id - 1].loc.y - w;
      }else if(direction === 3){
        this.loc.x = segments[this.id-1].loc.x;
        this.loc.y = segments[this.id -1].loc.y + w;
      }else if(direction === 2){
        this.loc.x = segments[this.id -1].loc.x + w;
        this.loc.y = segments[this.id -1].loc.y;
      }else if(direction === 1){
        this.loc.x = segments[this.id-1].loc.x - w;
        this.loc.y = segments[this.id -1].loc.y;
      }
    }
  }

  checkEdges(){
    if((this.id === 0) && ((this.loc.y > width - w) || (this.loc.y < 0) || (this.loc.x < 0) || (this.loc.x > height - w))){
      gamestate = 2;
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.y, this.loc.x, w, w);
  }

}
