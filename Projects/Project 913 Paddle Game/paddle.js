//Andrew Matel
//09/03/19
//Attraction Repulsion
class Paddle{
  constructor(x,y){
    this.loc = createVector(mouseX,700);
    this.acc =createVector(0,0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 500;
    this.h = 20;
  }
  run(){
    this.checkEdge();
    this.update();
    this.render();
  }
  checkEdge(){
    if (difficulty === 2){
      this.loc.x = 200;
      if(((this.loc.x + this.w ) > width)){
        this.loc.x = 700;
      }
      if(this.loc.x < 0){
        this.loc.x = 1;
      }
    }else{
      if(((this.loc.x + this.w ) > width)){
        this.loc.x = 700;
      }
      if(this.loc.x < 0){
        this.loc.x = 1;
      }
    }
  }

  update(){
    var mouseLoc = createVector(mouseX - (this.w/2),700 );
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, 700, this.w, this.h);
  }
}
