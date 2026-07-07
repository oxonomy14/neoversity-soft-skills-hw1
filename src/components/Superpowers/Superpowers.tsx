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
            <p className={css.description}>{data.description}</p>
            <p className={css.description}>{data.description2}</p>
            <ul className={css.list}>
              <li className={css.item}>
                <div className={css.progressWrapper}>
                  <span className={css.label}>{data.progressLabel} </span>

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
                  <span className={css.label}>{data.progressLabel2}</span>

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
                  <span className={css.label}>{data.progressLabel3}</span>

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
                  <span className={css.label}>{data.progressLabel4} </span>

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
            {/*        <Image
              src="/images/superpowers.webp"
              alt="our experience"
              width={600}
              height={458}
              className={css.image}
              loading="eager"
            /> */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className={css.video}
            >
              <source
                src="https://res.cloudinary.com/dfoiy9rn5/video/upload/v1783456926/devForge_grgbqi"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
