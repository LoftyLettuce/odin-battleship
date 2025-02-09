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
  }
  play(){
    const index = Math.floor(Math.random()*(this.moves.length-1));
    const n = this.moves[index];
    this.moves.splice(index, 1);
    return this.board.receiveAttack((n - n%7)/7, n%7);
  }
}