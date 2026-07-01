import ButtonUp from '../ButtonUp/ButtonUp';
import Container from '../Container/Container';
import NavigationFooter from '../NavigationFooter/NavigationFooter';
import Image from 'next/image';
import Link from 'next/link';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <Container>
          <div className={css.footerContentWrapper}>
            <div>
              <Image
                src="/logoColor.png"
                alt="Goodust Logo"
                width={178}
                height={38}
                className={css.footerLogo}
              />
              <p className={css.footerDescription}>
                Professional cleaning solutions designed to give you more time
                for what matters most. From routine housekeeping to deep
                cleaning services, Goodust delivers exceptional results with
                care and consistency.
              </p>
              <p className={css.footerSocialContactTitle}>Connect with us</p>
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
                <h3 className={css.footerMenuTitle}>Useful Link</h3>

                <ul className={css.footerMenuList}>
                  <li className={css.footerMenuItem}>
                    <Link href="/privacy-polocy">Privacy Policy</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/#faq">FAQ`s</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/disclaimer">Disclaimer</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={css.footerMenuTitle}>Company</h3>

                <ul className={css.footerMenuList}>
                  <li className={css.footerMenuItem}>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/">Our Contact</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/#service">Services</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/#book-appointment">Appointment</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/">Pricing</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={css.footerMenuTitle}>Contact Us</h3>

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
                          Call Center
                        </p>
                        <p className={css.footerMenuContactDescription}>
                          +66 (80) 567-89-10
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
                          Email Support
                        </p>
                        <p className={css.footerMenuContactDescription}>
                          hello@goodust.co.th
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
                        <p className={css.footerMenuContactTitle}>Chat Us</p>
                        <p className={css.footerMenuContactDescription}>
                          +66 (80) 567-89-12
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
              Copyright &copy; {new Date().getFullYear()} Goodust by
              <Link
                href="https://andriiweb.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> andriiweb.dev</span>
              </Link>{' '}
              All rights reserved.
            </p>
            <div className={css.footerNavigation}>
              <NavigationFooter />
              <ButtonUp />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
