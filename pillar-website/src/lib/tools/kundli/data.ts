// Traditional reference data for kundli matching. Index 0 = Ashwini / Mesha throughout.
// Group memberships (gana, nadi, yoni, rajju, vedha) follow the standard lists printed in Indian almanacs.

export const NAKSHATRA_EN = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'];

export const NAKSHATRA: Record<string, string[]> = {
  en: NAKSHATRA_EN,
  hi: ['अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा', 'आर्द्रा', 'पुनर्वसु', 'पुष्य', 'आश्लेषा', 'मघा', 'पूर्वा फाल्गुनी', 'उत्तरा फाल्गुनी', 'हस्त', 'चित्रा', 'स्वाती', 'विशाखा', 'अनुराधा', 'ज्येष्ठा', 'मूल', 'पूर्वाषाढ़ा', 'उत्तराषाढ़ा', 'श्रवण', 'धनिष्ठा', 'शतभिषा', 'पूर्वा भाद्रपद', 'उत्तरा भाद्रपद', 'रेवती'],
  mr: ['अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृग', 'आर्द्रा', 'पुनर्वसू', 'पुष्य', 'आश्लेषा', 'मघा', 'पूर्वा फाल्गुनी', 'उत्तरा फाल्गुनी', 'हस्त', 'चित्रा', 'स्वाती', 'विशाखा', 'अनुराधा', 'ज्येष्ठा', 'मूळ', 'पूर्वाषाढा', 'उत्तराषाढा', 'श्रवण', 'धनिष्ठा', 'शततारका', 'पूर्वा भाद्रपदा', 'उत्तरा भाद्रपदा', 'रेवती'],
  gu: ['અશ્વિની', 'ભરણી', 'કૃત્તિકા', 'રોહિણી', 'મૃગશીર્ષ', 'આર્દ્રા', 'પુનર્વસુ', 'પુષ્ય', 'આશ્લેષા', 'મઘા', 'પૂર્વા ફાલ્ગુની', 'ઉત્તરા ફાલ્ગુની', 'હસ્ત', 'ચિત્રા', 'સ્વાતિ', 'વિશાખા', 'અનુરાધા', 'જ્યેષ્ઠા', 'મૂળ', 'પૂર્વાષાઢા', 'ઉત્તરાષાઢા', 'શ્રવણ', 'ધનિષ્ઠા', 'શતભિષા', 'પૂર્વા ભાદ્રપદ', 'ઉત્તરા ભાદ્રપદ', 'રેવતી'],
  te: ['అశ్విని', 'భరణి', 'కృత్తిక', 'రోహిణి', 'మృగశిర', 'ఆర్ద్ర', 'పునర్వసు', 'పుష్యమి', 'ఆశ్లేష', 'మఖ', 'పుబ్బ', 'ఉత్తర', 'హస్త', 'చిత్త', 'స్వాతి', 'విశాఖ', 'అనూరాధ', 'జ్యేష్ఠ', 'మూల', 'పూర్వాషాఢ', 'ఉత్తరాషాఢ', 'శ్రవణం', 'ధనిష్ఠ', 'శతభిషం', 'పూర్వాభాద్ర', 'ఉత్తరాభాద్ర', 'రేవతి'],
  ta: ['அசுவினி', 'பரணி', 'கார்த்திகை', 'ரோகிணி', 'மிருகசீரிடம்', 'திருவாதிரை', 'புனர்பூசம்', 'பூசம்', 'ஆயில்யம்', 'மகம்', 'பூரம்', 'உத்திரம்', 'அஸ்தம்', 'சித்திரை', 'சுவாதி', 'விசாகம்', 'அனுஷம்', 'கேட்டை', 'மூலம்', 'பூராடம்', 'உத்திராடம்', 'திருவோணம்', 'அவிட்டம்', 'சதயம்', 'பூரட்டாதி', 'உத்திரட்டாதி', 'ரேவதி'],
  ml: ['അശ്വതി', 'ഭരണി', 'കാർത്തിക', 'രോഹിണി', 'മകയിരം', 'തിരുവാതിര', 'പുണർതം', 'പൂയം', 'ആയില്യം', 'മകം', 'പൂരം', 'ഉത്രം', 'അത്തം', 'ചിത്തിര', 'ചോതി', 'വിശാഖം', 'അനിഴം', 'തൃക്കേട്ട', 'മൂലം', 'പൂരാടം', 'ഉത്രാടം', 'തിരുവോണം', 'അവിട്ടം', 'ചതയം', 'പൂരുരുട്ടാതി', 'ഉത്രട്ടാതി', 'രേവതി'],
};

