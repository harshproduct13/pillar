// Shared text helpers for the free tools. Everything here runs in the browser and at build time.

// Letters as people see them. Tamil, Hindi and the other Indian scripts store one visible letter as
// several code points (consonant + vowel sign + virama), so a plain split('') would cancel half-letters.
export function graphemes(s: string): string[] {
  const seg = (Intl as any).Segmenter ? new (Intl as any).Segmenter(undefined, { granularity: 'grapheme' }) : null;
  return seg ? Array.from(seg.segment(s), (x: any) => x.segment as string) : Array.from(s);
}

// Lower-case, NFC, letters only (any script). Spaces, digits and punctuation are dropped.
export function lettersOnly(s: string): string {
  return s.normalize('NFC').toLowerCase().replace(/[^\p{L}\p{M}]/gu, '');
}

export const isLatin = (s: string) => /^[a-z]*$/.test(s);

// FNV-1a, 32-bit. Same input always gives the same number, so a result never changes on retry.
export function hash(s: string): number {
  let h = 0x811c9dc5;
  for (const ch of s.normalize('NFC')) {
    h ^= ch.codePointAt(0)!;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}
