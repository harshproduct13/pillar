import { FRIENDSHIP, GANA, NADI, RAJJU, SIGN_LORD, VARNA, VASHYA_POINTS, VASYA_SIGNS, VEDHA, YONI, YONI_ENEMIES, YONI_POINTS, vashyaGroup } from './data';

// One person's Moon: sidereal longitude in degrees (0–360, Lahiri). Star and sign follow from it.
export interface Moon { deg: number; approximate?: boolean }
export const star = (m: Moon) => Math.floor(m.deg / (360 / 27)) % 27;
export const pada = (m: Moon) => Math.floor((m.deg % (360 / 27)) / (360 / 108));
export const sign = (m: Moon) => Math.floor(m.deg / 30) % 12;

// Count from a to b, inclusive, around a circle of n (1 = same).
const countFrom = (a: number, b: number, n: number) => ((b - a + n) % n) + 1;

// --- Ashtakoot (Guna Milan), 36 points -------------------------------------------------------------

export interface Koota { key: string; max: number; got: number }

function relationScore(a: number, b: number): number {
  if (a === b) return 5;
  const x = FRIENDSHIP[a][b], y = FRIENDSHIP[b][a];
  const pair = [x, y].sort().join('');
  return ({ '22': 5, '12': 4, '11': 3, '02': 1, '01': 0.5, '00': 0 } as Record<string, number>)[pair];
}

export function ashtakoot(girl: Moon, boy: Moon): { kootas: Koota[]; total: number; nadiDosha: boolean; bhakootDosha: boolean } {
  const gs = star(girl), bs = star(boy), gr = sign(girl), br = sign(boy);

  const varna = VARNA[br] >= VARNA[gr] ? 1 : 0;
  const vashya = VASHYA_POINTS[vashyaGroup(girl.deg)][vashyaGroup(boy.deg)];

  // Tara: count both ways, remainder of 9; 3 (Vipat), 5 (Pratyari) and 7 (Vadha) are unlucky.
  const taraGood = (n: number) => ![3, 5, 7].includes(((n - 1) % 9) + 1);
  const tara = (taraGood(countFrom(gs, bs, 27)) ? 1.5 : 0) + (taraGood(countFrom(bs, gs, 27)) ? 1.5 : 0);

  const yoni = YONI_POINTS[YONI[bs]][YONI[gs]];
  const maitri = relationScore(SIGN_LORD[br], SIGN_LORD[gr]);

  // Gana, rows = boy, columns = girl (Deva, Manushya, Rakshasa).
  const GANA_POINTS = [[6, 6, 0], [5, 6, 0], [1, 0, 6]];
  const gana = GANA_POINTS[GANA[bs]][GANA[gs]];

  // Bhakoot: 2/12, 5/9 and 6/8 sign distances are the dosha positions.
  const d = countFrom(gr, br, 12);
  const bhakootDosha = [2, 12, 5, 9, 6, 8].includes(d);
  const bhakoot = bhakootDosha ? 0 : 7;

  const nadiDosha = NADI[gs] === NADI[bs];
  const nadi = nadiDosha ? 0 : 8;

  const kootas: Koota[] = [
    { key: 'varna', max: 1, got: varna },
    { key: 'vashya', max: 2, got: vashya },
    { key: 'tara', max: 3, got: tara },
    { key: 'yoni', max: 4, got: yoni },
    { key: 'maitri', max: 5, got: maitri },
    { key: 'gana', max: 6, got: gana },
    { key: 'bhakoot', max: 7, got: bhakoot },
    { key: 'nadi', max: 8, got: nadi },
  ];
  return { kootas, total: kootas.reduce((s, k) => s + k.got, 0), nadiDosha, bhakootDosha };
}

// --- Ten poruthams (Tamil / Kerala) ----------------------------------------------------------------

export type Verdict = 'good' | 'average' | 'no';
export interface Porutham { key: string; verdict: Verdict }

export function poruthams(girl: Moon, boy: Moon): { items: Porutham[]; score: number; rajjuOk: boolean; vedhaOk: boolean } {
  const gs = star(girl), bs = star(boy), gr = sign(girl), br = sign(boy);
  const c = countFrom(gs, bs, 27);   // girl's star to boy's star
  const sameStar = gs === bs;

  const dinam: Verdict = [2, 4, 6, 8, 9, 11, 13, 15, 18, 20, 24, 26].includes(c) ? 'good' : sameStar ? 'average' : 'no';

  const g = GANA[gs], b = GANA[bs];
  const ganam: Verdict = g === b ? 'good' : (g !== 2 && b !== 2) ? 'average' : 'no';

  const mahendram: Verdict = [4, 7, 10, 13, 16, 19, 22, 25].includes(c) ? 'good' : 'no';
  const streeDeergham: Verdict = c > 13 ? 'good' : c > 7 ? 'average' : 'no';

  const yg = YONI[gs], yb = YONI[bs];
  const enemies = YONI_ENEMIES.some(([p, q]) => (p === yg && q === yb) || (p === yb && q === yg));
  const yoni: Verdict = enemies ? 'no' : yg === yb || YONI_POINTS[yb][yg] >= 3 ? 'good' : 'average';

  const rd = countFrom(gr, br, 12);
  const rasi: Verdict = rd === 1 || rd === 7 ? 'good' : [2, 12, 6, 8].includes(rd) ? 'no' : [5, 9].includes(rd) ? 'average' : 'good';

  const lg = SIGN_LORD[gr], lb = SIGN_LORD[br];
  const rel = lg === lb ? 2 : Math.min(FRIENDSHIP[lg][lb], FRIENDSHIP[lb][lg]);
  const rasiAdhipathi: Verdict = rel === 2 ? 'good' : rel === 1 ? 'average' : 'no';

  const vasya: Verdict = VASYA_SIGNS[gr].includes(br) || VASYA_SIGNS[br].includes(gr) || gr === br ? 'good' : 'no';

  const rajjuOk = RAJJU[gs] !== RAJJU[bs];
  const rajju: Verdict = rajjuOk ? 'good' : 'no';

  const vedhaOk = !VEDHA.some(([p, q]) => (p === gs && q === bs) || (p === bs && q === gs));
  const vedhai: Verdict = vedhaOk ? 'good' : 'no';

  const items: Porutham[] = [
    { key: 'dinam', verdict: dinam }, { key: 'ganam', verdict: ganam }, { key: 'mahendram', verdict: mahendram },
    { key: 'streeDeergham', verdict: streeDeergham }, { key: 'yoni', verdict: yoni }, { key: 'rasi', verdict: rasi },
    { key: 'rasiAdhipathi', verdict: rasiAdhipathi }, { key: 'vasya', verdict: vasya }, { key: 'rajju', verdict: rajju },
    { key: 'vedhai', verdict: vedhai },
  ];
  const score = items.reduce((s, i) => s + (i.verdict === 'good' ? 1 : i.verdict === 'average' ? 0.5 : 0), 0);
  return { items, score, rajjuOk, vedhaOk };
}
