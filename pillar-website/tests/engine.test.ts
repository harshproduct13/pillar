import { flames } from '../src/lib/tools/flames';
import { love } from '../src/lib/tools/love';
import { YONI_POINTS, YONI_ENEMIES } from '../src/lib/tools/kundli/data';
import { ashtakoot, poruthams, star, sign } from '../src/lib/tools/kundli/match';
import { moonFromName } from '../src/lib/tools/kundli/namakshar';
import { moonAtBirth } from '../src/lib/tools/kundli/moon';
import { NAKSHATRA_EN } from '../src/lib/tools/kundli/data';

let fail = 0;
const eq = (name: string, got: any, want: any) => { const ok = JSON.stringify(got) === JSON.stringify(want); if (!ok) fail++; console.log(ok ? 'ok  ' : 'FAIL', name, ok ? '' : `got ${JSON.stringify(got)} want ${JSON.stringify(want)}`); };

// FLAMES: classic worked example: "Rahul" + "Priya": r,a,h,u,l / p,r,i,y,a → strike r,a → 3+3 = 6 left.
const f = flames('Rahul', 'Priya');
eq('flames remaining', f.remaining, 6);
// 6 letters: F L A M E S → remove 6th (S), then count 6 from E: L A M E F? standard result for 6 is "E" (Enemies)? compute by hand below.
console.log('     flames Rahul/Priya rounds', f.rounds.map(r => r.removed).join(''), '→', f.result);
eq('flames order-insensitive', flames('Priya', 'Rahul').result, f.result);
eq('flames same name', flames('Asha', 'Asha').result, null);
eq('flames tamil graphemes', flames('கவின்', 'கவிதா').a.length, 3);

// Love: deterministic and order-insensitive
eq('love order', love('Amit', 'Neha').percent, love('Neha', 'Amit').percent);
console.log('     love Amit/Neha', JSON.stringify(love('Amit', 'Neha')));
console.log('     love native', JSON.stringify(love('அருண்', 'கவிதா')));

// Yoni table symmetric, enemies zero, diagonal 4
let sym = true; for (let i = 0; i < 14; i++) for (let j = 0; j < 14; j++) if (YONI_POINTS[i][j] !== YONI_POINTS[j][i]) sym = false;
eq('yoni symmetric', sym, true);
eq('yoni enemies 0', YONI_ENEMIES.every(([a, b]) => YONI_POINTS[a][b] === 0), true);
eq('yoni diagonal 4', YONI_POINTS.every((r, i) => r[i] === 4), true);

// Ashtakoot: same star both → Nadi dosha, total; known: Ashwini-Ashwini
const mid = (s: number) => ({ deg: s * 360 / 27 + 6 });
const aa = ashtakoot(mid(0), mid(0));
console.log('     ashwini-ashwini', aa.total, aa.kootas.map(k => k.key + ':' + k.got).join(' '));
eq('nadi dosha same star', aa.nadiDosha, true);
// Max possible check: totals between 0 and 36 for all pairs
let okRange = true, max = 0; for (let g = 0; g < 27; g++) for (let b = 0; b < 27; b++) { const t = ashtakoot(mid(g), mid(b)).total; if (t < 0 || t > 36) okRange = false; max = Math.max(max, t); }
eq('totals in range', okRange, true); console.log('     max total over star pairs', max);
const p = poruthams(mid(0), mid(3));
console.log('     porutham ashwini girl / rohini boy', p.score, p.items.map(i => i.key + ':' + i.verdict).join(' '));

// Namakshar
const nm = (n: string) => { const m = moonFromName(n); return m ? NAKSHATRA_EN[star(m)] : null; };
eq('name Priya → Uttara Phalguni (pi)', nm('Priya'), 'Uttara Phalguni');
eq('name Rahul → Chitra (ra)', nm('Rahul'), 'Chitra');
eq('name Lata → Ashwini (la)', nm('Lata'), 'Ashwini');
eq('name Amit → Krittika (a)', nm('Amit'), 'Krittika');
eq('name Deepak → Purva Bhadrapada (di)', nm('Deepak'), 'Purva Bhadrapada');
eq('name मनोज → Magha', nm('मनोज'), 'Magha');
eq('name કાવ્યા → Mrigashira (ka)', nm('કાવ્યા'), 'Mrigashira');
eq('name கவிதா → Mrigashira (ki)', nm('கவிதா'), 'Mrigashira');
eq('name Bharat → Mula (bha)', nm('Bharat'), 'Mula');

// Moon: print star at sample instants for almanac comparison
for (const [d, t] of [['2026-10-09', '12:00'], ['2000-01-01', '05:30'], ['1995-08-15', '10:00'], ['2026-01-26', '08:00']]) {
  const m = moonAtBirth(d, t);
  console.log('     moon', d, t, 'IST', m.deg.toFixed(3), NAKSHATRA_EN[star(m)], 'sign', sign(m));
}
console.log(fail ? `${fail} FAILED` : 'all passed');
