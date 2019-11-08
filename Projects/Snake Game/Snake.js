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
    for(var i = -1; i < score; i++){
      this.body.push(createVector(this.loc.y,this.loc.x));
      console.log(score);
    }
  }

  run(){
    this.loadSegments();
    this.render();
    this.update();
    this.checkEdges();
  }

  update(){
    frameRate(15);
    for(var i = -1; i < score; i++){
      if(score === 0){
        this.body[0].x = this.loc.y;
        this.body[0].y = this.loc.x;
      }
      if(score > 0){
        this.body[score].y = this.body[score-1].y;
        this.body[score].x = this.body[score-1].x;
      }
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
    if(score === 0){
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
}
