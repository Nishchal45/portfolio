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
  title: {
    default: 'Nishchal Vekariya | Software Engineer & AI/ML Specialist',
    template: '%s | Nishchal Vekariya',
  },
  description:
    'Nishchal Vekariya — Software Development Engineer with 2+ years of experience building scalable full-stack applications, AI/ML-powered systems, and production-grade APIs. MS in Computer Engineering from UT Dallas. Open to full-time SDE, AI/ML, and Quant roles.',
  keywords: [
    'Nishchal Vekariya', 'Nishchal', 'Vekariya',
    'software engineer', 'software developer', 'SDE',
    'AI engineer', 'ML engineer', 'AI/ML specialist',
    'full-stack developer', 'Python developer', 'React developer',
    'LLM', 'GPT', 'RAG pipeline', 'LangChain',
    'quant developer', 'algorithmic trading',
    'portfolio', 'UT Dallas', 'Nirma University',
  ],
  authors: [{ name: 'Nishchal Vekariya', url: 'https://nishchal-vekariya.vercel.app' }],
  creator: 'Nishchal Vekariya',
  metadataBase: new URL('https://nishchal-vekariya.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nishchal Vekariya | Software Engineer & AI/ML Specialist',
    description: 'SDE with 2+ years building scalable full-stack apps, AI/ML systems, and production APIs. Open to opportunities.',
    type: 'website',
    siteName: 'Nishchal Vekariya',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishchal Vekariya | Software Engineer & AI/ML Specialist',
    description: 'SDE with 2+ years building scalable full-stack apps, AI/ML systems, and production APIs.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nishchal Vekariya',
              url: 'https://nishchal-vekariya.vercel.app',
              jobTitle: 'Software Development Engineer',
              description: 'SDE with 2+ years building scalable full-stack apps, AI/ML systems, and production APIs.',
              email: 'nishchalvekariya0@gmail.com',
              sameAs: [
                'https://github.com/Nishchal45',
                'https://www.linkedin.com/in/nishchal-vekariya/',
              ],
              alumniOf: [
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'University of Texas at Dallas',
                },
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Institute of Technology, Nirma University',
                },
              ],
              knowsAbout: [
                'Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Go',
                'Machine Learning', 'LLMs', 'GPT-4', 'RAG Pipelines', 'PyTorch',
                'Distributed Systems', 'Kafka', 'Docker', 'AWS',
                'Algorithmic Trading', 'Quantitative Finance',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
