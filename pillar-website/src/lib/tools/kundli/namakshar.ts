// "Kundli milan by name": the traditional namakshar table gives each nakshatra pada a starting syllable.
// A name's first syllable therefore points to a star (and so a Moon sign). It is an approximation:
// the result is labelled approximate everywhere it is shown.

// Four syllables per star, one per pada, in Devanagari. Long and short vowels are folded together below.
const TABLE = [
  'चू चे चो ला', 'ली लू ले लो', 'अ इ उ ए', 'ओ वा वी वू', 'वे वो का की', 'कू घ ङ छ', 'के को हा ही', 'हू हे हो डा', 'डी डू डे डो',
  'मा मी मू मे', 'मो टा टी टू', 'टे टो पा पी', 'पू ष ण ठ', 'पे पो रा री', 'रू रे रो ता', 'ती तू ते तो', 'ना नी नू ने', 'नो या यी यू',
  'ये यो भा भी', 'भू धा फा ढा', 'भे भो जा जी', 'खी खू खे खो', 'गा गी गू गे', 'गो सा सी सू', 'से सो दा दी', 'दू थ झ ञ', 'दे दो चा ची',
];
// Extra syllables some almanacs list (Abhijit, between Uttara Ashadha and Shravana) — folded into Shravana.
const EXTRA: Record<string, [number, number]> = { 'जू': [21, 0], 'जे': [21, 1], 'जो': [21, 2], 'खा': [21, 3] };

const MATRA: Record<string, string> = { 'ा': 'a', 'ि': 'i', 'ी': 'i', 'ु': 'u', 'ू': 'u', 'े': 'e', 'ै': 'e', 'ो': 'o', 'ौ': 'o', 'ॅ': 'e', 'ॉ': 'o' };
const VOWEL: Record<string, string> = { 'अ': 'a', 'आ': 'a', 'इ': 'i', 'ई': 'i', 'उ': 'u', 'ऊ': 'u', 'ए': 'e', 'ऐ': 'e', 'ओ': 'o', 'औ': 'o', 'ऋ': 'i' };
// Sounds the table does not list separately.
const SAME: Record<string, string> = { 'ब': 'व', 'श': 'ष', 'ज़': 'ज', 'फ़': 'फ', 'क़': 'क', 'ख़': 'ख', 'ग़': 'ग', 'ड़': 'ड', 'ढ़': 'ढ', 'ळ': 'ल', 'ऱ': 'र', 'त्र': 'त', 'ज्ञ': 'ग', 'क्ष': 'क' };

// key = consonant (or '') + vowel letter, e.g. 'लa', 'चi', '' + 'a' for अ.
function keyOf(syl: string): string {
  const chars = Array.from(syl);
  if (VOWEL[chars[0]]) return '_' + VOWEL[chars[0]];
  const cons = SAME[chars[0]] ?? chars[0];
  const v = chars[1] ? MATRA[chars[1]] ?? 'a' : 'a';
  return cons + v;
}

const INDEX = new Map<string, [number, number]>();
TABLE.forEach((row, star) => row.split(' ').forEach((syl, p) => { const k = keyOf(syl); if (!INDEX.has(k)) INDEX.set(k, [star, p]); }));
Object.entries(EXTRA).forEach(([syl, v]) => { const k = keyOf(syl); if (!INDEX.has(k)) INDEX.set(k, v); });

// Indian scripts sit at parallel positions in Unicode, so Gujarati, Bengali, Tamil, Telugu, Kannada and
// Malayalam letters can be moved onto Devanagari by a fixed offset. Good enough for a first syllable.
function toDevanagari(s: string): string {
  return Array.from(s).map((ch) => {
    const cp = ch.codePointAt(0)!;
    for (const base of [0x0980, 0x0a00, 0x0a80, 0x0b00, 0x0b80, 0x0c00, 0x0c80, 0x0d00]) {
      if (cp >= base && cp < base + 0x80) return String.fromCodePoint(cp - base + 0x0900);
    }
    return ch;
  }).join('');
}

// Latin spelling → Devanagari consonant. Longest match first.
const LATIN_CONS: [string, string][] = [
  ['chh', 'छ'], ['ksh', 'क'], ['shr', 'ष'], ['sh', 'ष'], ['ch', 'च'], ['kh', 'ख'], ['gh', 'घ'], ['jh', 'झ'], ['th', 'थ'], ['dh', 'ध'],
  ['ph', 'फ'], ['bh', 'भ'], ['k', 'क'], ['q', 'क'], ['c', 'क'], ['g', 'ग'], ['j', 'ज'], ['z', 'ज'], ['t', 'त'], ['d', 'द'], ['n', 'न'],
  ['p', 'प'], ['f', 'फ'], ['b', 'व'], ['v', 'व'], ['w', 'व'], ['m', 'म'], ['y', 'य'], ['r', 'र'], ['l', 'ल'], ['s', 'स'], ['h', 'ह'], ['x', 'क'],
];
const LATIN_VOW: [string, string][] = [['aa', 'a'], ['ai', 'e'], ['au', 'o'], ['ee', 'i'], ['ii', 'i'], ['oo', 'u'], ['ou', 'o'], ['a', 'a'], ['e', 'e'], ['i', 'i'], ['o', 'o'], ['u', 'u'], ['y', 'i']];

function latinKey(name: string): string | null {
  let s = name.toLowerCase().replace(/[^a-z]/g, '');
  if (!s) return null;
  for (const [v, k] of LATIN_VOW.slice(0, -1)) if (s.startsWith(v)) return '_' + k;
  const c = LATIN_CONS.find(([l]) => s.startsWith(l));
  if (!c) return null;
  s = s.slice(c[0].length);
  // Skip a second consonant in a cluster (Priya → Pi, Shreya → She, Swati → Sa).
  while (s && !/^[aeiouy]/.test(s)) s = s.slice(1);
  const v = LATIN_VOW.find(([l]) => s.startsWith(l));
  return c[1] + (v ? v[1] : 'a');
}

function indicKey(name: string): string | null {
  const s = toDevanagari(name.normalize('NFC').trim());
  const chars = Array.from(s);
  if (!chars.length) return null;
  if (VOWEL[chars[0]]) return '_' + VOWEL[chars[0]];
  let cons = chars[0];
  let i = 1;
  // Skip conjunct parts: consonant + virama + consonant ...
  while (chars[i] === '्' && chars[i + 1]) i += 2;
  if (chars[i] === '़') { cons += '़'; i++; }
  cons = SAME[cons] ?? cons;
  const v = MATRA[chars[i]] ?? 'a';
  return cons + v;
}

// Returns the pada's midpoint as a sidereal longitude, or null when the name gives nothing usable.
export function moonFromName(name: string): { deg: number; approximate: true } | null {
  const trimmed = name.trim();
  if (!trimmed) return null;
  const key = /^[A-Za-z]/.test(trimmed) ? latinKey(trimmed) : indicKey(trimmed);
  if (!key) return null;
  let hit = INDEX.get(key);
  // Same consonant, any vowel, if the exact syllable is not listed.
  if (!hit) for (const [k, v] of INDEX) if (k.startsWith(key.slice(0, -1)) && k.length === key.length) { hit = v; break; }
  if (!hit) return null;
  const [s, p] = hit;
  return { deg: s * (360 / 27) + p * (360 / 108) + 360 / 216, approximate: true };
}
