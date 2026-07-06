import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import css from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import ButtonNav from '../ButtonNav/ButtonNav';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import type { LocaleProps } from '@/types/types';
import { getDictionary } from '@/lib/getDictionary';

export default function Header({ locale }: LocaleProps) {
  const dictionary = getDictionary(locale);
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerWrapper}>
          <div className={css.headerTop}>
            <Logo locale={locale} />
            <LanguageSwitcher locale={locale} />
          </div>
          <div className={css.headerBottom}>
            <Navigation data={dictionary.navigation} locale={locale} />
            <ButtonNav title={dictionary.header.titleBtn} locale={locale} />
          </div>
        </div>
      </Container>
    </header>
  );
}
