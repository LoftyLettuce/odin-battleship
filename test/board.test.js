import { board } from "../src/board";
import { Battleship } from "../src/battleship";

function inRange(small, x, big) {
  return x >= small && x <= big;
}

test("construct the right board", () => {
  const test = new board();
  const matrix = Array(7)
    .fill(0)
    .map((i) => {
      return Array(7).fill(false);
    });
  expect(test.board).toEqual(matrix);
});
describe("placeShip() being tested", () => {
  const n = 7;
  test("place ship vertically", () => {
    const test = new board();
    const hp = 4;
    const ship = new Battleship(hp),
      x = 1,
      y = 2,
      isVertical = true;
    test.placeShip(ship, x, y, isVertical);
    const expected = test.board.every((arr, row) =>
      arr.every((value, col) =>
        col == y && inRange(x, row, hp + x - 1)
          ? value == ship
          : value == false,
      ),
    );
    expect(expected).toBe(true);
  });
  test("place ship horizontally", () => {
    const test = new board();
    const hp = 4;
    const ship = new Battleship(hp),
      x = 1,
      y = 2,
      isVertical = false;
    test.placeShip(ship, x, y, isVertical);
    const expected = test.board.every((arr, row) =>
      arr.every((value, col) =>
        row == x && inRange(y, col, hp + y - 1)
          ? value == ship
          : value == false,
      ),
    );
    expect(expected).toBe(true);
  });
  describe("overflow handling", () => {
    test("middle horizontal", () => {
      const test = new board();
      const hp = 5,
        ship = new Battleship(hp),
        x = 2,
        y = 3,
        isVertical = false;
      test.placeShip(ship, x, y, isVertical);
      const expected = test.board.every((arr, row) =>
        arr.every((value, col) =>
          row == x && inRange(2, col, hp + 2 - 1)
            ? value == ship
            : value == false,
        ),
      );
      expect(expected).toBe(true);
    });
    test("middle vertical", () => {
      const test = new board();
      const hp = 5,
        ship = new Battleship(hp),
        x = 3,
        y = 4,
        isVertical = true;
      test.placeShip(ship, x, y, isVertical);
      const expected = test.board.every((arr, row) =>
        arr.every((value, col) =>
          col == y && inRange(2, row, hp + 2 - 1)
            ? value == ship
            : value == false,
        ),
      );
      expect(expected).toBe(true);
    });
    test("end vertical", () => {
      const test = new board();
      const hp = 5,
        ship = new Battleship(hp),
        x = 6,
        y = 0,
        isVertical = true;
      test.placeShip(ship, x, y, isVertical);
      const expected = test.board.every((arr, row) =>
        arr.every((value, col) =>
          col == y && inRange(2, row, hp + 2 - 1)
            ? value == ship
            : value == false,
        ),
      );
      expect(expected).toBe(true);
    });
    test("end horizontal", () => {
      const test = new board();
      const hp = 5,
        ship = new Battleship(hp),
        x = 0,
        y = 6,
        isVertical = false;
      test.placeShip(ship, x, y, isVertical);
      for (let i = 2; i <= hp; i++) {
        expect(test.board[x][i]).toBe(ship);
      }
      const expected = test.board.every((arr, row) =>
        arr.every((value, col) =>
          row == x && inRange(2, col, hp + 2 - 1)
            ? value == ship
            : value == false,
        ),
      );
      expect(expected).toBe(true);
    });
  });
  test("move ship", () => {
    const test = new board();
    const hp = 5,
      ship = new Battleship(hp),
      x = 0,
      y = 6,
      isVertical = false;
    test.placeShip(ship, x, y, isVertical);
    test.placeShip(ship, 1, y, isVertical);
    const expected = test.board.every((arr, row) =>
      arr.every((value, col) =>
        row == 1 && inRange(2, col, hp + 2 - 1)
          ? value == ship
          : value == false,
      ),
    );
    expect(expected).toBe(true);
  });
  describe("collision handling", () => {
    test("different place", () => {
      const test = new board();
      const hp = 5,
        ship = new Battleship(hp),
        x = 0,
        y = 6,
        isVertical = false;
      test.placeShip(ship, x, y, isVertical);
      const ship2 = new Battleship(hp);
      const prevBoard = test.board.map((e) => Array.from(e));
      test.placeShip(ship2, x, y, !isVertical);
      expect(test.board).toEqual(prevBoard);
    });
    test("same place", () => {
      const test = new board();
      const hp = 5,
        ship = new Battleship(hp),
        x = 0,
        y = 6,
        isVertical = false;
      const ship2 = new Battleship(hp);
      test.placeShip(ship, x, y, isVertical);
      const prevBoard = test.board;
      test.placeShip(ship2, x, y, isVertical);
      expect(test.board).toEqual(prevBoard);
      expect(test.board[0][6]).toBe(ship);
    });
    test("moving a ship fail", () => {
      const test = new board();
      const hp = 5,
        ship = new Battleship(hp),
        x = 0,
        y = 6,
        isVertical = false;
      test.placeShip(ship, x, y, isVertical);
      const ship2 = new Battleship(hp);
      test.placeShip(ship2, 1, y, isVertical);
      test.placeShip(ship, 1, y, isVertical);
      const expected = test.board.every((arr, row) =>
        arr.every((value, col) =>
          row == 0 && inRange(2, col, hp + 2 - 1)
            ? value == ship
            : row == 1 && inRange(2, col, hp + 2 - 1)
              ? value == ship2
              : value == false,
        ),
      );
      expect(expected).toBe(true);
    });
  });
});
