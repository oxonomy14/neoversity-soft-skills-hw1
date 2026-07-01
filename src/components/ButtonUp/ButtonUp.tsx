import css from './ButtonUp.module.css';
import Link from 'next/link';

export default function ButtonUp() {
  return (
    <Link className={css.buttonUp} aria-label="Scroll to top" href="#top">
      <svg className={css.upArrowIcon}>
        <use href={`/icons/sprite.svg#icon-up-arrow`} />
      </svg>
    </Link>
  );
}
