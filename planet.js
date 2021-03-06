//Andrew Matel
//12/03/19
class Planet{
  constructor(x, y, dx, dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc =createVector(0,0);
    this.clr = color(random(255),random(255),random(255));
    this.w = random(10,10);
  }
  run(){
    this.checkEdge();
    this.update();
    this.render();
  }
  checkEdge(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }

    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }

    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }

    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    }

  }

  update(){
    this.acc.mult(0.5);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

}
