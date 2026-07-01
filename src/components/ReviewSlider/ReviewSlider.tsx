'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import css from './ReviewSlider.module.css';
import Review from '../Review/Review';
import type { ReviewProps } from '@/types/testimonials.types';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

export const ReviewSlider = ({ testimonials }: ReviewProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      navigation={false}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={testimonials.length > 2}
      autoplay={
        testimonials.length > 2
          ? /*  {
            delay: 10000,
              disableOnInteraction: false, 
          
            } */ false
          : false
      }
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      className={css.swiper}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.orderId}>
          <Review {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
