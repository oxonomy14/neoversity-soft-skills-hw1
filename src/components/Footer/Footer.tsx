import ButtonUp from '../ButtonUp/ButtonUp';
import Container from '../Container/Container';
import NavigationFooter from '../NavigationFooter/NavigationFooter';
import Image from 'next/image';
import Link from 'next/link';
import css from './Footer.module.css';
import { LocaleProps } from '@/types/types';
import { getDictionary } from '@/lib/getDictionary';

export default function Footer({ locale }: LocaleProps) {
  const dictionary = getDictionary(locale);
  const prefix = locale === 'uk' ? 'uk' : '';
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <Container>
          <div className={css.footerContentWrapper}>
            <div>
              <Image
                src="/logoFooter.webp"
                alt="DevForge Logo"
                width={178}
                height={38}
                className={css.footerLogo}
              />
              <p className={css.footerDescription}>
                {dictionary.footer.footerDescription}
              </p>
              <p className={css.footerSocialContactTitle}>
                {dictionary.footer.footerSocialContactTitle}
              </p>

              <ul className={css.footerSocialList}>
                <li className={css.footerSocialItem}>
                  <Link
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={css.footerSocialLink}
                  >
                    <svg className={css.fbIcon}>
                      <use href={`/icons/sprite.svg#icon-fb`} />
                    </svg>
                  </Link>
                </li>
                <li className={css.footerSocialItem}>
                  <Link
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={css.footerSocialLink}
                  >
                    <svg className={css.xIcon}>
                      <use href={`/icons/sprite.svg#icon-x`} />
                    </svg>
                  </Link>
                </li>
                <li className={css.footerSocialItem}>
                  <Link
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={css.footerSocialLink}
                  >
                    <svg className={css.instagramIcon}>
                      <use href={`/icons/sprite.svg#icon-instagram`} />
                    </svg>
                  </Link>
                </li>
                <li className={css.footerSocialItem}>
                  <Link
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={css.footerSocialLink}
                  >
                    <svg className={css.youtubeIcon}>
                      <use href={`/icons/sprite.svg#icon-youtube`} />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={css.footerMenu}>
              <div>
                <h3 className={css.footerMenuTitle}>
                  {dictionary.footer.footerMenuTitle}
                </h3>

                <ul className={css.footerMenuList}>
                  <li className={css.footerMenuItem}>
                    <Link href={`/${prefix}`}>
                      {dictionary.footer.footerMenuItem}
                    </Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href={`/${prefix}`}>
                      {dictionary.footer.footerMenuItem2}
                    </Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href={`/${prefix}`}>
                      {dictionary.footer.footerMenuItem3}
                    </Link>
                  </li>

                  <li className={css.footerMenuItem}>
                    <Link href={`/${prefix}/blog`}>
                      {dictionary.footer.footerMenuItem4}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={css.footerMenuTitle}>
                  {dictionary.footer.footerMenuTitle2}
                </h3>

                <ul className={css.footerMenuList}>
                  <li className={css.footerMenuItem}>
                    <Link href={`/${prefix}#about-team`}>
                      {dictionary.footer.footerMenuItem5}
                    </Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href={`/${prefix}#team-members`}>
                      {dictionary.footer.footerMenuItem6}
                    </Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href={`/${prefix}#team-superpowers`}>
                      {dictionary.footer.footerMenuItem7}
                    </Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href={`/${prefix}#future-vision`}>
                      {dictionary.footer.footerMenuItem8}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={css.footerMenuTitle}>
                  {dictionary.footer.footerMenuTitle3}
                </h3>

                <ul className={css.footerMenuContactList}>
                  <li className={css.footerMenuContactItem}>
                    <div className={css.footerMenuContactWrapper}>
                      <div className={css.wrapperIcon}>
                        <svg className={css.phoneIcon}>
                          <use href={`/icons/sprite.svg#icon-phone`} />
                        </svg>
                      </div>
                      <div>
                        <p className={css.footerMenuContactTitle}>
                          {dictionary.footer.footerMenuContactTitle}
                        </p>
                        <p className={css.footerMenuContactDescription}>
                          +66 (80) xxx-xx-xx
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className={css.footerMenuContactItem}>
                    <div className={css.footerMenuContactWrapper}>
                      <div className={css.wrapperIcon}>
                        <svg className={css.emailIcon}>
                          <use href={`/icons/sprite.svg#icon-email`} />
                        </svg>
                      </div>
                      <div>
                        <p className={css.footerMenuContactTitle}>
                          {dictionary.footer.footerMenuContactTitle2}
                        </p>
                        <p className={css.footerMenuContactDescription}>
                          hello@devforge.demo
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className={css.footerMenuContactItem}>
                    <div className={css.footerMenuContactWrapper}>
                      <div className={css.wrapperIcon}>
                        <svg className={css.chatIcon}>
                          <use href={`/icons/sprite.svg#icon-chat`} />
                        </svg>
                      </div>
                      <div>
                        <p className={css.footerMenuContactTitle}>
                          {dictionary.footer.footerMenuContactTitle3}
                        </p>
                        <p className={css.footerMenuContactDescription}>
                          +66 (80) xxx-xx-xx
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={css.footerBottom}>
        <Container>
          <div className={css.footerBottomContent}>
            <p className={css.footerCopyright}>
              &copy; {new Date().getFullYear()} DevForge -{' '}
              {dictionary.footer.footerCopyright}
            </p>
            <div className={css.footerNavigation}>
              <NavigationFooter data={dictionary.footer} locale={locale} />
              <ButtonUp />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
