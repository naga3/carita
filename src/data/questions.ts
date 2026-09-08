import type { Question } from "@/domain/types";
export const QUESTIONNAIRE_VERSION = 2;
export const questions: Question[] = [
  {
    id: "q01",
    text: "お店で、いくつかの品物を見比べています。目が向きやすいのは？",
    scene: "品物を見るとき",
    context: "買う・買わないではなく、見ている間の感じ方を思い出してください。",
    category: "perception",
    evidenceLevel: "modernized",
    sourceIds: ["v94", "v74", "v96"],
    adaptationNote:
      "対象を見る際の長所・欠点への偏り、他者の賛否への追随（III.94）を、店で品物を見る場面に置換。単にレビューを調べる行為ではなく、自分の見方が他者の評価に沿う選択肢を採用。購買能力や歩き方は推定しない。本文の類似により二気質に対応。",
    answers: [
      {
        id: "others",
        label:
          "人の感想を見ると、自分も同じようによく見えたり、気になったりする",
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
        id: "appeal",
        label:
          "好きなところが一つあると、気になるところはあまり目に入らなくなる",
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
        id: "flaw",
        label:
          "気になるところが一つあると、好きなところもあまり目に入らなくなる",
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
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q02",
    text: "急ぐ用事のない日の食事。ふだんの食べ方に近いのは？",
    scene: "食事の時間",
    context: "時間に追われているとき以外の、普段の様子で選んでください。",
    category: "eating",
    evidenceLevel: "modernized",
    sourceIds: ["v93", "v74", "v96"],
    adaptationNote:
      "III.93の食べる速さ、味への注意、散心を食卓の場面に置換。食べ方だけを照合し、その原因や他の身体動作は推定しない。本文の類似により二気質に対応。",
    answers: [
      {
        id: "quick",
        label: "味をじっくり追うより先に、箸が進んで食べ終わることが多い",
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
        id: "elsewhere",
        label: "食べながら別のことを考えていて、味への注意がそれやすい",
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
        id: "taste",
        label: "ひと口ごとの味を感じながら、ゆっくり食べ進めることが多い",
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
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q03",
    text: "気の置けない人とのおしゃべり。あとで振り返ると？",
    scene: "会話のあと",
    context: "人前で話す得意・不得意ではなく、普段の会話を思い出してください。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-vitakka", "v96"],
    adaptationNote:
      "III.95の bhassabahulatā（多く語ること）を、親しい相手との会話で自己回答化。話題の内容や社交性全般から推測せず、発話量のみを照合。採点しない選択肢から他気質を推定しない。",
    answers: [
      {
        id: "short",
        label: "自分の話は短めで、たくさん話したと感じることは少ない",
        evidence: [],
      },
      {
        id: "talk",
        label: "話すことが次々に出てきて、自分でもよく話したなと思うことが多い",
        evidence: [
          {
            carita: "vitakka",
            strength: 1,
            sourceId: "v95-vitakka",
          },
        ],
      },
      {
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q04",
    text: "拭き掃除や洗い物など、いつもの家事をしているとき。手の動きは？",
    scene: "身の回りの作業",
    context: "仕上がりのよさではなく、作業中の様子を思い出してください。",
    category: "action",
    evidenceLevel: "modernized",
    sourceIds: ["v92", "v74", "v96"],
    adaptationNote:
      "III.91–92の作業時の丁寧で均等な動き、力みと不均等、定まらなさを家事の場面に置換。「効率的」「慎重」等の別の特性を補わない。本文の類似により二気質に対応。",
    answers: [
      {
        id: "even",
        label: "急がず、同じくらいの力加減で、一つずつ手を動かしている",
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
        id: "force",
        label: "手に力が入りやすく、動かす速さや強さに差が出る",
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
        id: "unsettled",
        label: "何からどのように手を動かすか、作業中も定まりにくい",
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
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q05",
    text: "いつものやり方について「こうしてみたら」と助言を受けました。近い反応は？",
    scene: "助言を受けたとき",
    context:
      "相手の言うとおりにするかではなく、聞いたときの感じ方で選んでください。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-buddhi", "v96"],
    adaptationNote:
      "III.95の sovacassatā（言葉を受け入れやすいこと）を、助言を受ける場面に置換。受け止めるまでの抵抗感を尋ね、即座に実行するか・相手に従順かという別の特性を採点しない。",
    answers: [
      {
        id: "receive",
        label: "言われたことを、あまり身構えずに受け止められることが多い",
        evidence: [
          {
            carita: "buddhi",
            strength: 1,
            sourceId: "v95-buddhi",
          },
        ],
      },
      {
        id: "resist",
        label: "助言の内容を受け止めるまで、少し抵抗を感じることが多い",
        evidence: [],
      },
      {
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q06",
    text: "食べたいものを自分で選べるとき、好みとして近いのは？",
    scene: "食べ物を選ぶとき",
    context:
      "食事制限や手に入りやすさではなく、好みの話です。両方同じくらいなら最後の選択肢で大丈夫です。",
    category: "eating",
    evidenceLevel: "modernized",
    sourceIds: ["v93", "v74", "v96"],
    adaptationNote:
      "III.93の嗜好の列挙から、甘味・酸味・定まらない好みだけを抜粋。油分や食感等は尋ねず、健康状態・食習慣の理由を推定しない。本文の類似により二気質に対応。食べ方の質問と同じ節を用いるが、異なる記述を数える。",
    answers: [
      {
        id: "varies",
        label: "そのときで変わり、繰り返し選ぶ味の好みはあまり決まっていない",
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
        id: "sour",
        label: "酸味のあるものを好んで選ぶことが多い",
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
        id: "sweet",
        label: "甘味のあるものを好んで選ぶことが多い",
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
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q07",
    text: "欲しかったものを手に入れたあと、しばらくすると？",
    scene: "手に入れたあと",
    context:
      "必要な買い足しではなく、手に入れたあとの満ち足り方を思い出してください。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-raga", "v96"],
    adaptationNote:
      "III.95の mahicchatā / asantuṭṭhitā（大きな欲求・不満足）を、何かを得たあとの場面に置換。購入金額や消費行動から人格を推定せず、さらに欲しい気持ちを自己回答で直接確認。",
    answers: [
      {
        id: "enough",
        label: "手元にあるもので落ち着き、さらに欲しいとはあまり思わない",
        evidence: [],
      },
      {
        id: "more",
        label: "手に入れても物足りなくなり、もう少し欲しいと感じることが多い",
        evidence: [
          {
            carita: "raga",
            strength: 1,
            sourceId: "v95-raga",
          },
        ],
      },
      {
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q08",
    text: "自分のものを誰かに分ける場面。無理のない範囲なら、どちらが近い？",
    scene: "分かち合うとき",
    context: "分ける量や回数ではなく、そのときの気持ちで選んでください。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-saddha", "v96"],
    adaptationNote:
      "III.95の muttacāgatā（惜しまず施すこと）を、ものを分ける場面に置換。経済的余裕や分ける量は採点せず、手放すことへのためらいの少なさを確認。宗教への関心や寄付額は推測しない。",
    answers: [
      {
        id: "hold",
        label: "分けるときには、手元に残しておきたい気持ちが出やすい",
        evidence: [],
      },
      {
        id: "share",
        label: "分けるときに、手放すことへのためらいはあまり感じない",
        evidence: [
          {
            carita: "saddha",
            strength: 1,
            sourceId: "v95-saddha",
          },
        ],
      },
      {
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q09",
    text: "特に急ぐ用事のない待ち時間。座って過ごしていると？",
    scene: "何もしていない時間",
    context: "気になる用事や体調などで決まる場合は、最後の選択肢を選べます。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-moha", "v96"],
    adaptationNote:
      "III.95の uddhacca（落ち着かなさ）を、急いでいない待ち時間に置換。迷い・知能・注意能力や足の動きを推定せず、心のそわそわを直接確認する。状況の原因は判定しない。",
    answers: [
      {
        id: "restless",
        label: "何かしないと落ち着かない感じがして、心がそわそわしやすい",
        evidence: [
          {
            carita: "moha",
            strength: 1,
            sourceId: "v95-moha",
          },
        ],
      },
      {
        id: "settled",
        label: "何もしていなくても、特にそわそわせずに過ごせることが多い",
        evidence: [],
      },
      {
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
  {
    id: "q10",
    text: "誰かとのやりとりで、引っかかる言い方をされました。その場を離れたあとでは？",
    scene: "やりとりのあと",
    context: "何が正しかったかではなく、そのあとに残る気持ちで選んでください。",
    category: "mental-state",
    evidenceLevel: "modernized",
    sourceIds: ["v95-dosa", "v96"],
    adaptationNote:
      "III.95の upanāha（恨みを保つこと）を、やりとりの後にも相手への反発が残る場面に置換。問題解決のための振り返りや正義感などを怒りとみなさない。",
    answers: [
      {
        id: "fades",
        label:
          "その場では気持ちが動いても、あとまで言い返したい気持ちはあまり残らない",
        evidence: [],
      },
      {
        id: "lingers",
        label:
          "あとになっても相手に言い返したい気持ちが、繰り返し浮かぶことが多い",
        evidence: [
          {
            carita: "dosa",
            strength: 1,
            sourceId: "v95-dosa",
          },
        ],
      },
      {
        id: "skip",
        label: "どれも近くない・場面が浮かばない",
        evidence: [],
      },
    ],
  },
];
