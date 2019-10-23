//Andrew Matel
//10/23/19
class Bar{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.lenth = 8;
    this.h = random(0,800);
    thic.clr = color(100,0,0);
  }
  run(){
    render();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.lenth, this.h)
  }
}
