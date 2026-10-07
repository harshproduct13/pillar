// One product page per language (all spellings of a language on the same page).
// Strategy: SEO:AEO/05-clients/pillar/10-site/04-language-page-strategy-2026-10-05.md
// Competitor languages come from each app's Google Play listing (checked September 2026),
// not from testing — the pages say so.

export interface LanguagePage {
  code: string;            // URL prefix, BCP 47 language code
  slug: string;            // ai-girlfriend-<language>
  name: string;            // English name
  native: string;          // name in its own script
  nativeLine: string;      // "AI girlfriend who talks in <language>" in its own script — needs a native read before deploy
  title: string;
  description: string;
  region: string;          // where it is spoken, one clause
  alsoSearched: string[];  // other ways people write this search
  greeting: string;        // a hello people actually use
  companion?: { name: string; city: string; line: string; img: string };
  otherApps: string[];     // other Indian AI girlfriend apps whose Play listing names this language
  dedicatedApps?: string[]; // apps built for this one language only (Play listings checked 5 October 2026)
}

const URVASHI = 'Urvashi';
const MEETRA = 'Meetra';
const SAATHIYA = 'Saathiya';

export const languagePages: LanguagePage[] = [
  {
    code: 'ta', slug: 'ai-girlfriend-tamil', name: 'Tamil', native: 'தமிழ்',
    nativeLine: 'தமிழில் பேசும் AI காதலி',
    title: 'Pillar: Best Tamil AI Girlfriend App — Talk in Tamil',
    description: 'Best Tamil AI girlfriend app. Chat, voice notes and calls in Tamil — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Tamil Nadu and Puducherry, and by Tamil families everywhere',
    alsoSearched: ['Tamil AI girlfriend', 'AI girlfriend Tamil', 'Tamil AI girlfriend app', 'Tamil speaking AI girlfriend'],
    greeting: 'Vanakkam',
    companion: { name: 'Nandini', city: 'Chennai', line: 'Gentle, patient, happy to talk in Tamil.', img: '/companions/c-03.webp' },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
    dedicatedApps: ['Lavanya'],
  },
  {
    code: 'te', slug: 'ai-girlfriend-telugu', name: 'Telugu', native: 'తెలుగు',
    nativeLine: 'తెలుగులో మాట్లాడే AI గర్ల్‌ఫ్రెండ్',
    title: 'Pillar: Best Telugu AI Girlfriend App — Talk in Telugu',
    description: 'Best Telugu AI girlfriend app. Chat, voice notes and calls in Telugu — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Andhra Pradesh and Telangana',
    alsoSearched: ['Telugu AI girlfriend', 'AI girlfriend Telugu', 'Telugu AI girlfriend chat', 'Telugu speaking AI girlfriend'],
    greeting: 'Namaskaram',
    companion: { name: 'Maryam', city: 'Hyderabad', line: 'Calm and thoughtful. Long late-night conversations.', img: '/companions/c-11.webp' },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
    dedicatedApps: ['Cheliya'],
  },
  {
    code: 'mr', slug: 'ai-girlfriend-marathi', name: 'Marathi', native: 'मराठी',
    nativeLine: 'मराठीत बोलणारी AI गर्लफ्रेंड',
    title: 'Pillar: Best Marathi AI Girlfriend App — Talk in Marathi',
    description: 'Best Marathi AI girlfriend app. Chat, voice notes and calls in Marathi — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Maharashtra, from Mumbai and Pune to Nagpur',
    alsoSearched: ['Marathi AI girlfriend', 'AI girlfriend Marathi', 'Marathi AI girlfriend chat', 'Marathi speaking AI girlfriend'],
    greeting: 'Namaskar',
    companion: { name: 'Ananya', city: 'Pune', line: 'Bright, chatty, sends a good-morning voice note.', img: '/companions/c-09.webp' },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
    dedicatedApps: ['Navya'],
  },
  {
    code: 'bn', slug: 'ai-girlfriend-bengali', name: 'Bengali', native: 'বাংলা',
    nativeLine: 'বাংলায় কথা বলা AI গার্লফ্রেন্ড',
    title: 'Pillar: Best Bengali AI Girlfriend App — Talk in Bangla',
    description: 'Best Bengali AI girlfriend app. Chat, voice notes and calls in Bengali — she sends photos and remembers you. Free, no email.',
    region: 'spoken across West Bengal, Tripura and by Bengali families everywhere',
    alsoSearched: ['Bengali AI girlfriend', 'Bangla AI girlfriend', 'AI girlfriend Bengali', 'Kolkata AI girlfriend'],
    greeting: 'Nomoshkar',
    companion: { name: 'Riya', city: 'Kolkata', line: 'Reads a lot, teases a little, listens properly.', img: '/companions/c-13.webp' },
    otherApps: [URVASHI, MEETRA],
  },
  {
    code: 'gu', slug: 'ai-girlfriend-gujarati', name: 'Gujarati', native: 'ગુજરાતી',
    nativeLine: 'ગુજરાતીમાં વાત કરતી AI ગર્લફ્રેન્ડ',
    title: 'Pillar: Best Gujarati AI Girlfriend App — Talk in Gujarati',
    description: 'Best Gujarati AI girlfriend app. Chat, voice notes and calls in Gujarati — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Gujarat, and by Gujarati families from Mumbai to abroad',
    alsoSearched: ['Gujarati AI girlfriend', 'AI girlfriend Gujarati', 'Gujarati speaking AI girlfriend'],
    greeting: 'Kem cho',
    companion: { name: 'Ishita', city: 'Ahmedabad', line: 'Sharp and funny; asks how the meeting went.', img: '/companions/c-05.webp' },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
  },
  {
    code: 'pa', slug: 'ai-girlfriend-punjabi', name: 'Punjabi', native: 'ਪੰਜਾਬੀ',
    nativeLine: 'ਪੰਜਾਬੀ ਵਿੱਚ ਗੱਲ ਕਰਨ ਵਾਲੀ AI ਗਰਲਫ੍ਰੈਂਡ',
    title: 'Pillar: Best Punjabi AI Girlfriend App — Talk in Punjabi',
    description: 'Best Punjabi AI girlfriend app. Chat, voice notes and calls in Punjabi — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Punjab, Chandigarh and by Punjabi families everywhere',
    alsoSearched: ['Punjabi AI girlfriend', 'AI girlfriend Punjabi', 'Punjabi speaking AI girlfriend'],
    greeting: 'Sat Sri Akal',
    companion: { name: 'Meher', city: 'Chandigarh', line: 'Straight-talking and warm at the same time.', img: '/companions/c-10.webp' },
    otherApps: [URVASHI, MEETRA],
  },
  {
    code: 'ml', slug: 'ai-girlfriend-malayalam', name: 'Malayalam', native: 'മലയാളം',
    nativeLine: 'മലയാളത്തിൽ സംസാരിക്കുന്ന AI ഗേൾഫ്രണ്ട്',
    title: 'Pillar: Best Malayalam AI Girlfriend App — Talk in Malayalam',
    description: 'Best Malayalam AI girlfriend app. Chat, voice notes and calls in Malayalam — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Kerala and by Malayali families everywhere',
    alsoSearched: ['Malayalam AI girlfriend', 'AI girlfriend Malayalam', 'Malayalam speaking AI girlfriend'],
    greeting: 'Namaskaram',
    otherApps: [URVASHI, MEETRA],
    dedicatedApps: ['Arikil', 'Mayavi'],
  },
  {
    code: 'or', slug: 'ai-girlfriend-odia', name: 'Odia', native: 'ଓଡ଼ିଆ',
    nativeLine: 'ଓଡ଼ିଆରେ କଥା ହେଉଥିବା AI ଗର୍ଲଫ୍ରେଣ୍ଡ',
    title: 'Pillar: Best Odia AI Girlfriend App — Talk in Odia',
    description: 'Best Odia AI girlfriend app. Chat, voice notes and calls in Odia — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Odisha (the state was spelled Orissa until 2011, and the language Oriya)',
    alsoSearched: ['Odia AI girlfriend', 'AI girlfriend Odia', 'Odisha AI girlfriend', 'Orissa AI girlfriend', 'Oriya AI girlfriend'],
    greeting: 'Namaskar',
    otherApps: [URVASHI],
  },
  {
    code: 'bho', slug: 'ai-girlfriend-bhojpuri', name: 'Bhojpuri', native: 'भोजपुरी',
    nativeLine: 'भोजपुरी में बतियावे वाली AI गर्लफ्रेंड',
    title: 'Pillar: Best Bhojpuri AI Girlfriend App — Talk in Bhojpuri',
    description: 'Best Bhojpuri AI girlfriend app. Chat, voice notes and calls in Bhojpuri — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Bihar and eastern Uttar Pradesh, and by Bhojpuri families far from home',
    alsoSearched: ['Bhojpuri AI girlfriend', 'AI girlfriend Bhojpuri', 'Bhojpuri speaking AI girlfriend'],
    greeting: 'Pranam',
    otherApps: [],
  },
  {
    code: 'raj', slug: 'ai-girlfriend-rajasthani', name: 'Rajasthani', native: 'राजस्थानी',
    nativeLine: 'राजस्थानी में बातां करण वाळी AI गर्लफ्रेंड',
    title: 'Pillar: Best Rajasthani AI Girlfriend App — Voice Calls',
    description: 'Best Rajasthani AI girlfriend app. Chat, voice notes and calls in Rajasthani — she sends photos and remembers you. Free, no email.',
    region: 'spoken across Rajasthan, including Marwari',
    alsoSearched: ['Rajasthani AI girlfriend', 'Marwari AI girlfriend', 'AI girlfriend Rajasthani'],
    greeting: 'Khamma ghani',
    companion: { name: 'Kaira', city: 'Jaipur', line: 'Soft-spoken, loves a good story on a car trip.', img: '/companions/c-01.webp' },
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
