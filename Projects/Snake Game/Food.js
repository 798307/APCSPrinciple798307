//Andrew Matel
//10/31/19
class Food{
  constructor(){
    this.loc = createVector(random(0,width), random(0,height));
    this.clr = color(255,255,255);
  }
  run(){
    this.render();
    this.update();
  }
  update(){
    if((Snake.loc.x === this.loc.x) && (Snake.loc.y === this.loc.y)){
      this.render();
  }
  render(){
    fill(this.clr);
    rect(random(0,800),random(0,800), w, w);
  }
}
