import css from './NavigationFooter.module.css';
import Link from 'next/link';

export default function NavigationFooter() {
  return (
    <nav className={css.navigationFooter}>
      <ul className={css.navigationFooterList}>
        <li className={css.navigationFooterItem}>
          <Link href="/">Terms & Conditions</Link>
        </li>
        <li className={css.navigationFooterItem}>
          <Link href="/">Privacy Policy</Link>
        </li>
        <li className={css.navigationFooterItem}>
          <Link href="/">Cookie Policy</Link>
        </li>
      </ul>
    </nav>
  );
}
