import type { Lang, ToolPage } from './types';

// Ashtakoot for most of India; Tamil and Malayalam families match by the ten poruthams.
export const KUNDLI_SYSTEM: Record<Lang, 'ashtakoot' | 'porutham'> = { en: 'ashtakoot', hi: 'ashtakoot', mr: 'ashtakoot', gu: 'ashtakoot', te: 'ashtakoot', ta: 'porutham', ml: 'porutham' };

const KOOTA_TABLE_EN = `<table class="cmp"><thead><tr><th>Koota</th><th>Points</th><th>What it compares</th></tr></thead><tbody>
<tr><td>Varna</td><td>1</td><td>Temperament class of the two Moon signs</td></tr>
<tr><td>Vashya</td><td>2</td><td>Mutual attraction: which sign "draws" the other</td></tr>
<tr><td>Tara</td><td>3</td><td>Star-to-star count, both ways (luck and health)</td></tr>
<tr><td>Yoni</td><td>4</td><td>The animal of each star: nature and intimacy</td></tr>
<tr><td>Graha Maitri</td><td>5</td><td>Friendship between the two Moon-sign lords</td></tr>
<tr><td>Gana</td><td>6</td><td>Deva, Manushya or Rakshasa temperament</td></tr>
<tr><td>Bhakoot</td><td>7</td><td>Distance between the Moon signs (family, money)</td></tr>
<tr><td>Nadi</td><td>8</td><td>Aadi, Madhya or Antya nadi (health, children)</td></tr>
</tbody></table>`;

