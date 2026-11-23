import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'LeftRail — 10 Slide-In Navigation Drawers',
  description:
    'Collection of 10 distinct, self-contained React and Tailwind left slide-in navigation drawer components spanning minimal, bold, dark, and warm design systems.',
  openGraph: {
    title: 'LeftRail — 10 Slide-In Navigation Drawers',
    description:
      'Collection of 10 distinct, self-contained React and Tailwind left slide-in navigation drawer components spanning minimal, bold, dark, and warm design systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeftRail — 10 Slide-In Navigation Drawers',
    description:
      'Collection of 10 distinct, self-contained React and Tailwind left slide-in navigation drawer components spanning minimal, bold, dark, and warm design systems.',
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
      className={`${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#F8FAFC] text-[#0F172A] antialiased font-sans selection:bg-[#1E40AF] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
