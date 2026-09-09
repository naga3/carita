import type { ReadingNote } from "@/domain/types";
export const practiceNotes: ReadingNote[] = [
  {
    id: "m14-raga",
    practiceName: "身体の美化を見直す観察",
    title: "身体を、美しいイメージだけで見ない",
    explanation:
      "身体の構成や変化にも目を向け、魅力的だと感じる面だけに心が引かれる見方を見直す、という教えです。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-raga", "reader-body"],
    boundary:
      "「不浄」は人の価値や、清潔にしているかどうかを判定する言葉として使っていません。ここでは用語の入口だけを説明しています。",
  },
  {
    id: "m14-dosa",
    practiceName: "慈悲の瞑想（慈・メッタ）",
    title: "生きものの幸せと無事を願う心を育てる",
    explanation:
      "相手に敵意を向ける代わりに、安らかであってほしいと願う心を育てること。「慈」を日常のことばに近づけると、このように読めます。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-dosa", "reader-metta"],
    example: {
      text: "誰かを思い浮かべて「この人も、穏やかに過ごせますように」と言葉にしてみる、というイメージです。",
      evidenceLevel: "interpretive",
    },
    boundary:
      "この例文は本サイトが作った言い換えで、原典の引用や決まった唱句ではありません。",
  },
  {
    id: "m14-moha",
    practiceName: "教えを学び、質問・対話する",
    title: "わからなさを、一人で抱えず学び合う",
    explanation:
      "教えを学ぶ、わからない点を質問する、話を聞く、対話する、師のそばで学ぶ。瞑想一つに絞るのではなく、理解を支える学びの環境が示されています。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-moha"],
    example: {
      text: "本でわからなかった一節をメモして、学習会で質問し、説明を聞いたあと自分の言葉で確かめるような場面。",
      evidenceLevel: "interpretive",
    },
    boundary:
      "学習会の例は現代の参考です。原典の「師との生活」全体を、学習会への参加と同じ意味にはしていません。",
  },
  {
    id: "m14-vitakka",
    practiceName: "呼吸瞑想（呼吸のマインドフルネス）",
    title: "いま、吸っている息・吐いている息に気づく",
    explanation:
      "呼吸を注意のよりどころにして、吸う息、吐く息を知る修習です。入出息念経には、長い息や短い息を、そのように知ることが記されています。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-vitakka", "reader-breath"],
    example: {
      text: "静かな時間に「いま吸っている」「いま吐いている」と、呼吸が起きていることに目を向けるイメージ。",
      evidenceLevel: "interpretive",
    },
    boundary:
      "これは入口のイメージです。原典にある修習の段階すべてを説明したものではありません。",
  },
  {
    id: "m14-saddha",
    practiceName: "仏・教え・実践への信頼を育てる振り返り",
    title: "信頼のよりどころを、思い起こす",
    explanation:
      "仏陀の覚り、教えの善さ、僧伽の実践、自分が守っている戒。そのよさに心を向け、信頼を育てる対象として示されています。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-saddha"],
    example: {
      text: "一日の終わりに、自分が守ろうとしている戒を振り返り、そのよさを確かめるような場面。",
      evidenceLevel: "interpretive",
    },
  },
  {
    id: "m14-buddhi",
    practiceName: "洞察瞑想（ヴィパッサナー）",
    title: "変わること・頼りきれないこと・自分のものと固定できないことを見る",
    explanation:
      "無常・苦・無我という三つのあり方から、経験を観察することです。ここでの「苦」は、痛みだけでなく、変わるものを確かな満足のよりどころにしきれない面も含めた言い換えです。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-buddhi", "reader-notself"],
    example: {
      text: "さっきの心地よさが少しずつ変わっていく。その変化に気づく場面は、「無常」を理解する身近な入口になります。",
      evidenceLevel: "interpretive",
    },
    boundary:
      "この日常例だけで三つのあり方を理解した、あるいは観の修習を完了したとは扱いません。",
  },
  {
    id: "v121-0",
    practiceName: "身体の構成・死後の変化を観察する瞑想",
    title: "身体の構成や変化を、丁寧に見つめる",
    explanation:
      "十不浄は死後の身体のあり方を十の対象として扱い、身至念は身体に注意を向ける修習です。この論書では、身体の部分を観察する説明が中心になります。",
    evidenceLevel: "modernized",
    sourceIds: ["v121-0", "reader-v105", "reader-body"],
    boundary:
      "身体の感覚を順に感じるボディスキャンとは、観察の対象と目的が異なります。具体的な観想の手順は、ここでは扱いません。",
  },
  {
    id: "v121-1",
    practiceName: "慈悲・喜び・平静を育てる瞑想／色への集中",
    title: "人に向ける心を育てる方法と、色を対象にする方法",
    explanation:
      "四梵住は、幸せを願う「慈」、苦しみに心を寄せる「悲」、他者の喜びを喜ぶ「喜」、偏りに流されない「捨」。四色遍は、青・黄・赤・白を瞑想の対象にする方法です。",
    evidenceLevel: "modernized",
    sourceIds: ["v121-1", "reader-v105", "reader-v9"],
    boundary:
      "「捨」は無関心という意味で紹介していません。二つの方法のまとまりが並記されています。",
  },
  {
    id: "v121-2",
    practiceName: "呼吸瞑想（呼吸のマインドフルネス）",
    title: "呼吸を、注意のよりどころにする",
    explanation:
      "吸う息と吐く息に気づきながら、呼吸に注意を向ける修習です。『清浄道論』では、痴行と尋行の両方に対応する対象として挙げています。",
    evidenceLevel: "modernized",
    sourceIds: ["v121-2", "reader-breath"],
    boundary: "Mahāniddesa の痴行への学びの指導とは、別の文献の対応です。",
  },
  {
    id: "v121-3",
    practiceName: "仏・教え・善い実践などを思い起こす瞑想",
    title: "仏・教え・僧伽や、よい実践を思い起こす",
    explanation:
      "仏・法・僧・戒・捨・天の六つを思い起こす修習です。この「捨」は分かち合うこと、布施に関わる語。四梵住の「捨」とは意味が異なります。",
    evidenceLevel: "modernized",
    sourceIds: ["v121-3", "reader-v105"],
    example: {
      text: "人に分け与えた経験を思い返し、惜しまず分かち合うことのよさに心を向けるような場面。",
      evidenceLevel: "interpretive",
    },
    boundary:
      "この例は「捨随念」を身近に読む補助で、六随念すべてを代表するものではありません。",
  },
  {
    id: "v121-4",
    practiceName: "死・涅槃・身体の要素・食を観察する瞑想",
    title: "生命の終わり、静まり、身体、食べ物を見つめる四つの方法",
    explanation:
      "死念は生命に終わりがあること、寂止随念は涅槃の静まりを思い起こすこと。四界分別は身体を地・水・火・風から見分けること、食厭想は食べ物の厭うべき面を観察することです。",
    evidenceLevel: "modernized",
    sourceIds: ["v121-4", "reader-v8", "reader-v11"],
    boundary:
      "食厭想を減量法、寂止随念を気晴らしとして紹介していません。四つはそれぞれ別の修習です。",
  },
];
export const glossaryNotes: ReadingNote[] = [
  {
    id: "carita",
    title: "carita（気質・傾向）",
    explanation:
      "文献が整理する、ふだんの振る舞いや心に起こりやすい傾向のこと。変わらない「本当の自分」を決めるラベルとしては扱いません。",
    evidenceLevel: "modernized",
    sourceIds: ["v74", "v96"],
  },
  {
    id: "bhavana",
    title: "修習・修行法",
    explanation:
      "心を向けることや、ある心のあり方を育てていく実践。ここでは、呼吸への注意だけでなく、慈の心を育てることや、教えを学ぶ指導も紹介します。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-dosa", "m14-vitakka", "m14-moha"],
  },
  {
    id: "learning-words",
    title: "聞法・対話・師との生活",
    explanation:
      "聞法は仏教の教えを聞くこと。対話は教えについて話し合い、疑問を確かめること。師との生活は、教える人のそばで共に暮らしながら学ぶことです。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-moha"],
  },
  {
    id: "buddhi-name",
    title: "智行の二つの呼び名",
    explanation:
      "Mahāniddesa では ñāṇa、『清浄道論』では buddhi という語が使われます。このサイトでは「智行」として並べて紹介しますが、文献ごとの修行法の対応は分けて表示します。",
    evidenceLevel: "modernized",
    sourceIds: ["m14-buddhi", "v74"],
  },
];
