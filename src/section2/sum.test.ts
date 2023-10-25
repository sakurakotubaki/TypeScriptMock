import { sum } from './sum';

// itとはテストケースのこと
it("１と２を足すと３になる", () => {
  // expect関数にテストの結果を渡す
  // expect(関数の戻り値).toBe(期待値)
  expect(sum(1, 2)).toBe(3);
})