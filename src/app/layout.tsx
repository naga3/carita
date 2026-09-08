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
          <div className="footer-links">
            <Link href="/about/">方針・回答データの扱い →</Link>
            <a
              className="github-link"
              href="https://github.com/naga3/carita"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub リポジトリ（新しいタブで開く）"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
