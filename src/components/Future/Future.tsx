import Container from '../Container/Container';
import css from './Future.module.css';

type FutureProps = {
  data: {
    subTitle: string;
    title: string;
    description: string;
    itemSubTitle: string;
    itemTitle: string;
    itemText: string;
    itemSubTitle2: string;
    itemTitle2: string;
    itemText2: string;
    itemSubTitle3: string;
    itemTitle3: string;
    itemText3: string;
  };
};

export default function Future({ data }: FutureProps) {
  return (
    <section className={css.sectionWrapper} id="future-vision">
      <Container>
        <div className={css.content}>
          <p className={css.subTitle}>[ {data.subTitle} ]</p>
          <h2 className={css.title}>{data.title}</h2>
          <p className={css.description}>{data.description}</p>
        </div>
        <div className={css.steps}>
          <div className={css.stepItem}>
            <svg className={css.circleIcon}>
              <use href={`/icons/sprite.svg#icon-circle`} />
            </svg>
          </div>
          <div className={css.stepItem}>
            <svg className={css.circleIcon}>
              <use href={`/icons/sprite.svg#icon-circle`} />
            </svg>
          </div>
          <div className={css.stepItem}>
            <svg className={css.circleIcon}>
              <use href={`/icons/sprite.svg#icon-circle`} />
            </svg>
          </div>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.itemSubTitle}>{data.itemSubTitle}</p>
            <h3 className={css.itemTitle}>{data.itemTitle}</h3>
            <p className={css.itemText}>{data.itemText}</p>
          </li>
          <li className={css.item}>
            <p className={css.itemSubTitle}>{data.itemSubTitle2}</p>
            <h3 className={css.itemTitle}>{data.itemTitle2}</h3>
            <p className={css.itemText}>{data.itemText2}</p>
          </li>
          <li className={css.item}>
            <p className={css.itemSubTitle}>{data.itemSubTitle3}</p>
            <h3 className={css.itemTitle}>{data.itemTitle3}</h3>
            <p className={css.itemText}>{data.itemText3}</p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
