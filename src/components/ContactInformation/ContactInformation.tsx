import css from './ContactInformation.module.css';
import Container from '@/components/Container/Container';
import ContactUs from '@/components/ContactUs/ContactUs';
import ContactUsForm from '@/components/ContactUsForm/ContactUsForm';

export default function ContactInformation() {
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <div className={css.wrapper}>
          <div>
            <ContactUs />
          </div>
          <div className={css.contactUsForm}>
            <ContactUsForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
