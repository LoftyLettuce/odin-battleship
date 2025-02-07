const n = 7;
export class board {
  constructor() {
    this.board = Array(n)
      .fill(0)
      .map(() => Array(n).fill(false));
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
}
