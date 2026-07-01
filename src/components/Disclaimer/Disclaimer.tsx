import Container from '../Container/Container';
import css from './Disclaimer.module.css';

export default function Disclaimer() {
  return (
    <>
      <section className={css.content}>
        <Container>
          <div className={css.wrapper}>
            <p className={css.lastUpdate}>
              <strong>Last Updated:</strong> June 25, 2026
            </p>
            <div className={css.section}>
              <h2>1. General Information</h2>
              <p>
                The information provided on the Goodust website is for general
                informational purposes only. While we strive to keep all
                information accurate and up to date, we make no guarantees
                regarding the completeness, accuracy, reliability, or
                availability of any content on this website.
              </p>
            </div>

            <div className={css.section}>
              <h2>2. Service Availability</h2>
              <p>
                Our cleaning services are subject to availability and may vary
                depending on location, scheduling, weather conditions, staffing,
                or other operational factors. Goodust reserves the right to
                modify, suspend, or discontinue any service without prior
                notice.
              </p>
            </div>

            <div className={css.section}>
              <h2>3. No Professional Advice</h2>

              <p>
                The content on this website is provided for general information
                only and should not be considered legal, financial, medical, or
                professional advice. Users should seek appropriate professional
                guidance when necessary.
              </p>
            </div>
            <div className={css.section}>
              <h2>4. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, Goodust shall
                not be liable for any direct, indirect, incidental,
                consequential, or special damages arising from the use of our
                website or services, including delays, interruptions, or
                temporary unavailability.
              </p>
            </div>
            <div className={css.section}>
              <h2>5. External Links</h2>
              <p>
                Our website may contain links to third-party websites for your
                convenience. Goodust does not control, endorse, or assume
                responsibility for the content, privacy practices, or policies
                of any external websites.
              </p>
            </div>
            <div className={css.section}>
              <h2>6. Service Results</h2>
              <p>
                Cleaning results may vary depending on the condition of the
                property, materials, stains, age of surfaces, and other factors
                beyond our control. While we are committed to delivering
                high-quality services, we cannot guarantee that every stain,
                odor, or imperfection can be completely removed.
              </p>
            </div>
            <div className={css.section}>
              <h2>7. Website Availability</h2>
              <p>
                We make reasonable efforts to keep our website available and
                functioning properly. However, Goodust does not guarantee
                uninterrupted access and is not responsible for temporary
                outages caused by maintenance, technical issues, or
                circumstances beyond our control.
              </p>
            </div>
            <div className={css.section}>
              <h2>8. Changes to This Disclaimer</h2>
              <p>
                Goodust reserves the right to update or modify this Disclaimer
                at any time without prior notice. Any changes will become
                effective immediately upon publication on this page.
              </p>
            </div>

            <div className={css.section}>
              <h2>9. Contact Information</h2>
              <p>
                If you have any questions regarding this Disclaimer, please
                contact us:
              </p>
              <p>
                <strong>Goodust Cleaning Services</strong>
                <br />
                Email: hello@goodust.demo <br />
                Phone: +1 (234) 567-8910
              </p>
              <p>
                We will be happy to answer any questions regarding this
                Disclaimer or our services.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
