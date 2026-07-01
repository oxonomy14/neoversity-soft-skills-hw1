'use client';

import Container from '../Container/Container';
import css from './CtaContact.module.css';
import Image from 'next/image';

export default function CtaContact() {
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.content}>
            <h2 className={css.title}>Ready for a Cleaner Home?</h2>
            <p className={css.description}>
              Book your cleaning today and let our experienced professionals
              take care of the rest.
            </p>
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
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                alert('Open Form Booking');
              }}
            >
              Book a Cleaning
            </button>
          </div>
          <div className={css.imageWrapper}>
            <Image
              src="/images/contact/ctaImage.webp"
              width={640}
              height={360}
              alt="Ready for a Cleaner Home"
              className={css.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
