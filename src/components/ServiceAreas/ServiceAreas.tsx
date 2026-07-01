import css from './ServiceAreas.module.css';
import Container from '../Container/Container';
import Image from 'next/image';

export default function ServiceAreas() {
  return (
    <section className={css.sectionServiceAreas}>
      <Container>
        <p className={css.subTitle}>Our Services</p>
        <h2 className={css.title}>Cleaning Solutions for Every Space</h2>
        <p className={css.description}>
          From private homes to offices and move-in or move-out cleanings, we
          provide professional services tailored to your needs with exceptional
          attention to detail.
        </p>
        <ul className={css.cards}>
          <li className={css.card}>
            <Image
              className={css.cardImage}
              src="/images/contact/residentialCleaning.webp"
              alt="Residential Cleaning"
              width={400}
              height={300}
            />

            <div className={css.content}>
              <div className={css.titleWrapper}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon}>
                    <use href={`/icons/sprite.svg#icon-home_work`} />
                  </svg>
                </div>
                <h3>Residential Cleaning</h3>
              </div>
              <p>
                Professional cleaning services designed to keep your home fresh,
                healthy, and spotless every day.
              </p>
            </div>
          </li>
          <li className={css.card}>
            <Image
              className={css.cardImage}
              src="/images/contact/commercialCleaning.webp"
              alt="Commercial Cleaning"
              width={400}
              height={300}
            />

            <div className={css.content}>
              <div className={css.titleWrapper}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon}>
                    <use href={`/icons/sprite.svg#icon-library`} />
                  </svg>
                </div>
                <h3>Commercial Cleaning</h3>
              </div>
              <p>
                Reliable office and workspace cleaning that creates a cleaner
                environment for employees and clients.
              </p>
            </div>
          </li>
          <li className={css.card}>
            <Image
              className={css.cardImage}
              src="/images/contact/moveInOutCleaning.webp"
              alt="Move-In / Move-Out Cleaning"
              width={400}
              height={300}
            />

            <div className={css.content}>
              <div className={css.titleWrapper}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon}>
                    <use href={`/icons/sprite.svg#icon-emoji_transportation`} />
                  </svg>
                </div>
                <h3>Move-In / Move-Out Cleaning</h3>
              </div>
              <p>
                Deep cleaning that prepares your property before moving in or
                leaves it spotless for the next occupants.
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
