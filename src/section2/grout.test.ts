// describeはテストをグループ化できる
describe('配列に感するテスト', () => {
  it("配列に要素を追加できる", () => {
    const arr = [];
    arr.push("element");
    // 配列elementと等しいかどうかをテスト
    expect(arr).toEqual(["element"]);
  });

  it("配列の長さが正しい", () => {
    const arr = ["element1", "element2"];
    // arrの要素数が2であることをテスト
    expect(arr.length).toBe(2);
  });

  // describeはネストできる
  describe("配列の検索に関数テスト", () => {
    it("配列の要素を検索できる", () => {
      const arr = ["element1", "element2"];
      // arrにelement1が含まれていることをテスト
      expect(arr).toContain("element1");
    });
  });
 })