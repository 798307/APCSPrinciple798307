//Andrew Matel
//09/03/19
//Attraction Repulsion
class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc =createVector(random(-1,1));
    this.clr = color(random(255),random(255),random(255));
    this.w = random(10,70);
    this.id=id;
  }
  run(){
    this.checkEdge();
    this.update();
    this.render();
  }
  checkEdge(){
    if(this.loc.x < 0){
      this.vel.dx = -this.vel.dx;
      this.acc = 0;
    }
    if(this.loc.x > width){
      this.vel.dx = -this.vel.dx;
      this.acc = 0;
    }
    if(this.loc.y < 0){
      this.vel.dy = -this.vel.dy;
      this.acc = 0;
    }
    if(this.loc.y > height){
      this.vel.dy = -this.vel.dy;
      this.acc = 0;
    }
  }
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }
}
