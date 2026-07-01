import Container from '../Container/Container';
import css from './CookiePolicy.module.css';

export default function CookiePolicy() {
  return (
    <>
      <section className={css.content}>
        <Container>
          <div className={css.wrapper}>
            <p className={css.lastUpdate}>
              <strong>Last Updated:</strong> June 25, 2026
            </p>
            <div className={css.section}>
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help websites function properly, remember
                preferences, and improve the overall browsing experience.
              </p>
            </div>

            <div className={css.section}>
              <h2>2. How We Use Cookies</h2>
              <p>
                Goodust uses cookies to enhance website functionality, improve
                performance, analyze visitor behavior, and provide a better user
                experience. Cookies help us understand how visitors interact
                with our website and identify areas for improvement.
              </p>
            </div>

            <div className={css.section}>
              <h2>3. Types of Cookies We Use</h2>
              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly
                and cannot be disabled through our systems.
              </p>
              <h3>Performance Cookies</h3>
              <p>
                These cookies help us understand how visitors use our website by
                collecting anonymous information about page visits and
                interactions.
              </p>
              <h3>Functional Cookies</h3>
              <p>
                These cookies remember your preferences and settings to provide
                a more personalized experience.
              </p>
              <h3>Analytics Cookies</h3>
              <p>
                These cookies help us measure website traffic and understand
                user behavior so we can improve our services.
              </p>
            </div>
            <div className={css.section}>
              <h2>4. Third-Party Cookies</h2>
              <p>
                Some cookies may be placed by trusted third-party services, such
                as analytics providers or embedded content platforms. These
                third parties may collect information according to their own
                privacy policies.
              </p>
            </div>
            <div className={css.section}>
              <h2>5. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control, block, or delete cookies
                through browser settings. Please note that disabling certain
                cookies may affect website functionality and user experience.
              </p>
            </div>
            <div className={css.section}>
              <h2>6. Changes to This Cookie Policy</h2>
              <p>
                Goodust may update this Cookie Policy from time to time to
                reflect changes in technology, legal requirements, or website
                functionality. Updated versions will be posted on this page.
              </p>
            </div>

            <div className={css.section}>
              <h2>7. Contact Information</h2>
              <p>
                If you have questions regarding our use of cookies, please
                contact us:
              </p>
              <p>
                <strong>Goodust Cleaning Services</strong>
                <br />
                Email: hello@goodust.demo <br />
                Phone: +1 (234) 567-8910
              </p>
              <p>
                We will be happy to assist with any questions regarding this
                Cookie Policy.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
