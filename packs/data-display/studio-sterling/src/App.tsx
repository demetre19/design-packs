/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, Eye, Code, ArrowUpRight, FolderOpen } from 'lucide-react';

// Navbar imports
import { Navbar1 } from './components/navbar/Navbar1';
import { Navbar2 } from './components/navbar/Navbar2';
import { Navbar3 } from './components/navbar/Navbar3';
import { Navbar4 } from './components/navbar/Navbar4';

// Heroes imports
import { Hero1 } from './components/heroes/Hero1';
import { Hero2 } from './components/heroes/Hero2';
import { Hero3 } from './components/heroes/Hero3';
import { Hero4 } from './components/heroes/Hero4';
import { Hero5 } from './components/heroes/Hero5';

// Feature Grids imports
import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './components/feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './components/feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './components/feature-grids/FeatureGrid4';

// Pricing imports
import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing2 } from './components/pricing/Pricing2';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';

// Testimonials imports
import { Testimonial1 } from './components/testimonials/Testimonial1';
import { Testimonial2 } from './components/testimonials/Testimonial2';
import { Testimonial3 } from './components/testimonials/Testimonial3';

// Blog Cards imports
import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { BlogCard2 } from './components/blog-cards/BlogCard2';
import { BlogCard3 } from './components/blog-cards/BlogCard3';
import { BlogCard4 } from './components/blog-cards/BlogCard4';

// Footers imports
import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

// Contact Forms imports
import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { ContactForm2 } from './components/contact-forms/ContactForm2';
import { ContactForm3 } from './components/contact-forms/ContactForm3';

// Modals imports
import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

// Media imports
import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

// FAQs imports
import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

// CTAs imports
import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

