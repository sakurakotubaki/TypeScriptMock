it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return value")
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
})

it("モックに一度だけ返される戻り値を設置する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock return value")
  expect(mockFunc()).toBe("Mock return value");
  expect(mockFunc()).toBe(undefined);
})

// 非同期のモック関数のテスト, async/awaitを使う
it("モック関数に非同意な戻りを設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Resolved value");
  const result = await mockFunc();
  expect(result).toBe("Resolved value");
})