import css from './AboutTeam.module.css';
import Container from '../Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import type { LocaleProps } from '@/types/types';

type AboutTeamProps = {
  locale: LocaleProps['locale'];
  data: {
    imageLeftText: string;
    imageLeftText2: string;
    title: string;
    subTitle: string;
    description: string;
    descriptionStart: string;
    descriptionLink: string;
    descriptionEnd: string;
    description2: string;
    button: string;
    aboutUsFeature: string;
    aboutUsFeature2: string;
    aboutUsFeature3: string;
    aboutUsFeature4: string;
  };
};

export default function AboutTeam({ data, locale }: AboutTeamProps) {
  const prefix = locale === 'uk' ? 'uk' : '';
  return (
    <section className={css.aboutUs} id="about-team">
      <Container>
        <div className={css.aboutUsContent}>
          <div className={css.imageWrapperLeft}>
            <Image
              src="/images/aboutus/aboutTeamLeftV1.webp"
              width={261}
              height={420}
              alt="About Team"
            />
            <div className={css.imageLeftText}>
              <span>{data.imageLeftText}</span>
              <p>{data.imageLeftText2}</p>
            </div>
          </div>
          <div className={css.imageWrapperRight}>
            <Image
              src="/images/aboutus/aboutTeamRightV1.webp"
              width={319}
              height={480}
              alt="About Team"
            />
          </div>
          <div className={css.textWrapper}>
            <p className={css.whoWeAre}>[ {data.subTitle} ]</p>
            <h2 className={css.aboutUsTitle}>{data.title}</h2>
            <p className={css.aboutUsDescription}>
              {data.descriptionStart}
              <Link
                href="https://neoversity.com.ua"
                target="_blank"
                rel="noopener noreferrer"
                className={css.link}
              >
                {data.descriptionLink}
              </Link>
              {data.descriptionEnd}
            </p>
            <p className={css.aboutUsDescription}>{data.description2}</p>
            <ul className={css.aboutUsFeatures}>
              <li className={css.aboutUsFeature}>{data.aboutUsFeature}</li>
              <li className={css.aboutUsFeature}>{data.aboutUsFeature2}</li>
              <li className={css.aboutUsFeature}>{data.aboutUsFeature3}</li>
              <li className={css.aboutUsFeature}>{data.aboutUsFeature4}</li>
            </ul>
            <Link className={css.btn} href={`/${prefix}#team-superpowers`}>
              {data.button}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
