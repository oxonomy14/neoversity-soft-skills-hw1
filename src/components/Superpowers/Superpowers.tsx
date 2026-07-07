import Container from '../Container/Container';
import css from './Superpowers.module.css';
import Image from 'next/image';

type SuperpowersProps = {
  data: {
    title: string;
    subTitle: string;
    description: string;
    description2: string;
    progressLabel: string;
    progressValue: string;
    progressLabel2: string;
    progressValue2: string;
    progressLabel3: string;
    progressValue3: string;
    progressLabel4: string;
    progressValue4: string;
  };
};

export default function Superpowers({ data }: SuperpowersProps) {
  return (
    <section className={css.sectionStatistics} id="team-superpowers">
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.content}>
            <p className={css.subTitle}>[ {data.subTitle} ]</p>
            <h2 className={css.title}>{data.title}</h2>
            <p className={css.description}>
              Every member of DevForge brings unique strengths to the team.
              Together, we combine technical expertise, creativity,
              communication, and a passion for continuous learning to build
              better projects and support one another throughout our journey at
              Neoversity.
            </p>
            <p className={css.description}>
              We believe that the best results come from collaboration. By
              sharing knowledge, supporting each other, and embracing new
              challenges, we're developing the skills and mindset needed to
              become confident software engineers and valuable teammates.
            </p>
            <ul className={css.list}>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>Frontend Development </span>

                  <div className={css.progressBar}>
                    <div
                      className={css.progressFill}
                      style={{ width: `${data.progressValue}%` }}
                    >
                      <span className={css.percent}>{data.progressValue}%</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>AI Integration</span>

                  <div className={css.progressBar}>
                    <div
                      className={css.progressFill}
                      style={{ width: `${data.progressValue2}%` }}
                    >
                      <span className={css.percent}>
                        {data.progressValue2}%
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>Team Collaboration</span>

                  <div className={css.progressBar}>
                    <div
                      className={css.progressFill}
                      style={{ width: `${data.progressValue3}%` }}
                    >
                      <span className={css.percent}>
                        {data.progressValue3}%
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>Problem Solving </span>

                  <div className={css.progressBar}>
                    <div
                      className={css.progressFill}
                      style={{ width: `${data.progressValue4}%` }}
                    >
                      <span className={css.percent}>
                        {data.progressValue4}%
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={css.imageWrapper}>
            <Image
              src="/images/superpowers.webp"
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
