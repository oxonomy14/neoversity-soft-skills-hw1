'use client';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import type { LocaleProps } from '@/types/types';

type LayoutShellProps = {
  children: React.ReactNode;
  locale: LocaleProps['locale'];
};

export default function LayoutShell({ children, locale }: LayoutShellProps) {
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer  />
    </>
  );
}
