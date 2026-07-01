import css from './WhyChooseUs.module.css';
import Container from '../Container/Container';
import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.imageWrapper}>
            <Image
              src="/images/whyChooseUs/whyChooseUsV2.webp"
              alt="Why Choose Us"
              width={482}
              height={550}
              className={css.image}
            />
            <div className={css.imageContent}>
              <div className={css.imageContentIcon}>
                <svg className={css.medalIcon}>
                  <use href={`/icons/sprite.svg#icon-medal`} />
                </svg>
              </div>
              <div>
                <p className={css.imageContentText}>
                  Trusted Cleaning Professionals
                </p>
              </div>
            </div>
          </div>
          <div className={css.content}>
            <p className={css.subTitle}>[ Why Choose Us ]</p>
            <h2 className={css.title}>
              We care for your home like it’s our own home
            </h2>
            <p className={css.description}>
              We provide trusted cleaning services with experienced staff,
              eco-friendly solutions, and exceptional attention to detail. Enjoy
              a cleaner, healthier, and more comfortable space with every visit.
            </p>
            <ul className={css.list}>
              <li className={css.item}>
                <div className={css.iconWrapper}>
                  <svg className={css.staffIcon}>
                    <use href={`/icons/sprite.svg#icon-staff`} />
                  </svg>
                </div>
                <div>
                  <h3 className={css.itemTitle}>
                    Professional and Reliable Staff
                  </h3>
                  <p className={css.itemDescription}>
                    Our trained cleaning specialists deliver consistent,
                    high-quality results with professionalism, care, and
                    attention to every detail.
                  </p>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.iconWrapper}>
                  <svg className={css.furnitureIcon}>
                    <use href={`/icons/sprite.svg#icon-furniture`} />
                  </svg>
                </div>
                <div>
                  <h3 className={css.itemTitle}>
                    Unmatched Attention to Detail
                  </h3>
                  <p className={css.itemDescription}>
                    We focus on every corner, surface, and space to ensure a
                    deeper clean and a healthier environment.
                  </p>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.iconWrapper}>
                  <svg className={css.ecoIcon}>
                    <use href={`/icons/sprite.svg#icon-ecoSolution`} />
                  </svg>
                </div>
                <div>
                  <h3 className={css.itemTitle}>
                    Eco-Friendly Cleaning Solutions
                  </h3>
                  <p className={css.itemDescription}>
                    We use safe, environmentally friendly cleaning products that
                    protect your family, pets, and the planet.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
