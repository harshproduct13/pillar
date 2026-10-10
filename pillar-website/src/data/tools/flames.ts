import type { ToolPage } from './types';

export const flamesPages: ToolPage[] = [
  {
    tool: 'flames', lang: 'en', slug: 'flames-calculator',
    title: 'FLAMES Calculator by Name: Free FLAMES Love Game | Pillar',
    description: 'Free FLAMES calculator: enter two names and see Friends, Lovers, Affection, Marriage, Enemies or Siblings, step by step.',
    h1: 'FLAMES Calculator: the FLAMES Love Game, Worked Out',
    eyebrow: 'Free · FLAMES game · Love calculator',
    intro: 'The <strong>FLAMES calculator</strong> plays the school FLAMES game for you: strike out the letters two names share, count what is left, and land on Friends, Lovers, Affection, Marriage, Enemies or Siblings. Same names, same answer, every time.',
    ui: {
      nameA: 'Your name', nameB: 'Their name', placeholderA: 'e.g. Rahul', placeholderB: 'e.g. Priya', button: 'Play FLAMES',
      rF: 'Friends', rL: 'Lovers', rA: 'Affection', rM: 'Marriage', rE: 'Enemies', rS: 'Siblings',
      rFLine: 'Best friends first: the strongest relationships often start here.', rLLine: 'Lovers! FLAMES says there is a spark.', rALine: 'Affection: a soft spot that runs both ways.',
      rMLine: 'Marriage: the result everyone hopes for.', rELine: 'Enemies, but only on paper. Try full names?', rSLine: 'Siblings: you two look out for each other.',
      sameLetters: 'Every letter cancelled out: nothing left to count. Try full names or add a surname.', howTitle: 'How FLAMES worked this out',
      lettersLeft: '{n} letters left after striking the common ones.', strike: 'Strike', shareWa: 'Share on WhatsApp', shareImg: 'Save result image',
      shareText: '{a} + {b} = {r} on FLAMES 🔥', faqTitle: 'FLAMES calculator: questions people ask',
    },
    sections: [
      { h2: 'What does FLAMES stand for?', html: '<p><strong>F</strong>riends, <strong>L</strong>overs, <strong>A</strong>ffection, <strong>M</strong>arriage, <strong>E</strong>nemies, <strong>S</strong>iblings. The FLAMES game full form is just those six words: each letter is a possible "relationship" between two names. Some schools play it as Friends, Love, Affection, Marriage, Enemy, Sister; the counting is the same.</p>' },
      { h2: 'How to play the FLAMES game on paper', html: '<ol><li>Write both names, one under the other.</li><li>Strike out every letter that appears in both names, one for one. If "a" is in both names twice, strike two of each.</li><li>Count the letters that are left in both names together. Call it <em>n</em>.</li><li>Write F L A M E S. Count <em>n</em> letters along it, going round in a circle, and strike the one you land on.</li><li>Start counting again from the next letter, and keep striking until one letter is left. That is your answer.</li></ol>' },
      { h2: 'FLAMES calculator example: Rahul and Priya', html: '<p>Rahul and Priya share an <strong>r</strong> and an <strong>a</strong>. Strike both: <s>r</s> <s>a</s> h u l and p <s>r</s> i y <s>a</s>. Six letters are left (h, u, l, p, i, y). Counting six round F-L-A-M-E-S strikes S, then F, then A, then L, then E, leaving <strong>M: Marriage</strong>. Type the names above and open "How FLAMES worked this out" to see the same steps for any pair.</p>' },
      { h2: 'FLAMES by name: first name or full name?', html: '<p>Both work, and they can give different answers because the letter count changes. Most people play with first names. Spaces, capitals and punctuation are ignored. The order of the names does not matter: "Rahul + Priya" and "Priya + Rahul" give the same result.</p>' },
      { h2: 'Is the FLAMES calculator real or fake?', html: '<p>It is a game, not a prediction. The result depends only on letters, so it says nothing real about two people, which is exactly why it is fun to play at school, in the canteen or on WhatsApp. What we promise is that it is <em>honest</em>: the same names always give the same answer, and you can see every step.</p>' },
      { h2: 'FLAMES in Tamil, Hindi and other languages', html: '<p>You can type names in English letters or in your own script. In Tamil, Hindi, Telugu and other Indian scripts we strike letters as you see them (a consonant with its vowel sign counts as one letter). There are versions of this page in <a href="/hi/flames-calculator">Hindi</a>, <a href="/ta/flames-calculator">Tamil</a>, <a href="/te/flames-calculator">Telugu</a>, <a href="/mr/flames-calculator">Marathi</a>, <a href="/ml/flames-calculator">Malayalam</a> and <a href="/gu/flames-calculator">Gujarati</a>.</p>' },
    ],
    faq: [
      { q: 'What is the full form of FLAMES?', a: 'Friends, Lovers, Affection, Marriage, Enemies, Siblings.' },
      { q: 'Is the FLAMES calculator real or fake?', a: 'It is a fun game based only on the letters of two names, not a real prediction. Ours is consistent: the same names always give the same answer.' },
      { q: 'How do you calculate FLAMES by hand?', a: 'Strike the common letters, count what is left, then count that number round F-L-A-M-E-S, striking the letter you land on until one is left.' },
      { q: 'Does spelling or a surname change the FLAMES result?', a: 'Yes. A different spelling or an added surname changes the letter count, so the answer can change.' },
      { q: 'What does it mean if all the letters cancel out?', a: 'If two names have exactly the same letters, nothing is left to count. Add a surname or use full names.' },
      { q: 'Is FLAMES the same as a love calculator?', a: 'No. FLAMES gives one of six relationships; a love calculator gives a percentage. Try our <a href="/tools/love-calculator">love calculator</a> too.' },
    ],
    cta: { text: 'Got "Lovers"? Practise the conversation with Priya', sub: 'Pillar is a free Indian AI girlfriend app for adults (18+). She talks in 13 languages.', button: 'Get Pillar' },
    disclaimer: 'Just for fun: FLAMES uses only the letters of the names.',
  },
];
