import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Modal Navigation Studio — 20 Searchable Overlay Menus',
  description:
    'Twenty distinct, self-contained React and Tailwind CSS modal navigation menus with live search across command docks, Miller columns, radial hubs, accordion trees, bento mosaics, and editorial broadsheets.',
  openGraph: {
    title: 'Modal Navigation Studio — 20 Searchable Overlay Menus',
    description:
      'Twenty distinct, self-contained React and Tailwind CSS modal navigation menus across six topologies and four style families.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modal Navigation Studio — 20 Searchable Overlay Menus',
    description:
      'Twenty distinct, self-contained React and Tailwind CSS modal navigation menus across six topologies and four style families.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="font-sans antialiased bg-[#F7F7F5] text-stone-900 selection:bg-stone-900 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
