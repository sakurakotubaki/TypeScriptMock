// mock関数が呼び出されたかどうかはtoHaveBeenCalled()で確認できる
it("モック関数が呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  // expectには関数を直接渡すので、()をつけない
  expect(mockFunc).toHaveBeenCalled();
})

// mock関数が呼びされた回数を確認するには、toHaveBeenCalledTimes()を使う
it("モック関数が２回呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  // 2回実行されているはずなので2を渡す
  expect(mockFunc).toHaveBeenCalledTimes(2);
})

it("モック関数に引数hogeが渡される", () => {
  const mockFunc = jest.fn();
  mockFunc("hoge");
  expect(mockFunc).toHaveBeenCalledWith("hoge");
})