import { describe, expect, it } from "vitest";
import { questions } from "@/data/questions";
import { practices } from "@/data/practices";
import { sources } from "@/data/sources";
import { caritas } from "@/data/caritas";
import { sanitizeAnswers, score } from "@/domain/scoring";
import type { Question } from "@/domain/types";
describe("出典とデータの契約", () => {
  it("IDは一意で出典がすべて実在する", () => {
    for (const items of [questions, practices, sources, caritas])
      expect(new Set(items.map((x) => x.id)).size).toBe(items.length);
    for (const item of [...questions, ...practices]) {
      expect(item.sourceIds.length).toBeGreaterThan(0);
      for (const id of item.sourceIds)
        expect(sources.some((s) => s.id === id)).toBe(true);
    }
    for (const q of questions) {
      expect(["direct", "modernized"]).toContain(q.evidenceLevel);
      expect(new Set(q.answers.map((a) => a.id)).size).toBe(q.answers.length);
      for (const a of q.answers)
        for (const e of a.evidence) {
          expect(q.sourceIds).toContain(e.sourceId);
          expect(caritas.some((c) => c.id === e.carita)).toBe(true);
          expect(e.strength).toBe(1);
        }
    }
    for (const p of practices)
      for (const id of p.sourceIds)
        expect(sources.find((s) => s.id === id)?.traditionLevel).toBe(
          p.traditionLevel,
        );
  });
  it("六気質の加点機会は各5問", () => {
    for (const c of caritas)
      expect(
        questions.filter((q) =>
          q.answers.some((a) => a.evidence.some((e) => e.carita === c.id)),
        ),
      ).toHaveLength(5);
  });
  it("痴行の三蔵での指導と論書での対応を分離する", () => {
    expect(practices.find((p) => p.id === "m14-moha")?.description).toContain(
      "質問",
    );
    expect(practices.find((p) => p.id === "v121-2")?.caritas).toEqual([
      "moha",
      "vitakka",
    ]);
  });
});
describe("決定論的一致数", () => {
  it("同じ回答なら同じ結果・同点を全件保持", () => {
    const a = { walking: "0" };
    expect(score(a)).toEqual(score(a));
    expect(score(a).leaders.map((c) => c.id)).toEqual(["raga", "saddha"]);
  });
  it("変更時は古い回答を加算しない", () => {
    expect(
      score({ walking: "1" }).counts.find((c) => c.id === "raga")?.count,
    ).toBe(0);
    expect(score({ walking: "1" }).leaders.map((c) => c.id)).toEqual([
      "dosa",
      "buddhi",
    ]);
  });
  it("空回答・全スキップで首位を作らない", () => {
    expect(score({}).leaders).toEqual([]);
    const a = Object.fromEntries(questions.map((q) => [q.id, "skip"]));
    expect(score(a).complete).toBe(true);
    expect(score(a).leaders).toEqual([]);
  });
  it("不正な保存値を排除", () => {
    for (const a of [null, 3, [], { walking: "bad", unknown: "yes" }, "bad"])
      expect(sanitizeAnswers(a)).toEqual({});
  });
  it("interpretiveは実行時にもスコア対象外", () => {
    const q = {
      ...questions[0],
      evidenceLevel: "interpretive",
    } as unknown as Question;
    expect(score({ walking: "0" }, [q]).matches).toEqual([]);
  });
  it("一つの回答の同じ気質を重複カウントしない", () => {
    const q = structuredClone(questions[0]);
    q.answers[0].evidence.push(q.answers[0].evidence[0]);
    expect(score({ walking: "0" }, [q]).leaders[0].count).toBe(1);
  });
});
