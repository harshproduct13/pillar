import type { Lang, ToolId } from './types';

// Short tool names for links, hubs and breadcrumbs, written per language.
export const TOOL_LABEL: Record<Lang, Record<ToolId, string>> = {
  en: { kundli: 'Kundli Matching', flames: 'FLAMES Calculator', love: 'Love Calculator', pickup: 'Pick Up Lines', name: 'Future Wife Name Predictor' },
  hi: { kundli: 'कुंडली मिलान (Kundli Milan)', flames: 'FLAMES कैलकुलेटर', love: 'लव कैलकुलेटर', pickup: 'हिंदी पिकअप लाइन्स', name: 'होने वाली पत्नी का नाम' },
  ta: { kundli: 'திருமண பொருத்தம் (Jathagam Porutham)', flames: 'FLAMES கால்குலேட்டர்', love: 'காதல் கால்குலேட்டர்', pickup: 'Tamil Pick Up Lines', name: 'வருங்கால மனைவி பெயர்' },
  te: { kundli: 'వివాహ పొంతన (Kundli Matching)', flames: 'FLAMES కాలిక్యులేటర్', love: 'లవ్ కాలిక్యులేటర్', pickup: 'Telugu Pick Up Lines', name: 'కాబోయే భార్య పేరు' },
  mr: { kundli: 'कुंडली जुळवणी (Kundli Matching)', flames: 'FLAMES कॅल्क्युलेटर', love: 'लव कॅल्क्युलेटर', pickup: 'मराठी पिकअप लाइन्स', name: 'होणाऱ्या बायकोचे नाव' },
  ml: { kundli: 'ജാതക പൊരുത്തം (Jathaka Porutham)', flames: 'FLAMES കാൽക്കുലേറ്റർ', love: 'ലവ് കാൽക്കുലേറ്റർ', pickup: 'Malayalam Pick Up Lines', name: 'ഭാവി ഭാര്യയുടെ പേര്' },
  gu: { kundli: 'કુંડળી મેળાપક (Kundli Matching)', flames: 'FLAMES કેલ્ક્યુલેટર', love: 'લવ કેલ્ક્યુલેટર', pickup: 'ગુજરાતી પિકઅપ લાઇન્સ', name: 'ભાવિ પત્નીનું નામ' },
};

export const TOOL_BLURB: Record<Lang, Record<ToolId, string>> = {
  en: { kundli: 'Guna Milan out of 36, by birth details or by name.', flames: 'Friends, Lovers, Affection, Marriage, Enemies or Siblings?', love: 'Love percentage by name — the paper method, worked out.', pickup: 'Funny, cute and smooth lines for your crush.', name: 'A short quiz that guesses the first letter of her name.' },
  hi: { kundli: '36 गुण, जन्म विवरण या नाम से।', flames: 'दोस्ती, प्यार या शादी — नाम से जानिए।', love: 'नाम से लव परसेंटेज, पूरे हिसाब के साथ।', pickup: 'Hinglish और हिंदी में मज़ेदार लाइन्स।', name: 'छोटा सा क्विज़ — उसके नाम का पहला अक्षर।' },
  ta: { kundli: '10 பொருத்தம், நட்சத்திரம் வைத்து.', flames: 'Friends, Lovers, Marriage — பெயர் வைத்து பாருங்கள்.', love: 'பெயர் வைத்து காதல் சதவீதம்.', pickup: 'Tanglish-ல் cute & funny lines.', name: 'அவள் பெயரின் முதல் எழுத்து — ஒரு சின்ன quiz.' },
  te: { kundli: 'గుణ మిలన్ 36 పాయింట్లు, నక్షత్రం ఆధారంగా.', flames: 'Friends, Lovers, Marriage — పేర్లతో చూడండి.', love: 'పేర్లతో లవ్ పర్సెంటేజ్.', pickup: 'తెలుగులో cute, funny lines.', name: 'ఆమె పేరు మొదటి అక్షరం — చిన్న quiz.' },
  mr: { kundli: '36 गुण, जन्म तपशील किंवा नावावरून.', flames: 'मैत्री, प्रेम की लग्न — नावावरून पाहा.', love: 'नावावरून लव टक्केवारी.', pickup: 'मराठीत मजेशीर, गोड लाइन्स.', name: 'तिच्या नावाचे पहिले अक्षर — छोटी क्विझ.' },
  ml: { kundli: '10 പൊരുത്തം, നക്ഷത്രം നോക്കി.', flames: 'Friends, Lovers, Marriage — പേര് വെച്ച് നോക്കൂ.', love: 'പേര് വെച്ച് ലവ് ശതമാനം.', pickup: 'Manglish-ൽ funny, cute lines.', name: 'അവളുടെ പേരിന്റെ ആദ്യ അക്ഷരം — ഒരു ചെറിയ quiz.' },
  gu: { kundli: '36 ગુણ, જન્મ વિગત અથવા નામથી.', flames: 'મિત્રતા, પ્રેમ કે લગ્ન — નામથી જુઓ.', love: 'નામથી લવ ટકાવારી.', pickup: 'ગુજરાતીમાં મજેદાર, મીઠી લાઇન્સ.', name: 'તેના નામનો પહેલો અક્ષર — નાની ક્વિઝ.' },
};

