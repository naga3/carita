import type { Question } from "@/domain/types";
export const questions: Question[] = [
  {
    id: "walking",
    text: "普段、足を運ぶ様子で近い記述はありますか。",
    category: "posture",
    evidenceLevel: "modernized",
    sourceIds: ["v88", "v74", "v96"],
    adaptationNote:
      "原典の観察を自己回答に置換し、一部の特徴のみを尋ねます。本文が述べる類似関係により一つの回答が二気質に対応します。身体条件などの理由は推定しません。",
    answers: [
      {
        id: "0",
        label: "ゆっくり、均等に足を置き、上げる",
        evidence: [
          {
            carita: "raga",
            strength: 1,
            sourceId: "v88",
          },
          {
            carita: "saddha",
            strength: 1,
            sourceId: "v88",
          },
        ],
      },
      {
        id: "1",
        label: "急に足を置き、急に上げる",
        evidence: [
          {
            carita: "dosa",
            strength: 1,
            sourceId: "v88",
          },
          {
            carita: "buddhi",
            strength: 1,
            sourceId: "v88",
          },
        ],
      },
      {
        id: "2",
        label: "ためらうように足を置き、上げる",
        evidence: [
          {
            carita: "moha",
            strength: 1,
            sourceId: "v88",
          },
          {
            carita: "vitakka",
            strength: 1,
            sourceId: "v88",
          },
        ],
      },
      {
        id: "skip",
        label: "当てはまらない・判断できない",
        evidence: [],
      },
    ],
  },
  {
    id: "work",
    text: "日常の作業の進め方で近い記述はありますか。",
    category: "action",
    evidenceLevel: "modernized",
    sourceIds: ["v92", "v74", "v96"],
    adaptationNote:
      "原典の観察を自己回答に置換し、一部の特徴のみを尋ねます。本文が述べる類似関係により一つの回答が二気質に対応します。身体条件などの理由は推定しません。",
    answers: [
      {
        id: "0",
        label: "丁寧に、むらなく、注意して行う",
        evidence: [
          {
            carita: "raga",
            strength: 1,
            sourceId: "v92",
          },
          {
            carita: "saddha",
            strength: 1,
            sourceId: "v92",
          },
        ],
      },
      {
        id: "1",
        label: "力みがあり、硬く、むらが出る",
        evidence: [
          {
            carita: "dosa",
            strength: 1,
            sourceId: "v92",
          },
          {
            carita: "buddhi",
            strength: 1,
            sourceId: "v92",
          },
        ],
      },
      {
        id: "2",
        label: "混乱し、進め方が定まらない",
        evidence: [
          {
            carita: "moha",
            strength: 1,
            sourceId: "v92",
          },
          {
            carita: "vitakka",
            strength: 1,
            sourceId: "v92",
          },
        ],
      },
      {
        id: "skip",
        label: "当てはまらない・判断できない",
        evidence: [],
      },
    ],
  },
  {
    id: "eating",
    text: "食事中の様子で近い記述はありますか。",
    category: "eating",
    evidenceLevel: "modernized",
    sourceIds: ["v93", "v74", "v96"],
    adaptationNote:
      "原典の観察を自己回答に置換し、一部の特徴のみを尋ねます。本文が述べる類似関係により一つの回答が二気質に対応します。身体条件などの理由は推定しません。",
    answers: [
      {
        id: "0",
        label: "急がず、味を感じながら食べる",
        evidence: [
          {
            carita: "raga",
            strength: 1,
            sourceId: "v93",
          },
          {
            carita: "saddha",
            strength: 1,
            sourceId: "v93",
          },
        ],
      },
      {
        id: "1",
        label: "急いで、味をあまり感じずに食べる",
        evidence: [
          {
            carita: "dosa",
            strength: 1,
            sourceId: "v93",
          },
          {
            carita: "buddhi",
            strength: 1,
            sourceId: "v93",
          },
        ],
      },
      {
        id: "2",
        label: "気が散って、あれこれ考えながら食べる",
        evidence: [
          {
            carita: "moha",
            strength: 1,
            sourceId: "v93",
          },
          {
            carita: "vitakka",
            strength: 1,
            sourceId: "v93",
          },
        ],
      },
      {
        id: "skip",
        label: "当てはまらない・判断できない",
        evidence: [],
      },
    ],
  },
  {
    id: "seeing",
    text: "物を見て評価するとき、近い記述はありますか。",
    category: "perception",
    evidenceLevel: "modernized",
    sourceIds: ["v94", "v74", "v96"],
    adaptationNote:
      "原典の観察を自己回答に置換し、一部の特徴のみを尋ねます。本文が述べる類似関係により一つの回答が二気質に対応します。身体条件などの理由は推定しません。",
    answers: [
      {
        id: "0",
        label: "小さな長所にも惹かれ、実際の欠点を見落とす",
        evidence: [
          {
            carita: "raga",
            strength: 1,
            sourceId: "v94",
          },
          {
            carita: "saddha",
            strength: 1,
            sourceId: "v94",
          },
        ],
      },
      {
        id: "1",
        label: "小さな欠点が気になり、実際の長所を見落とす",
        evidence: [
          {
            carita: "dosa",
            strength: 1,
            sourceId: "v94",
          },
          {
            carita: "buddhi",
            strength: 1,
            sourceId: "v94",
          },
        ],
      },
      {
        id: "2",
        label: "自分では定まらず、他の人の賛否に従う",
        evidence: [
          {
            carita: "moha",
            strength: 1,
            sourceId: "v94",
          },
          {
            carita: "vitakka",
            strength: 1,
            sourceId: "v94",
          },
        ],
      },
      {
        id: "skip",
        label: "当てはまらない・判断できない",
        evidence: [],
      },
    ],
  },
  {
    id: "mental-raga",
    text: "さらに欲しくなる気持ちや、不満足がよく起こりますか。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-raga", "v96"],
    adaptationNote:
      "頻出する状態の列挙から一部を選び、自己回答の質問に置換しています。臨床的な症状の判定ではありません。",
    answers: [
      {
        id: "yes",
        label: "よくあると感じる",
        evidence: [
          {
            carita: "raga",
            strength: 1,
            sourceId: "v95-raga",
          },
        ],
      },
      {
        id: "no",
        label: "あまりないと感じる",
        evidence: [],
      },
      {
        id: "skip",
        label: "判断できない・答えない",
        evidence: [],
      },
    ],
  },
  {
    id: "mental-dosa",
    text: "怒りや、相手への恨みを保つ気持ちがよく起こりますか。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-dosa", "v96"],
    adaptationNote:
      "頻出する状態の列挙から一部を選び、自己回答の質問に置換しています。臨床的な症状の判定ではありません。",
    answers: [
      {
        id: "yes",
        label: "よくあると感じる",
        evidence: [
          {
            carita: "dosa",
            strength: 1,
            sourceId: "v95-dosa",
          },
        ],
      },
      {
        id: "no",
        label: "あまりないと感じる",
        evidence: [],
      },
      {
        id: "skip",
        label: "判断できない・答えない",
        evidence: [],
      },
    ],
  },
  {
    id: "mental-moha",
    text: "心が落ち着かず、疑って決めかねることがよくありますか。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-moha", "v96"],
    adaptationNote:
      "頻出する状態の列挙から一部を選び、自己回答の質問に置換しています。臨床的な症状の判定ではありません。",
    answers: [
      {
        id: "yes",
        label: "よくあると感じる",
        evidence: [
          {
            carita: "moha",
            strength: 1,
            sourceId: "v95-moha",
          },
        ],
      },
      {
        id: "no",
        label: "あまりないと感じる",
        evidence: [],
      },
      {
        id: "skip",
        label: "判断できない・答えない",
        evidence: [],
      },
    ],
  },
  {
    id: "mental-saddha",
    text: "仏教の正しい教えを聞きたいという気持ちがよく起こりますか。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-saddha", "v96"],
    adaptationNote:
      "頻出する状態の列挙から一部を選び、自己回答の質問に置換しています。臨床的な症状の判定ではありません。",
    answers: [
      {
        id: "yes",
        label: "よくあると感じる",
        evidence: [
          {
            carita: "saddha",
            strength: 1,
            sourceId: "v95-saddha",
          },
        ],
      },
      {
        id: "no",
        label: "あまりないと感じる",
        evidence: [],
      },
      {
        id: "skip",
        label: "判断できない・答えない",
        evidence: [],
      },
    ],
  },
  {
    id: "mental-buddhi",
    text: "人からの助言や注意を、受け入れやすいと感じますか。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-buddhi", "v96"],
    adaptationNote:
      "頻出する状態の列挙から一部を選び、自己回答の質問に置換しています。臨床的な症状の判定ではありません。",
    answers: [
      {
        id: "yes",
        label: "よくあると感じる",
        evidence: [
          {
            carita: "buddhi",
            strength: 1,
            sourceId: "v95-buddhi",
          },
        ],
      },
      {
        id: "no",
        label: "あまりないと感じる",
        evidence: [],
      },
      {
        id: "skip",
        label: "判断できない・答えない",
        evidence: [],
      },
    ],
  },
  {
    id: "mental-vitakka",
    text: "心があれこれと考えを追って、行き来することがよくありますか。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-vitakka", "v96"],
    adaptationNote:
      "頻出する状態の列挙から一部を選び、自己回答の質問に置換しています。臨床的な症状の判定ではありません。",
    answers: [
      {
        id: "yes",
        label: "よくあると感じる",
        evidence: [
          {
            carita: "vitakka",
            strength: 1,
            sourceId: "v95-vitakka",
          },
        ],
      },
      {
        id: "no",
        label: "あまりないと感じる",
        evidence: [],
      },
      {
        id: "skip",
        label: "判断できない・答えない",
        evidence: [],
      },
    ],
  },
];
