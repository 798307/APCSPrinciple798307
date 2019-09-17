//Andrew Matel
//09/03/19
//Attraction Repulsion
class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc =createVector(0,0);
    this.clr = color(random(255),random(255),random(255));
    this.w = random(10,10);
    this.id=id;
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
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr);
    if(this.id===1){
      ellipse(this.loc.x, this.loc.y, 40, 40);
    }
    if(this.id===2){
      ellipse(this.loc.x, this.loc.y, 40, 40);
    }
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

}
