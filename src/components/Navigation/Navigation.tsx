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
          <Link href="/#about-team">About Team</Link>
        </li>
        <li>
          <Link href="/#team-members">Team Members</Link>
        </li>
        <li>
          <Link href="/#team-superpowers">Team Superpowers</Link>
        </li>
        <li>
          <Link href="/#future-vision">Future Vision</Link>
        </li>
      </ul>
    </nav>
  );
}
