import css from './Testimonials.module.css';
import Container from '../Container/Container';
import Image from 'next/image';
import { ReviewSlider } from '../ReviewSlider/ReviewSlider';

async function getTestimonials() {
  const response = await fetch(`${process.env.N8N_TESTIMONIALS_WEBHOOK}`, {
    cache: 'no-store',
    /*   next: {
      revalidate: 3600,
    }, */
  });

  return response.json();
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();
  console.log('TESTIMONIALS:', testimonials);
  console.log('IS ARRAY:', Array.isArray(testimonials));
  console.log('DATA:', JSON.stringify(testimonials, null, 2));
  return (
    <section className={css.testimonialsSection}>
      <Container>
        <div className={css.testimonialsWrapper}>
          <div className={css.testimonialsContent}>
            <p className={css.subTitle}>[ Testimonials ]</p>
            <h2 className={css.title}>What Our Clients Say About Us</h2>
            <p className={css.description}>
              Customer satisfaction is at the heart of everything we do. From
              regular home cleaning to deep cleaning services, our clients trust
              us to keep their spaces spotless, fresh, and welcoming. Read their
              experiences below.
            </p>
            <ReviewSlider testimonials={testimonials} />
          </div>
          <div className={css.testimonialsImageWrapper}>
            <Image
              src="/images/testimonials/testimonialsTeams.webp"
              className={css.testimonialsImage}
              alt="team Goodust"
              width={508}
              height={600}
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
