//Andrew Matel
//10/31/19
class Snake{
  constructor(){
    this.loc = createVector(400,400);
    this.move = False;
    this.clr = color(100,0,0);
  }

  run(){
    this.render();
    this.update();
  }

  update(){
    if(keyCode === rightArrow){
      this.move = True;
      while(this.move){
        this.loc.x = this.loc.x + w;
        if(keyCode !== rightArrow){
          this.move = False;
        }
      }
    }
    if(keyCode === leftArrow){
      this.move = True;
      while(this.move){
        this.loc.x = this.loc.x - w;
        if(keyCode !== leftArrow){
          this.move = False;
        }
      }
    }
    if(keyCode === upArrow){
      this.move = True;
      while(this.move){
        this.loc.y = this.loc.y + w;
        if(keyCode !== upArrow){
          this.move = False;
        }
      }
    }
    if(keyCode === downArrow){
      this.move = True;
      while(this.move){
        this.loc.y = this.loc.y - w;
        if(keyCode !== downArrow){
          this.move = False;
        }
      }
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.y, this.loc.x, w, w);
  }

}
