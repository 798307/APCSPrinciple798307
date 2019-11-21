//Andrew Matel
//10/31/19
class Food{
  constructor(){
    this.loc = createVector((w*int(random(0,800/w))), (w*int(random(0,800/w))));
    this.clr = color(255,0,0);
  }

  run(){
      this.render();
      this.update();
  }

  update(){//if snake touches snake
    if((this.loc.x + w > snakehead.loc.y) && (this.loc.x < snakehead.loc.y + w) && (this.loc.y + w > snakehead.loc.x ) && (this.loc.y < snakehead.loc.x + w)){
      this.loc.x = w * int(random(0,40));
      this.loc.y = w * int(random(0,40));
      score = score + 1;
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, w, w);
  }
}
