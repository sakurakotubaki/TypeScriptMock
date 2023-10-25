import { delay } from "./async_func";

// テストが成功するケース
it("delayが指定された時間後にメッセージを返す", async () => {
  const result = await delay("Hello Jest", 1000);
  expect(result).toBe("Hello Jest");
})

// テストが失敗するケース
it("timeがマイナスの場合はエラーが発生する", async () => {
  try {
    const result = await delay("Hello Jest", -1);
  } catch (e: any) {
    expect(e.message).toBe("timeは0以上で指定してください");
  } finally {
    console.log("test実行完了");
  }
})