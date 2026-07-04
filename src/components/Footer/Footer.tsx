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
                src="/logoFooter.webp"
                alt="DevForge Logo"
                width={178}
                height={38}
                className={css.footerLogo}
              />
              <p className={css.footerDescription}>
                DevForge is a community of aspiring software engineers learning
                at the Neoversity, building, and growing together. Through
                collaboration, real projects, and continuous practice, we turn
                knowledge into experience and prepare for successful careers in
                tech.
              </p>
              <p className={css.footerSocialContactTitle}>Follow Our Journey</p>

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
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/">Terms & Conditions</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/">Cookie Policy</Link>
                  </li>

                  <li className={css.footerMenuItem}>
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={css.footerMenuTitle}>DevForge</h3>

                <ul className={css.footerMenuList}>
                  <li className={css.footerMenuItem}>
                    <Link href="/#about-team">About Team</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/#team-members">Team Members</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/#team-superpowers">Team Superpowers</Link>
                  </li>
                  <li className={css.footerMenuItem}>
                    <Link href="/#future-vision">Future Vision</Link>
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
                          Team Contact
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
              &copy; {new Date().getFullYear()} DevForge - Learning. Building.
              Growing Together.
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
