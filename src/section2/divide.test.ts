// toThrow

import { divide, ZeroDivisorError } from './divide';

/* 例外が発生するのを規定しているテスト
0だと成功する */
it("0で割るとエラーが発生する", () => {
  /* divide関数を呼び出すと、ZeroDivisorErrorが発生することを確認する
  toThrow()は、引数にエラークラスを渡すことで、そのエラーが発生することを確認できる*/
  expect(() => divide(10, 0)).toThrow();
  // toThrowには、エラーメッセージを渡すこともできる
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});