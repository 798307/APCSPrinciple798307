//Andrew Matel
//12/09/19
//Ball Sort
class Ball{
  constructor(x, y, r){
    this.loc = createVector(x,y);
    this.clr = r;
    this.w = 800/ numballs;

  }
  run(){
    this.render();
  }
  render(){
    fill(this.clr, 0, 0);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

}
