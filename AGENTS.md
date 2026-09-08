# Carita の作業ルール

- 原典にない carita の特徴を追加しない。[出典方針](docs/source-policy.md)を読む。
- 実行時に LLM 診断を実装しない。
- sourceIds のない Question / PracticeRecommendation は禁止。
- canonical と commentarial を混同しない。[調査記録](docs/sources/)を参照。
- 照合ロジックを変更したら必ずテストを更新する。[一致数の仕様](docs/scoring.md)に従う。
- UI では人格を断定しない。質問の現代化と判別の限界を表示する。
- 完了前に typecheck / lint / unit / build / E2E を実行する。
