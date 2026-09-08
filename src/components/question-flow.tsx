"use client";
import { Scene } from "./scene";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { useAnswers, setAnswers } from "@/lib/answer-store";
import { SourceCard } from "./source-card";
const categories = {
  posture: "歩き方・姿勢",
  action: "行動",
  eating: "食事",
  perception: "対象の見方",
  "mental-state": "心に起こる状態",
};
export function QuestionFlow() {
  const { answers, ready, persistent } = useAnswers();
  if (!ready)
    return (
      <div className="narrow page" role="status">
        回答を読み込んでいます…
      </div>
    );
  return (
    <Flow
      initialIndex={Math.max(
        0,
        questions.findIndex((q) => answers[q.id] === undefined),
      )}
      answers={answers}
      persistent={persistent}
    />
  );
}
function Flow({
  initialIndex,
  answers,
  persistent,
}: {
  initialIndex: number;
  answers: Record<string, string>;
  persistent: boolean;
}) {
  const [index, setIndex] = useState(initialIndex);
  const router = useRouter();
  const q = questions[index];
  function move(next: number) {
    setIndex(next);
    window.scrollTo({ top: 0 });
    requestAnimationFrame(() =>
      document.getElementById("question-title")?.focus(),
    );
  }
  return (
    <div className="narrow page">
      <div className="question-banner">
        <Scene name="forest" />
        <p>ひとつずつ、ふだんを振り返る。</p>
      </div>
      <p className="eyebrow">OBSERVE & REFLECT</p>
      <div className="question-progress">
        <span>
          質問 {index + 1} / {questions.length}
        </span>
        <span>{categories[q.category]}</span>
      </div>
      <progress
        aria-label="質問の進捗"
        value={index + 1}
        max={questions.length}
      />
      <div className="question-card" key={q.id}>
        <h1 id="question-title" tabIndex={-1}>
          {q.text}
        </h1>
        <p className="muted">
          近い記述を一つ選んでください。迷う場合は、判断できないと答えられます。
        </p>
        <details className="answer-help">
          <summary>答え方のヒント</summary>
          <p>
            理想の振る舞いではなく、実際に近いと感じる記述を選びます。どれも近くないときや、状況で変わって決められないときは「判断できない」で大丈夫です。正解・不正解はありません。
          </p>
        </details>
        <fieldset>
          <legend className="sr-only">回答の選択肢</legend>
          {q.answers.map((a) => (
            <label
              className={`answer ${answers[q.id] === a.id ? "selected" : ""}`}
              key={a.id}
            >
              <input
                type="radio"
                name={q.id}
                value={a.id}
                checked={answers[q.id] === a.id}
                onChange={() => setAnswers({ ...answers, [q.id]: a.id })}
              />
              <span>{a.label}</span>
            </label>
          ))}
        </fieldset>
        <div className="question-buttons">
          <button
            className="button secondary"
            disabled={index === 0}
            onClick={() => move(index - 1)}
          >
            ← 前の質問
          </button>
          <button
            className="button"
            disabled={answers[q.id] === undefined}
            onClick={() =>
              index === questions.length - 1
                ? router.push("/result/")
                : move(index + 1)
            }
          >
            {index === questions.length - 1 ? "結果を見る" : "次の質問"} →
          </button>
        </div>
        <details className="source-disclosure">
          <summary>この質問の出典を見る</summary>
          <p>
            <span className="badge">modernized · 質問形式に現代化</span>
          </p>
          <p>{q.adaptationNote}</p>
          {q.sourceIds.map((id) => (
            <SourceCard key={id} id={id} />
          ))}
        </details>
      </div>
      <p className="micro">
        『清浄道論』III.96
        は、動作などによる判別の限界を述べています。ここでは記述との一致だけを整理します。
      </p>
      <p className="micro" role="status">
        {persistent
          ? "回答はこのブラウザに保存されます。後から戻って変更できます。"
          : "ブラウザに保存できないため、このページを閉じると回答が失われる場合があります。"}
      </p>
    </div>
  );
}
