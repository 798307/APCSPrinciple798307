//Andrew Matel
//08/21/19
//Vectors
class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255),random(255),random(255));
    this.w = random(10,70);
  }
  run(){
    this.checkEdge();
    this.update();
    this.render();
  }
  checkEdge(){
    if(this.loc.x < 0){
      this.vel.dx =  this.vel.dy.mult(-1);
    }
    if(this.loc.x > width){
      this.vel.dx =  this.vel.dy.mult(-1);
    }
    if(this.loc.y < 0){
      this.vel.dy =  this.vel.dy.mult(-1);
    }
    if(this.loc.y > height){
      this.vel.dy = this.vel.dy.mult(-1);
    console.log(this.vel.dx)
    }
  }
  update(){
    this.loc.add(this.vel);
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }
}
