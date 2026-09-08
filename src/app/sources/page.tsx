import { Scene } from "@/components/scene";
import { ReadingGuide } from "@/components/reading-guide";
import { sources } from "@/data/sources";
import { SourceCard } from "@/components/source-card";
export const metadata = { title: "出典を読む" };
export default function SourcesPage() {
  return (
    <div className="reading page">
      <p className="eyebrow">THE SOURCE LIBRARY</p>
      <h1>出典を読む</h1>
      <Scene name="learning" className="page-panorama" caption />
      <p className="intro">回答から原文まで、つながりをたどる。</p>
      <p>
        日本語は本サイトによる要約です。canonical
        は三蔵に含まれることを、commentarial
        は三蔵外の論書であることを示します。成立年代や逐語的な発言の保証ではありません。
      </p>
      <div className="source-index">
        <a href="#canonical">01 パーリ三蔵 ↓</a>
        <a href="#commentarial">02 『清浄道論』 ↓</a>
      </div>
      {(["canonical", "commentarial"] as const).map((level) => (
        <section className="section" id={level} key={level}>
          <h2>
            {level === "canonical"
              ? "パーリ三蔵 — Mahāniddesa ほか"
              : "論書 — Visuddhimagga（清浄道論）"}
          </h2>
          <p>
            {level === "canonical"
              ? "気質と指導の対応には Mahāniddesa 第14章65.6–12を採用し、第16章31.6–12も確認。入出息念経・慈経などは、参考説明の用語を確認するための追加資料です。"
              : "第3章の六気質・観察記述・判別の留保・瞑想対象の適性を採用。第8・9・11章などは用語解説に参照。III の節番号は Ñāṇamoli 訳の区分で、パーリ版の §43・45・47 と併記しています。"}
          </p>
          {sources
            .filter((s) => s.traditionLevel === level)
            .map((s) => (
              <SourceCard id={s.id} anchor key={s.id} />
            ))}
        </section>
      ))}
      <ReadingGuide />
    </div>
  );
}
