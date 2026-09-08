# Mahāniddesa の確認

確認日: 2026-09-08。パーリ三蔵の Khuddakanikāya に含まれる解釈文献として canonical に分類する。ここでの canonical は文献階層であり、歴史的な成立順を主張しない。

## 使用した本文

- [SuttaCentral 第14章 Tuvaṭakasuttaniddesa](https://suttacentral.net/mnd14/pli/ms#65.6)
- [SuttaCentral 第16章 Sāriputtasuttaniddesa](https://suttacentral.net/mnd16/pli/ms#31.6)
- 表示サイトがJavaScript依存のため、SuttaCentral公式 bilara-data の [mnd14 root-pli-ms](https://github.com/suttacentral/bilara-data/blob/published/root/pli/ms/sutta/kn/mnd/mnd14_root-pli-ms.json) と [mnd16](https://github.com/suttacentral/bilara-data/blob/published/root/pli/ms/sutta/kn/mnd/mnd16_root-pli-ms.json) を取得し、セグメント単位で確認。
- 再確認用に採用範囲だけを `mahaniddesa-excerpts.json` に保存。パーリ本文の抜粋で、翻訳書の転載ではない。原表記の ṁ を保持する。

六気質の列挙は mnd14:65.6 / mnd16:31.6:

`rāgacarito, dosacarito, mohacarito, vitakkacarito, saddhācarito, ñāṇacarito`

| 内部ID  | 第14章 | 第16章 | 指導の自作要約                                             |
| ------- | ------ | ------ | ---------------------------------------------------------- |
| raga    | 65.7   | 31.7   | 不浄について説く（asubhakathaṁ）。詳細手順までは記されない |
| dosa    | 65.8   | 31.8   | 慈の修習                                                   |
| moha    | 65.9   | 31.9   | 学習、質問、時に応じた聞法・法の対話、師との生活           |
| vitakka | 65.10  | 31.10  | 入出息念                                                   |
| saddha  | 65.11  | 31.11  | 仏の覚り、法の善さ、僧の実践、自らの戒という信を起こす対象 |
| buddhi  | 65.12  | 31.12  | ñāṇa の表記。無常・苦・無我のあり方という観の対象          |

第14章と第16章の並行記述を確認した。ここを「14/16周辺」とだけせず、採用する第14章のセグメントまで各 Source に保存。ñāṇa を内部 buddhi に格納するのは文献間のラベル整合のためで、現代的な知能分類を意味しない。

## 使用範囲

この箇所から質問や人格特性を導かない。実践の対応を独立データとして6件登録。特に moha を単一瞑想に置換せず5つの学びの指導を残す。saddha を清浄道論の六随念へ自動統合しない。buddhi も清浄道論の四対象とは別に保持する。

## 未採用

この抜粋を根拠にして不浄の具体的修習手順や推奨時間を生成しない。本文で確認できない効果・現代心理学との因果関係・確率を補わない。
