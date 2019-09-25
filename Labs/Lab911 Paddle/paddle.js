//Andrew Matel
//09/03/19
//Attraction Repulsion
class Paddle{
  constructor(x,y){
    this.loc = createVector(mouseX,mouseY);
    this.acc =createVector(0,0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 100;
    this.h = 20;
  }
  run(){
    this.checkEdge();
    this.update();
    this.render();
  }
  checkEdge(){
    if(((this.loc.x + this.w ) > width)){
      this.loc.x === width;
    }
    if(this.loc.x < 0){
      this.loc.x === 0;
    }
  }

  update(){
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, 700, this.w, this.h);
  }
}
