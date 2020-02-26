class Wall{
  constructor(){
    this.loc = createVector((Math.floor(random(2,35)))*w,(Math.floor(random(1,39)))*w);
  }
  run(){
    this.render();
    //this.update();
  }

  // update(){
  //     if((snakehead.loc.x > this.loc.x) && (snakehead.loc.x  < this.loc.x ) && (snakehead.loc.y > this.loc.y) && (snakehead.loc.y < this.loc.y)){
  //       // gamestate = 2;
  //       snakehead.loc.x = w;
  //       snakehead.loc.y = w;
  //       snakehead.vel.x = 0;
  //       snakehead.vel.y = 0;
  //       snakehead.body = [];
  //     }
  // }

  render(){
    fill(255,255,255);
    rect(this.loc.x, this.loc.y, 100,w);
  //   for(var i = 0; i < walls.length; i++){
  //     if(this.loc.x = walls[i].loc.x )
  //       this.loc = createVector((Math.floor(random(2,35)))*20,(Math.floor(random(1,39)))*20);
  //   }
  }
}
