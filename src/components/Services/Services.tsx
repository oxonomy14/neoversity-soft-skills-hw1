import Container from '../Container/Container';
import ServicesItems from '@/components/ServicesItems/ServicesItems';
import css from './Services.module.css';

export default function Services() {
  return (
    <section className={css.sectionServices} id="service">
      <Container>
        <div className={css.contentWrapper}>
          <div>
            <p className={css.subTitle}>[ What We Provide ]</p>
            <h2 className={css.title}>
              We provide reliable and affordable services
            </h2>
          </div>
          <div>
            <p className={css.description}>
              Goodust provides professional house cleaning, office cleaning,
              deep cleaning, furniture cleaning, and window cleaning services
              for homes and businesses. Our trained cleaners focus on quality,
              reliability, and customer satisfaction, ensuring every property
              remains clean, fresh, and well-maintained. With flexible
              scheduling and transparent pricing, we make professional cleaning
              simple and affordable.
            </p>
          </div>
        </div>
        <ServicesItems />
      </Container>
    </section>
  );
}
