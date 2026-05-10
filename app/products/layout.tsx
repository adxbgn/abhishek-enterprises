import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Premium Steel & Alloy Products',
  description: 'Explore our comprehensive range of premium steel and alloy products. Quality-assured industrial steel products for global markets. Browse our catalog of high-quality steel and alloy components.',
  alternates: {
    canonical: '/products',
  },
  keywords: [
    'steel products',
    'alloy products',
    'industrial steel',
    'steel catalog',
    'steel components',
    'alloy components',
    'steel grades',
    'industrial metals',
  ],
  openGraph: {
    title: 'Products - Premium Steel & Alloy Products | Abhishek Enterprises',
    description: 'Explore our comprehensive range of premium steel and alloy products for industrial applications.',
    url: '/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
