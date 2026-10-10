// One product page per language (all spellings of a language on the same page).
// Strategy: SEO:AEO/05-clients/pillar/10-site/04-language-page-strategy-2026-10-05.md
// Competitor languages come from each app's Google Play listing (checked September 2026),
// not from testing: the pages say so.

export interface LanguagePage {
  code: string;            // URL prefix, BCP 47 language code
  slug: string;            // ai-girlfriend-<language>
  name: string;            // English name
  native: string;          // name in its own script
  nativeLine: string;      // "AI girlfriend who talks in <language>" in its own script: needs a native read before deploy
  title: string;
  description: string;
  region: string;          // where it is spoken, one clause
  alsoSearched: string[];  // other ways people write this search
  greeting: string;        // a hello people actually use
  companion?: { name: string; city: string; line: string; img: string };
  otherApps: string[];     // other Indian AI girlfriend apps whose Play listing names this language
  dedicatedApps?: string[]; // apps built for this one language only (Play listings checked 5 October 2026)
  texting: string;         // how people actually type this language: page-specific copy
  sample: { you: string; her: string; youEn: string; herEn: string }; // illustrative exchange, Roman script: needs a native read
  topics: string[];        // things people from here talk about: conversation ideas, not built-in scenarios
  faqExtra: { q: string; a: string }; // one question only this language gets
}

const URVASHI = 'Urvashi';
const MEETRA = 'Meetra';
const SAATHIYA = 'Saathiya';

