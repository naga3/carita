import { glossaryNotes } from "@/data/reading-notes";
import { ReadingAid } from "./reading-note";
import { Scene } from "./scene";
export function ReadingGuide() {
  return (
    <section className="section reading-guide" id="reading-guide">
      <div className="guide-intro">
        <div>
          <p className="eyebrow">A LITTLE HELP WITH THE WORDS</p>
          <h2>むずかしいことばに、小さな手がかり。</h2>
          <p>
            原典のことばを残しながら、いまの生活から読み近づくための参考です。
          </p>
        </div>
        <Scene name="learning" />
      </div>
      <div className="glossary-grid">
        {glossaryNotes.map((note) => (
          <ReadingAid note={note} key={note.id} compact />
        ))}
      </div>
    </section>
  );
}
