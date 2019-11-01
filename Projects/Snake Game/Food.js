//Andrew Matel
//10/31/19
class Food{
  constructor(){
    this.loc = createVector(random(0,width), random(0,height));
    this.clr = color(255,0,0);
  }

  run(){
      this.render();
      this.update();
  }

  update(){
    if((this.loc.x > snakehead.loc.y) && (this.loc.x < snakehead.loc.y + 10) && (this.loc.y > snakehead.loc.x ) && (this.loc.y < snakehead.loc.x + 10)){
      this.loc.x = random(0,width);
      this.loc.y = random(0,height);
    }
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, w, w);
  }
}
