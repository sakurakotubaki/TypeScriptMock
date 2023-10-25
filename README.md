# Jestの環境構築を行う。

1. パッケージのインストール.
2. TypeScriptに対応する

雛形を作成
```bash
npx tsc --init
```

パッケージをインストール
```bash
npm i -D jest @types/jest ts-jest
```

tsconfg.jsonの作成
```bash
npx ts-jest config:init
```