class Wall{
  constructor(id){
    this.id = id;
    this.loc = createVector(400,this.id*w);
    this.vel = createVector(Math.floor(random(-20,20)),(0));
    this.spaceMoved = 0;
  }
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }

  update(){
    this.loc.add(this.vel);
    this.spaceMoved = this.spaceMoved + Math.abs(this.vel.x);
    if((this.spaceMoved % 100) === 0){
      this.vel.x = -(this.vel.x);
    }
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x + 100 > width){
      this.vel.x = -this.vel.x;
    }
  }

  render(){
    fill(255,255,255);
    rect(this.loc.x, this.loc.y, 100,w);
  }
}
