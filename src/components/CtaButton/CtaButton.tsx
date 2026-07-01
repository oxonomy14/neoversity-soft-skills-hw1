import css from './CtaButton.module.css';
import Link from 'next/link';

export default function CtaButton({
  text,
  path,
}: Readonly<{
  text: string;
  path: string;
}>) {
  return (
    <Link href={path} className={css.ctaButton}>
      {text}
    </Link>
  );
}
