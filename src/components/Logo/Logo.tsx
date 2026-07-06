import type { LocaleProps } from '@/types/types';
import css from './Logo.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ locale }: LocaleProps) {
  const prefix = locale === 'uk' ? 'uk' : '';
  return (
    <div className={css.logo}>
      <Link href={`/${prefix}`}>
        <Image src="/logoHeader.webp" alt="Logo" width={178} height={38} />
      </Link>
    </div>
  );
}
