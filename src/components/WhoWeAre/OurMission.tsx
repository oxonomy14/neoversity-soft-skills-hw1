import Container from '../Container/Container';
import css from './OurMission.module.css';

export default function OurMission() {
  return (
    <section className={css.content}>
      <Container>
        <div className={css.contentWrapper}>
          <p className={css.subTitle}>Cleaning That Makes Life Easier</p>
          <h2 className={css.title}>Our Mission</h2>

          <p className={css.text}>
            Our mission is to provide dependable residential and commercial
            cleaning services that improve everyday comfort and well-being. We
            focus on quality, reliability, and long-term customer relationships
            by delivering exceptional cleaning solutions with every visit.
          </p>
        </div>
      </Container>
    </section>
  );
}