export const RASHI: Record<string, string[]> = {
  en: ['Mesha (Aries)', 'Vrishabha (Taurus)', 'Mithuna (Gemini)', 'Karka (Cancer)', 'Simha (Leo)', 'Kanya (Virgo)', 'Tula (Libra)', 'Vrishchika (Scorpio)', 'Dhanu (Sagittarius)', 'Makara (Capricorn)', 'Kumbha (Aquarius)', 'Meena (Pisces)'],
  hi: ['मेष', 'वृषभ', 'मिथुन', 'कर्क', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुंभ', 'मीन'],
  mr: ['मेष', 'वृषभ', 'मिथुन', 'कर्क', 'सिंह', 'कन्या', 'तूळ', 'वृश्चिक', 'धनु', 'मकर', 'कुंभ', 'मीन'],
  gu: ['મેષ', 'વૃષભ', 'મિથુન', 'કર્ક', 'સિંહ', 'કન્યા', 'તુલા', 'વૃશ્ચિક', 'ધન', 'મકર', 'કુંભ', 'મીન'],
  te: ['మేషం', 'వృషభం', 'మిథునం', 'కర్కాటకం', 'సింహం', 'కన్య', 'తుల', 'వృశ్చికం', 'ధనుస్సు', 'మకరం', 'కుంభం', 'మీనం'],
  ta: ['மேஷம்', 'ரிஷபம்', 'மிதுனம்', 'கடகம்', 'சிம்மம்', 'கன்னி', 'துலாம்', 'விருச்சிகம்', 'தனுசு', 'மகரம்', 'கும்பம்', 'மீனம்'],
  ml: ['മേടം', 'ഇടവം', 'മിഥുനം', 'കർക്കടകം', 'ചിങ്ങം', 'കന്നി', 'തുലാം', 'വൃശ്ചികം', 'ധനു', 'മകരം', 'കുംഭം', 'മീനം'],
};

// 0 Deva, 1 Manushya, 2 Rakshasa
export const GANA = [0, 1, 2, 1, 0, 1, 0, 0, 2, 2, 1, 1, 0, 2, 0, 2, 0, 2, 2, 1, 1, 0, 2, 2, 1, 1, 0];
// 0 Aadi, 1 Madhya, 2 Antya
export const NADI = [0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2];

// Yoni animals: 0 Horse, 1 Elephant, 2 Sheep, 3 Serpent, 4 Dog, 5 Cat, 6 Rat, 7 Cow, 8 Buffalo, 9 Tiger, 10 Deer, 11 Monkey, 12 Mongoose, 13 Lion
export const YONI = [0, 1, 2, 3, 3, 4, 5, 2, 5, 6, 6, 7, 8, 9, 8, 9, 10, 10, 4, 11, 12, 11, 13, 0, 13, 7, 1];
export const YONI_POINTS = [
  [4, 2, 2, 3, 2, 2, 2, 1, 0, 1, 3, 3, 2, 1],
  [2, 4, 3, 3, 2, 2, 2, 2, 3, 1, 2, 3, 2, 0],
  [2, 3, 4, 2, 1, 2, 1, 3, 3, 1, 2, 0, 3, 1],
  [3, 3, 2, 4, 2, 1, 1, 1, 1, 2, 2, 2, 0, 2],
  [2, 2, 1, 2, 4, 2, 1, 2, 2, 1, 0, 2, 1, 1],
  [2, 2, 2, 1, 2, 4, 0, 2, 2, 1, 3, 3, 2, 1],
  [2, 2, 1, 1, 1, 0, 4, 2, 2, 2, 2, 2, 1, 2],
  [1, 2, 3, 1, 2, 2, 2, 4, 3, 0, 3, 2, 2, 1],
  [0, 3, 3, 1, 2, 2, 2, 3, 4, 1, 2, 2, 2, 1],
  [1, 1, 1, 2, 1, 1, 2, 0, 1, 4, 1, 1, 2, 1],
  [3, 2, 2, 2, 0, 3, 2, 3, 2, 1, 4, 2, 2, 1],
  [3, 3, 0, 2, 2, 3, 2, 2, 2, 1, 2, 4, 3, 2],
  [2, 2, 3, 0, 1, 2, 1, 2, 2, 2, 2, 3, 4, 2],
  [1, 0, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 4],
];
export const YONI_ENEMIES: [number, number][] = [[0, 8], [1, 13], [2, 11], [3, 12], [4, 10], [5, 6], [7, 9]];

// Planets: 0 Sun, 1 Moon, 2 Mars, 3 Mercury, 4 Jupiter, 5 Venus, 6 Saturn
export const SIGN_LORD = [2, 5, 3, 1, 0, 3, 5, 2, 4, 6, 6, 4];
// Natural friendship (Parashara): 2 friend, 1 neutral, 0 enemy. Row = planet, column = how it sees the other.
export const FRIENDSHIP = [
  [2, 2, 2, 1, 2, 0, 0], // Sun
  [2, 2, 1, 2, 1, 1, 1], // Moon
  [2, 2, 2, 0, 2, 1, 1], // Mars
  [2, 0, 1, 2, 1, 2, 1], // Mercury
  [2, 2, 2, 0, 2, 0, 1], // Jupiter
  [0, 0, 1, 2, 1, 2, 2], // Venus
  [0, 0, 0, 2, 1, 2, 2], // Saturn
];

// Rajju: 0 Pada (feet), 1 Kati/Uru (waist/thigh), 2 Nabhi/Udara (navel), 3 Kanta (neck), 4 Siro (head)
export const RAJJU = [0, 1, 2, 3, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 3, 2, 1, 0];

// Vedha pairs: stars that obstruct each other. Mrigashira, Chitra and Dhanishta obstruct one another.
export const VEDHA: [number, number][] = [[0, 17], [1, 16], [2, 15], [3, 14], [5, 21], [6, 20], [7, 19], [8, 18], [9, 26], [10, 25], [11, 24], [12, 23], [4, 13], [4, 22], [13, 22]];

// Vasya (porutham): for each sign, the signs it attracts.
export const VASYA_SIGNS: number[][] = [[4, 7], [3, 6], [5], [7, 8], [6], [11, 2], [9, 5], [3], [11], [0, 10], [0], [9]];

// Vashya (ashtakoot) groups: 0 Chatushpad, 1 Manav, 2 Jalchar, 3 Vanchar, 4 Keet.
// Sagittarius: first half Manav, second half Chatushpad. Capricorn: first half Chatushpad, second half Jalchar.
export function vashyaGroup(siderealDeg: number): number {
  const sign = Math.floor(siderealDeg / 30);
  const half = (siderealDeg % 30) < 15 ? 0 : 1;
  switch (sign) {
    case 0: case 1: return 0;
    case 2: case 5: case 6: case 10: return 1;
    case 3: case 11: return 2;
    case 4: return 3;
    case 7: return 4;
    case 8: return half === 0 ? 1 : 0;
    case 9: return half === 0 ? 0 : 2;
  }
  return 1;
}
// Rows = girl's group, columns = boy's group (Ganesh Mitra chart).
export const VASHYA_POINTS = [
  [2, 1, 1, 0, 1],
  [1, 2, 0.5, 0, 1],
  [1, 0.5, 2, 1, 1],
  [0, 0, 1, 2, 0],
  [1, 1, 1, 0, 2],
];

// Varna by sign: 3 Brahmin, 2 Kshatriya, 1 Vaishya, 0 Shudra
export const VARNA = [2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3];