// Stats imports
import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  component: React.ReactNode;
  filePath: string;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedComp, setSelectedComp] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'ALL 44 COMPONENTS' },
    { id: 'navbar', name: 'NAVBAR (4)' },
    { id: 'heroes', name: 'HEROES (5)' },
    { id: 'feature-grids', name: 'FEATURE GRIDS (4)' },
    { id: 'pricing', name: 'PRICING (4)' },
    { id: 'testimonials', name: 'TESTIMONIALS (3)' },
    { id: 'blog-cards', name: 'BLOG CARDS (4)' },
    { id: 'footers', name: 'FOOTERS (4)' },
    { id: 'contact-forms', name: 'CONTACT FORMS (3)' },
    { id: 'modals', name: 'MODALS (3)' },
    { id: 'media', name: 'MEDIA PLATES (3)' },
    { id: 'faqs', name: 'FAQS (3)' },
    { id: 'ctas', name: 'CTAS (3)' },
    { id: 'stats', name: 'STATS (3)' },
  ];

  const componentsList: ComponentItem[] = [
    // Navbar
    { id: 'Navbar1', name: 'Navbar1 — Standard Ref Wordmark', category: 'navbar', component: <Navbar1 />, filePath: 'src/components/navbar/Navbar1.tsx' },
    { id: 'Navbar2', name: 'Navbar2 — Resume Header Details', category: 'navbar', component: <Navbar2 />, filePath: 'src/components/navbar/Navbar2.tsx' },
    { id: 'Navbar3', name: 'Navbar3 — Black Bar Inverted', category: 'navbar', component: <Navbar3 />, filePath: 'src/components/navbar/Navbar3.tsx' },
    { id: 'Navbar4', name: 'Navbar4 — Circled Letter Minimal', category: 'navbar', component: <Navbar4 />, filePath: 'src/components/navbar/Navbar4.tsx' },

    // Heroes
    { id: 'Hero1', name: 'Hero1 — "RE-SUME" Giant Hyphen', category: 'heroes', component: <Hero1 />, filePath: 'src/components/heroes/Hero1.tsx' },
    { id: 'Hero2', name: 'Hero2 — Photo Strip Title', category: 'heroes', component: <Hero2 />, filePath: 'src/components/heroes/Hero2.tsx' },
    { id: 'Hero3', name: 'Hero3 — Split Photo Left', category: 'heroes', component: <Hero3 />, filePath: 'src/components/heroes/Hero3.tsx' },
    { id: 'Hero4', name: 'Hero4 — Black Panel Inverted Hero', category: 'heroes', component: <Hero4 />, filePath: 'src/components/heroes/Hero4.tsx' },
    { id: 'Hero5', name: 'Hero5 — Circled Index Hero', category: 'heroes', component: <Hero5 />, filePath: 'src/components/heroes/Hero5.tsx' },

    // Feature Grids
    { id: 'FeatureGrid1', name: 'FeatureGrid1 — Experience Timeline', category: 'feature-grids', component: <FeatureGrid1 />, filePath: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { id: 'FeatureGrid2', name: 'FeatureGrid2 — Education & Academic Roles', category: 'feature-grids', component: <FeatureGrid2 />, filePath: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { id: 'FeatureGrid3', name: 'FeatureGrid3 — Skills Percentage Hairline', category: 'feature-grids', component: <FeatureGrid3 />, filePath: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { id: 'FeatureGrid4', name: 'FeatureGrid4 — Asymmetric Mixed Grid', category: 'feature-grids', component: <FeatureGrid4 />, filePath: 'src/components/feature-grids/FeatureGrid4.tsx' },

    // Pricing
    { id: 'Pricing1', name: 'Pricing1 — Service Rate Cards', category: 'pricing', component: <Pricing1 />, filePath: 'src/components/pricing/Pricing1.tsx' },
    { id: 'Pricing2', name: 'Pricing2 — Black Inverted Retainer', category: 'pricing', component: <Pricing2 />, filePath: 'src/components/pricing/Pricing2.tsx' },
    { id: 'Pricing3', name: 'Pricing3 — Single Engagement Spotlight', category: 'pricing', component: <Pricing3 />, filePath: 'src/components/pricing/Pricing3.tsx' },
    { id: 'Pricing4', name: 'Pricing4 — Package Block Matrix', category: 'pricing', component: <Pricing4 />, filePath: 'src/components/pricing/Pricing4.tsx' },

    // Testimonials
    { id: 'Testimonial1', name: 'Testimonial1 — Dense Columns Reference', category: 'testimonials', component: <Testimonial1 />, filePath: 'src/components/testimonials/Testimonial1.tsx' },
    { id: 'Testimonial2', name: 'Testimonial2 — Black Panel Quote Pull-line', category: 'testimonials', component: <Testimonial2 />, filePath: 'src/components/testimonials/Testimonial2.tsx' },
    { id: 'Testimonial3', name: 'Testimonial3 — Circled Index Endorsements', category: 'testimonials', component: <Testimonial3 />, filePath: 'src/components/testimonials/Testimonial3.tsx' },

    // Blog Cards
    { id: 'BlogCard1', name: 'BlogCard1 — Project Monograph Cards', category: 'blog-cards', component: <BlogCard1 />, filePath: 'src/components/blog-cards/BlogCard1.tsx' },
    { id: 'BlogCard2', name: 'BlogCard2 — Index List Essays', category: 'blog-cards', component: <BlogCard2 />, filePath: 'src/components/blog-cards/BlogCard2.tsx' },
    { id: 'BlogCard3', name: 'BlogCard3 — Mixed-Scale Editorial Grid', category: 'blog-cards', component: <BlogCard3 />, filePath: 'src/components/blog-cards/BlogCard3.tsx' },
    { id: 'BlogCard4', name: 'BlogCard4 — Overlapping Editorial Card', category: 'blog-cards', component: <BlogCard4 />, filePath: 'src/components/blog-cards/BlogCard4.tsx' },

    // Footers
    { id: 'Footer1', name: 'Footer1 — Giant Wordmark Width', category: 'footers', component: <Footer1 />, filePath: 'src/components/footers/Footer1.tsx' },
    { id: 'Footer2', name: 'Footer2 — Resume Contact Matrix', category: 'footers', component: <Footer2 />, filePath: 'src/components/footers/Footer2.tsx' },
    { id: 'Footer3', name: 'Footer3 — Black Inverted Footer', category: 'footers', component: <Footer3 />, filePath: 'src/components/footers/Footer3.tsx' },
    { id: 'Footer4', name: 'Footer4 — Minimal Circled Letter', category: 'footers', component: <Footer4 />, filePath: 'src/components/footers/Footer4.tsx' },

    // Contact Forms
    { id: 'ContactForm1', name: 'ContactForm1 — Document Inquiry Form', category: 'contact-forms', component: <ContactForm1 />, filePath: 'src/components/contact-forms/ContactForm1.tsx' },
    { id: 'ContactForm2', name: 'ContactForm2 — Split Black Panel Form', category: 'contact-forms', component: <ContactForm2 />, filePath: 'src/components/contact-forms/ContactForm2.tsx' },
    { id: 'ContactForm3', name: 'ContactForm3 — Minimal Single-Column', category: 'contact-forms', component: <ContactForm3 />, filePath: 'src/components/contact-forms/ContactForm3.tsx' },

    // Modals
    { id: 'Modal1', name: 'Modal1 — Project Detail Dossier', category: 'modals', component: <Modal1 />, filePath: 'src/components/modals/Modal1.tsx' },
    { id: 'Modal2', name: 'Modal2 — Academic Reference Dossier', category: 'modals', component: <Modal2 />, filePath: 'src/components/modals/Modal2.tsx' },
    { id: 'Modal3', name: 'Modal3 — Transmission Confirmation', category: 'modals', component: <Modal3 />, filePath: 'src/components/modals/Modal3.tsx' },

    // Media
    { id: 'Media1', name: 'Media1 — Portfolio Plate Caption Row', category: 'media', component: <Media1 />, filePath: 'src/components/media/Media1.tsx' },
    { id: 'Media2', name: 'Media2 — Asymmetric Gallery Grid', category: 'media', component: <Media2 />, filePath: 'src/components/media/Media2.tsx' },
    { id: 'Media3', name: 'Media3 — Single Feature Plate', category: 'media', component: <Media3 />, filePath: 'src/components/media/Media3.tsx' },

    // FAQs
    { id: 'Faq1', name: 'Faq1 — Accordion Condensed FAQ', category: 'faqs', component: <Faq1 />, filePath: 'src/components/faqs/Faq1.tsx' },
    { id: 'Faq2', name: 'Faq2 — Two-Column Document Q&A', category: 'faqs', component: <Faq2 />, filePath: 'src/components/faqs/Faq2.tsx' },
    { id: 'Faq3', name: 'Faq3 — Single-Column Hairline FAQ', category: 'faqs', component: <Faq3 />, filePath: 'src/components/faqs/Faq3.tsx' },

    // CTAs
    { id: 'Cta1', name: 'Cta1 — Black-Panel Action Phrase', category: 'ctas', component: <Cta1 />, filePath: 'src/components/ctas/Cta1.tsx' },
    { id: 'Cta2', name: 'Cta2 — Structured Contact Lines', category: 'ctas', component: <Cta2 />, filePath: 'src/components/ctas/Cta2.tsx' },
    { id: 'Cta3', name: 'Cta3 — Centered Ornament CTA', category: 'ctas', component: <Cta3 />, filePath: 'src/components/ctas/Cta3.tsx' },

    // Stats
    { id: 'Stat1', name: 'Stat1 — Metrics Numerical Archive', category: 'stats', component: <Stat1 />, filePath: 'src/components/stats/Stat1.tsx' },
    { id: 'Stat2', name: 'Stat2 — Alternating Black/White Cells', category: 'stats', component: <Stat2 />, filePath: 'src/components/stats/Stat2.tsx' },
    { id: 'Stat3', name: 'Stat3 — Single Spotlight Stat', category: 'stats', component: <Stat3 />, filePath: 'src/components/stats/Stat3.tsx' },
  ];

  const filteredComponents = activeCategory === 'all' 
    ? componentsList 
    : componentsList.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-black font-mono selection:bg-black selection:text-white">
      {/* Top Meta Header */}
      <header className="border-b border-black py-4 px-4 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center justify-center w-5 h-5 border border-black rounded-full text-[10px] font-bold">44</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">STUDIO STERLING DESIGN SYSTEM</span>
            </div>
            <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
              CURRICULUM ARCHIVE & COMPONENT REPOSITORY
            </h1>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="border border-black px-2 py-1 uppercase tracking-widest font-bold bg-neutral-100">
              44 / 44 BUILT
            </span>
            <span className="border border-black px-2 py-1 uppercase tracking-widest font-bold bg-black text-white">
              STRICT B&W
            </span>
          </div>
        </div>
      </header>

      {/* Category Navigation Bar */}
      <div className="border-b border-black bg-neutral-100 py-3 px-4 overflow-x-auto">
        <div className="max-w-6xl mx-auto flex items-center gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedComp(null);
              }}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border transition-colors ${
                activeCategory === cat.id 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-black border-black hover:bg-neutral-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        {selectedComp ? (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-black">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">SINGLE VIEW INSPECTOR</span>
                <h2 className="text-xl font-black uppercase tracking-tight">{selectedComp}</h2>
              </div>
              <button 
                onClick={() => setSelectedComp(null)}
                className="border border-black px-3 py-1.5 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors"
              >
                ← Back to Matrix
              </button>
            </div>
            <div className="border border-black p-4 bg-neutral-50">
              {componentsList.find(c => c.id === selectedComp)?.component}
            </div>
            <div className="mt-4 p-4 border border-black bg-white text-xs uppercase tracking-widest flex justify-between items-center">
              <span>FILE PATH: {componentsList.find(c => c.id === selectedComp)?.filePath}</span>
              <span className="font-bold text-neutral-600">RENDERED IN FINAL STATE</span>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            <div className="border-b border-black pb-4 flex justify-between items-end">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">SYSTEM DISPLAY</span>
                <h2 className="text-3xl font-black uppercase tracking-tighter">
                  {activeCategory === 'all' ? 'FULL CURRICULUM COMPONENT MATRIX' : `${activeCategory.toUpperCase()} FAMILY`}
                </h2>
              </div>
              <span className="text-xs uppercase tracking-widest text-neutral-600">
                SHOWING {filteredComponents.length} COMPONENT{filteredComponents.length > 1 ? 'S' : ''}
              </span>
            </div>

            <div className="space-y-16">
              {filteredComponents.map((item) => (
                <div key={item.id} className="border border-black bg-white shadow-sm">
                  <div className="border-b border-black px-4 py-3 bg-neutral-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-black"></span>
                      <span className="font-bold text-xs uppercase tracking-tight">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold">
                      <span className="text-neutral-600">{item.filePath}</span>
                      <button 
                        onClick={() => setSelectedComp(item.id)}
                        className="border border-black bg-white px-2.5 py-1 hover:bg-black hover:text-white transition-colors flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" /> Inspect
                      </button>
                    </div>
                  </div>
                  <div className="p-2 bg-white overflow-hidden">
                    {item.component}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black py-8 px-4 bg-black text-white mt-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
          <div>
            <span className="font-bold">STUDIO STERLING DESIGN SYSTEM</span> — 44 COMPONENTS
          </div>
          <div className="text-neutral-400">
            STRICT BLACK & WHITE CURRICULUM ARCHIVE
          </div>
        </div>
      </footer>
    </div>
  );
}
