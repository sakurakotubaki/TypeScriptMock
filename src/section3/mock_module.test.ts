import fs from "fs";
import { readFile } from "./mock_module";

// Jestでは、モジュールをモック化することができる
jest.mock("fs");
const mockFs = jest.mocked(fs);
mockFs.readFileSync = jest.fn().mockReturnValue("dummy data");

it("readFileがデータを返却する", () => {
  // 適当なパスを渡して、readFile関数を実行する
  const result = readFile("path/dummy");
  expect(result).toBe("dummy data");
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
})