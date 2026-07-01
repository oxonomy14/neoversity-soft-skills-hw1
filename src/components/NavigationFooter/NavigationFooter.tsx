import css from './NavigationFooter.module.css';
import Link from 'next/link';

export default function NavigationFooter() {
  return (
    <nav className={css.navigationFooter}>
      <ul className={css.navigationFooterList}>
        <li className={css.navigationFooterItem}>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </li>
        <li className={css.navigationFooterItem}>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li className={css.navigationFooterItem}>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </li>
      </ul>
    </nav>
  );
}
