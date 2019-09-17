//Andrew Matel
//08/21/19
class Ball{
  constucter(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    //this.clr = color((random(255)),(random(255)),(random(255)));
    //this.clr = color(255,255,255)
    this.w = random(10,70);
  }
  run(){
    this.CheckEdge();
    this.update();
    this.render();
  }
  CheckEdge(){
    if(this.x < 0){
      this.dx = -this.dx;
    }
    if(this.x > width){
      this.dx = -this.dx;
    }
    if(this.y < 0){
      this.dy = -this.dy;
    }
    if(this.y > height){
      this.dy = -this.dy;
    }
  }
  update(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  render(){
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.w, this.w);
  }
}
