import type { ToolPage } from './types';

export const lovePages: ToolPage[] = [
  {
    tool: 'love', lang: 'en', slug: 'love-calculator',
    title: 'Love Calculator by Name & Date of Birth: Free | Pillar',
    description: 'Free love calculator: love percentage by name, worked out the paper way, plus an optional date-of-birth match. Just for fun.',
    h1: 'Love Calculator: Love Percentage by Name',
    eyebrow: 'Free · Love test · Love meter',
    intro: 'This <strong>love calculator</strong> gives a love percentage by name using the classic paper method: count the letters L-O-V-E-S in both names and add them down to two digits. Add both dates of birth for a birthday match too.',
    ui: {
      nameA: 'Your name', nameB: 'Your crush\'s name', placeholderA: 'e.g. Amit', placeholderB: 'e.g. Neha', button: 'Calculate love',
      dobToggle: '+ Add dates of birth (optional)', dobA: 'Your date of birth', dobB: 'Their date of birth',
      band0: 'Low on paper, but paper never met you two.', band1: 'A slow start. Good things take time.', band2: 'Halfway there. There is something here.', band3: 'Strong! The numbers like you two.', band4: 'Off the charts. Tell them already.',
      howTitle: 'How the love percentage was worked out', letterMethod: 'Names in Indian scripts: the percentage is worked out from the letters of both names, so the same names always give the same number.',
      birthdayLine: 'Name score {n}% + birthday score {d}%, averaged.', shareWa: 'Share on WhatsApp', shareImg: 'Save result image',
      shareText: '{a} ❤ {b} = {p}% on the love calculator', faqTitle: 'Love calculator: questions people ask',
    },
    sections: [
      { h2: 'How the love calculator works (the paper method)', html: '<p>This is the version people play on paper in school. Write both names together and count how many times each letter of <strong>L-O-V-E-S</strong> appears. That gives five numbers. Add each pair of neighbours to make a new row (if a sum is 10 or more, add its digits), and keep going until two digits are left: that is the love percentage. Open "How the love percentage was worked out" under your result to see every row.</p>' },
      { h2: 'Love calculator example: Amit and Neha', html: '<p>"Amit" + "Neha" has no L, no O, no V, one E and no S: <strong>0 0 0 1 0</strong>. Adding neighbours: 0 0 1 1 → 0 1 2 → 1 3. So Amit and Neha score <strong>13%</strong> on paper, which is why nobody takes the love calculator seriously, and everybody plays it anyway.</p>' },
      { h2: 'Love calculator by date of birth', html: '<p>Open "Add dates of birth" to include a birthday match. Each date is reduced to one number from 1 to 9 by adding its digits (25-12-1999 → 2+5+1+2+1+9+9+9 = 38 → 11 → 2). The closer the two numbers, the higher the birthday score, and the final result is the average of the name score and the birthday score.</p>' },
      { h2: 'Is the love calculator accurate? Can you get 100%?', html: '<p>No calculator can measure love; this one counts letters. It is <em>consistent</em>, though: the same two names always give the same percentage, in either order. A 100% is possible on paper only when the last row adds up that way, which is rare; most real couples land between 20% and 90%.</p>' },
      { h2: 'True love calculator, love meter, love test: what is the difference?', html: '<p>They are names for the same game. A "love meter" or "love test" shows the result as a meter; a "true love calculator" or "soulmate calculator" usually adds a date of birth. Ours does both, and shows the working instead of a random number.</p>' },
      { h2: 'Love calculator in your language', html: '<p>Type names in English letters for the paper method, or in your own script. Pages in <a href="/hi/love-calculator">Hindi</a>, <a href="/ta/love-calculator">Tamil</a>, <a href="/te/love-calculator">Telugu</a>, <a href="/mr/love-calculator">Marathi</a>, <a href="/ml/love-calculator">Malayalam</a> and <a href="/gu/love-calculator">Gujarati</a>.</p>' },
    ],
    faq: [
      { q: 'Can you get 100% on the love calculator?', a: 'Yes, but rarely: the last two digits have to come out as 1 and 0 after adding. Most pairs score between 20% and 90%.' },
      { q: 'Is the love calculator real?', a: 'It is a game based on the letters of two names. It is consistent (same names, same answer) but it does not predict anything.' },
      { q: 'How do you calculate love percentage on paper?', a: 'Count L, O, V, E and S in both names together, then add neighbouring numbers row by row until two digits are left.' },
      { q: 'Does the order of the names matter?', a: 'No. "Amit + Neha" and "Neha + Amit" give the same result.' },
      { q: 'Can I use a love calculator by date of birth?', a: 'Yes. Add both dates of birth and the result averages the name score with a birthday score.' },
      { q: 'What is the difference between FLAMES and a love calculator?', a: 'FLAMES gives one of six relationships; the love calculator gives a percentage. Try the <a href="/tools/flames-calculator">FLAMES calculator</a> as well.' },
    ],
    cta: { text: 'Whatever the percentage, Priya always replies', sub: 'Pillar is a free Indian AI girlfriend app for adults (18+). She talks in 13 languages.', button: 'Get Pillar' },
    disclaimer: 'Just for fun: the love calculator uses only names and dates.',
  },
];
