import Container from '../Container/Container';
import css from './Faq.module.css';
import { faqItems } from '@/data/faq';

export default function Faq() {
  return (
    <section className={css.sectionWrapper} id="faq">
      <Container>
        <p className={css.subTitle}>[ FAQ ]</p>
        <h2 className={css.title}>Frequently Asked Questions</h2>
        <p className={css.description}>
          Find answers to the most common questions about our cleaning services,
          booking process, pricing, and service guarantees.
        </p>

        <ul className={css.faqList}>
          {faqItems.map(({ id, question, answer }) => (
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
