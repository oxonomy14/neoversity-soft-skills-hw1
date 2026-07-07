import { dictionary as en } from '@/data/en';
import { dictionary as uk } from '@/data/uk';
import type { LocaleProps } from '@/types/types';

export function getDictionary(locale: LocaleProps['locale']) {
  return locale === 'uk' ? uk : en;
}
