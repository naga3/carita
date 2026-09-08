# 素材と出典の確認記録

確認日: 2026-09-08。公開対象はコード、文献データ、自作の日本語説明、生成画像、およびこれらの画面キャプチャ。外部サイトの写真・画面キャプチャ・翻訳書PDFは同梱しない。

## パーリ本文と日本語

古典のパーリ本文の短い抜粋と、自作の日本語要約を掲載する。古典本文と、現代の翻訳・校訂・サイトの編集物の権利は区別する。「参考」や出典の表示だけで、任意の転載・翻訳が許可されるわけではない。

- Mahāniddesa: [SuttaCentral bilara-data](https://github.com/suttacentral/bilara-data) の root/pli/ms 採用範囲。[ライセンス方針](https://suttacentral.net/licensing)と[データのライセンス](https://github.com/suttacentral/bilara-data/blob/published/LICENSE.md)を参照（CC0、別途指定のある資料を除く）。採用箇所・取得元は [調査記録](sources/mahaniddesa.md) に記載。
- 清浄道論: [パーリ掲載版](https://vietheravada.net/kinhdien/visuddhimagga/visuddhimagga1.htm) の古典本文の語句のみを抜粋。現代語訳や掲載サイト全体に自由利用の許諾があるとは扱わない。
- Ñāṇamoli 英訳および Access to Insight の英訳は文献理解の参照先。英訳本文を同梱・転載せず、現代語訳の逐語的な日本語訳も掲載しない。短い内容要約と用語説明の参照元は [参考説明の記録](sources/reading-aids.md) に示す。各資料の独自ライセンスは引き続き各権利者に帰属する。[Access to Insight の案内](https://www.accesstoinsight.org/faq.html#copyright)。

## イラスト

public/images/ の3点は OpenAI の画像生成機能で新規制作した創作。第三者の写真や既存絵画の取り込みは行っていない。[制作指示](design/image-prompts.md)を保存し、サイトにも AI 制作を表示する。

[OpenAI 利用規約](https://openai.com/policies/row-terms-of-use/)は、適用法の範囲内で出力の権利を利用者に帰属させる。ただし第三者の権利の非侵害や、生成物自体に著作権が成立することを保証するものではない。特定の作家・キャラクター・実在寺院の再現を指定していない。

## ソフトウェアとフォント

Next.js / React などの依存パッケージと Next.js 内包ライブラリのライセンス文を `scripts/notices.mjs` で収集し、ビルドごとに public/third-party-notices.txt を更新して配布する。サーバー専用の依存も含む保守的な一覧。フォントファイルは同梱せず、閲覧端末のシステムフォントを使用する。

この記録は確認した素材の来歴と扱いを説明するもので、無条件の法的保証や、リポジトリ全体への一括した再利用許諾ではない。

## GitHub アイコン

フッターは [Primer Octicons の mark-github-16](https://github.com/primer/octicons/blob/main/icons/mark-github-16.svg) を使用。MIT ライセンス原文を `third-party/octicons/LICENSE` に保存し、公開する権利表示にも収録する。GitHub 上のリポジトリへのリンクとして使用する。
