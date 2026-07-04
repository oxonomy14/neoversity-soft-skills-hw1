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

import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'DevForge',
    template: '%s | DevForge',
  },

  description:
    'DevForge is a collaborative software engineering team built through Neoversity. Meet our developers, explore our projects, skills, superpowers, and future vision.',

  keywords: [
    'DevForge',
    'Neoversity',
    'Software Engineering',
    'Web Development',
    'React',
    'Next.js',
    'Frontend',
    'Fullstack',
    'Student Team',
    'Developers',
    'Portfolio',
  ],

  authors: [
    {
      name: 'DevForge Team',
    },
  ],

  creator: 'DevForge',
  publisher: 'DevForge',

  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
  },

  openGraph: {
    type: 'website',
    siteName: 'DevForge',
    title: 'DevForge | Learning. Building. Growing Together.',
    description:
      'Meet the people behind DevForge — a collaborative software engineering team created through Neoversity. Discover our developers, skills, projects, and vision.',
    url: baseUrl,
    locale: 'en_US',
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
    card: 'summary_large_image',
    title: 'DevForge | Learning. Building. Growing Together.',
    description:
      'Meet the people behind DevForge and discover our journey as a software engineering team.',
    images: ['/images/ogImage/ogMainEn.webp'],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: '/',
  },

  category: 'technology',

  applicationName: 'DevForge',

  appleWebApp: {
    capable: true,
    title: 'DevForge',
    statusBarStyle: 'default',
  },

  formatDetection: {
    telephone: false,
  },

  referrer: 'origin-when-cross-origin',
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
