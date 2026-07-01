import Container from '../Container/Container';
import css from './OurStory.module.css';
import Image from 'next/image';

export default function OurStory() {
  return (
    <section className={css.content}>
      <Container>
        <div className={css.wrapper}>
          <div>
            <p className={css.subTitle}>A Passion for Cleaner Living</p>
            <h2 className={css.title}>Our Story</h2>

            <p className={css.text}>
              At Goodust Cleaning Services, we believe that a clean environment
              creates a healthier, more comfortable, and more productive life.
              Our company was founded with one simple goal: to provide reliable,
              high-quality cleaning services that homeowners and businesses can
              trust. Every cleaning project is completed with attention to
              detail, professionalism, and genuine care for our customers'
              spaces.
            </p>
            <h3 className={css.subject}>What makes us different</h3>
            <ul className={css.list}>
              <li className={css.item}>
                <svg className={css.arrowIcon}>
                  <use href={`/icons/sprite.svg#icon-arrow-right`} />
                </svg>
                <p className={css.text}>
                  Professional and experienced cleaning specialists;
                </p>
              </li>
              <li className={css.item}>
                <svg className={css.arrowIcon}>
                  <use href={`/icons/sprite.svg#icon-arrow-right`} />
                </svg>

                <p className={css.text}>
                  Flexible scheduling for homes and businesses;
                </p>
              </li>
              <li className={css.item}>
                <svg className={css.arrowIcon}>
                  <use href={`/icons/sprite.svg#icon-arrow-right`} />
                </svg>
                <p className={css.text}>
                  Eco-friendly cleaning products whenever possible;
                </p>
              </li>
              <li className={css.item}>
                <svg className={css.arrowIcon}>
                  <use href={`/icons/sprite.svg#icon-arrow-right`} />
                </svg>
                <p className={css.text}>
                  Attention to every detail and customer satisfaction.
                </p>
              </li>
            </ul>
            <p className={css.text}>
              Whether it's a family home, apartment, office, or commercial
              property, we approach every project with professionalism,
              consistency, and genuine care. Our goal is to create clean,
              welcoming spaces where people can feel comfortable every day.
            </p>
          </div>
          <div className={css.imageWrapper}>
            <Image
              src="/images/aboutus/AboutUs.webp"
              width={512}
              height={512}
              alt="About Goodust Cleaning Services"
              className={css.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
