import Container from '../Container/Container';
import css from './WhyChooseUs.module.css';

const advantages = [
  {
    id: 1,
    icon: 'icon-users',
    title: 'Experienced Team',
    text: 'Our trained professionals deliver consistent, high-quality cleaning for every property.',
  },
  {
    id: 2,
    icon: 'icon-ecoSolution',
    title: 'Eco-Friendly Approach',
    text: 'We use safe and effective cleaning products whenever possible to protect your family and the environment.',
  },
  {
    id: 3,
    icon: 'icon-calendar',
    title: 'Flexible Scheduling',
    text: 'Choose one-time, weekly, bi-weekly, or monthly cleaning that fits your routine.',
  },
  {
    id: 4,
    icon: 'icon-star-full',
    title: 'Satisfaction Guaranteed',
    text: 'Your satisfaction is our priority, and we always strive to exceed expectations.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className={css.content}>
      <Container>
        <div className={css.contentWrapper}>
          <p className={css.subTitle}>Why Customers Trust Goodust</p>
          <h2 className={css.title}>Why Choose Us</h2>
          <p className={css.text}>
            We deliver dependable cleaning solutions designed to keep every
            space spotless and comfortable.
          </p>
        </div>
        <ul className={css.grid}>
          {advantages.map((item) => (
            <li key={item.id} className={css.card}>
              <div className={css.iconWrapper}>
                <svg className={css.icon}>
                  <use href={`/icons/sprite.svg#${item.icon}`} />
                </svg>
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