export const languagePages: LanguagePage[] = [
  {
    code: 'ta', slug: 'ai-girlfriend-tamil', name: 'Tamil', native: 'தமிழ்',
    nativeLine: 'தமிழில் பேசும் AI காதலி',
    title: 'Pillar: Best Tamil AI Girlfriend App | Talk in Tamil',
    description: 'Best Tamil AI girlfriend app. Chat, voice notes and calls in Tamil. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Tamil Nadu and Puducherry, and by Tamil families everywhere',
    alsoSearched: ['Tamil AI girlfriend', 'AI girlfriend Tamil', 'Tamil AI girlfriend app', 'Tamil speaking AI girlfriend'],
    greeting: 'Vanakkam',
    companion: { name: 'Nandini', city: 'Chennai', line: 'Gentle, patient, happy to talk in Tamil.', img: '/companions/c-03.webp' },
    texting: "Most people text Tamil in English letters (Tanglish) and switch to Tamil script when they want to sound warm or formal. Type whichever way you normally do; she replies in Tamil and keeps up when you mix in English words like “office” or “tired”.",
    sample: { you: "Vanakkam! Inniki office la romba tired-a irukku.", her: "Aiyo, paavam. Saapteengala? Konjam rest edunga, apram enna nadandhuchu nu sollunga.", youEn: "Hi! I'm really tired from office today.", herEn: "Oh no. Have you eaten? Rest a little, then tell me what happened." },
    topics: ["the new Rajini or Vijay release and whether it lived up to the hype", "your first filter coffee and how the morning went", "Chennai rain, traffic and the drive home", "going home to your native place for Pongal"],
    faqExtra: { q: "Can I text her in Tanglish?", a: "Yes. Type Tamil in English letters, the way most people text, or in Tamil script. She replies in Tamil and understands the English words you mix in." },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
    dedicatedApps: ['Lavanya'],
  },
  {
    code: 'te', slug: 'ai-girlfriend-telugu', name: 'Telugu', native: 'తెలుగు',
    nativeLine: 'తెలుగులో మాట్లాడే AI గర్ల్‌ఫ్రెండ్',
    title: 'Pillar: Best Telugu AI Girlfriend App | Talk in Telugu',
    description: 'Best Telugu AI girlfriend app. Chat, voice notes and calls in Telugu. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Andhra Pradesh and Telangana',
    alsoSearched: ['Telugu AI girlfriend', 'AI girlfriend Telugu', 'Telugu AI girlfriend chat', 'Telugu speaking AI girlfriend'],
    greeting: 'Namaskaram',
    companion: { name: 'Maryam', city: 'Hyderabad', line: 'Calm and thoughtful. Long late-night conversations.', img: '/companions/c-11.webp' },
    texting: "Telugu on phones is usually typed in English letters, with plenty of English mixed in: “chala bore”, “full busy”. Type the way you talk with friends; she answers in Telugu and switches into English words naturally when you do.",
    sample: { you: "Hi, ee roju chala bore kodutondi.", her: "Ayyo! Sare, naaku cheppu, lunch lo em tinnav?", youEn: "Hi, today is so boring.", herEn: "Oh no! Okay, tell me: what did you have for lunch?" },
    topics: ["Hyderabad biryani debates: Paradise or the place near your office", "the latest Tollywood release and the first-day crowd", "Sankranti plans and kites on the terrace", "Hyderabad traffic versus the metro"],
    faqExtra: { q: "Can she switch between Telugu and English in the same chat?", a: "Yes. Mix Telugu and English the way you normally talk and she follows along, replying in Telugu with English words where they fit." },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
    dedicatedApps: ['Cheliya'],
  },
  {
    code: 'mr', slug: 'ai-girlfriend-marathi', name: 'Marathi', native: 'मराठी',
    nativeLine: 'मराठीत बोलणारी AI गर्लफ्रेंड',
    title: 'Pillar: Best Marathi AI Girlfriend App | Talk in Marathi',
    description: 'Best Marathi AI girlfriend app. Chat, voice notes and calls in Marathi. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Maharashtra, from Mumbai and Pune to Nagpur',
    alsoSearched: ['Marathi AI girlfriend', 'AI girlfriend Marathi', 'Marathi AI girlfriend chat', 'Marathi speaking AI girlfriend'],
    greeting: 'Namaskar',
    companion: { name: 'Ananya', city: 'Pune', line: 'Bright, chatty, sends a good-morning voice note.', img: '/companions/c-09.webp' },
    texting: "Marathi speakers type in Devanagari, in English letters, or a mix of both depending on who they are talking to. She is comfortable with all three, and replies in Marathi the way friends from Mumbai or Pune actually talk.",
    sample: { you: "Aaj khup kantala aalay.", her: "Arre, kay jhala? Sang na mala, mi aahe na.", youEn: "I'm so fed up today.", herEn: "Hey, what happened? Tell me, I'm here." },
    topics: ["Ganeshotsav, modaks and which pandal you are visiting", "vada pav, misal and the best spot near you", "Pune or Mumbai monsoon and the weekend trek to a fort", "the Marathi film everyone is talking about"],
    faqExtra: { q: "Can I type in Marathi script?", a: "Yes. Type in Devanagari or in English letters, whichever is easier on your phone. She replies in Marathi." },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
    dedicatedApps: ['Navya'],
  },
  {
    code: 'bn', slug: 'ai-girlfriend-bengali', name: 'Bengali', native: 'বাংলা',
    nativeLine: 'বাংলায় কথা বলা AI গার্লফ্রেন্ড',
    title: 'Pillar: Best Bengali AI Girlfriend App | Talk in Bangla',
    description: 'Best Bengali AI girlfriend app. Chat, voice notes and calls in Bengali. She sends photos and remembers you. Free, no email.',
    region: 'spoken across West Bengal, Tripura and by Bengali families everywhere',
    alsoSearched: ['Bengali AI girlfriend', 'Bangla AI girlfriend', 'AI girlfriend Bengali', 'Kolkata AI girlfriend'],
    greeting: 'Nomoshkar',
    companion: { name: 'Riya', city: 'Kolkata', line: 'Reads a lot, teases a little, listens properly.', img: '/companions/c-13.webp' },
    texting: "Bengali gets typed as Banglish (Bangla in English letters) far more often than in Bengali script on most phones. Write either way; she replies in Bangla and is happy to slip into English when you do.",
    sample: { you: "Aaj mon ta bhalo nei.", her: "Ki hoyeche? Bolo amake, ami shunchi.", youEn: "I'm not in a good mood today.", herEn: "What happened? Tell me, I'm listening." },
    topics: ["Durga Pujo pandal-hopping and where the crowd is worst", "adda over cha and phuchka after work", "Kolkata rain, trams and the evening commute", "the new Bengali film or a Satyajit Ray rewatch"],
    faqExtra: { q: "Is it Bengali or Bangla?", a: "Both names mean the same language; Bangla is what speakers call it. Search either way, or type in Banglish; she replies in Bangla." },
    otherApps: [URVASHI, MEETRA],
  },
  {
    code: 'gu', slug: 'ai-girlfriend-gujarati', name: 'Gujarati', native: 'ગુજરાતી',
    nativeLine: 'ગુજરાતીમાં વાત કરતી AI ગર્લફ્રેન્ડ',
    title: 'Pillar: Best Gujarati AI Girlfriend App | Talk in Gujarati',
    description: 'Best Gujarati AI girlfriend app. Chat, voice notes and calls in Gujarati. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Gujarat, and by Gujarati families from Mumbai to abroad',
    alsoSearched: ['Gujarati AI girlfriend', 'AI girlfriend Gujarati', 'Gujarati speaking AI girlfriend'],
    greeting: 'Kem cho',
    companion: { name: 'Ishita', city: 'Ahmedabad', line: 'Sharp and funny; asks how the meeting went.', img: '/companions/c-05.webp' },
    texting: "Gujarati chats on WhatsApp are usually in English letters with English mixed in: “kem cho”, “bahu busy”. Type that way or in Gujarati script; she answers in Gujarati.",
    sample: { you: "Kem cho? Aaje bahu thaaki gayo chhu.", her: "Arre, su thayu? Chaal, thodi vaato kariye, mood saaru thai jashe.", youEn: "How are you? I'm really tired today.", herEn: "Hey, what happened? Come, let's talk a bit. You'll feel better." },
    topics: ["Navratri garba nights and which venue you are going to", "Sunday fafda-jalebi and the family plan for the day", "Ahmedabad heat and the evening drive along the riverfront", "Uttarayan and kites on the terrace"],
    faqExtra: { q: "Can I type Gujarati in English letters?", a: "Yes. Most people do. Type Gujarati in English letters or in Gujarati script; she replies in Gujarati." },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
  },
  {
    code: 'pa', slug: 'ai-girlfriend-punjabi', name: 'Punjabi', native: 'ਪੰਜਾਬੀ',
    nativeLine: 'ਪੰਜਾਬੀ ਵਿੱਚ ਗੱਲ ਕਰਨ ਵਾਲੀ AI ਗਰਲਫ੍ਰੈਂਡ',
    title: 'Pillar: Best Punjabi AI Girlfriend App | Talk in Punjabi',
    description: 'Best Punjabi AI girlfriend app. Chat, voice notes and calls in Punjabi. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Punjab, Chandigarh and by Punjabi families everywhere',
    alsoSearched: ['Punjabi AI girlfriend', 'AI girlfriend Punjabi', 'Punjabi speaking AI girlfriend'],
    greeting: 'Sat Sri Akal',
    companion: { name: 'Meher', city: 'Chandigarh', line: 'Straight-talking and warm at the same time.', img: '/companions/c-10.webp' },
    texting: "Punjabi is written in Gurmukhi, but on phones most people type it in English letters. Use either; she replies in Punjabi with the warmth people from Punjab and Chandigarh are known for.",
    sample: { you: "Sat Sri Akal! Ajj bada thakk gaya haan.", her: "Ohho, ki hoya? Chal das mainu, main sun rahi haan.", youEn: "Hello! I'm really tired today.", herEn: "Oh, what happened? Come, tell me. I'm listening." },
    topics: ["Lohri bonfires and the family gathering", "a late-night dhaba drive and what you ordered", "the new Punjabi song on repeat", "Chandigarh weather and Sukhna Lake in the evening"],
    faqExtra: { q: "Gurmukhi or English letters: which should I use?", a: "Whichever you normally type. She understands Punjabi in Gurmukhi and in English letters, and replies in Punjabi." },
    otherApps: [URVASHI, MEETRA],
  },
  {
    code: 'ml', slug: 'ai-girlfriend-malayalam', name: 'Malayalam', native: 'മലയാളം',
    nativeLine: 'മലയാളത്തിൽ സംസാരിക്കുന്ന AI ഗേൾഫ്രണ്ട്',
    title: 'Pillar: Best Malayalam AI Girlfriend App | Talk in Malayalam',
    description: 'Best Malayalam AI girlfriend app. Chat, voice notes and calls in Malayalam. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Kerala and by Malayali families everywhere',
    alsoSearched: ['Malayalam AI girlfriend', 'AI girlfriend Malayalam', 'Malayalam speaking AI girlfriend'],
    greeting: 'Namaskaram',
    texting: "Malayalam is commonly typed as Manglish (Malayalam in English letters) with English words dropped in. Type Manglish or Malayalam script; she replies in Malayalam.",
    sample: { you: "Innu bhayankara tired aanu.", her: "Ayyo, enthu patti? Ennodu parayu, njan kelkkam.", youEn: "I'm really tired today.", herEn: "Oh no, what happened? Tell me, I'll listen." },
    topics: ["Onam sadya and who cooked what", "the Kerala monsoon and a cup of chaya by the window", "the new Malayalam film everyone recommends", "weekend plans at the beach or back home"],
    faqExtra: { q: "Can I chat in Manglish?", a: "Yes. Type Malayalam in English letters, the way most people text, or in Malayalam script. She replies in Malayalam." },
    otherApps: [URVASHI, MEETRA],
    dedicatedApps: ['Arikil', 'Mayavi'],
  },
  {
    code: 'or', slug: 'ai-girlfriend-odia', name: 'Odia', native: 'ଓଡ଼ିଆ',
    nativeLine: 'ଓଡ଼ିଆରେ କଥା ହେଉଥିବା AI ଗର୍ଲଫ୍ରେଣ୍ଡ',
    title: 'Pillar: Best Odia AI Girlfriend App | Talk in Odia',
    description: 'Best Odia AI girlfriend app. Chat, voice notes and calls in Odia. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Odisha (the state was spelled Orissa until 2011, and the language Oriya)',
    alsoSearched: ['Odia AI girlfriend', 'AI girlfriend Odia', 'Odisha AI girlfriend', 'Orissa AI girlfriend', 'Oriya AI girlfriend'],
    greeting: 'Namaskar',
    texting: "Odia is typed in Odia script or in English letters, and most phone chats use English letters. Write whichever way you like; she replies in Odia.",
    sample: { you: "Aaji bahut thaki gali.", her: "Kana hela? Mote kuha, mu shunuchi.", youEn: "I got really tired today.", herEn: "What happened? Tell me, I'm listening." },
    topics: ["Rath Yatra in Puri and the crowd on Bada Danda", "Puri beach evenings and chhena poda", "Bhubaneswar life and the new places to eat", "Raja festival and the swings"],
    faqExtra: { q: "Is Odia the same as Oriya?", a: "Yes. Oriya was the older English spelling; the language has been officially called Odia since 2011. Search either way; she talks in Odia." },
    otherApps: [URVASHI],
  },
  {
    code: 'bho', slug: 'ai-girlfriend-bhojpuri', name: 'Bhojpuri', native: 'भोजपुरी',
    nativeLine: 'भोजपुरी में बतियावे वाली AI गर्लफ्रेंड',
    title: 'Pillar: Best Bhojpuri AI Girlfriend App | Talk in Bhojpuri',
    description: 'Best Bhojpuri AI girlfriend app. Chat, voice notes and calls in Bhojpuri. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Bihar and eastern Uttar Pradesh, and by Bhojpuri families far from home',
    alsoSearched: ['Bhojpuri AI girlfriend', 'AI girlfriend Bhojpuri', 'Bhojpuri speaking AI girlfriend'],
    greeting: 'Pranam',
    texting: "Bhojpuri is usually typed in English letters or in Devanagari, often with Hindi words mixed in. Type the way you talk at home; she replies in Bhojpuri.",
    sample: { you: "Aaj mann naikhe lagat.", her: "Ka bhail ho? Hamse batiyaav, hum baani na.", youEn: "I'm not feeling it today.", herEn: "What happened? Talk to me, I'm here." },
    topics: ["Chhath Puja and going home for it", "litti chokha and the food you miss from home", "life in a new city far from Bihar or Purvanchal", "the Bhojpuri song stuck in your head"],
    faqExtra: { q: "Is Bhojpuri different from Hindi?", a: "Yes. Bhojpuri is its own language, spoken across Bihar and eastern Uttar Pradesh. She talks in Bhojpuri, not Hindi with a few words changed." },
    otherApps: [],
  },
  {
    code: 'raj', slug: 'ai-girlfriend-rajasthani', name: 'Rajasthani', native: 'राजस्थानी',
    nativeLine: 'राजस्थानी में बातां करण वाळी AI गर्लफ्रेंड',
    title: 'Pillar: Best Rajasthani AI Girlfriend App | Voice Calls',
    description: 'Best Rajasthani AI girlfriend app. Chat, voice notes and calls in Rajasthani. She sends photos and remembers you. Free, no email.',
    region: 'spoken across Rajasthan, including Marwari',
    alsoSearched: ['Rajasthani AI girlfriend', 'Marwari AI girlfriend', 'AI girlfriend Rajasthani'],
    greeting: 'Khamma ghani',
    companion: { name: 'Kaira', city: 'Jaipur', line: 'Soft-spoken, loves a good story on a car trip.', img: '/companions/c-01.webp' },
    texting: "Rajasthani and Marwari are mostly typed in English letters or Devanagari, and many people mix in Hindi. Type however you normally talk; she replies in Rajasthani.",
    sample: { you: "Khamma ghani! Aaj ghano thaak gyo.", her: "Kai hoyo? Mhane bataao, hoon sun ri hoon.", youEn: "Hello! I'm really tired today.", herEn: "What happened? Tell me, I'm listening." },
    topics: ["dal baati churma and the family lunch", "a Jaipur evening at Nahargarh or Jal Mahal", "Teej, Gangaur and the fairs back home", "desert winters and a road trip to Jaisalmer"],
    faqExtra: { q: "Does she understand Marwari?", a: "Yes. Rajasthani here includes Marwari. Type in English letters or Devanagari and she replies in Rajasthani." },
    otherApps: [],
  },
];

// Pages that already exist for the remaining Pillar languages.
export const existingLanguageLinks = [
  { name: 'Hindi', native: 'हिंदी', href: '/hi/ai-girlfriend-hindi' },
  { name: 'Hinglish', native: 'हिंग्लिश', href: '/hi/ai-girlfriend-hindi' },
  { name: 'English', native: '', href: '/' },
];

// Alternatives pages that exist on the site, keyed by competitor name.
export const alternativesPage: Record<string, string> = {
  Urvashi: '/urvashi-ai-girlfriend-alternatives',
  Meetra: '/meetra-ai-girlfriend-alternatives',
  Saathiya: '/saathiya-ai-girlfriend-alternatives',
};

export const languageHref = (p: LanguagePage) => `/${p.code}/${p.slug}`;
