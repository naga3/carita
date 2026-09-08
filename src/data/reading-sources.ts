import type { Source } from "@/domain/types";
/** These sources explain terms; they do not add any temperament mappings. */
export const readingSources: Source[] = [
  {
    id: "reader-notself",
    work: "Anattalakkhaṇa Sutta（無我相経）",
    location: "SN 22.59 · 五蘊の無常・苦・無我",
    traditionLevel: "canonical",
    japaneseSummary:
      "変わるものを、これは私のもの、これは私、これは私の自己と見ることの適否を問い、身体・感受などの五蘊を観察する。無常・苦・無我の用語解説に参照。",
    externalUrl:
      "https://www.accesstoinsight.org/tipitaka/sn/sn22/sn22.059.nymo.html",
  },
  {
    id: "reader-v9",
    work: "Visuddhimagga（清浄道論）",
    location: "IX.92–96 · 四梵住の意味と特質",
    traditionLevel: "commentarial",
    japaneseSummary:
      "慈は安楽を願うこと、悲は苦しみを和らげること、喜は他者の成功を喜ぶこと、捨は生きものに対する中立性を育てることとして説明される。用語の意訳を確認する資料。",
    externalUrl: "https://edhamma.github.io/vism/sphinx/build/html/ch-09.html",
  },

  {
    id: "reader-breath",
    work: "Ānāpānasati Sutta（入出息念経）",
    location: "MN 118 · 入出息念の最初の段階",
    traditionLevel: "canonical",
    japaneseSummary:
      "息が長いとき・短いときに、それを知りながら息を吸い、吐くと述べる。用語解説の参照であり、六気質との対応をこの経から導いてはいない。",
    externalUrl: "https://www.accesstoinsight.org/tipitaka/mn/mn.118.than.html",
  },
  {
    id: "reader-metta",
    work: "Karaṇīyametta Sutta（慈経）",
    location: "Khuddakapāṭha 9 · 生きものの安楽を願う偈",
    traditionLevel: "canonical",
    japaneseSummary:
      "さまざまな生きものすべての安楽を願い、敵意のない心を広げると述べる。慈という語の解説に用い、気質判定には使わない。",
    externalUrl:
      "https://www.accesstoinsight.org/tipitaka/kn/khp/khp.1-9x.piya.html",
  },
  {
    id: "reader-body",
    work: "Satipaṭṭhāna Sutta（念処経）",
    location: "MN 10 · 身体の部分・四要素・墓地での観察",
    traditionLevel: "canonical",
    japaneseSummary:
      "身体の構成部分、地・水・火・風、死後の身体の変化を観察する記述。身体の観察という用語を理解する補助資料で、気質への割当の根拠ではない。",
    externalUrl: "https://www.accesstoinsight.org/tipitaka/mn/mn.010.than.html",
  },
  {
    id: "reader-v105",
    work: "Visuddhimagga（清浄道論）",
    location: "III.105 · 四十の瞑想対象の列挙",
    traditionLevel: "commentarial",
    japaneseSummary:
      "不浄、随念、梵住、遍などを列挙する。四梵住は慈・悲・喜・捨、四色遍は青・黄・赤・白。名称の読み解きに参照する。",
    externalUrl: "https://edhamma.github.io/vism/sphinx/build/html/ch-03.html",
  },
  {
    id: "reader-v8",
    work: "Visuddhimagga（清浄道論）",
    location: "VIII.1–6,245 · 死念・寂止随念",
    traditionLevel: "commentarial",
    japaneseSummary:
      "死念は生命の終わりを念じること。寂止随念は苦の静まりとしての涅槃の特質を思い起こすこと。用語解説として参照する。",
    externalUrl: "https://edhamma.github.io/vism/sphinx/build/html/ch-08.html",
  },
  {
    id: "reader-v11",
    work: "Visuddhimagga（清浄道論）",
    location: "XI.1–26,27–28 · 食厭想・四界分別",
    traditionLevel: "commentarial",
    japaneseSummary:
      "食べ物の厭うべき面を観察する修習と、身体を地・水・火・風という要素から見分ける修習を説明する。用語解説として参照する。",
    externalUrl: "https://edhamma.github.io/vism/sphinx/build/html/ch-11.html",
  },
];
