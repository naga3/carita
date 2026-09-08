import Link from "next/link";
import { caritas } from "@/data/caritas";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">PĀLI BUDDHISM · A GUIDE THROUGH THE TEXTS</p>
          <h1>
            Carita
            <span>
              パーリ仏教の「気質」から、
              <br />
              自分に合う修行を探る
            </span>
          </h1>
          <p className="intro">
            ふだんの振る舞いに、目を向ける。
            <br />
            その気づきを、文献のことばにつなぐ。
          </p>
          <p>
            質問に答えると、パーリ仏教文献の <i lang="pi">carita</i>
            （気質・傾向）の記述と照合します。結果から、その根拠と伝統文献上の修行法をたどれます。
          </p>
          <div className="hero-action">
            <Link className="button" href="/questions/">
              診断を始める <span>→</span>
            </Link>
            <span className="muted">全10問 · 自分のペースで</span>
          </div>
          <p className="micro">
            心理テストではありません · 医学的・心理学的診断ではありません
            <br />
            判定根拠をすべて確認できます
          </p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="art-center">
            carita<small>気質・傾向</small>
          </div>
          <span className="art-note">一つの型に、閉じ込めない。</span>
        </div>
      </section>
      <section className="steps">
        <div>
          <span className="step-num">01</span>
          <h2>日常を振り返る</h2>
          <p>歩き方や心の動きなど、文献に根拠のある10の問い。</p>
        </div>
        <div>
          <span className="step-num">02</span>
          <h2>記述との一致を知る</h2>
          <p>六つの傾向との一致を件数で表示。同数の傾向も、そのままに。</p>
        </div>
        <div>
          <span className="step-num">03</span>
          <h2>根拠と修行法をたどる</h2>
          <p>パーリ三蔵と『清浄道論』を区別し、原文へつなぎます。</p>
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">SIX TEMPERAMENTS</p>
        <h2>六つのことば、観察の手がかり。</h2>
        <div className="carita-grid">
          {caritas.map((c, i) => (
            <div key={c.id}>
              <span className="muted">0{i + 1}</span>
              <h3>{c.name}</h3>
              <p lang="pi">{c.pali}</p>
            </div>
          ))}
        </div>
        <p className="muted">
          「痴」は仏教用語であり、知能の評価ではありません。六分類は固定的な人格を表すものではありません。
        </p>
      </section>
      <section className="editorial">
        <p className="eyebrow">ROOTED IN SOURCES</p>
        <h2>
          「どこに書かれているか」を、
          <br />
          いつでも確かめられる。
        </h2>
        <p>
          質問は『清浄道論』第3章から。修行法は Mahāniddesa
          と『清浄道論』それぞれの記述から。文献自体が述べる判別の限界も、あわせて紹介します。
        </p>
        <Link href="/sources/">採用した文献と箇所を見る →</Link>
      </section>
    </>
  );
}
