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
}

const URVASHI = 'Urvashi';
const MEETRA = 'Meetra';
const SAATHIYA = 'Saathiya';

export const languagePages: LanguagePage[] = [
  {
    code: 'ta', slug: 'ai-girlfriend-tamil', name: 'Tamil', native: 'தமிழ்',
    nativeLine: 'தமிழில் பேசும் AI காதலி',
    title: 'Tamil AI Girlfriend — Talk in Tamil | Pillar',
    description: 'Make an AI girlfriend who talks to you in Tamil — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Tamil Nadu and Puducherry, and by Tamil families everywhere',
    alsoSearched: ['Tamil AI girlfriend', 'AI girlfriend Tamil', 'Tamil AI girlfriend app', 'Tamil speaking AI girlfriend'],
    greeting: 'Vanakkam',
    companion: { name: 'Nandini', city: 'Chennai', line: 'Gentle, patient, happy to talk in Tamil.', img: '/companions/c-03.jpg' },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
  },
  {
    code: 'te', slug: 'ai-girlfriend-telugu', name: 'Telugu', native: 'తెలుగు',
    nativeLine: 'తెలుగులో మాట్లాడే AI గర్ల్‌ఫ్రెండ్',
    title: 'Telugu AI Girlfriend — Talk in Telugu | Pillar',
    description: 'Make an AI girlfriend who talks to you in Telugu — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Andhra Pradesh and Telangana',
    alsoSearched: ['Telugu AI girlfriend', 'AI girlfriend Telugu', 'Telugu AI girlfriend chat', 'Telugu speaking AI girlfriend'],
    greeting: 'Namaskaram',
    companion: { name: 'Maryam', city: 'Hyderabad', line: 'Calm and thoughtful. Long late-night conversations.', img: '/companions/c-11.jpg' },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
  },
  {
    code: 'mr', slug: 'ai-girlfriend-marathi', name: 'Marathi', native: 'मराठी',
    nativeLine: 'मराठीत बोलणारी AI गर्लफ्रेंड',
    title: 'Marathi AI Girlfriend — Talk in Marathi | Pillar',
    description: 'Make an AI girlfriend who talks to you in Marathi — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Maharashtra, from Mumbai and Pune to Nagpur',
    alsoSearched: ['Marathi AI girlfriend', 'AI girlfriend Marathi', 'Marathi AI girlfriend chat', 'Marathi speaking AI girlfriend'],
    greeting: 'Namaskar',
    companion: { name: 'Ananya', city: 'Pune', line: 'Bright, chatty, sends a good-morning voice note.', img: '/companions/c-09.jpg' },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
  },
  {
    code: 'bn', slug: 'ai-girlfriend-bengali', name: 'Bengali', native: 'বাংলা',
    nativeLine: 'বাংলায় কথা বলা AI গার্লফ্রেন্ড',
    title: 'Bengali AI Girlfriend — Talk in Bangla | Pillar',
    description: 'Make an AI girlfriend who talks to you in Bengali (Bangla) — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across West Bengal, Tripura and by Bengali families everywhere',
    alsoSearched: ['Bengali AI girlfriend', 'Bangla AI girlfriend', 'AI girlfriend Bengali', 'Kolkata AI girlfriend'],
    greeting: 'Nomoshkar',
    companion: { name: 'Riya', city: 'Kolkata', line: 'Reads a lot, teases a little, listens properly.', img: '/companions/c-13.jpg' },
    otherApps: [URVASHI, MEETRA],
  },
  {
    code: 'gu', slug: 'ai-girlfriend-gujarati', name: 'Gujarati', native: 'ગુજરાતી',
    nativeLine: 'ગુજરાતીમાં વાત કરતી AI ગર્લફ્રેન્ડ',
    title: 'Gujarati AI Girlfriend — Talk in Gujarati | Pillar',
    description: 'Make an AI girlfriend who talks to you in Gujarati — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Gujarat, and by Gujarati families from Mumbai to abroad',
    alsoSearched: ['Gujarati AI girlfriend', 'AI girlfriend Gujarati', 'Gujarati speaking AI girlfriend'],
    greeting: 'Kem cho',
    companion: { name: 'Ishita', city: 'Ahmedabad', line: 'Sharp and funny; asks how the meeting went.', img: '/companions/c-05.jpg' },
    otherApps: [URVASHI, MEETRA, SAATHIYA],
  },
  {
    code: 'pa', slug: 'ai-girlfriend-punjabi', name: 'Punjabi', native: 'ਪੰਜਾਬੀ',
    nativeLine: 'ਪੰਜਾਬੀ ਵਿੱਚ ਗੱਲ ਕਰਨ ਵਾਲੀ AI ਗਰਲਫ੍ਰੈਂਡ',
    title: 'Punjabi AI Girlfriend — Talk in Punjabi | Pillar',
    description: 'Make an AI girlfriend who talks to you in Punjabi — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Punjab, Chandigarh and by Punjabi families everywhere',
    alsoSearched: ['Punjabi AI girlfriend', 'AI girlfriend Punjabi', 'Punjabi speaking AI girlfriend'],
    greeting: 'Sat Sri Akal',
    companion: { name: 'Meher', city: 'Chandigarh', line: 'Straight-talking and warm at the same time.', img: '/companions/c-10.jpg' },
    otherApps: [URVASHI, MEETRA],
  },
  {
    code: 'ml', slug: 'ai-girlfriend-malayalam', name: 'Malayalam', native: 'മലയാളം',
    nativeLine: 'മലയാളത്തിൽ സംസാരിക്കുന്ന AI ഗേൾഫ്രണ്ട്',
    title: 'Malayalam AI Girlfriend — Talk in Malayalam | Pillar',
    description: 'Make an AI girlfriend who talks to you in Malayalam — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Kerala and by Malayali families everywhere',
    alsoSearched: ['Malayalam AI girlfriend', 'AI girlfriend Malayalam', 'Malayalam speaking AI girlfriend'],
    greeting: 'Namaskaram',
    otherApps: [URVASHI, MEETRA],
  },
  {
    code: 'or', slug: 'ai-girlfriend-odia', name: 'Odia', native: 'ଓଡ଼ିଆ',
    nativeLine: 'ଓଡ଼ିଆରେ କଥା ହେଉଥିବା AI ଗର୍ଲଫ୍ରେଣ୍ଡ',
    title: 'Odia AI Girlfriend — Talk in Odia | Pillar',
    description: 'Make an AI girlfriend who talks to you in Odia — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Odisha (the state was spelled Orissa until 2011, and the language Oriya)',
    alsoSearched: ['Odia AI girlfriend', 'AI girlfriend Odia', 'Odisha AI girlfriend', 'Orissa AI girlfriend', 'Oriya AI girlfriend'],
    greeting: 'Namaskar',
    otherApps: [URVASHI],
  },
  {
    code: 'bho', slug: 'ai-girlfriend-bhojpuri', name: 'Bhojpuri', native: 'भोजपुरी',
    nativeLine: 'भोजपुरी में बतियावे वाली AI गर्लफ्रेंड',
    title: 'Bhojpuri AI Girlfriend — Talk in Bhojpuri | Pillar',
    description: 'Make an AI girlfriend who talks to you in Bhojpuri — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Bihar and eastern Uttar Pradesh, and by Bhojpuri families far from home',
    alsoSearched: ['Bhojpuri AI girlfriend', 'AI girlfriend Bhojpuri', 'Bhojpuri speaking AI girlfriend'],
    greeting: 'Pranam',
    otherApps: [],
  },
  {
    code: 'raj', slug: 'ai-girlfriend-rajasthani', name: 'Rajasthani', native: 'राजस्थानी',
    nativeLine: 'राजस्थानी में बातां करण वाळी AI गर्लफ्रेंड',
    title: 'Rajasthani AI Girlfriend — Talk in Rajasthani | Pillar',
    description: 'Make an AI girlfriend who talks to you in Rajasthani — text, voice notes and voice calls. She sends photos and remembers your day. Free on Android, no email or phone number needed.',
    region: 'spoken across Rajasthan, including Marwari',
    alsoSearched: ['Rajasthani AI girlfriend', 'Marwari AI girlfriend', 'AI girlfriend Rajasthani'],
    greeting: 'Khamma ghani',
    companion: { name: 'Kaira', city: 'Jaipur', line: 'Soft-spoken, loves a good story on a car trip.', img: '/companions/c-01.jpg' },
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
