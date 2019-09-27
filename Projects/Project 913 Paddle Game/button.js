//Andrew Matel
//09/13/19
//Paddle Game
class Button{
  constructor(x,y,h,w,msg){//location, dimensions, message
    this.loc = createVector(x,y);
    this.clr = color(random(255),random(255),random(255));
    this.w = w;
    this.h = h;
    this.msg = msg;
  }
  run(){//runs buttons
    this.render();
  }
  render(){//makes button
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    fill(0,0,0);
    textSize(20);
    text(this.msg, (this.loc.x + this.w)/2, (this.loc.y - (this.h/2)));
  }
}
