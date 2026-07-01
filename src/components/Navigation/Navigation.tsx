import css from './Navigation.module.css';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <ul className={css.navigationList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/#service">Services</Link>
        </li>
        <li>
          <Link href="/#book-appointment">Appointment</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
