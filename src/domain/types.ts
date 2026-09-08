export type Carita = "raga" | "dosa" | "moha" | "saddha" | "buddhi" | "vitakka";
export type CaritaInfo = { id: Carita; name: string; pali: string };
export type EvidenceLevel = "direct" | "modernized" | "interpretive";
export type TraditionLevel = "canonical" | "commentarial";
export type Source = {
  id: string;
  work: string;
  location: string;
  traditionLevel: TraditionLevel;
  pali?: string;
  japaneseSummary: string;
  externalUrl?: string;
};
export type Evidence = { carita: Carita; strength: 1 | 2; sourceId: string };
export type Question = {
  id: string;
  text: string;
  scene?: string;
  context?: string;
  category: "posture" | "action" | "eating" | "perception" | "mental-state";
  evidenceLevel: Exclude<EvidenceLevel, "interpretive">;
  sourceIds: string[];
  adaptationNote: string;
  answers: { id: string; label: string; evidence: Evidence[] }[];
};
export type PracticeRecommendation = {
  id: string;
  caritas: Carita[];
  namePali: string;
  nameJa: string;
  description: string;
  sourceIds: string[];
  traditionLevel: TraditionLevel;
  evidenceLevel: EvidenceLevel;
};
export type Answers = Record<string, string>;

/** Editorial reading aids, deliberately outside the scoring model. */
export type ReadingNote = {
  id: string;
  title: string;
  explanation: string;
  evidenceLevel: "modernized";
  sourceIds: string[];
  example?: { text: string; evidenceLevel: "interpretive" };
  boundary?: string;
};
