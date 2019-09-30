//Andrew Matel
//09/13/19
//Paddle Game
class Ball{
  constructor(x, y, dx, dy, id){//location, movement, what type of ball
    this.loc = createVector(x,y);
    this.vel = createVector(dx, dy);
    this.ballx = dx;
    this.acc =createVector(-0.05,0.05);
    this.clr = color(random(0),random(0),random(0));
    this.w = random(20,40);
    this.id = id;
  }
  run(){//runs all programs needed for balls to function properly
    this.checkEdge();
    this.update();
    this.render();
    this.isColliding();
  }
  checkEdge(){//if balls hit walls, they bounce
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

  update(){//balls move
    this.vel.add(this.acc);
    this.loc.y = this.loc.y + this.vel.y;
    this.loc.x = this.loc.x + this.ballx;

  }

  isColliding() {//balls can collide with the paddle object
    if((this.loc.x > paddle.loc.x) && (this.loc.x < paddle.loc.x + paddle.w) && (this.loc.y >= paddle.loc.y) && (this.loc.y <= paddle.loc.y + paddle.h) && this.vel.y > 0){
      return true;
    }
    if((this.loc.x > paddle.loc.x) && (this.loc.x < paddle.loc.x + paddle.w) && (this.loc.y >= paddle.loc.y) && (this.loc.y <= paddle.loc.y + paddle.h) && this.vel.y < 0){
      gameState = 3
    }else{
      return false;
    }
  }

  render(){//Makes the balls
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

}
