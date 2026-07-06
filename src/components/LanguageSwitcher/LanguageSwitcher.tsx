import Link from 'next/link';
import css from './LanguageSwitcher.module.css';
import type { LocaleProps } from '@/types/types';

export default function LanguageSwitcher({ locale }: LocaleProps) {
  return (
    <>
      <div className={css.languageSwitcher}>
        {locale === 'en' ? (
          <Link className={css.itemLanguage} href="/uk">
            UA
          </Link>
        ) : (
          <Link className={css.itemLanguage} href="/">
            EN
          </Link>
        )}
      </div>
    </>
  );
}
