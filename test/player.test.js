import { Bot, Human } from "../src/player";

test('Bot constructor work well', ()=>{
  const test = new Bot();
  expect(test).toHaveProperty('board');
  expect(test).toHaveProperty('moves');
})
test('Bot use a move', ()=>{
  const test = new Bot();
  const preMoves = test.moves.map(e => e);
  const receiveAttack = jest.spyOn(test.board, 'receiveAttack');
  expect(test.play()).toBe(true);
  expect(test.moves).not.toEqual(preMoves);
  expect(receiveAttack).toHaveBeenCalledTimes(1);
})
