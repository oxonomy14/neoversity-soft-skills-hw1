// app/about-us/page.tsx

import PageHero from '@/components/PageHero/PageHero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';
import OurStory from '@/components/WhoWeAre/OurStory';
import WhyChooseUs from '@/components/WhoWeAre/WhyChooseUs';
import OurMission from '@/components/WhoWeAre/OurMission';
import OurValues from '@/components/WhoWeAre/OurValues';

export const metadata = {
  title: 'About Us | Goodust',
  description:
    'Learn more about Goodust Cleaning Services, our mission, values, and commitment to providing professional residential and commercial cleaning solutions.',
  keywords: [
    'about Goodust',
    'cleaning company',
    'professional cleaning',
    'residential cleaning',
    'commercial cleaning',
    'cleaning services',
  ],

  alternates: {
    canonical: '/about-us',
  },

  openGraph: {
    title: 'About Us | Goodust',
    description: 'Learn more about Goodust.',
    url: '/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <LayoutShell>
      <PageHero
        subTitle="# Who We Are"
        title="About Goodust Cleaning Services"
        description="We provide reliable residential and commercial cleaning services, helping homeowners and businesses enjoy cleaner, healthier, and more comfortable spaces every day."
        bgImage="/images/aboutus/AboutUsBg.webp"
      />
      <OurStory />
      <WhyChooseUs />
      <OurMission />
      <OurValues />
    </LayoutShell>
  );
}
