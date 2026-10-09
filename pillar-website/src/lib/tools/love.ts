import { hash, isLatin, lettersOnly } from './text';

export interface LoveResult {
  method: 'loves' | 'letters';
  counts?: { letter: string; n: number }[];  // L-O-V-E-S counts (paper method)
  rows?: number[][];                          // each adding round, for showing the working
  nameScore: number;                          // 0–99
  birthdayScore?: number;                     // only when both dates are given
  percent: number;
}

const digitSum = (n: number): number => (n < 10 ? n : digitSum(String(n).split('').reduce((s, d) => s + +d, 0)));

// The school "on paper" method: count L, O, V, E, S in both names, then add neighbours until two digits are left.
function paperMethod(a: string, b: string) {
  const both = a + b;
  const counts = ['l', 'o', 'v', 'e', 's'].map((letter) => ({ letter: letter.toUpperCase(), n: both.split(letter).length - 1 }));
  let row = counts.map((c) => digitSum(c.n));
  const rows = [row];
  while (row.length > 2) {
    const prev = row;
    row = prev.slice(1).map((x, i) => digitSum(prev[i] + x));
    rows.push(row);
  }
  return { counts, rows, score: row[0] * 10 + row[1] };
}

// Birthday part: each date's digits reduced to one number (1–9); the closer the two numbers, the higher the score.
export function lifeNumber(dateISO: string): number {
  const digits = dateISO.replace(/\D/g, '').split('').reduce((s, d) => s + +d, 0);
  return digitSum(digits) || 9;
}

export function love(nameA: string, nameB: string, dobA?: string, dobB?: string): LoveResult {
  // Order of the two names never changes the answer.
  const [x, y] = [lettersOnly(nameA), lettersOnly(nameB)].sort();
  let out: LoveResult;
  if (isLatin(x) && isLatin(y)) {
    const p = paperMethod(x, y);
    out = { method: 'loves', counts: p.counts, rows: p.rows, nameScore: p.score, percent: p.score };
  } else {
    const score = 40 + (hash(x + '|' + y) % 60);
    out = { method: 'letters', nameScore: score, percent: score };
  }
  if (dobA && dobB) {
    const birthdayScore = 100 - Math.abs(lifeNumber(dobA) - lifeNumber(dobB)) * 9;
    out.birthdayScore = birthdayScore;
    out.percent = Math.round((out.nameScore + birthdayScore) / 2);
  }
  return out;
}