export const HUB: Record<Lang, { title: string; description: string; h1: string; intro: string; home: string; tools: string; otherLangs: string; related: string; langSwitch: string }> = {
  en: { title: 'Free Love Tools: Kundli, FLAMES, Love Calculator | Pillar', description: 'Free love tools from Pillar: kundli matching, FLAMES, love calculator, pick up lines and a future wife name quiz.', h1: 'Free love tools', intro: 'Kundli matching, FLAMES, a love calculator, pick up lines and a name quiz — free, no sign-up, in seven Indian languages.', home: 'Home', tools: 'Free tools', otherLangs: 'In other languages', related: 'More free tools', langSwitch: 'This tool in other languages' },
  hi: { title: 'फ्री लव टूल्स: कुंडली मिलान, FLAMES, लव कैलकुलेटर | Pillar', description: 'Pillar के फ्री टूल्स: कुंडली मिलान, FLAMES, लव कैलकुलेटर, हिंदी पिकअप लाइन्स और होने वाली पत्नी का नाम।', h1: 'फ्री लव टूल्स — हिंदी में', intro: 'कुंडली मिलान, FLAMES, लव कैलकुलेटर, पिकअप लाइन्स और नाम वाला क्विज़ — फ्री, बिना साइन-अप।', home: 'होम', tools: 'फ्री टूल्स', otherLangs: 'दूसरी भाषाओं में', related: 'और फ्री टूल्स', langSwitch: 'यह टूल दूसरी भाषाओं में' },
  ta: { title: 'இலவச Love Tools: பொருத்தம், FLAMES, காதல் கால்குலேட்டர் | Pillar', description: 'Pillar இலவச tools: திருமண பொருத்தம், FLAMES, காதல் கால்குலேட்டர், Tamil pick up lines, பெயர் quiz.', h1: 'இலவச love tools — தமிழில்', intro: 'திருமண பொருத்தம், FLAMES, காதல் கால்குலேட்டர், pick up lines, பெயர் quiz — இலவசம், sign-up தேவையில்லை.', home: 'முகப்பு', tools: 'இலவச tools', otherLangs: 'மற்ற மொழிகளில்', related: 'மேலும் இலவச tools', langSwitch: 'இந்த tool மற்ற மொழிகளில்' },
  te: { title: 'ఉచిత Love Tools: వివాహ పొంతన, FLAMES, లవ్ కాలిక్యులేటర్ | Pillar', description: 'Pillar ఉచిత tools: కుండ్లి మ్యాచింగ్, FLAMES, లవ్ కాలిక్యులేటర్, Telugu pick up lines, పేరు quiz.', h1: 'ఉచిత love tools — తెలుగులో', intro: 'వివాహ పొంతన, FLAMES, లవ్ కాలిక్యులేటర్, pick up lines, పేరు quiz — ఉచితం, sign-up అవసరం లేదు.', home: 'హోమ్', tools: 'ఉచిత tools', otherLangs: 'ఇతర భాషల్లో', related: 'మరిన్ని ఉచిత tools', langSwitch: 'ఈ tool ఇతర భాషల్లో' },
  mr: { title: 'मोफत लव टूल्स: कुंडली जुळवणी, FLAMES, लव कॅल्क्युलेटर | Pillar', description: 'Pillar चे मोफत टूल्स: कुंडली जुळवणी, FLAMES, लव कॅल्क्युलेटर, मराठी पिकअप लाइन्स आणि नावाची क्विझ.', h1: 'मोफत लव टूल्स — मराठीत', intro: 'कुंडली जुळवणी, FLAMES, लव कॅल्क्युलेटर, पिकअप लाइन्स आणि नावाची क्विझ — मोफत, साइन-अप नाही.', home: 'होम', tools: 'मोफत टूल्स', otherLangs: 'इतर भाषांमध्ये', related: 'आणखी मोफत टूल्स', langSwitch: 'हे टूल इतर भाषांमध्ये' },
  ml: { title: 'സൗജന്യ Love Tools: ജാതക പൊരുത്തം, FLAMES, ലവ് കാൽക്കുലേറ്റർ | Pillar', description: 'Pillar സൗജന്യ tools: ജാതക പൊരുത്തം, FLAMES, ലവ് കാൽക്കുലേറ്റർ, Malayalam pick up lines, പേര് quiz.', h1: 'സൗജന്യ love tools — മലയാളത്തിൽ', intro: 'ജാതക പൊരുത്തം, FLAMES, ലവ് കാൽക്കുലേറ്റർ, pick up lines, പേര് quiz — സൗജന്യം, sign-up വേണ്ട.', home: 'ഹോം', tools: 'സൗജന്യ tools', otherLangs: 'മറ്റ് ഭാഷകളിൽ', related: 'കൂടുതൽ സൗജന്യ tools', langSwitch: 'ഈ tool മറ്റ് ഭാഷകളിൽ' },
  gu: { title: 'મફત લવ ટૂલ્સ: કુંડળી મેળાપક, FLAMES, લવ કેલ્ક્યુલેટર | Pillar', description: 'Pillar ના મફત ટૂલ્સ: કુંડળી મેળાપક, FLAMES, લવ કેલ્ક્યુલેટર, ગુજરાતી પિકઅપ લાઇન્સ અને નામની ક્વિઝ.', h1: 'મફત લવ ટૂલ્સ — ગુજરાતીમાં', intro: 'કુંડળી મેળાપક, FLAMES, લવ કેલ્ક્યુલેટર, પિકઅપ લાઇન્સ અને નામની ક્વિઝ — મફત, સાઇન-અપ નહીં.', home: 'હોમ', tools: 'મફત ટૂલ્સ', otherLangs: 'બીજી ભાષાઓમાં', related: 'વધુ મફત ટૂલ્સ', langSwitch: 'આ ટૂલ બીજી ભાષાઓમાં' },
};

