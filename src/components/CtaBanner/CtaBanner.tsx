import Container from '../Container/Container';
import css from './CtaBanner.module.css';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.content}>
            <h2 className={css.title}>More Free Time, Less Cleaning</h2>
            <p className={css.description}>
              Keep your home fresh, spotless, and welcoming with our trusted
              house cleaning services. We deliver consistent results, flexible
              scheduling, and attention to every detail.
            </p>
            <Link className={css.btn} href="#book-appointment">
              Book a Cleaning
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
