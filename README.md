# Carita — パーリ仏教の気質と瞑想

パーリ仏教文献にある気質の記述と回答を照合し、根拠と伝統上の修行法をたどる日本語WebアプリのMVPです。実行時のLLMは使用しません。

## 起動

Node.js 22.12以上（開発確認: 24.14.1）、npmを使用します。

```sh
npm ci
npm run dev
```

<http://127.0.0.1:3000> を開きます。他のアプリが使用中なら `npm run dev -- --port 3001`。

静的出力の確認:

```sh
npm run build
npm run preview
```

`out/` にHTML・CSS・JSを生成します。公開環境には静的ファイルを配信するだけでよく、Next.jsの実行サーバーやDBは不要です。preview はループバックでのみ待ち受けるローカル確認用サーバーです。`PORT=3001 npm run preview` でポートを変更できます。

## 実装した機能

- トップ、質問、結果、出典一覧、方針の5画面。
- 出典付きの10問を1問ずつ表示。前に戻って変更、判断不能の回答、途中からの再開。
- 六気質への決定論的一致件数。同点の全表示、全ゼロの未割当、パーセントなし。
- 一致した全傾向に対応する修行法を、パーリ三蔵と『清浄道論』に分けて表示。
- 各一致の回答・気質・現代化の説明・文献・箇所・短いパーリ原文・自作要約・外部参照を開示。
- localStorage の版付き保存、無効データの排除、保存できない場合のメモリ継続、回答消去。
- モバイル表示、ラジオ入力、キーボード操作、フォーカス、進捗、本文スキップ。
- 全11件の修行法に「参考 · 意訳」、うち6件に身近な例。用語の手引きと回答のヒントも表示。
- タイ・スリランカ・ミャンマーをイメージした水彩画3点を、背景・ヒーロー・カード・フッターに配置。

回答送信・アカウント・解析ツール・外部フォントはありません。回答は同じブラウザの他の利用者から閲覧できるため、結果画面に消去操作があります。

## 文献と採用範囲

| 文献                                                                                                                                                                           | 用途                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| [Mahāniddesa 14:65.6–12](https://suttacentral.net/mnd14/pli/ms#65.6)、[16:31.6–12](https://suttacentral.net/mnd16/pli/ms#31.6)                                                 | パーリ三蔵に含まれる解釈文献。六気質と指導の対応。質問データとは独立     |
| [Visuddhimagga パーリ本文](https://vietheravada.net/kinhdien/visuddhimagga/visuddhimagga1.htm)、[第3章の英訳照合](https://edhamma.github.io/vism/sphinx/build/html/ch-03.html) | 三蔵外の論書。III.74–96に基づく質問・留保、III.105,121–122に基づく修行法 |

Mahāniddesa の痴行への指導は学習・質問・聞法・対話・師との生活。『清浄道論』の痴行への入出息念と統合しません。信行・智行の異なる対応も分離します。

10問は観察4問と各気質の心の状態6問。すべて自己回答形式に置き換えた `modernized` です。観察4問には文献上の類似の三組を反映し、各気質の加点機会は5問ずつです。一致数は文献に由来する点数や心理測定尺度ではありません。『清浄道論』III.96の判別の限界、III.122の非排他性も表示します。

未確認の心理特性、現代心理学との対応、過去生・身体要素からの因果推定、寝姿・衣服・嗜好の追加質問、住居や修行手順の処方は除外しました。原典の意味を推測して質問数を増やしていません。

## 検証

```sh
npm run typecheck
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm run format:check
```

E2Eは `out/` の静的出力を使用するため、変更後は先に build します。ポート43871を使います（既存サーバーを再利用しません）。Linuxの環境によっては `npx playwright install --with-deps chromium` が必要です。

確認結果（2026-09-08）:

- typecheck / lint / build 成功。
- Vitest: 11件成功。出典整合性、加点機会、決定性、同点、変更、全ゼロ、不正データ、推論データ排除、重複証拠、参考説明のカバレッジ・解釈水準・出典を検証。
- Playwright: デスクトップとPixel 7相当のChromium、計10件。全問回答、出典、同点、回答変更、再読込、消去、未回答、破損保存、全スキップ、保存不可、横はみ出し、意訳・日常例の区別、追加出典への遷移と画像表示を検証。
- 完走テストでページ例外、GET/HEAD以外の通信、リクエスト本文、外部オリジンへの通信がないことを確認。通信先の完全な監査を意味するものではありません。
- スクリーンショットを目視確認。Safari/Firefoxおよび実機の確認は未実施。

[新しいトップ画面](docs/screenshots/home-v2-desktop.png) · [モバイル画面](docs/screenshots/home-v2-mobile.png) · [修行法の参考説明](docs/screenshots/practices-v2-desktop.png)

### ツール互換性

取得時の安定版: Next.js 16.3.4 / React 19.2.8 / TypeScript 7.0.2 / Tailwind CSS 4.3.3 / Vitest 5.0.0 / Playwright 1.63.0 / ESLint 10.10.0。再現用に package-lock.json を保存します。

TypeScript 7はコンパイラAPIを持たないため、[公式の併用方法](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6-0)で型確認に7、Next.js/ESLintのAPI利用に6の互換パッケージを使用します。Next.js同梱のESLintプラグインは古いAPIを使うため `@eslint/compat` の `fixupConfigRules` を適用しています。npmでプラグインのpeer dependency範囲に関する警告が出ますが、ルールを無効化せずlintを実行しています。

## 文書・構成

- [AGENTS.md](AGENTS.md): 開発時の最重要ルール
- [ARCHITECTURE.md](ARCHITECTURE.md): データ → ドメイン → UIと状態管理
- [仕様](docs/product-spec.md) / [出典方針](docs/source-policy.md) / [一致数](docs/scoring.md)
- [Mahāniddesa 調査](docs/sources/mahaniddesa.md) / [Visuddhimagga 調査](docs/sources/visuddhimagga.md)
- `src/data/`: 原典・質問・修行法・六気質
- `src/domain/`: 型と副作用のない照合ロジック
- `tests/`: 単体テストとE2E

今後は、仏教学の専門家による語義・質問のレビュー、確認済みの別版との対照、回答を含まない結果の印刷表示、追加ブラウザの検証ができます。質問を増やす場合は出典確認と加点機会の再検討を先に行います。

## 現代語の参考と背景イラスト

文献の要約の下に、採点には使わない「現代のことばで読む・参考」を追加しました。意訳は modernized、身近な例は interpretive。追加資料は用語を確認するためのもので、気質と修行法の対応は既存の二文献のままです。[参考説明の調査記録](docs/sources/reading-aids.md)を参照してください。

イラストは内蔵 image_gen で制作し、[public/images/](public/images/) にWebPで保存しました。3点の総量は約1.3MBで、外部サイトからの取得はありません。[使用したプロンプト](docs/design/image-prompts.md)を保存しています。歴史的復元や実在の寺院の写真としては表示せず、創作の情景と明記しています。
