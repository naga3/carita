import Link from "next/link";
import { sources } from "@/data/sources";
import type { TraditionLevel } from "@/domain/types";
export const traditionLabels: Record<TraditionLevel, string> = {
  canonical: "パーリ三蔵",
  commentarial: "『清浄道論』",
};
export function SourceCard({
  id,
  anchor = false,
}: {
  id: string;
  anchor?: boolean;
}) {
  const s = sources.find((s) => s.id === id);
  if (!s) return null;
  return (
    <article className="source-card" id={anchor ? id : undefined}>
      <span className={`badge ${s.traditionLevel}`}>
        {traditionLabels[s.traditionLevel]} · {s.traditionLevel}
      </span>
      {s.id.startsWith("reader-") && (
        <p className="supplement-label">
          参考説明の用語を確かめる資料 · 気質の割当には使用しません
        </p>
      )}
      <h3>{s.work}</h3>
      <p className="source-location">{s.location}</p>
      {s.pali && <blockquote lang="pi">{s.pali}</blockquote>}
      <p>{s.japaneseSummary}</p>
      <div className="source-links">
        {s.externalUrl && (
          <a href={s.externalUrl} target="_blank" rel="noreferrer">
            {s.id.startsWith("reader-")
              ? "参照本文（英訳）を読む ↗"
              : "原文を参照 ↗"}
          </a>
        )}
        {!anchor && (
          <Link href={`/sources/#${s.id}`}>出典一覧のこの箇所 →</Link>
        )}
      </div>
    </article>
  );
}
