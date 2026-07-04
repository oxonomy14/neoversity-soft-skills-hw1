import css from './ButtonNav.module.css';
import Link from 'next/link';

export default function ButtonNav() {
  return (
    <Link href="/#about-team" className={css.button}>
      <span>Get Started</span>
      <svg className={css.rightArrowIcon}>
        <use href={`/icons/sprite.svg#icon-right-arrow`} />
      </svg>
    </Link>
  );
}
