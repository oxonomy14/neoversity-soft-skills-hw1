import Container from '../Container/Container';
import css from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <div className={css.content}>
          <p className={css.subTitle}>[ How It Works ]</p>
          <h2 className={css.title}>Our Cleaning Work Approach</h2>
          <p className={css.description}>
            Our professional cleaning process is designed to deliver spotless
            results with maximum convenience. From scheduling your appointment
            to completing the cleaning service and ensuring customer
            satisfaction, we provide reliable residential and commercial
            cleaning solutions tailored to your needs.
          </p>
        </div>
        <div className={css.steps}>
          <div className={css.stepItem}>
            <svg className={css.circleIcon}>
              <use href={`/icons/sprite.svg#icon-circle`} />
            </svg>
          </div>
          <div className={css.stepItem}>
            <svg className={css.circleIcon}>
              <use href={`/icons/sprite.svg#icon-circle`} />
            </svg>
          </div>
          <div className={css.stepItem}>
            <svg className={css.circleIcon}>
              <use href={`/icons/sprite.svg#icon-circle`} />
            </svg>
          </div>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.itemSubTitle}>Step 1</p>
            <h3 className={css.itemTitle}>Schedule Appointment</h3>
            <p className={css.itemText}>
              Book your cleaning service in minutes by choosing a convenient
              date and time that fits your schedule.
            </p>
          </li>
          <li className={css.item}>
            <p className={css.itemSubTitle}>Step 2</p>
            <h3 className={css.itemTitle}>Cleaning Performed</h3>
            <p className={css.itemText}>
              Our experienced cleaning professionals thoroughly clean your home
              or office using proven methods and eco-friendly products.
            </p>
          </li>
          <li className={css.item}>
            <p className={css.itemSubTitle}>Step 3</p>
            <h3 className={css.itemTitle}>Result Delivered</h3>
            <p className={css.itemText}>
              Enjoy a fresh, spotless, and healthier space with quality results
              and complete customer satisfaction.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
