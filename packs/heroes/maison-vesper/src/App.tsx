import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CATEGORIES, filterCatalogEntries, formatPlateNumber } from './utils/catalog';

// Import all 59 components
import { Navbar1 } from './components/navbar/Navbar1';
import { Navbar2 } from './components/navbar/Navbar2';
import { Navbar3 } from './components/navbar/Navbar3';
import { Navbar4 } from './components/navbar/Navbar4';

import { Hero1 } from './components/heroes/Hero1';
import { Hero2 } from './components/heroes/Hero2';
import { Hero3 } from './components/heroes/Hero3';
import { Hero4 } from './components/heroes/Hero4';
import { Hero5 } from './components/heroes/Hero5';

import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './components/feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './components/feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './components/feature-grids/FeatureGrid4';

import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing2 } from './components/pricing/Pricing2';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';

import { Testimonial1 } from './components/testimonials/Testimonial1';
import { Testimonial2 } from './components/testimonials/Testimonial2';
import { Testimonial3 } from './components/testimonials/Testimonial3';

import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { BlogCard2 } from './components/blog-cards/BlogCard2';
import { BlogCard3 } from './components/blog-cards/BlogCard3';
import { BlogCard4 } from './components/blog-cards/BlogCard4';

import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { ContactForm2 } from './components/contact-forms/ContactForm2';
import { ContactForm3 } from './components/contact-forms/ContactForm3';

import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';
import { Stat4 } from './components/stats/Stat4';

