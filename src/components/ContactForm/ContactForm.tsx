import css from './ContactForm.module.css';
import Container from '../Container/Container';
import ContactInfo from '../ContactInfo/ContactInfo';
import Form from '../Form/Form';

export default function ContactForm() {
  return (
    <section className={css.contactFormSection} id="book-appointment">
      <div className={css.contactFormBg}>
        <Container>
          <div className={css.contactFormWrapper}>
            <div className={css.contactForm}>
              <Form />
            </div>
            <div className={css.contactFormContent}>
              <p className={css.contactFormSubtitle}>[ Book an Appointment ]</p>
              <h2 className={css.contactFormTitle}>
                Bring back the freshness and comfort your home deserves
              </h2>
              <p className={css.contactFormText}>
                <span>
                  Trusted professionals providing exceptional cleaning services
                  with care, precision, and attention to detail.
                </span>
              </p>
              <p className={css.contactFormDescription}>
                From routine maintenance to deep cleaning solutions, we help
                homeowners enjoy a cleaner, healthier, and more comfortable
                space. Schedule your appointment today and let us handle the
                hard work while you enjoy the results.
              </p>
              <ContactInfo />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
