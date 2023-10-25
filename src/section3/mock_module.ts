import fs from "fs";
// モック化したいモジュールを引数に渡す
export function readFile(path: string) {
  const data = fs.readFileSync(path, {
    encoding: "utf-8",
  });
  return data;
}
