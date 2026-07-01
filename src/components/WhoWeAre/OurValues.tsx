'use client';
import css from './OurValues.module.css';
import Container from '../Container/Container';
import Image from 'next/image';

export default function OurValues() {
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.imageWrapper}>
            <Image
              src="/images/aboutus/AboutUsV2.webp"
              alt="Our Values"
              width={438}
              height={786}
              className={css.image}
            />
            <div className={css.imageContent}>
              <div className={css.imageContentIcon}>
                <svg className={css.medalIcon}>
                  <use href={`/icons/sprite.svg#icon-medal`} />
                </svg>
              </div>
              <div>
                <p className={css.imageContentText}>Eco-Friendly Cleaning</p>
              </div>
            </div>
          </div>
          <div className={css.content}>
            <p className={css.subTitle}>[ Our Commitment ]</p>
            <h2 className={css.title}>Our Values</h2>
            <p className={css.description}>
              Our values guide every cleaning service we provide, ensuring
              quality, trust, professionalism, and genuine care.
            </p>
            <ul className={css.list}>
              <li className={css.item}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon}>
                    <use href={`/icons/sprite.svg#icon-medal-2`} />
                  </svg>
                </div>
                <div>
                  <h3 className={css.itemTitle}>Quality</h3>
                  <p className={css.itemDescription}>
                    Every project is completed with precision, attention to
                    detail, and consistently spotless results.
                  </p>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon}>
                    <use href={`/icons/sprite.svg#icon-thumb_up`} />
                  </svg>
                </div>
                <div>
                  <h3 className={css.itemTitle}>Integrity</h3>
                  <p className={css.itemDescription}>
                    Honest communication, transparent pricing, and dependable
                    service you can always trust.
                  </p>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon}>
                    <use href={`/icons/sprite.svg#icon-verified_user`} />
                  </svg>
                </div>
                <div>
                  <h3 className={css.itemTitle}>Reliability</h3>
                  <p className={css.itemDescription}>
                    We arrive on time, work efficiently, and deliver consistent
                    results on every visit.
                  </p>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.iconWrapper}>
                  <svg className={css.icon}>
                    <use href={`/icons/sprite.svg#icon-heart`} />
                  </svg>
                </div>
                <div>
                  <h3 className={css.itemTitle}>Care</h3>
                  <p className={css.itemDescription}>
                    Safe cleaning methods and genuine care create fresh,
                    healthy, and welcoming spaces.
                  </p>
                </div>
              </li>
            </ul>
            <div className={css.cta}>
              <p className={css.ctaSubTitle}>[ BOOK TODAY ]</p>
              <h2 className={css.ctaTitle}>Ready for a Spotless Space?</h2>
              <p className={css.ctaDescription}>
                Whether you need regular home cleaning or a one-time deep clean,
                our experienced team is ready to make your home fresh, spotless,
                and welcoming.
              </p>
              <ul className={css.ctaList}>
                <li className={css.ctaItem}>
                  <svg className={css.arrowIcon}>
                    <use href={`/icons/sprite.svg#icon-arrow-right`} />
                  </svg>
                  <p className={css.ctaText}>Free Estimate</p>
                </li>
                <li className={css.ctaItem}>
                  <svg className={css.arrowIcon}>
                    <use href={`/icons/sprite.svg#icon-arrow-right`} />
                  </svg>

                  <p className={css.ctaText}>Safe Eco-Friendly Cleaning</p>
                </li>
              </ul>
              <div className={css.btnWrapper}>
                <button
                  className={css.btn}
                  onClick={() => alert('Open Modal Form')}
                >
                  Book a Cleaning
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
