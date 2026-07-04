import Container from '../Container/Container';
import css from './Future.module.css';

export default function Future() {
  return (
    <section className={css.sectionWrapper} id="future-vision">
      <Container>
        <div className={css.content}>
          <p className={css.subTitle}>[ OUR FUTURE ]</p>
          <h2 className={css.title}>Our Vision Beyond Neoversity</h2>
          <p className={css.description}>
            We see DevForge as more than a student team. Every project,
            collaboration, and challenge helps us grow into confident software
            engineers ready to create products that make a real impact.
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
            <p className={css.itemSubTitle}>Learn</p>
            <h3 className={css.itemTitle}>Learning Together</h3>
            <p className={css.itemText}>
              Master modern technologies, strengthen our engineering mindset,
              and never stop improving.
            </p>
          </li>
          <li className={css.item}>
            <p className={css.itemSubTitle}>Build</p>
            <h3 className={css.itemTitle}>Building Together</h3>
            <p className={css.itemText}>
              Turn ideas into products through teamwork, creativity, and
              practical experience.
            </p>
          </li>
          <li className={css.item}>
            <p className={css.itemSubTitle}>Lead</p>
            <h3 className={css.itemTitle}>Growing Together</h3>
            <p className={css.itemText}>
              Start successful careers, create innovative solutions, and inspire
              the next generation of developers.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
