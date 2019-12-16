//Andrew Matel
//12/16/19
class Planet{
  constructor(x, y, id){//id is not necessary but was used in debugging
    this.loc = createVector(x,y);
    this.acc =createVector(0,0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 90;
    this.id = id;
  }
  run(){//when called, all of the following methods are run
    this.checkEdge();
    this.update();
    this.render();
  }
  checkEdge(){//makes sure that this object does not leave the canvas(not completely mnecessary for this project)
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

  update(){// if the ship is toucghing one planet, all of the planets move
    if(move === 'yes'){
      planets[ship.id].loc.x = random(0,width);
      planets[ship.id].loc.y = random(0,height);
      // for(var i = 0; i < planets.length; i++){
      //   planets[i].loc.x = random(0, width);
      //   planets[i].loc.y = random(0, height);
      }
      move = 'no';
  }

  render(){//you are able to see the planet on the canvas because of this and it has a corresponding number on each (for debugging)
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
    textSize(10);
    fill(255,255,255);
    text(this.id, this.loc.x, this.loc.y);
  }

}
