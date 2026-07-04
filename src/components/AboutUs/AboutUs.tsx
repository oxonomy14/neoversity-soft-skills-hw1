import css from './AboutUs.module.css';
import Container from '../Container/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
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
              <span>2026</span>
              <p>Our Journey Began</p>
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
            <p className={css.whoWeAre}>[ Who We Are ]</p>
            <h2 className={css.aboutUsTitle}>
              Every Great Team - Starts With A Story
            </h2>
            <p className={css.aboutUsDescription}>
              DevForge is a student team's of aspiring software engineers
              brought together by Neoversity. Although we come from different
              backgrounds, we share the same ambition—to learn, collaborate, and
              build meaningful digital products. This project tells the story of
              who we are, what drives us, and how we're growing together as a
              team.
            </p>
            <p className={css.aboutUsDescription}>
              Each team member contributes unique skills, experiences, and
              perspectives. Together, we're building more than software—we're
              building trust, friendships, and the foundation for our future
              careers in tech.
            </p>
            <ul className={css.aboutUsFeatures}>
              <li className={css.aboutUsFeature}>Diverse Backgrounds</li>
              <li className={css.aboutUsFeature}>Collaborative Mindset</li>
              <li className={css.aboutUsFeature}>Continuous Learning</li>
              <li className={css.aboutUsFeature}>Problem Solving</li>
            </ul>
            <Link className={css.btn} href="/#team-members">
              Meet the Team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
