// モック関数のテストをする
it("はじめての", () => {
  // jest.fn()でモック関数を作成
  const mockFunc = jest.fn(() => "Hello mock");
  expect(mockFunc()).toBe("Hello mock");
})

it("mockImplementation", () => {
  // メソッドチェーンでmockImplementationを呼び出す
  const mockFunc = jest.fn().mockImplementation(() => "Hello mock2");
  expect(mockFunc()).toBe("Hello mock2");
})