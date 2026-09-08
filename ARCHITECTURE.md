# 構成

Next.js App Router / React / TypeScript / Tailwind CSS。全5ルートを静的エクスポートする。DB、APIルート、アカウント、LLM、解析基盤は持たない。

```text
src/data/{sources,questions,practices,caritas}.ts
          ↓ 型契約 src/domain/types.ts
src/domain/scoring.ts（副作用のない一致数の計算）
          ↓
src/components/ + src/app/（表示）
```

- `Source` は文献名・箇所・伝統階層・自作要約・任意のパーリ原文・外部URLを保持。
- `Question` は回答ごとの証拠と気質、出典IDを保持。原典の観察を自己回答へ置き換えた説明も保持。
- `PracticeRecommendation` は質問と別データ。気質の一致後、1件以上一致した全気質について階層別に表示する。
- `score()` は純粋関数。順位は件数のみ。同点時の表示順は固定IDリストの順であり優劣ではない。
- `answer-store.ts` は useSyncExternalStore でブラウザ状態を提供。保存形式は `{version:1,answers:{questionId:answerId}}`。未知のID・選択肢・版を採点に持ち込まない。保存失敗時はメモリで継続し通知する。別タブの変更も反映。
- `/questions/` は最初の未回答から再開し、回答がすべてある場合は先頭から見直せる。
- `/result/` は未回答なら案内だけを表示し、部分回答を完成結果として扱わない。
- `out/` は静的配信成果物。`scripts/serve.mjs` はローカル確認用の配信サーバーで、アプリAPIではない。

## 追加時の順序

原文確認 → docs に検証箇所を記録 → 出典データ → 質問/修行法データ → 整合性とロジックのテスト → UI。宗教文献データをReact内に埋め込まない。

## 参考説明とイラスト

`reading-notes.ts` の `ReadingNote` は文献を読むための別データ。採点モデルの Evidence と区別し、ドメインの scoring はインポートしない。`ReadingAid` が modernized の意訳と interpretive の身近な例を表示し、全参照先へリンクする。追加の用語参照 `reading-sources.ts` は出典一覧で用途を表示し、気質への割当には用いない。

`public/images/` の3点は内蔵 image_gen による創作の水彩画。WebP圧縮して静的配信する。`Scene` は装飾として空のaltを使い、地域を説明する場合はキャプションを付ける。ページ背景・ヒーロー・カード・フッターに再利用する。[生成プロンプト](docs/design/image-prompts.md)を参照。