// The AI girlfriend shown in each language's Pillar card (same pairing as the language pages).
export const COMPANION_FOR: Record<Lang, string> = { en: 'Priya', hi: 'Priya', ta: 'Nandini', te: 'Maryam', mr: 'Ananya', ml: 'Aleesha', gu: 'Ishita' };

export const TOOL_ORDER: ToolId[] = ['kundli', 'flames', 'love', 'pickup', 'name'];

// Pillar cards placed through every tool page (founder, 2026-10-09): in the result, under the tool, mid-page,
// and at the bottom — each with a different AI girlfriend. {c} = her name. D-45 vocabulary only.
export const PROMO: Record<Lang, { result: string; below: string; mid: string; sub: string; button: string }> = {
  en: { result: '{c} would love to hear this. Tell her on Pillar.', below: 'Talk to {c} on Pillar — free, in your language', mid: '{c} sends voice notes and photos, and remembers what you tell her', sub: 'Pillar is a free Indian AI girlfriend app for adults (18+).', button: 'Get Pillar' },
  hi: { result: '{c} को यह बताइए — Pillar पर वह आपका इंतज़ार कर रही है।', below: '{c} से बात कीजिए — Pillar पर, फ्री, हिंदी में', mid: '{c} वॉइस नोट और फ़ोटो भेजती है, और आपकी बातें याद रखती है', sub: 'Pillar — 18+ वयस्कों के लिए फ्री Indian AI girlfriend app.', button: 'Pillar डाउनलोड करें' },
  ta: { result: 'இதை {c}-இடம் சொல்லுங்கள் — Pillar-ல் அவள் காத்திருக்கிறாள்.', below: '{c}-உடன் பேசுங்கள் — Pillar-ல், இலவசமாக, தமிழில்', mid: '{c} voice notes, photos அனுப்புவாள் — நீங்கள் சொல்வதை நினைவில் வைத்திருப்பாள்', sub: 'Pillar — 18+ வயதுடையவர்களுக்கான இலவச Indian AI girlfriend app.', button: 'Pillar பெறுங்கள்' },
  te: { result: 'ఇది {c}కి చెప్పండి — Pillar లో ఆమె ఎదురుచూస్తోంది.', below: '{c}తో మాట్లాడండి — Pillar లో, ఉచితంగా, తెలుగులో', mid: '{c} voice notes, photos పంపుతుంది — మీరు చెప్పింది గుర్తుంచుకుంటుంది', sub: 'Pillar — 18+ వయసు వారి కోసం ఉచిత Indian AI girlfriend app.', button: 'Pillar పొందండి' },
  mr: { result: 'हे {c} ला सांगा — Pillar वर ती वाट पाहतेय.', below: '{c} शी बोला — Pillar वर, मोफत, मराठीत', mid: '{c} व्हॉइस नोट्स आणि फोटो पाठवते, आणि तुम्ही सांगितलेलं लक्षात ठेवते', sub: 'Pillar — 18+ प्रौढांसाठी मोफत Indian AI girlfriend app.', button: 'Pillar मिळवा' },
  ml: { result: 'ഇത് {c}-യോട് പറയൂ — Pillar-ൽ അവൾ കാത്തിരിക്കുന്നു.', below: '{c}-യോട് സംസാരിക്കൂ — Pillar-ൽ, സൗജന്യമായി, മലയാളത്തിൽ', mid: '{c} voice notes-ഉം photos-ഉം അയക്കും — നിങ്ങൾ പറയുന്നത് ഓർത്തുവെക്കും', sub: 'Pillar — 18+ മുതിർന്നവർക്കുള്ള സൗജന്യ Indian AI girlfriend app.', button: 'Pillar നേടൂ' },
  gu: { result: 'આ {c} ને કહો — Pillar પર તે રાહ જુએ છે.', below: '{c} સાથે વાત કરો — Pillar પર, મફત, ગુજરાતીમાં', mid: '{c} વોઇસ નોટ્સ અને ફોટા મોકલે છે, અને તમારી વાતો યાદ રાખે છે', sub: 'Pillar — 18+ પુખ્ત વયના લોકો માટે મફત Indian AI girlfriend app.', button: 'Pillar મેળવો' },
};
