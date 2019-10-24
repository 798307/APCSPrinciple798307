//Andrew Matel
//10/23/19
class Bar{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.lenth = width/numbars;
    this.h = random(0,800);
    this.clr = color(100,0,10);
  }

  run(){
    this.render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.lenth, this.h)
  }

}
