//Andrew Matel
//09/06/19
class Ship
constructor(x, y, dx, dy){
  this.loc = createVector(x,y);
  this.vel = createVector(dx,dy);
  this.acc =createVector(0,0);
  this.clr = color(random(255),random(255),random(255));
  this.w = random(10,10);
  this.angle=0;
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
  this.vel.add(this.acc);
  this.vel.limit(2);
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  this.angle = this.angle + 0.1
  push();
  tranlate(this.loc.x,this.loc.y);
  rotate(this.angle);
  triangle(-5, 8, 5, 8, 0, -8);
  pop();
}

}
