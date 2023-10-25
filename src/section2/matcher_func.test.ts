// toBe
it("数値のテスト", () => {
  expect(2 + 2).toBe(4);
})

it("文字列のテスト", () => {
  expect("Jest").toBe("Jest");
})

it("Booleanのテスト", () => {
  expect(true).toBe(true);
})

// Objectと配列の比較
// toEqual(トゥイコール)
it("配列のテスト", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  expect(arr1).toEqual(arr2);
})

it("オブジェクトのテストです", () => {
  const obj1 = {
    a:1,
    b:2,
  };
  const obj2 = {
    a:1,
    b:2,
  };
  // ２たつのオブジェクトが等しいかどうかを比較する
  expect(obj1).toEqual(obj2);
})

// 等しくないことをテストする
// not
it("2+2は5ではない", () => {
  // not.toBeを使う
  expect(2 + 2).not.toBe(5);
})