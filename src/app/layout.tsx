import { Scene } from "@/components/scene";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Carita — パーリ仏教の気質と瞑想",
    template: "%s | Carita",
  },
  description:
    "パーリ仏教文献の気質の記述と回答を照合し、根拠と伝統文献上の修行法をたどる。",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body
        style={
          {
            "--forest-image": `url("${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/forest.webp")`,
            "--learning-image": `url("${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/learning.webp")`,
          } as CSSProperties
        }
      >
        <a className="skip-link" href="#main">
          本文へ移動
        </a>
        <header className="site-header">
          <Link href="/" className="wordmark">
            carita<span>文献から、こころを知る</span>
          </Link>
          <nav aria-label="メインナビゲーション">
            <Link href="/about/#reading-guide">ことばの手引き</Link>
            <Link href="/sources/">出典を読む</Link>
            <Link href="/about/">このサイトについて</Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <div className="footer-landscapes" aria-hidden="true">
          <Scene name="forest" />
          <Scene name="learning" />
          <Scene name="kindness" />
        </div>
        <footer>
          <Link href="/" className="footer-brand">
            Carita
          </Link>
          <p>断定するためではなく、観察するために。</p>
          <Link href="/about/">方針・回答データの扱い →</Link>
        </footer>
      </body>
    </html>
  );
}
