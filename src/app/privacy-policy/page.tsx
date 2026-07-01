// app/privacy-policy/page.tsx

import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy';
import PageHero from '@/components/PageHero/PageHero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

export const metadata = {
  title: 'Privacy Policy | Goodust',
  description:
    'Learn how Goodust collects, uses, stores, and protects your personal information when you use our website and professional cleaning services.',
};

export default function PrivacyPage() {
  return (
    <LayoutShell>
      <PageHero
        subTitle="# Legal Information"
        title="Privacy Policy"
        description="Learn how Goodust collects, uses, stores, and protects your personal information when you use our website and professional cleaning services."
        bgImage="/images/pages/privacyPolicy.webp"
      />
      <PrivacyPolicy />
    </LayoutShell>
  );
}
