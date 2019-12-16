//Andrew Matel
//12/16/19
class Ship{
constructor(x, y, dx, dy){
  this.loc = createVector(x,y);
  this.vel = createVector(dx,dy);
  this.acc =createVector(random(-1.0,1.0));
  this.clr = color(random(255),random(255),random(255));
  this.w = random(10,10);
  this.angle= this.loc.heading();
  this.id = 10;
}
run(){
  this.checkEdge();
  this.update();
  this.render();
}
checkEdge(){
if(this.loc.x<0) this.vel.x=-this.vel.x;
if(this.loc.x>width) this.vel.x= -this.vel.x;
if(this.loc.y<0) this.vel.y=-this.vel.y;
if(this.loc.y>height) this.vel.y=-this.vel.y;
}

update(){
  var distToplanet = [];
  var distToplanetsingle;
  for(var i = 0; i < planets.length; i++){
    distToplanet[i] = this.loc.dist(planets[i].loc);
  }

  distToplanetsingle = 10000000;

  for(var i = 0; i < distToplanet.length; i++){
    if(distToplanet[i] < distToplanetsingle){
      distToplanetsingle = distToplanet[i];
      this.id = i;
    }
  }
  if(distToplanetsingle !== 0){
    this.acc = p5.Vector.sub(planets[this.id].loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
  }
  if(distToplanetsingle < 100){
    move = 'yes';
  }
  this.vel.limit(2);
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  this.angle = this.vel.heading() + 360;
  push();
  translate(this.loc.x,this.loc.y);
  rotate(this.angle);
  triangle(-10, 16, 10, 16, 0, -16);
  pop();
}

}
