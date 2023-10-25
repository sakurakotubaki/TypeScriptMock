import { Calculator } from "./mock_spy";

// spyOn()を使うと、既存のメソッドをモック化できる
it("sumメソッドが呼び出される", () => {
  const calculator = new Calculator();
  // 第１引数にspyを作成したいcalculator、第２引数にspyを生成したsumメソッドを渡す
  const sumSpy = jest.spyOn(calculator, "sum");
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
  expect(sumSpy).toHaveBeenCalledTimes(1);
  expect(sumSpy).toHaveBeenCalledWith(1, 2);

  // 設定したスパイが他のテストに影響を与えないように、スパイを解除する
  sumSpy.mockRestore();
})