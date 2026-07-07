import css from './NavigationFooter.module.css';
import Link from 'next/link';
import { LocaleProps } from '@/types/types';

type NavigationFooterProps = {
  locale: LocaleProps['locale'];
  data: {
    navigationFooterItem: string;
    navigationFooterItem2: string;
    navigationFooterItem3: string;
  };
};

export default function NavigationFooter({
  data,
  locale,
}: NavigationFooterProps) {
  const prefix = locale === 'uk' ? 'uk' : '';
  return (
    <nav className={css.navigationFooter}>
      <ul className={css.navigationFooterList}>
        <li className={css.navigationFooterItem}>
          <Link href={`/${prefix}`}>{data.navigationFooterItem}</Link>
        </li>
        <li className={css.navigationFooterItem}>
          <Link href={`/${prefix}`}>{data.navigationFooterItem2}</Link>
        </li>
        <li className={css.navigationFooterItem}>
          <Link href={`/${prefix}`}>{data.navigationFooterItem3}</Link>
        </li>
      </ul>
    </nav>
  );
}
