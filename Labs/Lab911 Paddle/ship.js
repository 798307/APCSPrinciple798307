//Andrew Matel
//09/06/19
class Ship{
constructor(x, y, dx, dy){
  this.loc = createVector(x,y);
  this.vel = createVector(dx,dy);
  this.acc =createVector(random(-1.0,1.0));
  this.clr = color(random(255),random(255),random(255));
  this.w = random(10,10);
  this.angle= this.loc.heading();
}
run(){
  this.checkEdge();
  this.update();
  this.render();
}
checkEdge(){
if(this.loc.x<0) this.loc.x=width;
if(this.loc.x>width) this.loc.x=0;
if(this.loc.y<0) this.loc.y=height;
if(this.loc.y>height) this.loc.y=0;
}

update(){
  var distTorepellor
  var distToattractor
  distTorepellor = this.loc.dist(repellor.loc);
  distToattractor = this.loc.dist(attractor.loc);
  if(distToattractor !== 0){
    this.acc = p5.Vector.sub(attractor.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
  }
  if(distTorepellor < 150){
    this.acc = p5.Vector.sub(repellor.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(-0.5);
  }
  this.vel.limit(4);
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  this.angle = this.vel.heading() + 360;
  push();
  translate(this.loc.x,this.loc.y);
  rotate(this.angle);
  triangle(-5, 8, 5, 8, 0, -8);
  pop();
}

}
