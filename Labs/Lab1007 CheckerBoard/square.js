//Andrew Matel
//10/7/19
class Square{
  constructor(x,y,w){
    this.loc = CreateVector(x,y);
    this.w = w;
  }
  run(){
    this.render();
  }

  render(){
    if(number % 2 === 0){
      fill(0,0,0);
    }else{
      fill(255,255,255);
    }
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }

}