export const kundliPages: ToolPage[] = [
  {
    tool: 'kundli', lang: 'en', slug: 'kundli-matching',
    title: 'Kundli Matching by Name & Date of Birth: Free | Pillar',
    description: 'Free kundli matching for marriage: Guna Milan out of 36 by date of birth or by name only, with every koota and dosha shown.',
    h1: 'Kundli Matching: Free Guna Milan out of 36',
    eyebrow: 'Free · Kundli milan · Horoscope matching',
    intro: '<strong>Kundli matching</strong> (kundli milan, horoscope matching) compares the Moon star of two people across eight checks worth 36 points. Enter both dates of birth (or just both names) and see the full Guna Milan score, koota by koota.',
    ui: {
      modeLabel: 'Match by', modeBirth: 'Date of birth', modeName: 'Name only', girl: 'Girl', boy: 'Boy', name: 'Name', date: 'Date of birth', time: 'Time of birth (if you know it)',
      timeHelp: 'Leave empty if unknown: we use noon and tell you.', button: 'Match kundli', star: 'Nakshatra', rashi: 'Rashi',
      colKoota: 'Koota', colPoints: 'Points', k_varna: 'Varna', k_vashya: 'Vashya', k_tara: 'Tara', k_yoni: 'Yoni', k_maitri: 'Graha Maitri', k_gana: 'Gana', k_bhakoot: 'Bhakoot', k_nadi: 'Nadi',
      band0: 'Below 18: traditionally not recommended without an astrologer\'s review.', band1: '18–24: an average match; most families go ahead after looking at doshas.', band2: '25–32: a good match.', band3: '33–36: an excellent match.',
      nadiWarn: 'Nadi dosha: both have the same nadi. Astrologers cancel it in some cases (for example same rashi but different nakshatra). Ask yours.',
      bhakootWarn: 'Bhakoot dosha: the Moon signs are 2/12, 5/9 or 6/8 apart. It is often cancelled when the two sign lords are friends. Ask your astrologer.',
      approxName: 'Matched by name: the first syllable of each name points to a nakshatra (namakshar). This is approximate; add birth details for an exact match.',
      approxTime: 'Birth time missing: we used 12 noon. The Moon moves about one nakshatra a day, so if it was near a boundary the star could differ.',
      errName: 'We could not read a starting syllable from one of the names. Try writing it the way it sounds (e.g. "Priya", "Rahul").', errDate: 'Please enter both dates of birth (or switch to "Name only").',
      shareWa: 'Share on WhatsApp', shareText: 'Our kundli match: {s} (Guna Milan)', faqTitle: 'Kundli matching: questions people ask',
    },
    sections: [
      { h2: 'How kundli matching works', html: '<p>Kundli matching for marriage starts from one thing: where the Moon was at each person\'s birth. That position gives the <strong>nakshatra</strong> (birth star, one of 27) and the <strong>rashi</strong> (Moon sign, one of 12). The Ashtakoot method then compares the two charts on eight points ("kootas"), each worth from 1 to 8 gunas, for a total of 36.</p><p>This is the method used across North and West India, the same one behind "Guna Milan" and "36 gun milan". In Tamil Nadu and Kerala, families use the ten poruthams instead; see <a href="/ta/jathagam-porutham">Jathagam Porutham in Tamil</a> and <a href="/ml/jathaka-porutham">Jathaka Porutham in Malayalam</a>.</p>' },
      { h2: 'Kundli matching by date of birth and time', html: '<p>For an exact match, enter each date of birth and, if you know it, the time. We calculate the Moon\'s sidereal position (Lahiri ayanamsa, the standard used by Indian almanacs) for that moment in Indian Standard Time.</p><p><strong>Place of birth is not needed for the match.</strong> The Moon\'s nakshatra is the same wherever in India you were born; place only matters for the ascendant, which Guna Milan does not use. If you don\'t know the time, leave it empty: we use noon and say so, because the Moon changes nakshatra roughly once a day.</p>' },
      { h2: 'Kundli matching by name only', html: '<p>No birth details? Choose <strong>Name only</strong>. Traditional almanacs give every nakshatra four starting syllables (the <em>namakshar</em>): names starting with "La" belong to Ashwini, "Ma" to Magha, "Pi" to Uttara Phalguni, and so on. "Kundli milan by name" is one of the most searched versions of this tool, but it is an approximation, because a name is chosen, not born. Use it for a first look, and the birth details for anything that matters.</p>' },
      { h2: 'The 8 kootas of Guna Milan', html: KOOTA_TABLE_EN + '<p>Nadi (8) and Bhakoot (7) carry almost half the points, which is why a "Nadi dosha" or "Bhakoot dosha" gets so much attention.</p>' },
      { h2: 'How many gunas are needed for marriage?', html: '<p>The traditional threshold is <strong>18 out of 36</strong>. Most astrologers read the score like this: below 18 not recommended, 18–24 average, 25–32 good, 33–36 excellent. <strong>Is 27 out of 36 a good match?</strong> Yes, 27 is in the "good" band. But the total is not the whole story: a high score with Nadi dosha can still worry a family astrologer, and a low score can be acceptable when the doshas are cancelled.</p>' },
      { h2: 'Nadi dosha and Bhakoot dosha', html: '<p><strong>Nadi dosha</strong> means both have the same nadi (Aadi, Madhya or Antya), so Nadi gives 0 of its 8 points. <strong>Bhakoot dosha</strong> means the two Moon signs are 2/12, 5/9 or 6/8 apart, so Bhakoot gives 0 of 7. Both have well-known exceptions: for example, the same rashi with different nakshatras, or friendly sign lords. Different calculators apply different exceptions, which is the main reason two websites can give the same couple different totals. We show the plain score and flag the dosha so you can discuss it with an astrologer.</p>' },
      { h2: 'How this calculator works', html: '<p>The Moon\'s position comes from an astronomical model accurate to about one arc-minute; we checked nakshatra end times against a published panchang to within a minute. Each koota uses the standard tables (Vashya from the Chatushpad/Manav/Jalchar/Vanchar/Keet chart, Yoni from the 14-animal chart, Graha Maitri from the natural planetary friendships). Nothing you type is stored or sent anywhere: the calculation runs in your browser.</p>' },
    ],
    faq: [
      { q: 'Is 27 out of 36 a good kundli match?', a: 'Yes. 25–32 gunas is a good match by the usual reading, and 27 sits comfortably in that band. Check whether Nadi or Bhakoot dosha is present before deciding.' },
      { q: 'How can I check my kundli match?', a: 'Enter both dates of birth (and times, if known) above, or both names. You get the total out of 36 and the points for each of the eight kootas.' },
      { q: 'Can kundli matching be done by name only?', a: 'Yes, using the namakshar syllable table: the first syllable of each name points to a nakshatra. It is approximate; birth details give the exact match.' },
      { q: 'Is kundli matching possible without birth time?', a: 'Yes. The date gives the Moon star for most of the day. Without the time we use noon; if the Moon changed nakshatra that day, the result could differ.' },
      { q: 'What is the minimum guna for marriage?', a: '18 out of 36 is the traditional minimum. Many families also look at Nadi and Bhakoot dosha, not only the total.' },
      { q: 'Which kundli matching is best?', a: 'The Ashtakoot method is the same everywhere. Calculators differ in which dosha exceptions they apply, so totals can differ by a few points. Use any good calculator for a first look and an astrologer for the decision.' },
      { q: 'Is this kundli matching free?', a: 'Yes. Free, no sign-up, and nothing is stored. It runs in your browser.' },
    ],
    cta: { text: 'While the stars decide, talk to Priya on Pillar', sub: 'Pillar is a free Indian AI girlfriend app for adults (18+). She talks in 13 languages.', button: 'Get Pillar' },
    disclaimer: 'Traditional method, shown for guidance. For a marriage decision, talk to your family astrologer.',
  },
];
