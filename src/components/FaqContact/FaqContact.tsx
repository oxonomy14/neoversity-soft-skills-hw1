import Container from '../Container/Container';
import css from './FaqContact.module.css';
import { faqItemsContact } from '@/data/faq';

export default function FaqContact() {
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <p className={css.subTitle}>[ FAQ ]</p>
        <h2 className={css.title}>Frequently Asked Questions</h2>
        <p className={css.description}>
          Before contacting us, you may find the answer you're looking for
          below. We've answered the questions our customers ask most often.
        </p>

        <ul className={css.faqList}>
          {faqItemsContact.map(({ id, question, answer }) => (
            <li key={id} className={css.faqItem}>
              <details>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
