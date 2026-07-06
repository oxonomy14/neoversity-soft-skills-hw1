import LayoutShell from '@/components/LayoutShell/LayoutShell';
import { getDictionary } from '@/lib/getDictionary';
import Hero from '@/components/Hero/Hero';
import AboutTeam from '@/components/AboutTeam/AboutTeam';

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
    languages: {
      en: '/',
      uk: '/uk',
    },
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
  const dictionary = getDictionary('en');
  return (
    <LayoutShell locale="en">
      <Hero data={dictionary.hero} locale="en" />
      <AboutTeam data={dictionary.aboutTeam} locale="en" />
      <PromoBanner data={dictionary.promoBanner} />
      <TeamMembers
        cardMembers={dictionary.cardMembers}
        data={dictionary.teamMembers}
      />
      <Superpowers />
      <Future />
    </LayoutShell>
  );
}
