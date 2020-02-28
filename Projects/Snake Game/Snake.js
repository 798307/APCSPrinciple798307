//Andrew Matel
//10/31/19
class Snake{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(0,255,0);
    this.body = [];
    this.vel = createVector(0,0);
  }

  loadSegments(){//loads coordinates into segments
    if(this.body.length/4 < score){
      this.body.push(createVector(0,0));
      this.body.push(createVector(0, 0));
    }
  }

  run(){//runs all methods
    // this.loadSegments();
    this.update();
    this.render();
    this.checkEdges();
    this.tangled();
  }

  update(){
    frameRate(10); //slows down snake
    if(keyCode === DOWN_ARROW){//moves right
      this.vel.x = w;
      this.vel.y = 0;
    }
    if(keyCode === UP_ARROW){//moves left
      this.vel.x = -w;
      this.vel.y = 0;
    }
    if(keyCode === LEFT_ARROW){//moves up
      this.vel.x = 0;
      this.vel.y = -w;
    }
    //bug in my code makes down right and left up
    if(keyCode === RIGHT_ARROW){//moves down
      this.vel.x = 0;
      this.vel.y = w;
    }
    for(var i = this.body.length - 1; i > 0; i--){//for some reason this only loads one segment and then stops
        this.body[i].y = this.body[i-1].y;
        this.body[i].x = this.body[i-1].x;
    }
    if(this.body.length > 0){//moves the first segment independently from other segments
      this.body[0].x = this.loc.y;
      this.body[0].y = this.loc.x;
    }
    this.loc.add(this.vel);//moves head
  }

  checkEdges(){//when snake hits wall, direction
    if(((this.loc.x > width - w) || (this.loc.x < 0) || (this.loc.y < 0) || (this.loc.y > height - w))){
      gamestate = 2;
      this.loc.x = w;
      this.loc.y = w;
      this.vel.x = 0;
      this.vel.y = 0;
      this.body = [];
    }
    for(var i = 0; i < walls.length; i++){
      if((this.loc.y + 10 > walls[i].loc.x) && (this.loc.y+10 < walls[i].loc.x + 100) && (this.loc.x+10 > walls[i].loc.y) && (this.loc.x+10 < walls[i].loc.y + w)){
        gamestate = 2;
        this.loc.x = w;
        this.loc.y = w;
        this.vel.x = 0;
        this.vel.y = 0;
        this.body = [];
      }
    }
  }

  render(){//displays segments and head
    fill(this.clr);
    rect(this.loc.y, this.loc.x, w, w);
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, w, w);
    }
  }
  tangled(){//if snake hits segments, die
    for(var i = 0; i < this.body.length; i++){
      if(this.loc.y === this.body[i].x && this.loc.x === this.body[i].y){
        gamestate = 2;
        this.body = [];
        this.loc.x = w;
        this.loc.y = w;
        this.vel.x = 0;
        this.vel.y = 0;
      }
    }
  }
}
