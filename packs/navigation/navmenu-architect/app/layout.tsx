import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Header Dropdown & Mega Menu Kit',
  description:
    'Twenty self-contained React and Tailwind CSS desktop navigation header menus with integrated search bars and varied dropdown and mega panel topologies.',
  openGraph: {
    title: 'Header Dropdown & Mega Menu Kit',
    description:
      'Twenty self-contained React and Tailwind CSS desktop navigation header menus with integrated search bars and varied dropdown and mega panel topologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Header Dropdown & Mega Menu Kit',
    description:
      'Twenty self-contained React and Tailwind CSS desktop navigation header menus with integrated search bars and varied dropdown and mega panel topologies.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="font-sans antialiased bg-[#F6F5F1] text-neutral-900 selection:bg-neutral-900 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
