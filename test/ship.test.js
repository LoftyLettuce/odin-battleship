import {Battleship} from "../src/battleship"

//constructor
describe("Constructor() being tested", ()=>{
  test("Ship work fine", ()=>{
    const test = new Battleship(12);
    expect([test.sunk, test.hp]).toEqual([false, 12]);
  })
  test("Ship sunk if HP <= 0", ()=>{
    const test = new Battleship(0);
    expect([test.sunk, test.hp]).toEqual([true, 0]);
  })
})
//hit
describe("Hit() being tested", ()=>{
  test("HP got reduced when hit", ()=>{
    const test = new Battleship(12);
    test.hit();
    expect([test.sunk, test.hp]).toEqual([false, 11]);
  })
  test("Sunk the ship if HP got to 0", ()=>{
    const test = new Battleship(1);
    test.hit();
    expect([test.sunk, test.hp]).toEqual([true, 0]);
  })
  test("Hit won't work when ship sunk", ()=>{
    const test = new Battleship(0);
    test.hit();
    expect([test.sunk, test.hp]).toEqual([true, 0]);
  })
})