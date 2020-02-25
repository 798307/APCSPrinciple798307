class Wall{
  constructor(){
    this.loc = createVector((Math.floor(random(1,35)))*20,(Math.floor(random(1,39)))*20);
  }
  run(){
    this.render();
  }
  render(){
    fill(255,255,255);
    rect(this.loc.x, this.loc.y, 100,20);
  }
}
