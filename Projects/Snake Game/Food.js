//Andrew Matel
//10/31/19
class Food{
  constructor(){
    this.loc = createVector((w*int(random(0,800/w))), (w*int(random(0,800/w))));
    this.clr = color(255,0,0);
  }

  run(){//runs all methods in this class
      this.render();
      this.update();
  }

  update(){//if snake touches snake
    if((this.loc.x + w > snakehead.loc.y) && (this.loc.x < snakehead.loc.y + w) && (this.loc.y + w > snakehead.loc.x ) && (this.loc.y < snakehead.loc.x + w)){
      this.loc.x = w * int(random(0,40));
      this.loc.y = w * int(random(0,40));
      score = score + 1;
      for(var i = 0; i < snakehead.body.length; i++){//makes sure food doesn't spawn on snake
        if((snakehead.body[i].x === this.loc.x) && (snakehead.body[i].y === this.loc.y)){
          this.loc.x = w * int(random(0,40));
          this.loc.y = w * int(random(0,40));
        }
      }
    }
  }

  render(){//displays food
    fill(this.clr);
    rect(this.loc.x, this.loc.y, w, w);
  }
}
