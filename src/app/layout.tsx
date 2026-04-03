import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nishchal Vekariya | Software Engineer & AI/ML Specialist',
  description:
    'Portfolio of Nishchal Vekariya — SDE with 2+ years building scalable full-stack apps, AI/ML systems, and production APIs. Open to opportunities.',
  keywords: ['software engineer', 'AI', 'ML', 'full-stack', 'portfolio', 'Nishchal Vekariya', 'SDE', 'Python', 'React', 'LLM'],
  metadataBase: new URL('https://nishchal-vekariya.vercel.app'),
  openGraph: {
    title: 'Nishchal Vekariya | Software Engineer & AI/ML Specialist',
    description: 'SDE with 2+ years building scalable full-stack apps, AI/ML systems, and production APIs. Open to opportunities.',
    type: 'website',
    siteName: 'Nishchal Vekariya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishchal Vekariya | Software Engineer & AI/ML Specialist',
    description: 'SDE with 2+ years building scalable full-stack apps, AI/ML systems, and production APIs.',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" href="/images/hero.webp" as="image" type="image/webp" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
