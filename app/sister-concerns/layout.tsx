import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sister Concerns - Trusted Manufacturing Partners',
  description:
    'Our network of trusted sister companies and manufacturing partners. Surya Automotive specializes in aluminum and zinc die casting for industrial and automotive sectors.',
  alternates: {
    canonical: '/sister-concerns',
  },
  keywords: [
    'sister concerns',
    'manufacturing partners',
    'die casting',
    'automotive components',
    'manufacturing facilities',
    'Surya Automotive',
  ],
  openGraph: {
    title: 'Sister Concerns - Trusted Manufacturing Partners',
    description:
      'Trusted sister company network featuring Surya Automotive — aluminum and zinc die casting.',
    url: '/sister-concerns',
  },
};

export default function SisterConcernsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
