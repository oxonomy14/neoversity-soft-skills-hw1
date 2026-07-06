import { LocaleProps } from '@/types/types';
import css from './Navigation.module.css';
import Link from 'next/link';

type NavigationProps = {
  locale: LocaleProps['locale'];
  data: {
    home: string;
    aboutTeam: string;
    teamMembers: string;
    teamSuperpowers: string;
    futureVision: string;
  };
};

export default function Navigation({ data, locale }: NavigationProps) {
  const prefix = locale === 'uk' ? 'uk' : '';
  return (
    <nav className={css.navigation}>
      <ul className={css.navigationList}>
        <li>
          <Link href={`/${prefix}`}> {data.home} </Link>
        </li>
        <li>
          <Link href={`/${prefix}#about-team`}> {data.aboutTeam} </Link>
        </li>
        <li>
          <Link href={`/${prefix}#team-members`}> {data.teamMembers} </Link>
        </li>
        <li>
          <Link href={`/${prefix}#team-superpowers`}>
            {data.teamSuperpowers}
          </Link>
        </li>
        <li>
          <Link href={`/${prefix}#future-vision`}> {data.futureVision} </Link>
        </li>
      </ul>
    </nav>
  );
}