import { Content1 } from './components/content/Content1';
import { Content2 } from './components/content/Content2';
import { Content3 } from './components/content/Content3';
import { Content4 } from './components/content/Content4';
import { Content5 } from './components/content/Content5';
import { Content6 } from './components/content/Content6';
import { Content7 } from './components/content/Content7';
import { Content8 } from './components/content/Content8';
import { Content9 } from './components/content/Content9';
import { Content10 } from './components/content/Content10';
import { Content11 } from './components/content/Content11';
import { Content12 } from './components/content/Content12';
import { Content13 } from './components/content/Content13';
import { Content14 } from './components/content/Content14';
import { Content15 } from './components/content/Content15';

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  component: React.ReactNode;
  path: string;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const componentsList: ComponentItem[] = [
    // Content (15 new structural sections)
    { id: 'Content1', name: 'Content 1 — The Ledger', category: 'content', component: <Content1 />, path: 'src/components/content/Content1.tsx' },
    { id: 'Content2', name: 'Content 2 — The Spiral Staircase', category: 'content', component: <Content2 />, path: 'src/components/content/Content2.tsx' },
    { id: 'Content3', name: 'Content 3 — The Interlock', category: 'content', component: <Content3 />, path: 'src/components/content/Content3.tsx' },
    { id: 'Content4', name: 'Content 4 — The Exploded Diagram', category: 'content', component: <Content4 />, path: 'src/components/content/Content4.tsx' },
    { id: 'Content5', name: 'Content 5 — The Split Screen Argument', category: 'content', component: <Content5 />, path: 'src/components/content/Content5.tsx' },
    { id: 'Content6', name: 'Content 6 — The Margin Book', category: 'content', component: <Content6 />, path: 'src/components/content/Content6.tsx' },
    { id: 'Content7', name: 'Content 7 — The Film Strip', category: 'content', component: <Content7 />, path: 'src/components/content/Content7.tsx' },
    { id: 'Content8', name: 'Content 8 — The Pinboard', category: 'content', component: <Content8 />, path: 'src/components/content/Content8.tsx' },
    { id: 'Content9', name: 'Content 9 — The Index', category: 'content', component: <Content9 />, path: 'src/components/content/Content9.tsx' },
    { id: 'Content10', name: 'Content 10 — The Interruption', category: 'content', component: <Content10 />, path: 'src/components/content/Content10.tsx' },
    { id: 'Content11', name: 'Content 11 — The Specimen Grid', category: 'content', component: <Content11 />, path: 'src/components/content/Content11.tsx' },
    { id: 'Content12', name: 'Content 12 — The Threaded Narrative', category: 'content', component: <Content12 />, path: 'src/components/content/Content12.tsx' },
    { id: 'Content13', name: 'Content 13 — The Colophon', category: 'content', component: <Content13 />, path: 'src/components/content/Content13.tsx' },
    { id: 'Content14', name: 'Content 14 — The Cascade', category: 'content', component: <Content14 />, path: 'src/components/content/Content14.tsx' },
    { id: 'Content15', name: 'Content 15 — The Inverted Vault', category: 'content', component: <Content15 />, path: 'src/components/content/Content15.tsx' },
    // Navbar
    { id: 'Navbar1', name: 'Navbar 1 — Centered Wordmark', category: 'navbar', component: <Navbar1 />, path: 'src/components/navbar/Navbar1.tsx' },
    { id: 'Navbar2', name: 'Navbar 2 — Split Masthead N°', category: 'navbar', component: <Navbar2 />, path: 'src/components/navbar/Navbar2.tsx' },
    { id: 'Navbar3', name: 'Navbar 3 — Minimal Edge-to-Edge', category: 'navbar', component: <Navbar3 />, path: 'src/components/navbar/Navbar3.tsx' },
    { id: 'Navbar4', name: 'Navbar 4 — Editorial Dropdown Panel', category: 'navbar', component: <Navbar4 />, path: 'src/components/navbar/Navbar4.tsx' },

    // Heroes
    { id: 'Hero1', name: 'Hero 1 — Oversized Serif Display', category: 'heroes', component: <Hero1 />, path: 'src/components/heroes/Hero1.tsx' },
    { id: 'Hero2', name: 'Hero 2 — Asymmetric Lookbook', category: 'heroes', component: <Hero2 />, path: 'src/components/heroes/Hero2.tsx' },
    { id: 'Hero3', name: 'Hero 3 — Huge Italic Hero', category: 'heroes', component: <Hero3 />, path: 'src/components/heroes/Hero3.tsx' },
    { id: 'Hero4', name: 'Hero 4 — Edge-Bled Plate', category: 'heroes', component: <Hero4 />, path: 'src/components/heroes/Hero4.tsx' },
    { id: 'Hero5', name: 'Hero 5 — Split Architecture', category: 'heroes', component: <Hero5 />, path: 'src/components/heroes/Hero5.tsx' },

    // Feature Grids
    { id: 'FeatureGrid1', name: 'Feature Grid 1 — 3-Col Plates', category: 'feature-grids', component: <FeatureGrid1 />, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { id: 'FeatureGrid2', name: 'Feature Grid 2 — Alternating Rows', category: 'feature-grids', component: <FeatureGrid2 />, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { id: 'FeatureGrid3', name: 'Feature Grid 3 — Stitch Index', category: 'feature-grids', component: <FeatureGrid3 />, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { id: 'FeatureGrid4', name: 'Feature Grid 4 — 2x2 Inner Frames', category: 'feature-grids', component: <FeatureGrid4 />, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

    // Pricing
    { id: 'Pricing1', name: 'Pricing 1 — Atelier Service Menu', category: 'pricing', component: <Pricing1 />, path: 'src/components/pricing/Pricing1.tsx' },
    { id: 'Pricing2', name: 'Pricing 2 — Seasonal Collection', category: 'pricing', component: <Pricing2 />, path: 'src/components/pricing/Pricing2.tsx' },
    { id: 'Pricing3', name: 'Pricing 3 — Engraved Card', category: 'pricing', component: <Pricing3 />, path: 'src/components/pricing/Pricing3.tsx' },
    { id: 'Pricing4', name: 'Pricing 4 — Ledger Comparison', category: 'pricing', component: <Pricing4 />, path: 'src/components/pricing/Pricing4.tsx' },

    // Testimonials
    { id: 'Testimonial1', name: 'Testimonial 1 — Pull-Quote Serif', category: 'testimonials', component: <Testimonial1 />, path: 'src/components/testimonials/Testimonial1.tsx' },
    { id: 'Testimonial2', name: 'Testimonial 2 — Quote Columns', category: 'testimonials', component: <Testimonial2 />, path: 'src/components/testimonials/Testimonial2.tsx' },
    { id: 'Testimonial3', name: 'Testimonial 3 — Ornamental Rule', category: 'testimonials', component: <Testimonial3 />, path: 'src/components/testimonials/Testimonial3.tsx' },

    // Blog Cards
    { id: 'BlogCard1', name: 'Blog Card 1 — 3-Col Lookbook', category: 'blog-cards', component: <BlogCard1 />, path: 'src/components/blog-cards/BlogCard1.tsx' },
    { id: 'BlogCard2', name: 'Blog Card 2 — Cover + Index', category: 'blog-cards', component: <BlogCard2 />, path: 'src/components/blog-cards/BlogCard2.tsx' },
    { id: 'BlogCard3', name: 'Blog Card 3 — Volume Index', category: 'blog-cards', component: <BlogCard3 />, path: 'src/components/blog-cards/BlogCard3.tsx' },
    { id: 'BlogCard4', name: 'Blog Card 4 — Masthead Article', category: 'blog-cards', component: <BlogCard4 />, path: 'src/components/blog-cards/BlogCard4.tsx' },

    // Footers
    { id: 'Footer1', name: 'Footer 1 — Espresso Band', category: 'footers', component: <Footer1 />, path: 'src/components/footers/Footer1.tsx' },
    { id: 'Footer2', name: 'Footer 2 — Ruled Colophon', category: 'footers', component: <Footer2 />, path: 'src/components/footers/Footer2.tsx' },
    { id: 'Footer3', name: 'Footer 3 — Minimal Signature', category: 'footers', component: <Footer3 />, path: 'src/components/footers/Footer3.tsx' },
    { id: 'Footer4', name: 'Footer 4 — Subscription Row', category: 'footers', component: <Footer4 />, path: 'src/components/footers/Footer4.tsx' },

    // Contact Forms
    { id: 'ContactForm1', name: 'Contact 1 — Split Atelier Details', category: 'contact-forms', component: <ContactForm1 />, path: 'src/components/contact-forms/ContactForm1.tsx' },
    { id: 'ContactForm2', name: 'Contact 2 — Narrow Underline Form', category: 'contact-forms', component: <ContactForm2 />, path: 'src/components/contact-forms/ContactForm2.tsx' },
    { id: 'ContactForm3', name: 'Contact 3 — Correspondence Card', category: 'contact-forms', component: <ContactForm3 />, path: 'src/components/contact-forms/ContactForm3.tsx' },

    // Modals
    { id: 'Modal1', name: 'Modal 1 — Fine-Ruled Dialog', category: 'modals', component: <Modal1 />, path: 'src/components/modals/Modal1.tsx' },
    { id: 'Modal2', name: 'Modal 2 — Editorial Confirmation', category: 'modals', component: <Modal2 />, path: 'src/components/modals/Modal2.tsx' },
    { id: 'Modal3', name: 'Modal 3 — Slide-Over Spec Sheet', category: 'modals', component: <Modal3 />, path: 'src/components/modals/Modal3.tsx' },

    // Media
    { id: 'Media1', name: 'Media 1 — Full-Bleed Editorial Plate', category: 'media', component: <Media1 />, path: 'src/components/media/Media1.tsx' },
    { id: 'Media2', name: 'Media 2 — Lookbook Gallery', category: 'media', component: <Media2 />, path: 'src/components/media/Media2.tsx' },
    { id: 'Media3', name: 'Media 3 — Film Plate & Marker', category: 'media', component: <Media3 />, path: 'src/components/media/Media3.tsx' },

    // FAQs
    { id: 'Faq1', name: 'FAQ 1 — Cross-Mark Rows', category: 'faqs', component: <Faq1 />, path: 'src/components/faqs/Faq1.tsx' },
    { id: 'Faq2', name: 'FAQ 2 — Two-Column Editorial', category: 'faqs', component: <Faq2 />, path: 'src/components/faqs/Faq2.tsx' },
    { id: 'Faq3', name: 'FAQ 3 — Roman Numeral FAQ', category: 'faqs', component: <Faq3 />, path: 'src/components/faqs/Faq3.tsx' },

    // CTAs
    { id: 'Cta1', name: 'CTA 1 — Oversized Statement', category: 'ctas', component: <Cta1 />, path: 'src/components/ctas/Cta1.tsx' },
    { id: 'Cta2', name: 'CTA 2 — Split Edge-Bled Image', category: 'ctas', component: <Cta2 />, path: 'src/components/ctas/Cta2.tsx' },
    { id: 'Cta3', name: 'CTA 3 — Minimal N° Label Link', category: 'ctas', component: <Cta3 />, path: 'src/components/ctas/Cta3.tsx' },

    // Stats
    { id: 'Stat1', name: 'Stat 1 — Oldstyle Numerals', category: 'stats', component: <Stat1 />, path: 'src/components/stats/Stat1.tsx' },
    { id: 'Stat2', name: 'Stat 2 — CM / MM Measurements', category: 'stats', component: <Stat2 />, path: 'src/components/stats/Stat2.tsx' },
    { id: 'Stat3', name: 'Stat 3 — Atelier Ledger Rows', category: 'stats', component: <Stat3 />, path: 'src/components/stats/Stat3.tsx' },
    { id: 'Stat4', name: 'Stat 4 — Editorial Statistics Index', category: 'stats', component: <Stat4 />, path: 'src/components/stats/Stat4.tsx' },
  ];

  const filteredComponents = filterCatalogEntries(componentsList, activeCategory);

  const copyPath = (path: string, id: string) => {
    navigator.clipboard.writeText(path);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1a1512] font-sans selection:bg-[#a68a64]/20">
      {/* Top Header */}
      <header className="border-b border-[#a68a64]/30 bg-[#faf7f2] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left space-y-1">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a68a64]">
              MAISON VESPER — ARCHIVE ÉDITION N° 04
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-light tracking-widest text-[#1a1512]">
              DESIGN SYSTEM ÉDITORIAL
            </h1>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-4 text-xs font-mono text-[#1a1512]/70">
            <span>62 COMPOSANTS</span>
            <span className="text-[#a68a64]">•</span>
            <span>PARISIAN ATELIER</span>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="border-t border-[#a68a64]/20 bg-[#faf7f2] overflow-x-auto">
          <div className="max-w-6xl mx-auto px-6 flex space-x-5 py-3 whitespace-nowrap text-[10px] uppercase tracking-[0.18em]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`pb-1 transition-colors border-b-2 whitespace-nowrap shrink-0 ${activeCategory === cat.id ? 'border-[#1a1512] text-[#1a1512] font-medium' : 'border-transparent text-[#1a1512]/60 hover:text-[#1a1512]'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Showcase Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {filteredComponents.map((item, idx) => (
          <div key={item.id} className="border border-[#a68a64]/40 bg-[#faf7f2] relative group">
            {/* Component Header Metadata Bar */}
            <div className="bg-[#1a1512] text-[#faf7f2] px-6 py-3 flex justify-between items-center text-[11px] font-mono tracking-[0.2em]">
              <div className="flex items-center space-x-3">
                <span className="text-[#a68a64]">N° {formatPlateNumber(idx)}</span>
                <span className="text-[#faf7f2]/40">—</span>
                <span className="font-serif text-sm tracking-widest">{item.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="hidden sm:inline text-[10px] text-[#faf7f2]/60">{item.path}</span>
                <button 
                  onClick={() => copyPath(item.path, item.id)}
                  aria-label={`Copier le chemin de ${item.id}`}
                  className="flex items-center space-x-1 hover:text-[#a68a64] transition-colors"
                  title="Copier le chemin du fichier"
                >
                  {copiedId === item.id ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span className="text-[10px]">{copiedId === item.id ? 'Copié' : 'Chemin'}</span>
                </button>
              </div>
            </div>

            {/* Live Rendered Component */}
            <div className="p-0 overflow-x-auto">
              {item.component}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#a68a64]/30 bg-[#241d18] text-[#faf7f2] py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl tracking-[0.3em] font-light">MAISON VESPER</h2>
          <p className="text-xs uppercase tracking-[0.25em] text-[#faf7f2]/70">
            Parisian Atelier Editorial Design System • 62 Self-Contained Components
          </p>
          <div className="text-[10px] font-mono tracking-[0.3em] text-[#a68a64]">
            × ARCHIVE 2026 — TOUS DROITS RÉSERVÉS
          </div>
        </div>
      </footer>
    </div>
  );
}
