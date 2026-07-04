import LayoutShell from '@/components/LayoutShell/LayoutShell';

import Hero from '@/components/Hero/Hero';
import AboutUs from '@/components/AboutUs/AboutUs';

import PromoBanner from '@/components/PromoBanner/PromoBanner';
import TeamMembers from '@/components/TeamMembers/TeamMembers';
import Superpowers from '@/components/Superpowers/Superpowers';

import Future from '@/components/Future/Future';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevForge | Software Engineering Team by Neoversity',

  description:
    'Meet DevForge — a software engineering team formed through Neoversity. Discover our story, talented developers, technical skills, collaborative mindset, and vision for the future.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'DevForge | Software Engineering Team by Neoversity',
    description:
      'Meet DevForge — a software engineering team formed through Neoversity. Explore our members, skills, superpowers, and future vision.',
    url: '/',
    images: [
      {
        url: '/images/ogImage/ogMainEn.webp',
        width: 1200,
        height: 630,
        alt: 'DevForge - Software Engineering Team',
      },
    ],
  },

  twitter: {
    title: 'DevForge | Software Engineering Team by Neoversity',
    description:
      'Meet DevForge — a collaborative software engineering team built through Neoversity.',
    images: ['/images/ogImage/ogMainEn.webp'],
  },
};

export default function Home() {
  return (
    <LayoutShell>
      <Hero />
      <AboutUs />
      <PromoBanner />
      <TeamMembers />
      <Superpowers />
      <Future />
    </LayoutShell>
  );
}
