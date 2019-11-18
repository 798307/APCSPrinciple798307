//Andrew Matel
//10/31/19
class Snake{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(0,255,0);
    this.body = [];
    this.vel = createVector(0,0);
  }

  loadSegments(){
    if(this.body.length/2 < score){
      this.body.push(createVector(0,0));
      this.body.push(createVector(0, 0));
      console.log(this.body);
    }
  }

  run(){
    this.loadSegments();
    this.update();
    this.render();
    this.checkEdges();
    this.tangled();
  }

  update(){
    frameRate(15);
    if(keyCode === DOWN_ARROW){
      this.vel.x = w;
      this.vel.y = 0;
    }
    if(keyCode === UP_ARROW){
      this.vel.x = -w;
      this.vel.y = 0;
    }
    if(keyCode === LEFT_ARROW){
      this.vel.x = 0;
      this.vel.y = -w;
    }
    //bug in my code makes down right and left up
    if(keyCode === RIGHT_ARROW){
      this.vel.x = 0;
      this.vel.y = w;
    }
    for(var i = this.body.length - 1; i > 0; i--){//for some reason this only loads one segment and then stops
        this.body[i].y = this.body[i-1].y;
        this.body[i].x = this.body[i-1].x;
    }
    if(this.body.length > 0){
      this.body[0].x = this.loc.y;
      this.body[0].y = this.loc.x;
    }
    this.loc.add(this.vel);
  }

  checkEdges(){
    if(((this.loc.x > width - w) || (this.loc.x < 0) || (this.loc.y < 0) || (this.loc.y > height - w))){
      gamestate = 2;
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.y, this.loc.x, w, w);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, w, w);
    }
  }
  tangled(){
    for(var i = 0; i < this.body.length; i++){
      if(this.loc.y === this.body[i].x && this.loc.x === this.body[i].y){
        gamestate = 2;
      }
    }
  }
}
