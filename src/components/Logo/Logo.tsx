import css from './Logo.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className={css.logo}>
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={178} height={38} />
      </Link>
    </div>
  );
}
