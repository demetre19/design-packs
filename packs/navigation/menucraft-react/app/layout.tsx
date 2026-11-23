import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Mobile Sheet & Navigation Menu Kit',
  description:
    'Ten distinct mobile-first top drop-down and layered bottom-sheet navigation components built with React, Tailwind CSS, and accessible controls.',
  openGraph: {
    title: 'Mobile Sheet & Navigation Menu Kit',
    description:
      'Ten distinct mobile-first top drop-down and layered bottom-sheet navigation components built with React, Tailwind CSS, and accessible controls.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Sheet & Navigation Menu Kit',
    description:
      'Ten distinct mobile-first top drop-down and layered bottom-sheet navigation components built with React, Tailwind CSS, and accessible controls.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-slate-50 text-slate-900 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
