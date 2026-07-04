import css from './Hero.module.css';
import Container from '../Container/Container';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroContent}>
          <div className={css.heroText}>
            <p className={css.subTitle}>
              # Learning together. Growing together.
            </p>
            <h1 className={css.title}>
              Forging <span className={css.highlight}>Ideas</span> Into Reality
            </h1>
            <p className={css.description}>
              We are DevForge — a team of aspiring software engineers united by
              curiosity, collaboration, and a passion for building meaningful
              products. Every project is another step toward becoming better
              developers.
            </p>

            <Link href="/#team-members" className={css.btn}>
              Meet Our Team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
