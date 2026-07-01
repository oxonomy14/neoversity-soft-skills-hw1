import css from './AboutUs.module.css';
import Container from '../Container/Container';
import Image from 'next/image';
import CtaButton from '../CtaButton/CtaButton';
import BrandCompanies from '../BrandCompanies/BrandCompanies';

export default function AboutUs() {
  return (
    <section className={css.aboutUs}>
      <Container>
        <div className={css.aboutUsContent}>
          <div className={css.imageWrapperLeft}>
            <Image
              src="/images/aboutus/AboutUsLeft.webp"
              width={261}
              height={420}
              alt="About Us"
            />
            <div className={css.imageLeftText}>
              <span>15+</span>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className={css.imageWrapperRight}>
            <Image
              src="/images/aboutus/AboutUsRight.webp"
              width={319}
              height={480}
              alt="About Us"
            />
          </div>
          <div className={css.textWrapper}>
            <p className={css.whoWeAre}>[ Who We Are ]</p>
            <h2 className={css.aboutUsTitle}>
              Reliable Cleaning Services You Can Trust
            </h2>
            <p className={css.aboutUsDescription}>
              At Goodust, we transform dusty spaces into clean, fresh, and
              comfortable environments. Our mission is to deliver exceptional
              cleaning services with attention to detail, reliability, and
              customer satisfaction at the heart of everything we do.
            </p>
            <p className={css.aboutUsDescription}>
              From routine home cleaning to comprehensive deep-clean services,
              our trained professionals use proven methods and eco-friendly
              products to ensure outstanding results. We work around your
              schedule and treat every space as if it were our own.
            </p>
            <ul className={css.aboutUsFeatures}>
              <li className={css.aboutUsFeature}>Professional Team</li>
              <li className={css.aboutUsFeature}>Quick Cleaning Service</li>
              <li className={css.aboutUsFeature}>Reliable & On-Time</li>
              <li className={css.aboutUsFeature}>Flexible Scheduling</li>
            </ul>
            <CtaButton text="More About Us" path="#" />
          </div>
        </div>
        <div className={css.trustedBy}>
          <p className={css.trustedByText}>
            Trusted By Thousands Of Organizations
          </p>
        </div>
        <BrandCompanies />
      </Container>
    </section>
  );
}
