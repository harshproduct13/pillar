// Free tools (D-61). Plan: SEO:AEO/05-clients/pillar/22-free-tools-seo-plan-2026-10-09.md
// Every language page is written for that language (not translated from English) and read by a native
// speaker before it is deployed.

export type Lang = 'en' | 'hi' | 'ta' | 'te' | 'mr' | 'ml' | 'gu';
export type ToolId = 'name' | 'flames' | 'love' | 'kundli' | 'pickup';

export const LANGS: Lang[] = ['en', 'hi', 'ta', 'te', 'mr', 'ml', 'gu'];
export const LANG_NAME: Record<Lang, { en: string; native: string; hreflang: string }> = {
  en: { en: 'English', native: 'English', hreflang: 'en-IN' },
  hi: { en: 'Hindi', native: 'हिंदी', hreflang: 'hi-IN' },
  ta: { en: 'Tamil', native: 'தமிழ்', hreflang: 'ta-IN' },
  te: { en: 'Telugu', native: 'తెలుగు', hreflang: 'te-IN' },
  mr: { en: 'Marathi', native: 'मराठी', hreflang: 'mr-IN' },
  ml: { en: 'Malayalam', native: 'മലയാളം', hreflang: 'ml-IN' },
  gu: { en: 'Gujarati', native: 'ગુજરાતી', hreflang: 'gu-IN' },
};

export interface Section { h2: string; html: string }
export interface Qa { q: string; a: string }

export interface ToolPage {
  tool: ToolId;
  lang: Lang;
  slug: string;              // last URL segment
  title: string;             // 50–60 chars
  description: string;       // 100–130 chars
  h1: string;
  eyebrow: string;
  intro: string;             // one or two sentences, primary phrase in the first line
  ui: Record<string, string>; // labels the tool widget uses
  sections: Section[];        // each H2 targets one related keyword
  faq: Qa[];
  cta: { text: string; sub: string; button: string };
  disclaimer: string;
}

export const toolPath = (p: { lang: Lang; slug: string }) => (p.lang === 'en' ? `/tools/${p.slug}` : `/${p.lang}/${p.slug}`);
export const hubPath = (lang: Lang) => (lang === 'en' ? '/tools' : `/${lang}/tools`);
