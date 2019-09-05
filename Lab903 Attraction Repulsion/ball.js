//Andrew Matel
//09/03/19
//Attraction Repulsion
class Ball{
  constructor(x, y, dx, dy, w1, w2, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc =createVector(random(-0.1,0.1));
    this.clr = color(random(255),random(255),random(255));
    this.w = random(w1,w2);
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
      this.loc=-this.loc;

    }
    if(this.loc.x > width){
      this.vel.dx = -this.vel.dx;
    }

    if(this.loc.y < 0){
      this.vel.dy = -this.vel.dy;
    }

    if(this.loc.y > height){
      this.vel.dy = -this.vel.dy;
    }

  }

  update(){
    var distToMainBall;
    distToMainBall = this.loc.dist(mainBall.loc);
    this.vel.add(this.acc);
    this.loc.add(this.vel);

    if(distToMainBall>150){
      this.acc= -this.acc
    }
    if(distToMainBall<150){
      this.acc=-this.acc
    }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

}
