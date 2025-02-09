import { board } from "./board";
class Player{
  constructor(name){
    this.name = name;
    this.board = new board();
    this.board.innitBoard();
  }
}
export class Human extends Player{
  constructor(name){
    super(name);
  }
  play(x, y){
    return this.board.receiveAttack(x, y);
  }
}
export class Bot extends Player{
  constructor(name){
    super(name);
    this.moves = Array(49).fill(0).map((e, i)=>i);
    //reset
    this.board.board.forEach((arr)=>arr.fill(false));
    //randomize board
    const col = Array(7).fill(0).map((e,i)=>i);
    for (let i = 0; i < 5; i++){
      const ri = Math.floor(Math.random()*6);
      const ci = Math.floor(Math.random()*(col.length-1));
      if (this.board.placeShip(this.board.battleships[i], ri, col[ci], true)==false){
        i--;
      };
      col.splice(ci, 1);
    }
  }
  play(){
    const index = Math.floor(Math.random()*(this.moves.length-1));
    const n = this.moves[index];
    this.moves.splice(index, 1);
    return this.board.receiveAttack((n - n%7)/7, n%7);
  }
}