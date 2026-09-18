export const SITE = 'https://www.pillarapp.site';
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.incline.pillar';
export const APP_NAME = 'Pillar: Indian AI Girlfriend';
export const LAST_UPDATED = '18 September 2026';
export const LANGUAGES = ['Hindi', 'Hinglish', 'English', 'Tamil', 'Telugu', 'Marathi', 'Bengali', 'Gujarati', 'Punjabi', 'Malayalam', 'Odia', 'Bhojpuri', 'Rajasthani'];

export function softwareApplication() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP_NAME,
    alternateName: 'Pillar',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Android',
    installUrl: PLAY_URL,
    sameAs: [PLAY_URL],
    url: SITE + '/',
    inLanguage: ['hi', 'en', 'ta', 'te', 'mr', 'bn', 'gu', 'pa', 'ml', 'or', 'bho', 'raj'],
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    description: 'An AI companion app with 100+ Indian companions who speak your language, send photos, take voice calls, remember you and message you first.',
  };
}

export function organization() {
  return { '@context': 'https://schema.org', '@type': 'Organization', name: 'Pillar', url: SITE + '/', sameAs: [PLAY_URL], logo: SITE + '/Logo%20Emblem.png' };
}

export function faqPage(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

export function itemList(names: string[]) {
  return { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: names.map((n, i) => ({ '@type': 'ListItem', position: i + 1, name: n })) };
}
