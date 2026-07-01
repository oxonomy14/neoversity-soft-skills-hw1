import css from './PageHero.module.css';
import Container from '../Container/Container';
import Image from 'next/image';

import CtaButton from '../CtaButton/CtaButton';

interface HeroProps {
  subTitle: string;
  title: React.ReactNode;
  description: string;
  bgImage?: string;
  buttonText?: string;
  buttonPath?: string;
}

export default function PageHero({
  subTitle,
  title,
  description,
  bgImage,
  buttonText,
  buttonPath,
}: HeroProps) {
  return (
    <section
      className={css.hero}
      style={{
        backgroundImage: `
    linear-gradient(
   90deg,
    rgba(17,17,17,.55) 0%,
    rgba(17,17,17,.35) 35%,
    rgba(17,17,17,.15) 65%,
    rgba(17,17,17,0) 100%
),
    url(${bgImage})
  `,
      }}
    >
      <Container>
        <div className={css.heroContent}>
          <div className={css.heroText}>
            <p className={css.subTitle}>{subTitle}</p>

            <h1 className={css.title}>{title}</h1>

            <p className={css.description}>{description}</p>

            {buttonText && buttonPath && (
              <CtaButton text={buttonText} path={buttonPath} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
