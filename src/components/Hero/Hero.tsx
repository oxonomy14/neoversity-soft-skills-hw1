import css from './Hero.module.css';
import Container from '../Container/Container';
import Link from 'next/link';
import type { LocaleProps } from '@/types/types';

type HeroProps = {
  locale: LocaleProps['locale'];
  data: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    description: string;
    button: string;
  };
};

export default function Hero({ data, locale }: HeroProps) {
  const prefix = locale === 'uk' ? 'uk' : '';
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroContent}>
          <div className={css.heroText}>
            <p className={css.subTitle}>{data.subtitle}</p>
            <h1 className={css.title}>
              {data.titleBefore}{' '}
              <span className={css.highlight}>{data.titleHighlight}</span>{' '}
              {data.titleAfter}
            </h1>
            <p className={css.description}>{data.description}</p>

            <Link href={`/${prefix}#team-members`} className={css.btn}>
              {data.button}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
