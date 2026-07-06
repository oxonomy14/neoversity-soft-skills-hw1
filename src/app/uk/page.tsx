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
  title: 'DevForge | Команда інженерів програмного забезпечення від Neoversity',

  description:
    'Познайомтеся з DevForge — командою інженерів програмного забезпечення, сформованою в Neoversity. Дізнайтеся нашу історію, познайомтеся з талановитими розробниками, їхніми технічними навичками, командним підходом і баченням майбутнього.',

  alternates: {
    canonical: '/uk',
    languages: {
      en: '/',
      uk: '/uk',
    },
  },

  openGraph: {
    title:
      'DevForge | Команда інженерів програмного забезпечення від Neoversity',
    description:
      'Познайомтеся з DevForge — командою інженерів програмного забезпечення, створеною в Neoversity. Досліджуйте наших учасників, навички, сильні сторони та бачення майбутнього.',
    url: '/',
    images: [
      {
        url: '/images/ogImage/ogMainUk.webp',
        width: 1200,
        height: 630,
        alt: 'DevForge — Команда інженерів програмного забезпечення',
      },
    ],
  },

  twitter: {
    title:
      'DevForge | Команда інженерів програмного забезпечення від Neoversity',
    description:
      'Познайомтеся з DevForge — командою інженерів програмного забезпечення, створеною в Neoversity.',
    images: ['/images/ogImage/ogMainUk.webp'],
  },
};

export default function Home() {
  const dictionary = getDictionary('uk');
  return (
    <LayoutShell locale="uk">
      <Hero data={dictionary.hero} locale="uk" />
      <AboutTeam />
      <PromoBanner />
      <TeamMembers cardMembers={dictionary.cardMembers} />
      <Superpowers />
      <Future />
    </LayoutShell>
  );
}
