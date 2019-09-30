//Andrew Matel
//09/13/19
//Paddle Game
class Paddle{
  constructor(x,y){//only need starting location
    this.loc = createVector(mouseX,700);
    this.acc =createVector(0,0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 500;
    this.h = 20;
  }
  run(){//runs programs of this class
    this.checkEdge();
    this.update();
    this.render();
  }
  checkEdge(){//The player's movement is limited by the size of the screen
    if(this.loc.x < 0){
      this.loc.x = 1;
    }
    if(((this.loc.x + this.w ) > width)){
      this.loc.x = width - (this.w);
    }
    if(this.loc.x < 0){
      this.loc.x = 1;
    }
  }

  update(){//when the mouse moves, the paddle follows
    var mouseLoc = createVector(mouseX - (this.w/2),700 );
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }

  render(){//makes the paddle
    fill(this.clr);
    rect(this.loc.x, 700, this.w, this.h);
  }
}
