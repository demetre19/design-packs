/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { ArrowRight, Layers, FileText, Sparkles, Grid } from 'lucide-react';

// Import all 44 components
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

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 44 Components' },
    { id: 'navbar', label: 'Navbar (4)' },
    { id: 'heroes', label: 'Heroes (5)' },
    { id: 'feature-grids', label: 'Feature Grids (4)' },
    { id: 'pricing', label: 'Pricing (4)' },
    { id: 'testimonials', label: 'Testimonials (3)' },
    { id: 'blog-cards', label: 'Blog & Editorial (4)' },
    { id: 'footers', label: 'Footers (4)' },
    { id: 'contact-forms', label: 'Contact Forms (3)' },
    { id: 'modals', label: 'Modals & Dialogs (3)' },
    { id: 'media', label: 'Media & Galleries (3)' },
    { id: 'faqs', label: 'FAQs (3)' },
    { id: 'ctas', label: 'CTAs (3)' },
    { id: 'stats', label: 'Stats & Metrics (4)' }
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0a0a0a] font-sans selection:bg-[#e30613] selection:text-[#ffffff]">
      {/* Top Header Bar */}
      <header className="border-b border-[#0a0a0a] bg-[#ffffff] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between border-x border-[#0a0a0a]">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-[#e30613]"></div>
            <span className="font-bold text-lg tracking-tight uppercase">HAUS DER FORM</span>
            <span className="text-[9px] font-mono text-[#e30613] uppercase tracking-[0.2em] hidden md:inline">/ 44 COMPONENTS SYSTEM</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#0a0a0a]/60 hidden md:inline">ZÜRICH • 1958</span>
            <div className="w-2 h-2 bg-[#0a0a0a]"></div>
          </div>
        </div>
      </header>

      {/* Hero Intro Banner */}
      <section className="border-b border-[#0a0a0a]">
        <div className="max-w-6xl mx-auto border-x border-[#0a0a0a] p-8 md:p-16">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-2 bg-[#e30613]"></span>
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#e30613]">SWISS INTERNATIONAL TYPOGRAPHIC ORDER</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            COMPLETE WEBSITE <br />
            <span className="text-[#e30613]">DESIGN SYSTEM</span> <br />
            44 COMPONENTS.
          </h1>

          <p className="text-xs font-mono uppercase leading-relaxed text-[#0a0a0a]/80 max-w-2xl mb-8">
            Pure white (#ffffff) and pure black (#0a0a0a) with surgical signal red (#e30613) accents. Strict mathematical grid, sharp rectangles, grotesque typography, and 1px hairline rules.
          </p>

          {/* Category Navigation Filter */}
          <div className="border-t border-[#0a0a0a] pt-8">
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#0a0a0a]/60 mb-4">+ SELECT CATEGORY FILTER</div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border border-[#0a0a0a] transition-colors ${
                    activeTab === cat.id 
                      ? 'bg-[#0a0a0a] text-[#ffffff]' 
                      : 'bg-[#ffffff] text-[#0a0a0a] hover:bg-[#e30613] hover:text-[#ffffff] hover:border-[#e30613]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Component Gallery Container */}
      <main className="max-w-6xl mx-auto border-x border-[#0a0a0a]">
        {/* NAVBARS */}
        {(activeTab === 'all' || activeTab === 'navbar') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: NAVBARS [01 — 04]</span>
              <span className="text-[#e30613]">4 COMPONENTS</span>
            </div>
            <Navbar1 />
            <Navbar2 />
            <Navbar3 />
            <Navbar4 />
          </div>
        )}

        {/* HEROES */}
        {(activeTab === 'all' || activeTab === 'heroes') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: HEROES [01 — 05]</span>
              <span className="text-[#e30613]">5 COMPONENTS</span>
            </div>
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Hero5 />
          </div>
        )}

        {/* FEATURE GRIDS */}
        {(activeTab === 'all' || activeTab === 'feature-grids') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: FEATURE GRIDS [01 — 04]</span>
              <span className="text-[#e30613]">4 COMPONENTS</span>
            </div>
            <FeatureGrid1 />
            <FeatureGrid2 />
            <FeatureGrid3 />
            <FeatureGrid4 />
          </div>
        )}

        {/* PRICING */}
        {(activeTab === 'all' || activeTab === 'pricing') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: PRICING [01 — 04]</span>
              <span className="text-[#e30613]">4 COMPONENTS</span>
            </div>
            <Pricing1 />
            <Pricing2 />
            <Pricing3 />
            <Pricing4 />
          </div>
        )}

        {/* TESTIMONIALS */}
        {(activeTab === 'all' || activeTab === 'testimonials') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: TESTIMONIALS [01 — 03]</span>
              <span className="text-[#e30613]">3 COMPONENTS</span>
            </div>
            <Testimonial1 />
            <Testimonial2 />
            <Testimonial3 />
          </div>
        )}

        {/* BLOG CARDS */}
        {(activeTab === 'all' || activeTab === 'blog-cards') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: BLOG & EDITORIAL [01 — 04]</span>
              <span className="text-[#e30613]">4 COMPONENTS</span>
            </div>
            <BlogCard1 />
            <BlogCard2 />
            <BlogCard3 />
            <BlogCard4 />
          </div>
        )}

        {/* FOOTERS */}
        {(activeTab === 'all' || activeTab === 'footers') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: FOOTERS [01 — 04]</span>
              <span className="text-[#e30613]">4 COMPONENTS</span>
            </div>
            <Footer1 />
            <Footer2 />
            <Footer3 />
            <Footer4 />
          </div>
        )}

        {/* CONTACT FORMS */}
        {(activeTab === 'all' || activeTab === 'contact-forms') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: CONTACT FORMS [01 — 03]</span>
              <span className="text-[#e30613]">3 COMPONENTS</span>
            </div>
            <ContactForm1 />
            <ContactForm2 />
            <ContactForm3 />
          </div>
        )}

        {/* MODALS */}
        {(activeTab === 'all' || activeTab === 'modals') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: MODALS & DIALOGS [01 — 03]</span>
              <span className="text-[#e30613]">3 COMPONENTS</span>
            </div>
            <Modal1 />
            <Modal2 />
            <Modal3 />
          </div>
        )}

        {/* MEDIA */}
        {(activeTab === 'all' || activeTab === 'media') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: MEDIA & GALLERIES [01 — 03]</span>
              <span className="text-[#e30613]">3 COMPONENTS</span>
            </div>
            <Media1 />
            <Media2 />
            <Media3 />
          </div>
        )}

        {/* FAQS */}
        {(activeTab === 'all' || activeTab === 'faqs') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: FAQS [01 — 03]</span>
              <span className="text-[#e30613]">3 COMPONENTS</span>
            </div>
            <Faq1 />
            <Faq2 />
            <Faq3 />
          </div>
        )}

        {/* CTAS */}
        {(activeTab === 'all' || activeTab === 'ctas') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: CTAS [01 — 03]</span>
              <span className="text-[#e30613]">3 COMPONENTS</span>
            </div>
            <Cta1 />
            <Cta2 />
            <Cta3 />
          </div>
        )}

        {/* STATS */}
        {(activeTab === 'all' || activeTab === 'stats') && (
          <div className="border-b border-[#0a0a0a]">
            <div className="bg-[#0a0a0a] text-[#ffffff] px-6 py-3 font-mono text-xs uppercase tracking-widest flex justify-between items-center">
              <span>CATEGORY: STATS & METRICS [01 — 04]</span>
              <span className="text-[#e30613]">4 COMPONENTS</span>
            </div>
            <Stat1 />
            <Stat2 />
            <Stat3 />
            <Stat4 />
          </div>
        )}
      </main>

      {/* Master Footer */}
      <footer className="bg-[#0a0a0a] text-[#ffffff] py-12 border-t border-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 border-x border-[#ffffff]/20 flex flex-col md:flex-row justify-between items-center font-mono text-xs uppercase tracking-widest">
          <div>HAUS DER FORM // SWISS DESIGN SYSTEM V4.4</div>
          <div className="text-[#e30613] mt-4 md:mt-0">44 COMPONENTS RENDERED SUCCESSFULLY</div>
        </div>
      </footer>
    </div>
  );
}
