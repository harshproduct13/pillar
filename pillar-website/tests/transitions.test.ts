import { moonAtBirth } from '../src/lib/tools/kundli/moon';
import { star } from '../src/lib/tools/kundli/match';
import { NAKSHATRA_EN } from '../src/lib/tools/kundli/data';
// Find the minute a nakshatra ends (IST), to compare with Drik Panchang's "upto" times.
function endOf(date: string, startHHMM: string) {
  const s0 = star(moonAtBirth(date, startHHMM));
  let [h, m] = startHHMM.split(':').map(Number);
  let d = new Date(date + 'T00:00:00Z'); let mins = h * 60 + m;
  for (let i = 0; i < 2000; i++) {
    mins++; const dd = new Date(d.getTime() + Math.floor(mins / 1440) * 86400000).toISOString().slice(0, 10);
    const t = String(Math.floor((mins % 1440) / 60)).padStart(2, '0') + ':' + String(mins % 60).padStart(2, '0');
    if (star(moonAtBirth(dd, t)) !== s0) return `${NAKSHATRA_EN[s0]} ends ${dd} ${t} IST`;
  }
}
console.log(endOf('2026-10-09', '12:00'), '| Drik: Uttara Phalguni upto 21:19');
console.log(endOf('1995-08-15', '10:00'), '| Drik: Revati upto 20:05');
console.log(endOf('2026-01-26', '08:00'), '| Drik: Ashwini upto 12:32');
