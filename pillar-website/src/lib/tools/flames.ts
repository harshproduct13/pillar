import { graphemes, lettersOnly } from './text';

export type FlamesKey = 'F' | 'L' | 'A' | 'M' | 'E' | 'S';

export interface FlamesResult {
  a: string[]; b: string[];          // letters of each name
  struckA: boolean[]; struckB: boolean[];
  remaining: number;                  // letters left after striking common ones
  rounds: { removed: FlamesKey; left: FlamesKey[] }[];
  result: FlamesKey | null;           // null when nothing is left to count
}

// The paper method: strike out every letter the two names share (one for one), count what is left,
// then go round F-L-A-M-E-S striking every n-th letter until one is left.
export function flames(nameA: string, nameB: string): FlamesResult {
  const a = graphemes(lettersOnly(nameA));
  const b = graphemes(lettersOnly(nameB));
  const struckA = a.map(() => false);
  const struckB = b.map(() => false);
  a.forEach((ch, i) => {
    const j = b.findIndex((x, k) => x === ch && !struckB[k]);
    if (j >= 0) { struckA[i] = true; struckB[j] = true; }
  });
  const remaining = struckA.filter((x) => !x).length + struckB.filter((x) => !x).length;

  const rounds: FlamesResult['rounds'] = [];
  if (remaining === 0) return { a, b, struckA, struckB, remaining, rounds, result: null };

  let list: FlamesKey[] = ['F', 'L', 'A', 'M', 'E', 'S'];
  let start = 0;
  while (list.length > 1) {
    const idx = (start + remaining - 1) % list.length;
    const removed = list[idx];
    list = list.slice(0, idx).concat(list.slice(idx + 1));
    start = idx % list.length;
    rounds.push({ removed, left: [...list] });
  }
  return { a, b, struckA, struckB, remaining, rounds, result: list[0] };
}
