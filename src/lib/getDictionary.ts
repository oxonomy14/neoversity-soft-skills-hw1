import { dictionary as en } from '@/data/en';
import { dictionary as uk } from '@/data/uk';

export function getDictionary(locale: 'en' | 'uk') {
  return locale === 'uk' ? uk : en;
}
