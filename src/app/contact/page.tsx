// app/contact/page.tsx

import PageHero from '@/components/PageHero/PageHero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import ContactInformation from '@/components/ContactInformation/ContactInformation';
import ServiceAreas from '@/components/ServiceAreas/ServiceAreas';
import CtaContact from '@/components/CtaContact/CtaContact';
import FaqContact from '@/components/FaqContact/FaqContact';
import FaqContactSchema from '@/components/Seo/FaqContactSchema';

export const metadata = {
  title: 'Contact Goodust Cleaning Services | Free Quote',
  description:
    'Contact Goodust for reliable residential and commercial cleaning services. Request a free quote, schedule a cleaning, or speak with our friendly support team.',
  keywords: [
    'Goodust contact',
    'cleaning company contact',
    'house cleaning quote',
    'office cleaning services',
    'professional cleaners',
    'book cleaning online',
    'cleaning service near me',
  ],
  alternates: {
    canonical: '/contact',
  },

  openGraph: {
    title: 'Contact Goodust Cleaning Services | Free Quote',
    description: 'Contact Goodust for professional cleaning services.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <LayoutShell>
      <FaqContactSchema />
      <PageHero
        subTitle="# Get in Touch"
        title="Contact Goodust Cleaning Services"
        description="Have questions or need a free cleaning estimate? Our friendly team is here to help. Reach out today, and we'll get back to you as soon as possible."
        bgImage="/images/contact/contactBg.webp"
      />
      <ContactInformation />
      <ServiceAreas />
      <CtaContact />
      <FaqContact />
    </LayoutShell>
  );
}
