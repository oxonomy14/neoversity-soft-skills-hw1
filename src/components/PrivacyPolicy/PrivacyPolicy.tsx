import Container from '../Container/Container';
import css from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <section className={css.content}>
        <Container>
          <div className={css.wrapper}>
            <p className={css.lastUpdate}>
              <strong>Last Updated:</strong> June 25, 2026
            </p>
            <div className={css.section}>
              <h2>1. Information We Collect</h2>
              <p>
                Goodust may collect personal information that you voluntarily
                provide when contacting us, requesting a quote, booking a
                service, or subscribing to updates. This information may include
                your name, email address, phone number, service address, and
                other relevant details.
              </p>
            </div>

            <div className={css.section}>
              <h2>2. How We Use Your Information</h2>
              <p>
                We use collected information to provide and improve our
                services, process bookings, communicate with customers, respond
                to inquiries, and deliver a better user experience. Information
                may also be used for administrative and operational purposes.
              </p>
            </div>

            <div className={css.section}>
              <h2>3. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar technologies to enhance
                website functionality, analyze traffic, and improve user
                experience. Users may choose to disable cookies through their
                browser settings; however, certain features of the website may
                not function properly.
              </p>
            </div>
            <div className={css.section}>
              <h2>4. Information Sharing</h2>
              <p>
                Goodust does not sell, rent, or trade personal information to
                third parties. Information may be shared only with trusted
                service providers or when required by law, regulation, or legal
                process.
              </p>
            </div>
            <div className={css.section}>
              <h2>5. Data Security</h2>
              <p>
                We implement reasonable technical and organizational measures to
                protect personal information against unauthorized access,
                disclosure, alteration, or destruction. While we strive to
                safeguard data, no method of transmission over the internet is
                completely secure.
              </p>
            </div>
            <div className={css.section}>
              <h2>6. Data Retention</h2>
              <p>
                Personal information is retained only for as long as necessary
                to fulfill the purposes described in this Privacy Policy, comply
                with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </div>
            <div className={css.section}>
              <h2>7. Your Rights</h2>
              <p>
                Depending on your location and applicable laws, you may have the
                right to access, update, correct, or request deletion of your
                personal information. You may also object to certain processing
                activities or withdraw previously granted consent.
              </p>
            </div>
            <div className={css.section}>
              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to external websites operated by
                third parties. We are not responsible for the content, privacy
                practices, or policies of those websites and encourage users to
                review their privacy policies separately.
              </p>
            </div>
            <div className={css.section}>
              <h2>9. Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy or the
                handling of your personal information, please contact us:
              </p>
              <p>
                <strong>Goodust Cleaning Services</strong>
                <br />
                Email: hello@goodust.demo <br />
                Phone: +1 (234) 567-8910
              </p>
              <p>
                We will respond to privacy-related inquiries as promptly as
                reasonably possible.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
