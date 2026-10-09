import type { Lang, ToolPage } from './types';

// Popular girls' names per language, "Roman|Native". The quiz picks one; we show its first letter and
// other names starting the same way. Lists need the native read like everything else.
export const NAMES: Record<Lang, string[]> = {
  en: ['Aanya', 'Aditi', 'Ananya', 'Diya', 'Divya', 'Isha', 'Ishita', 'Kavya', 'Kiara', 'Meera', 'Meher', 'Neha', 'Nandini', 'Pooja', 'Priya', 'Riya', 'Riddhi', 'Sanya', 'Saira', 'Shreya', 'Tanvi', 'Teena', 'Zoya', 'Aleesha', 'Bhavya', 'Charvi', 'Gauri', 'Jiya', 'Kaira', 'Lavanya', 'Maryam', 'Naina', 'Ojasvi', 'Radhika', 'Sneha', 'Trisha', 'Urvi', 'Vanya', 'Yashvi'],
  hi: ['Aanya|आन्या', 'Aditi|अदिति', 'Anjali|अंजलि', 'Bhavna|भावना', 'Chhavi|छवि', 'Divya|दिव्या', 'Gauri|गौरी', 'Isha|ईशा', 'Jyoti|ज्योति', 'Kajal|काजल', 'Kavya|काव्या', 'Khushi|ख़ुशी', 'Mansi|मानसी', 'Megha|मेघा', 'Neha|नेहा', 'Nisha|निशा', 'Pallavi|पल्लवी', 'Pooja|पूजा', 'Priya|प्रिया', 'Radhika|राधिका', 'Riya|रिया', 'Sakshi|साक्षी', 'Shalini|शालिनी', 'Simran|सिमरन', 'Sonam|सोनम', 'Tanu|तनु', 'Tanvi|तन्वी', 'Vandana|वंदना', 'Zoya|ज़ोया'],
  ta: ['Abinaya|அபிநயா', 'Aishwarya|ஐஸ்வர்யா', 'Anitha|அனிதா', 'Bhuvana|புவனா', 'Deepa|தீபா', 'Divya|திவ்யா', 'Gayathri|காயத்ரி', 'Harini|ஹரிணி', 'Indhu|இந்து', 'Janani|ஜனனி', 'Kavya|காவ்யா', 'Keerthana|கீர்த்தனா', 'Lakshmi|லட்சுமி', 'Meena|மீனா', 'Nandini|நந்தினி', 'Nila|நிலா', 'Nithya|நித்யா', 'Pavithra|பவித்ரா', 'Priya|பிரியா', 'Ramya|ரம்யா', 'Revathi|ரேவதி', 'Sandhiya|சந்தியா', 'Swetha|ஸ்வேதா', 'Tamilselvi|தமிழ்செல்வி', 'Uma|உமா', 'Vaishnavi|வைஷ்ணவி', 'Yazhini|யாழினி'],
  te: ['Akhila|అఖిల', 'Anusha|అనూష', 'Bhavani|భవాని', 'Chandana|చందన', 'Deepika|దీపిక', 'Divya|దివ్య', 'Harika|హారిక', 'Keerthi|కీర్తి', 'Lahari|లహరి', 'Lasya|లాస్య', 'Madhuri|మాధురి', 'Mounika|మౌనిక', 'Navya|నవ్య', 'Nikhitha|నిఖిత', 'Pallavi|పల్లవి', 'Pravallika|ప్రవల్లిక', 'Ramya|రమ్య', 'Sahithi|సాహితి', 'Sindhu|సింధు', 'Sravani|శ్రావణి', 'Swathi|స్వాతి', 'Tejaswini|తేజస్విని', 'Vaishnavi|వైష్ణవి', 'Vennela|వెన్నెల', 'Yamini|యామిని'],
  mr: ['Aarya|आर्या', 'Aditi|अदिती', 'Ankita|अंकिता', 'Bhakti|भक्ती', 'Gauri|गौरी', 'Gayatri|गायत्री', 'Ishwari|ईश्वरी', 'Janhavi|जान्हवी', 'Ketaki|केतकी', 'Madhura|मधुरा', 'Manasi|मानसी', 'Mrunal|मृणाल', 'Neha|नेहा', 'Pooja|पूजा', 'Pranali|प्रणाली', 'Rutuja|ऋतुजा', 'Sai|साई', 'Sakshi|साक्षी', 'Sayali|सायली', 'Shruti|श्रुती', 'Snehal|स्नेहल', 'Tejaswini|तेजस्विनी', 'Vaishnavi|वैष्णवी', 'Vrushali|वृषाली'],
  ml: ['Aathira|ആതിര', 'Akhila|അഖില', 'Anjana|അഞ്ജന', 'Anju|അഞ്ജു', 'Aparna|അപർണ', 'Athira|അതിര', 'Devika|ദേവിക', 'Gopika|ഗോപിക', 'Krishna|കൃഷ്ണ', 'Lakshmi|ലക്ഷ്മി', 'Meera|മീര', 'Nayana|നയന', 'Nimisha|നിമിഷ', 'Parvathy|പാർവതി', 'Revathy|രേവതി', 'Reshma|രേഷ്മ', 'Sneha|സ്നേഹ', 'Sreelakshmi|ശ്രീലക്ഷ്മി', 'Swathy|സ്വാതി', 'Thara|താര', 'Varsha|വർഷ', 'Vismaya|വിസ്മയ'],
  gu: ['Aesha|એશા', 'Bansari|બંસરી', 'Bhumi|ભૂમિ', 'Dhara|ધારા', 'Dhruvi|ધ્રુવી', 'Disha|દિશા', 'Foram|ફોરમ', 'Hetal|હેતલ', 'Heer|હીર', 'Jinal|જીનલ', 'Kinjal|કિંજલ', 'Khushi|ખુશી', 'Mansi|માનસી', 'Nidhi|નિધિ', 'Nisha|નિશા', 'Pooja|પૂજા', 'Prachi|પ્રાચી', 'Riddhi|રિદ્ધિ', 'Shruti|શ્રુતિ', 'Sneha|સ્નેહા', 'Tanvi|તન્વી', 'Urvi|ઉર્વી', 'Vidhi|વિધિ'],
};

