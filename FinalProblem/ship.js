//Andrew Matel
//12/16/19
class Ship{
constructor(x, y, dx, dy){//x and y are used for starting coordinates and dy and dx are used for starting movement
  this.loc = createVector(x,y);
  this.vel = createVector(dx,dy);
  this.acc =createVector(random(-1.0,1.0));
  this.clr = color(random(255),random(255),random(255));
  this.w = random(10,10);
  this.angle= this.loc.heading();
  this.id = 10;//placeholder id
}
run(){//rubs all following methods within this class
  this.checkEdge();
  this.update();
  this.render();
}
checkEdge(){//makes sure that the ship stays on the canvas
if(this.loc.x<0) this.vel.x=-this.vel.x;
if(this.loc.x>width) this.vel.x= -this.vel.x;
if(this.loc.y<0) this.vel.y=-this.vel.y;
if(this.loc.y>height) this.vel.y=-this.vel.y;
}

update(){//checks its distance to the closest planet and moves towards it
  var distToplanet = [];//list of planet distances
  var distToplanetsingle;//the closest planet distance
  for(var i = 0; i < planets.length; i++){//adds all of the planet's distances to the list
    distToplanet[i] = this.loc.dist(planets[i].loc);
  }

  distToplanetsingle = 10000000;//placeholder distance

  for(var i = 0; i < distToplanet.length; i++){//checks to see which planet is the closest
    if(distToplanet[i] < distToplanetsingle){
      distToplanetsingle = distToplanet[i];
      this.id = i;
    }
  }
  if(distToplanetsingle !== 0){//moves the shuip towards the closest planet
    this.acc = p5.Vector.sub(planets[this.id].loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
  }
  if(distToplanetsingle < 100){//when the ship touches the planet the planet is signaled to move
    move = 'yes';
  }
  this.vel.limit(2);
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){//the ship is able to be seen on the canvas and it points in the direction it is facing
  fill(this.clr);
  this.angle = this.vel.heading() + 360;
  push();
  translate(this.loc.x,this.loc.y);
  rotate(this.angle);
  triangle(-10, 16, 10, 16, 0, -16);
  pop();
}

}
