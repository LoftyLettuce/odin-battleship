import { Battleship } from "./battleship";

const n = 7;
export class board {
  constructor() {
    this.board = Array(n)
      .fill(0)
      .map(() => Array(n).fill(false));
    this.battleships = [];
  }
  placeShip(ship, x, y, isVertical) {
    const postBoard = this.board.map((arr) =>
      arr.map((e) => (e == ship ? false : e)),
    );
    let row = { value: x },
      col = { value: y },
      part = isVertical ? row : col;
    //n - ship.hp is minimum index to make ship placement possible
    const head = (part.value = Math.min(n - ship.hp, part.value));
    for (; part.value < head + ship.hp; part.value++) {
      if (postBoard[row.value][col.value]) {
        return;
      }
      postBoard[row.value][col.value] = ship;
    }
    this.board = postBoard;
  }
  receiveAttack(x, y) {
    if (this.board[x][y]) {
      if (this.board[x][y] == true) {
        return false;
      }
      this.board[x][y].hit();
    }
    return (this.board[x][y] = true);
  }
  innitBoard() {
    this.battleships.push(
      new Battleship(2),
      new Battleship(1),
      new Battleship(1),
      new Battleship(7),
      new Battleship(3),
    );
    this.placeShip(this.battleships[0], 0, 0, true);
    this.placeShip(this.battleships[1], 1, 3, true);
    this.placeShip(this.battleships[2], 1, 6, true);
    this.placeShip(this.battleships[3], 3, 0, false);
    this.placeShip(this.battleships[4], 6, 2, false);
  }
  allShipSunk() {
    return this.battleships.every((ship) => ship.sunk);
  }
}
