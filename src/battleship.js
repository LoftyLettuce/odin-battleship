export class Battleship
{ 
  constructor(hp){
    this.hp = hp;
    this.sunk = (hp > 0)?false:true;
  }
  hit(){
    if (this.hp > 0){
      this.hp--;
      this.sunk = (this.hp == 0)?true:false;
    }
  }
}