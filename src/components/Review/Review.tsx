import css from './Review.module.css';
import type { TestimonialsData } from '@/types/testimonials.types';

export default function Review(testimonial: TestimonialsData) {
  return (
    <>
      <ul className={css.reviewList}>
        <li className={css.reviewItem}>
          <div className={css.reviewRating}>
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`${css.starIcon} ${
                  i < testimonial.rating ? css.activeStar : css.inactiveStar
                }`}
              >
                <use href="/icons/sprite.svg#icon-star" />
              </svg>
            ))}
          </div>
          <div className={css.reviewWrapper}>
            <p className={css.reviewText}>{testimonial.review}</p>
            <div className={css.fullReview}>{testimonial.review}</div>
          </div>
          <div className={css.reviewInfoWrapper}>
            <div className={css.reviewInfo}>
              <div className={css.reviewAvatarWrapper}>
                <span className={css.firstLetter}>
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className={css.name}>{testimonial.name}</p>
                <p className={css.service}>{testimonial.service}</p>
                <p className={css.reviewDate}>
                  {new Date(testimonial.date).toLocaleDateString('uk-UA')}
                </p>
              </div>
            </div>
            <div>
              <svg className={css.quoteIcon}>
                <use href={`/icons/sprite.svg#icon-quotation-marks`} />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
