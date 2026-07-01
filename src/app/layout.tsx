import React from 'react';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/800.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import 'modern-normalize/modern-normalize.css';
import '../styles/globals.css';
import 'react-phone-number-input/style.css';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'Goodust',
    template: '%s | Goodust',
  },

  description: 'Professional cleaning services for homes and businesses.',

  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
  },

  openGraph: {
    type: 'website',
    siteName: 'Goodust',
    title: 'Goodust Cleaning Services',
    description: 'Professional cleaning services for homes and businesses.',
    images: [
      {
        url: '/images/ogImage/ogMain.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="wrapper">{children}</body>
    </html>
  );
}
