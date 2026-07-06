import css from './ButtonNav.module.css';
import Link from 'next/link';

type ButtonNavProps = {
  title: string;
  locale: 'en' | 'uk';
};

export default function ButtonNav({ title, locale }: ButtonNavProps) {
  const prefix = locale === 'uk' ? 'uk' : '';
  return (
    <Link href={`/${prefix}#about-team`} className={css.button}>
      <span>{title}</span>
      <svg className={css.rightArrowIcon}>
        <use href={`/icons/sprite.svg#icon-right-arrow`} />
      </svg>
    </Link>
  );
}
