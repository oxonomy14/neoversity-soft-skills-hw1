import LayoutShell from '@/components/LayoutShell/LayoutShell';
import css from './page.module.css';
import Hero from '@/components/Hero/Hero';
import AboutUs from '@/components/AboutUs/AboutUs';
import ContactForm from '@/components/ContactForm/ContactForm';
import Testimonials from '@/components/Testimonials/Testimonials';
import PromoBanner from '@/components/PromoBanner/PromoBanner';
import Services from '@/components/Services/Services';
import Statistics from '@/components/Statistics/Statistics';
import CtaBanner from '@/components/CtaBanner/CtaBanner';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Faq from '@/components/Faq/Faq';
import type { Metadata } from 'next';
import FaqHomeSchema from '@/components/Seo/FaqHomeSchema';

export const metadata: Metadata = {
  title: 'Home & Office Cleaning Services',
  description:
    'Professional home and office cleaning services. Deep cleaning, carpet cleaning, window cleaning, furniture cleaning, and laundry services.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Home & Office Cleaning Services | Goodust',
    description:
      'Professional home and office cleaning services. Deep cleaning, carpet cleaning, window cleaning, furniture cleaning, and laundry services.',
    url: '/',
  },
};

export default function Home() {
  return (
    <LayoutShell>
      <FaqHomeSchema />
      <Hero />
      <AboutUs />
      <PromoBanner />
      <Services />
      <Statistics />
      <CtaBanner />
      <WhyChooseUs />
      <HowItWorks />
      <ContactForm />
      <Testimonials />
      <Faq />
    </LayoutShell>
  );
}
