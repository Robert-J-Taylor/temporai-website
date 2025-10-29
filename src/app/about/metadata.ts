import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | TemporAI',
  description: 'Learn about TemporAI - our vision, values, team, and mission to transform finance through AI.',
  keywords: [
    'AI agents',
    'autonomous finance',
    'multi-agent AI',
    'DeFi automation',
    'institutional-grade AI',
    'explainable AI',
    'agentic finance',
    'AI investment management'
  ],
  authors: [{ name: 'TemporAI Team' }],
  creator: 'TemporAI',
  publisher: 'TemporAI',
  openGraph: {
    title: 'About | TemporAI',
    description: 'Learn about TemporAI - our vision, values, team, and mission to transform finance through AI.',
    type: 'website',
    siteName: 'TemporAI',
    locale: 'en_US',
    images: [
      {
        url: '/og-about.jpg', // Fallback social image
        width: 1200,
        height: 630,
        alt: 'TemporAI - About Us'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | TemporAI',
    description: 'Learn about TemporAI - our vision, values, team, and mission to transform finance through AI.',
    images: ['/og-about.jpg'],
    creator: '@temporai'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/about'
  }
};
