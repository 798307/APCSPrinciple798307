//Andrew Matel
//12/16/19
class Planet{
  constructor(x, y, id){
    this.loc = createVector(x,y);
    this.acc =createVector(0,0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 90;
    this.id = id;
  }
  run(){
    this.checkEdge();
    this.update();
    this.render();
  }
  checkEdge(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x
    }

    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }

    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }

    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    }

  }

  update(){
    if(move === 'yes'){
      for(var i = 0; i < planets.length; i++){
        planets[i].loc.x = random(0, width);
        planets[i].loc.y = random(0, height);
      }
      move = 'no';
    }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
    textSize(10);
    fill(255,255,255);
    text(this.id, this.loc.x, this.loc.y);
  }

}
