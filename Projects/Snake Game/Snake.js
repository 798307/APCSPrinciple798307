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
    for(var i = 0; i < score; i++){
      this.body.push(createVector(0,0));
    }
  }

  run(){
    this.loadSegments();
    this.render();
    this.update();
    this.checkEdges();
  }

  update(){
    frameRate(10);
    for(var i = 0; i < this.body.length; i++){
      this.body[i].y = this.loc.x;
      this.body[i].x = this.loc.y;
      console.log(this.body[i].x);
    }
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

}
