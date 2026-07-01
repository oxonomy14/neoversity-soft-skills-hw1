// app/cookie-policy/page.tsx

import CookiePolicy from '@/components/CookiePolicy/CookiePolicy';
import PageHero from '@/components/PageHero/PageHero';
import LayoutShell from '@/components/LayoutShell/LayoutShell';

export const metadata = {
  title: 'Cookie Policy | Goodust',
  description:
    'Learn how Goodust uses cookies and similar technologies to improve website functionality, performance, and user experience.',
};

export default function CookiePage() {
  return (
    <LayoutShell>
      <PageHero
        subTitle="# Legal Information"
        title="Cookie Policy"
        description="Learn how Goodust uses cookies and similar technologies to improve website functionality, analyze traffic, and enhance your browsing experience."
        bgImage="/images/pages/cookiePolicy.webp"
      />
      <CookiePolicy />
    </LayoutShell>
  );
}
