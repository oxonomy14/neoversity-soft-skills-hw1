import css from './Hero.module.css';
import Container from '../Container/Container';
import Image from 'next/image';

import CtaButton from '../CtaButton/CtaButton';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroContent}>
          <div className={css.heroText}>
            <p className={css.subTitle}># From Dusty to Dazzling</p>
            <h1 className={css.title}>
              Bringing <span className={css.highlight}>Sparkle</span> Back to
              Your Home
            </h1>
            <p className={css.description}>
              Experience professional cleaning services designed to keep your
              home fresh, spotless, and welcoming. Reliable cleaners, flexible
              scheduling, and results you will love.
            </p>
            <CtaButton text="Book an Appointment" path="#book-appointment" />
          </div>

          <div className={css.heroImage}>
            <Image
              src="/images/hero/teamCleaning.webp"
              alt="Hero Image"
              width={669}
              height={720}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
