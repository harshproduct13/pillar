import type { Lang, ToolPage } from './types';
import { kundliPages } from './kundli';
import { flamesPages } from './flames';
import { lovePages } from './love';
import { pickupPages } from './pickup';
import { namePages } from './name';
import { hiPages } from './lang/hi';
import { taPages } from './lang/ta';
import { tePages } from './lang/te';
import { mrPages } from './lang/mr';
import { mlPages } from './lang/ml';
import { guPages } from './lang/gu';

export const allToolPages: ToolPage[] = [...kundliPages, ...flamesPages, ...lovePages, ...pickupPages, ...namePages,
  ...hiPages, ...taPages, ...tePages, ...mrPages, ...mlPages, ...guPages];
export const toolPagesIn = (lang: Lang) => allToolPages.filter((p) => p.lang === lang);
