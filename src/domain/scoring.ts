import { caritas } from "@/data/caritas";
import { questions } from "@/data/questions";
import type { Answers, Question } from "./types";
export function sanitizeAnswers(value: unknown, data = questions): Answers {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const input = value as Record<string, unknown>;
  return Object.fromEntries(
    data
      .filter(
        (q) =>
          Object.hasOwn(input, q.id) &&
          q.answers.some((a) => a.id === input[q.id]),
      )
      .map((q) => [q.id, input[q.id] as string]),
  );
}
export function score(input: Answers, data: readonly Question[] = questions) {
  const answers = sanitizeAnswers(input, [...data]);
  const matches = data
    .filter((q) => ["direct", "modernized"].includes(q.evidenceLevel))
    .flatMap((question) => {
      const answer = question.answers.find(
        (a) => a.id === answers[question.id],
      );
      return answer
        ? [...new Map(answer.evidence.map((e) => [e.carita, e])).values()].map(
            (evidence) => ({ question, answer, evidence }),
          )
        : [];
    });
  const counts = caritas
    .map((c) => ({
      ...c,
      count: matches.filter((m) => m.evidence.carita === c.id).length,
    }))
    .sort((a, b) => b.count - a.count);
  const max = counts[0].count;
  return {
    counts,
    matches,
    leaders: counts.filter((c) => max > 0 && c.count === max),
    complete: data.every((q) => answers[q.id] !== undefined),
  };
}
