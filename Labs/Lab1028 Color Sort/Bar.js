//Andrew Matel
//10/23/19
class Bar{
  constructor(x, y, r, g, b){
    this.loc = createVector(x,y);
    this.lenth = width/numbars;
    this.h = 400;
    this.clr = color(r,g,b);
    this.avg = (r + g + b)/3;
  }

  run(){
    this.render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.lenth, this.h)
  }
}
