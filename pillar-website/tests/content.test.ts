import { allToolPages } from '../src/data/tools';
import { LINES } from '../src/data/tools/pickupLines';
import { NAMES } from '../src/data/tools/name';
import { LANGS } from '../src/data/tools/types';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
let issues = 0;
const warn = (m: string) => { issues++; console.log('WARN', m); };
const len = (s: string) => [...s].length;
console.log('pages', allToolPages.length);
for (const p of allToolPages) {
  const id = `${p.lang}/${p.slug}`;
  if (len(p.title) > 62) warn(`${id} title ${len(p.title)}: ${p.title}`);
  if (len(p.title) < 40) warn(`${id} title short ${len(p.title)}`);
  if (len(p.description) > 160 || len(p.description) < 90) warn(`${id} description ${len(p.description)}`);
  if (p.faq.length < 2) warn(`${id} faq ${p.faq.length}`);
  const text = JSON.stringify(p).toLowerCase();
  for (const bad of ['sexy', 'nsfw', 'hot girl', 'bed', '18+ content', 'dirty', 'kiss']) if (text.includes(bad)) warn(`${id} contains "${bad}"`);
  const n = (p.title.match(/(\d+)\+/) || [])[1];
  if (p.tool === 'pickup') {
    const count = LINES[p.lang].reduce((s, g) => s + g.lines.length, 0);
    console.log(`  ${id} lines ${count}`);
    if (n && +n > count) warn(`${id} title says ${n}+ but has ${count}`);
    for (const g of LINES[p.lang]) for (const l of g.lines) {
      if (p.lang !== 'en' && /[^\x00-\x7F’'"“”–…👀❤🔥]/.test(l.t)) warn(`${id} non-ASCII in roman line: ${l.t}`);
      const lt = (l.t + ' ' + (l.m || '')).toLowerCase();
      // 'hot' is a verb in Marathi/Gujarati romanisation; 'out of bed in the morning' is checked and fine.
      const words = ['sexy', 'kiss', 'dirty', 'body', ...(['mr', 'gu'].includes(p.lang) ? [] : ['hot']), ...(lt.includes('out of bed') ? [] : ['bed'])];
      for (const bad of words) if (new RegExp('\\b' + bad + '\\b').test(lt)) warn(`${id} line has "${bad}": ${l.t}`);
    }
  }
}
for (const l of LANGS) {
  const tools = new Set(allToolPages.filter((p) => p.lang === l).map((p) => p.tool));
  if (tools.size !== 5) warn(`${l} has ${tools.size} tools`);
  if (!NAMES[l]?.length) warn(`${l} no names`);
}
// every ui key used by widgets present per tool
const need: Record<string, string[]> = {
  flames: ['nameA','nameB','button','rF','rL','rA','rM','rE','rS','rFLine','sameLetters','howTitle','lettersLeft','strike','shareWa','shareImg','shareText','faqTitle'],
  love: ['nameA','nameB','button','dobToggle','dobA','dobB','band0','band4','howTitle','letterMethod','birthdayLine','shareWa','shareImg','shareText','faqTitle'],
  name: ['yourName','dob','button','q1','q1o1','q2','q3','resultLead','couldBe','companionLine','meet','shareWa','shareImg','shareText','imgFooter','faqTitle'],
  kundli: ['modeLabel','modeBirth','modeName','girl','boy','name','date','time','timeHelp','button','star','rashi','approxName','approxTime','errName','errDate','shareWa','shareText','faqTitle'],
  pickup: ['pickerLead','category','allCategories','button','copy','shareWa','contents','faqTitle'],
};
for (const p of allToolPages) for (const k of need[p.tool]) if (!(k in p.ui)) warn(`${p.lang}/${p.slug} missing ui.${k}`);
for (const p of allToolPages.filter((x) => x.tool === 'kundli')) {
  const keys = ['ta', 'ml'].includes(p.lang) ? ['colPorutham','p_dinam','p_rajju','v_good','poruthamTotal','rajjuWarn','vedhaWarn','alsoGuna'] : ['colKoota','k_varna','k_nadi','band0','band3','nadiWarn','bhakootWarn'];
  for (const k of keys) if (!(k in p.ui)) warn(`${p.lang} kundli missing ${k}`);
}
// House style: no em dashes anywhere in site source (use a comma, colon, full stop or brackets).
const walk = (d: string): string[] => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
for (const f of walk('src').filter((f) => /\.(astro|ts|json|css|md)$/.test(f))) {
  readFileSync(f, 'utf8').split('\n').forEach((line, i) => { if (/\u2014|&mdash;|&#8212;/.test(line)) warn(`${f}:${i + 1} em dash`); });
}
console.log(issues ? `${issues} issues` : 'content ok');
