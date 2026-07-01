// app/disclaimer/page.tsx

import Disclaimer from '@/components/Disclaimer/Disclaimer';
import PageHero from '@/components/PageHero/PageHero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

export const metadata = {
  title: 'Disclaimer | Goodust',
  description:
    'Read important legal information, limitations of liability, and disclaimers regarding the use of Goodust services and website.',
};

export default function CookiePage() {
  return (
    <LayoutShell>
      <PageHero
        subTitle="# Legal Information"
        title="Disclaimer"
        description="Important information regarding the use of our website, services, and limitations of liability."
        bgImage="/images/pages/disclaimer.webp"
      />
      <Disclaimer />
    </LayoutShell>
  );
}
