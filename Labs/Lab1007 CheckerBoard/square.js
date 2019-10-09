//Andrew Matel
//10/7/19
class Square{
  constructor(x,y){
    this.loc = createVector(x,y);
  }
  run(){
    this.render();
  }

  render(){
    if(rowNum % 2 === 0){
      if(number % 2 ===1){
        fill(255,255,255);
      }else{
        fill(0);
      }
    }
    if(rowNum % 2 ===1){
      if(number % 2 === 0){
        fill(0);
      }else{
        fill(255,255,255);
      }
    }
    rect(this.loc.x, this.loc.y, 100,100);
  }

}
