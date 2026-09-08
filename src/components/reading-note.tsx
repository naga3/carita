import Link from "next/link";
import type { ReadingNote } from "@/domain/types";
export function ReadingAid({
  note,
  compact = false,
}: {
  note: ReadingNote;
  compact?: boolean;
}) {
  return (
    <aside
      className={`reading-aid ${compact ? "compact" : ""}`}
      aria-label="現代のことばで読む・参考"
    >
      <p className="reading-label">
        現代のことばで読む <span>参考 · 意訳</span>
      </p>
      <h4>{note.title}</h4>
      <p>{note.explanation}</p>
      {note.example && (
        <div className="everyday-example">
          <span>身近なイメージ · 本サイトの例</span>
          <p>{note.example.text}</p>
        </div>
      )}
      {note.boundary && <p className="reading-boundary">{note.boundary}</p>}
      <details className="reading-references">
        <summary>この参考説明の位置づけ・出典</summary>
        <p>
          意訳は modernized、身近な例は
          interpretive。原典の引用ではなく、本サイトが理解を助けるために付けた説明です。採点には使いません。
        </p>
        <div>
          {note.sourceIds.map((id) => (
            <Link key={id} href={`/sources/#${id}`}>
              参照 {id} →
            </Link>
          ))}
        </div>
      </details>
    </aside>
  );
}
