//Andrew Matel
//09/03/19
//Attraction Repulsion
class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx, dy);
    this.ballx = dx
    this.acc =createVector(-0.05,0.05);
    this.clr = color(random(255),random(255),random(255));
    this.w = random(20,30);
    this.id = id;
  }
  run(){
    this.checkEdge();
    this.update();
    this.render();
    this.isColliding();
  }
  checkEdge(){
    if(this.loc.x < 0){
      this.ballx = -this.ballx;
    }
    if(this.loc.x > width){
      this.ballx = -this.ballx;
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
    this.loc.y = this.loc.y + this.vel.y;
    this.loc.x = this.loc.x + this.ballx + random(-4,4);

  }

  isColliding() {
    if(this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y + paddle.h){
      return true;
    }else{
  return false;
    }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

}
