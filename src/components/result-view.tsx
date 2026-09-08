"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { practices } from "@/data/practices";
import { caritas } from "@/data/caritas";
import { score } from "@/domain/scoring";
import { useAnswers, clearAnswers } from "@/lib/answer-store";
import { SourceCard, traditionLabels } from "./source-card";
export function ResultView() {
  const { answers, ready, persistent } = useAnswers();
  const router = useRouter();
  if (!ready)
    return (
      <div className="narrow page" role="status">
        回答を読み込んでいます…
      </div>
    );
  const result = score(answers);
  if (!result.complete)
    return (
      <div className="narrow page">
        <p className="eyebrow">YOUR REFLECTION</p>
        <h1>まだ回答がそろっていません</h1>
        <p>全10問に回答すると、一致する記述と根拠を確認できます。</p>
        <Link className="button" href="/questions/">
          質問へ進む →
        </Link>
      </div>
    );
  const matched = result.counts.filter((c) => c.count > 0).map((c) => c.id);
  const recommended = practices.filter((p) =>
    p.caritas.some((c) => matched.includes(c)),
  );
  return (
    <div className="result page">
      <p className="eyebrow">YOUR REFLECTION · 今回の回答との照合</p>
      <h1>文献のことばで、振り返る。</h1>
      <section className="result-summary">
        <span className="badge">最も一致が多かった傾向</span>
        {result.leaders.length ? (
          <>
            <h2>{result.leaders.map((c) => c.name).join("・")}</h2>
            <p className="pali">
              {result.leaders.map((c) => c.pali).join(" · ")}
            </p>
            <p>
              今回の回答では、{result.leaders.map((c) => c.name).join("と")}
              に対応する記述との一致が最も多く見られました。
              {result.leaders.length > 1
                ? "これらの傾向への一致は同数でした。"
                : ""}
            </p>
            <strong>各 {result.leaders[0].count} 件の一致</strong>
          </>
        ) : (
          <>
            <h2>一致する記述はありませんでした</h2>
            <p>
              今回選ばれた回答には、加点対象となる記述がありません。気質や修行法は割り当てません。
            </p>
          </>
        )}
      </section>
      <section className="section">
        <h2>一致件数</h2>
        <p className="muted">
          各気質につき最大5件。類似する二気質に対応する回答もあります。割合や適性の確率ではありません。
        </p>
        <div className="counts">
          {result.counts.map((c) => (
            <div className="count-row" key={c.id}>
              <span>
                {c.name}
                <small lang="pi">{c.pali}</small>
              </span>
              <div className="bar-track" aria-hidden="true">
                <div style={{ width: `${c.count * 20}%` }} />
              </div>
              <strong>{c.count} 件</strong>
            </div>
          ))}
        </div>
        <p className="micro">
          一致数は文献にない実装上の仕組みです。一つの回答・一つの気質につき1件として整理します。
        </p>
      </section>
      <section className="section">
        <h2>文献上、対応するとされる修行法</h2>
        <p>
          一致が1件以上あるすべての傾向について、伝統文献の対応を示します。個人への実践処方ではありません。
        </p>
        {(["canonical", "commentarial"] as const).map((level) => (
          <div key={level}>
            <h3 className="group-title">
              {level === "canonical" ? "三蔵での対応" : "清浄道論での対応"}
            </h3>
            <div className="practice-grid">
              {recommended
                .filter((p) => p.traditionLevel === level)
                .map((p) => (
                  <article className="practice-card" key={p.id}>
                    <span className={`badge ${level}`}>
                      {traditionLabels[level]} · direct
                    </span>
                    <p className="micro">
                      {p.caritas
                        .map((c) => caritas.find((x) => x.id === c)?.name)
                        .join("・")}
                    </p>
                    <h3>{p.nameJa}</h3>
                    <p lang="pi" className="pali">
                      {p.namePali}
                    </p>
                    <p>{p.description}</p>
                    {p.sourceIds.map((id) => (
                      <a key={id} href={`#evidence-${id}`}>
                        対応の根拠を読む →
                      </a>
                    ))}
                  </article>
                ))}
            </div>
          </div>
        ))}
        {!recommended.length && (
          <p>
            今回は対応する修行法を表示していません。
            <Link href="/sources/">文献一覧</Link>
            から各対応を読むことができます。
          </p>
        )}
      </section>
      <section className="section">
        <h2>三蔵での根拠</h2>
        <p>
          Mahāniddesa の気質ごとの指導。質問の採点基準とは別の文献データです。
        </p>
        {recommended
          .filter((p) => p.traditionLevel === "canonical")
          .flatMap((p) => p.sourceIds)
          .map((id) => (
            <div id={`evidence-${id}`} key={id}>
              <SourceCard id={id} />
            </div>
          ))}
      </section>
      <section className="section">
        <h2>『清浄道論』での補足</h2>
        {recommended
          .filter((p) => p.traditionLevel === "commentarial")
          .flatMap((p) => p.sourceIds)
          .map((id) => (
            <div id={`evidence-${id}`} key={id}>
              <SourceCard id={id} />
            </div>
          ))}
        <SourceCard id="v96" />
        <SourceCard id="v122" />
      </section>
      <section className="section">
        <h2>なぜこの結果になった？</h2>
        <p>加点した回答と、対応する気質・出典をすべて確認できます。</p>
        {result.matches.map((m) => (
          <details
            className="match"
            key={`${m.question.id}-${m.evidence.carita}`}
          >
            <summary>
              {caritas.find((c) => c.id === m.evidence.carita)?.name} +1件{" "}
              <span>「{m.answer.label}」</span>
            </summary>
            <p>{m.question.text}</p>
            <p>
              <span className="badge">
                {m.question.evidenceLevel} · 質問形式に現代化
              </span>
            </p>
            <p>{m.question.adaptationNote}</p>
            <SourceCard id={m.evidence.sourceId} />
          </details>
        ))}
        {!result.matches.length && <p>加点された回答はありません。</p>}
      </section>
      <section className="section">
        <h2>全回答</h2>
        <ol className="all-answers">
          {questions.map((q) => (
            <li key={q.id}>
              <p>{q.text}</p>
              <strong>
                {q.answers.find((a) => a.id === answers[q.id])?.label}
              </strong>
              <small>
                {q.answers.find((a) => a.id === answers[q.id])?.evidence.length
                  ? "対応する気質ごとに1件"
                  : "加点なし"}
              </small>
            </li>
          ))}
        </ol>
        <Link className="button secondary" href="/questions/">
          回答を見直す →
        </Link>
      </section>
      <section className="notice">
        <h2>結果を読むにあたって</h2>
        <p>
          六分類は実際の人物を完全に六種類へ分割する現代的性格類型ではありません。「痴」は仏教用語であり、知能検査ではありません。
        </p>
        <p>
          本サービスは医学的・心理学的診断ではありません。質問の選び方と自己回答に依存する文献照合であり、固定的な人格や修行の効果を保証しません。
        </p>
        <p>
          『清浄道論』III.96 の判別上の留保と III.122
          の非排他的な適性の説明も含めてお読みください。
        </p>
        <p>
          {persistent
            ? "回答はこのブラウザに保存されています。"
            : "回答をブラウザに保存できていません。"}
        </p>
        <button
          className="text-button"
          onClick={() => {
            clearAnswers();
            router.push("/questions/");
          }}
        >
          保存した回答を消去して、やり直す
        </button>
      </section>
    </div>
  );
}