export const namePages: ToolPage[] = [
  {
    tool: 'name', lang: 'en', slug: 'future-wife-name',
    title: 'Future Wife Name Predictor — First Letter Quiz | Pillar',
    description: 'What will your future wife\'s name be? Take a 30-second quiz and get the first letter of her name. A fun future wife name game.',
    h1: 'Future Wife Name Predictor — What Letter Does Her Name Start With?',
    eyebrow: 'Free · Future wife name quiz · Future girlfriend name',
    intro: 'Who is your future wife — or your future girlfriend? Answer three quick questions and this <strong>future wife name predictor</strong> gives you the first letter of her name, with names that start with it. Just for fun: same answers, same letter.',
    ui: {
      yourName: 'Your name', placeholderName: 'e.g. Arjun', dob: 'Your date of birth', button: 'Find her name',
      q1: 'Your perfect evening?', q1o1: 'A long drive', q1o2: 'Movie at home', q1o3: 'Street food with friends', q1o4: 'A quiet café',
      q2: 'What would she love most about you?', q2o1: 'Your jokes', q2o2: 'Your loyalty', q2o3: 'Your ambition', q2o4: 'Your cooking',
      q3: 'How do you text?', q3o1: 'Long paragraphs', q3o2: 'Voice notes', q3o3: 'Memes only', q3o4: 'One-word replies',
      resultLead: 'Her name starts with', couldBe: 'Maybe:', companionLine: 'Pillar has {c} — an AI girlfriend whose name starts with the same letter.', meet: 'Say hi to {c}',
      shareWa: 'Share on WhatsApp', shareImg: 'Save result image', shareText: 'My future wife\'s name starts with {l} 👀 Try yours:', imgFooter: 'Future wife name',
      faqTitle: 'Future wife name — questions people ask',
    },
    sections: [
      { h2: 'How the future wife name predictor works', html: '<p>Your name, your date of birth and your three answers are turned into a number, and that number picks a name from a list of popular Indian girls\' names. We show you its first letter and a few other names that start the same way. Change an answer and the letter can change; keep them the same and it never does — no random results on retry.</p>' },
      { h2: 'My future wife\'s name first letter — can it be predicted?', html: '<p>Honestly, no. Nobody — no app, quiz or astrologer — can know who you will marry. Some astrology traditions link a name\'s first syllable to a birth star (that is how <a href="/tools/kundli-matching">kundli matching by name</a> works), but that runs the other way: from a name you already know to a star. This quiz is a game to send to friends.</p>' },
      { h2: 'Future wife name by date of birth', html: '<p>Your date of birth is one of the inputs, so "future wife name prediction by date of birth" is part of what this quiz does — but it is mixed with your name and answers, not read from a chart. If you want something astrology-based, try the <a href="/tools/kundli-matching">kundli matching</a> tool with both birth dates instead.</p>' },
      { h2: 'Future girlfriend name quiz', html: '<p>Same quiz, different word — plenty of people search for their future girlfriend\'s name instead of their future wife\'s. The result is a letter and a few names; who she turns out to be is up to you. If your letter matches one of Pillar\'s AI girlfriends, we\'ll introduce you.</p>' },
      { h2: 'Future wife name style: what Indian names are popular now?', html: '<p>The names in this quiz are popular across India today — Aanya, Diya, Kavya, Ishita, Priya, Tanvi, Zoya and more — with separate lists in <a href="/hi/future-wife-name">Hindi</a>, <a href="/ta/future-wife-name">Tamil</a>, <a href="/te/future-wife-name">Telugu</a>, <a href="/mr/future-wife-name">Marathi</a>, <a href="/ml/future-wife-name">Malayalam</a> and <a href="/gu/future-wife-name">Gujarati</a>, so a Tamil quiz gives Tamil names.</p>' },
    ],
    faq: [
      { q: 'How can I find my future wife\'s name?', a: 'No one can actually predict it. This quiz is a fun guess based on your name, date of birth and answers — same answers, same letter.' },
      { q: 'What is my future wife\'s name quiz?', a: 'A three-question quiz that gives the first letter of a name and a few popular Indian names starting with it.' },
      { q: 'Is the future wife name predictor real?', a: 'It is a game. It is consistent, not random, but it does not predict the future.' },
      { q: 'Can astrology predict my future spouse\'s name?', a: 'Astrology links name syllables to birth stars, but it cannot tell you who you will marry. For a compatibility check with someone you know, use kundli matching.' },
      { q: 'Can I take the quiz in my language?', a: 'Yes — there are versions in Hindi, Tamil, Telugu, Marathi, Malayalam and Gujarati with names from each language.' },
    ],
    cta: { text: 'Can\'t wait to meet her? Talk to Priya now', sub: 'Pillar is a free Indian AI girlfriend app for adults (18+). She talks in 13 languages.', button: 'Get Pillar' },
    disclaimer: 'Just for fun — nobody can predict a future wife\'s name.',
  },
];
