export type TestimonialsData = {
  orderId: string;
  review: string;
  name: string;
  service: string;
  date: string;
  rating: number;
};

export type ReviewProps = {
  testimonials: TestimonialsData[];
};
