// app/terms-conditions/page.tsx

import Terms from '@/components/Terms/Terms';
import PageHero from '@/components/PageHero/PageHero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

export const metadata = {
  title: 'Terms of Use | Goodust',
  description:
    'Read the terms and conditions governing the use of Goodust cleaning services.',
};

export default function TermsPage() {
  return (
    <LayoutShell>
      <PageHero
        subTitle="# Legal Information"
        title="Terms of Use"
        description="Please read these terms and conditions carefully before using Goodust cleaning services."
        bgImage="/images/pages/termsOfUse.webp"
      />
      <Terms />
    </LayoutShell>
  );
}
