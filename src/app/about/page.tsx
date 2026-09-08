import { Scene } from "@/components/scene";
import { ReadingGuide } from "@/components/reading-guide";
import Link from "next/link";
export const metadata = { title: "このサイトについて" };
export default function AboutPage() {
  return (
    <div className="reading page">
      <p className="eyebrow">OUR APPROACH</p>
      <h1>
        断定するためではなく、
        <br />
        観察するために。
      </h1>
      <Scene name="kindness" className="page-panorama" caption />
      <section className="section">
        <h2>文献とのつながりを第一に</h2>
        <p>
          Carita
          は、パーリ仏教文献にある気質・傾向の記述を、自分の日常と照らし合わせるための小さな道具です。原典にない性格心理学を追加せず、Big
          Five や MBTI などとの対応付けもしません。
        </p>
        <p>
          質問には『清浄道論』を使い、修行法には Mahāniddesa
          と『清浄道論』を区別して使います。Mahāniddesa
          はパーリ三蔵内の解釈文献、『清浄道論』は三蔵外の論書です。
        </p>
      </section>
      <section className="section">
        <h2>参考の説明と、文献の記述を分ける</h2>
        <p>
          修行法の「参考 ·
          意訳」は、本サイトによるやさしい説明です。「身近なイメージ」は理解を助けるための現代の例。単に参考と添えて意味を広げるのではなく、文献の要約、意訳、例を区別し、参照先を残しています。これらの参考説明は採点に使いません。
        </p>
        <h3>記述と質問の距離を示す</h3>
        <dl className="definitions">
          <dt>direct</dt>
          <dd>
            原典に直接的な記載がある対応。科学的な検証の水準を表すものではありません。
          </dd>
          <dt>modernized</dt>
          <dd>
            記述を自己回答できる質問に置き換えたもの。現在の10問すべてが該当します。変更の説明を質問ごとに表示します。
          </dd>
          <dt>interpretive</dt>
          <dd>原典からさらに推論したもの。診断スコアには使用しません。</dd>
        </dl>
      </section>
      <section className="section">
        <h2>一致数は、仏典の点数ではありません</h2>
        <p>
          一つの回答が対応する気質ごとに1件を数えます。重みはすべて1で、割合や確率は表示しません。身体動作などの4問では、文献の類似関係に従って二つの気質に同時に一致する場合があります。六気質それぞれに最大5問の加点機会があります。
        </p>
        <p>
          同点はそのまま表示し、すべて加点なしの場合は気質を割り当てません。質問数・質問選択・自己回答の偏りを解消する仕組みではなく、心理測定として検証された尺度でもありません。
        </p>
      </section>
      <section className="section">
        <h2>文献自体の留保も伝える</h2>
        <p>
          『清浄道論』III.96
          は、観察による判別に限界があり、動作を変えることもでき、混合した傾向もあると述べます。六分類を固定的な人格として扱いません。「痴」は仏教用語であり、知能の良し悪しを示しません。
        </p>
        <p>
          修行法は伝統上の対応を読むための情報です。III.122
          の説明に従い、他の善い修習を排除するものとして扱いません。
        </p>
        <Link href="/sources/#v96">判別の留保の出典 →</Link>
      </section>
      <section className="section">
        <h2>回答は、自分のブラウザに</h2>
        <p>
          回答はブラウザの localStorage
          に保存し、結果画面から消去できます。ブラウザを共有する場合、同じブラウザの利用者は保存された回答を見ることができます。保存できない環境では、画面内のメモリで保持します。
        </p>
        <p>
          回答をサーバーへ送信しません。実行時の
          LLM、解析ツール、アカウント登録は使用せず、静的データと決定論的な計算だけで照合します。原文への外部リンクは、選ぶと外部サイトを開きます。
        </p>
      </section>
      <ReadingGuide />
      <section className="section">
        <h2>風景のイラストについて</h2>
        <p>
          タイの森の僧院、スリランカの菩提樹の下、ミャンマーの村をイメージした創作イラストです。AIで制作した挿絵で、実在の場所の写真・歴史的復元・修行の手順図ではありません。それぞれの地域の文化すべてを代表するものでもありません。
        </p>
      </section>
      <Link className="button" href="/questions/">
        質問に答える →
      </Link>
    </div>
  );
}
