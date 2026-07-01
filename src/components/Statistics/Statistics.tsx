import Container from '../Container/Container';
import css from './Statistics.module.css';
import Image from 'next/image';

export default function Statistics() {
  return (
    <section className={css.sectionStatistics}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.content}>
            <p className={css.subTitle}>[ Our Experience ]</p>
            <h2 className={css.title}>
              From the office to your home, we take care of cleaning all
            </h2>
            <p className={css.description}>
              We provide professional residential and commercial cleaning
              services designed to keep your home, office, and workspace
              spotless. Our experienced team uses proven cleaning methods to
              deliver exceptional results and a healthier environment.
            </p>
            <p className={css.description}>
              From routine house cleaning and office maintenance to window,
              carpet, and deep cleaning services, we focus on quality,
              reliability, and customer satisfaction to ensure every space looks
              its best.
            </p>
            <ul className={css.list}>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>Home Cleaning</span>

                  <div className={css.progressBar}>
                    <div className={css.progressFill} style={{ width: '93%' }}>
                      <span className={css.percent}>93%</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>Window Cleaning</span>

                  <div className={css.progressBar}>
                    <div className={css.progressFill} style={{ width: '88%' }}>
                      <span className={css.percent}>88%</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>Office Cleaning</span>

                  <div className={css.progressBar}>
                    <div className={css.progressFill} style={{ width: '71%' }}>
                      <span className={css.percent}>71%</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>Furniture Cleaning</span>

                  <div className={css.progressBar}>
                    <div className={css.progressFill} style={{ width: '75%' }}>
                      <span className={css.percent}>75%</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={css.imageWrapper}>
            <Image
              src="/images/statistic/ourExperience.webp"
              alt="our experience"
              width={600}
              height={458}
              className={css.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
