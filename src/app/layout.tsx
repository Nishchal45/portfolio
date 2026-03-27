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
  title: 'Nishchal Patel | Software Engineer & AI/ML Specialist',
  description:
    'Portfolio of Nishchal Patel — building high-performance systems, AI-powered applications, and scalable full-stack products.',
  keywords: ['software engineer', 'AI', 'ML', 'full-stack', 'portfolio', 'Nishchal Patel'],
  openGraph: {
    title: 'Nishchal Patel | Software Engineer & AI/ML Specialist',
    description: 'Building high-performance systems and AI-powered applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
