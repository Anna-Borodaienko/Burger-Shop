import './globals.css';

import type { Metadata } from 'next';
import { Barlow_Condensed } from 'next/font/google';

import ResponsiveNav from './components/Navigation/ResponsiveNav';

const barlow = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Burger Shop',
  description:
    'Learning project with with Next.js 14, React, TypeScript and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={barlow.className}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
