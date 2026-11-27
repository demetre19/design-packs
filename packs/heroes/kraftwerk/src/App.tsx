import React, { useState } from 'react';
import { Terminal, Check, Copy } from 'lucide-react';
import {
  COMPONENT_CATEGORIES,
  getInitialCategory,
  getTotalComponentCount,
  isSectionVisible,
} from './utils/catalogRegistry';

// Content Sections
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

// Navbar
import { Navbar1 } from './components/navbar/Navbar1';
import { Navbar2 } from './components/navbar/Navbar2';
import { Navbar3 } from './components/navbar/Navbar3';
import { Navbar4 } from './components/navbar/Navbar4';

// Heroes
import { Hero1 } from './components/heroes/Hero1';
import { Hero2 } from './components/heroes/Hero2';
import { Hero3 } from './components/heroes/Hero3';
import { Hero4 } from './components/heroes/Hero4';
import { Hero5 } from './components/heroes/Hero5';

// Feature Grids
import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './components/feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './components/feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './components/feature-grids/FeatureGrid4';

// Pricing
import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing2 } from './components/pricing/Pricing2';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';

// Testimonials
import { Testimonial1 } from './components/testimonials/Testimonial1';
import { Testimonial2 } from './components/testimonials/Testimonial2';
import { Testimonial3 } from './components/testimonials/Testimonial3';

// Blog Cards
import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { BlogCard2 } from './components/blog-cards/BlogCard2';
import { BlogCard3 } from './components/blog-cards/BlogCard3';
import { BlogCard4 } from './components/blog-cards/BlogCard4';

// Footers
import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

// Contact Forms
import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { ContactForm2 } from './components/contact-forms/ContactForm2';
import { ContactForm3 } from './components/contact-forms/ContactForm3';

// Modals
import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

// Media
import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

// FAQs
import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

// CTAs
import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

// Stats
import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';
import { Stat4 } from './components/stats/Stat4';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>(() =>
    getInitialCategory(typeof window !== 'undefined' ? window.location.search : '')
  );
  const [copied, setCopied] = useState(false);

  const totalCount = getTotalComponentCount(COMPONENT_CATEGORIES);

  const handleCopyManifest = () => {
    navigator.clipboard.writeText(`KRAFTWERK // VGH-99 HOMOLOGATION DESIGN SYSTEM (${totalCount} COMPONENTS)`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#e8e8e6] text-[#111111] font-mono selection:bg-[#111] selection:text-[#e8e8e6]">
      {/* Top Specimen Header */}
      <header className="border-b-2 border-[#111111] bg-[#111111] text-[#e8e8e6] p-4 md:p-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[10px] tracking-widest text-[#aaa] mb-1">
              <Terminal className="w-4 h-4" />
              <span>KRAFTWERK HOMOLOGATION ARCHIVE // VGH-99</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              TECHNICAL DESIGN SYSTEM
            </h1>
            <p className="text-[10px] text-[#888] uppercase tracking-widest mt-1">
              {totalCount} SELF-CONTAINED REACT + TAILWIND COMPONENTS // STRICT MONOCHROME DATASHEET SPEC
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handleCopyManifest}
              className="px-4 py-2 bg-[#e8e8e6] text-[#111111] text-[10px] uppercase font-bold hover:bg-white transition-colors cursor-pointer flex items-center space-x-1"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'MANIFEST COPIED' : 'COPY MANIFEST'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Category Navigation Bar */}
      <nav aria-label="Component families" className="sticky top-0 z-40 bg-[#e8e8e6] border-b-2 border-[#111111] shadow-none">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start border-x border-[#111111] text-[9px] uppercase font-bold">
          {COMPONENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={`px-3 py-2.5 border-r border-b border-[#111111] transition-colors cursor-pointer whitespace-nowrap ${activeCategory === cat.id ? 'bg-[#111] text-[#e8e8e6]' : 'hover:bg-[#d8d8d4]'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Catalog View */}
      <main className="py-8 space-y-12">
        {/* Content Sections Family */}
        {isSectionVisible(activeCategory, 'content') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: CONTENT SECTIONS] // 15 COMPONENTS</span>
                <span>SRC/COMPONENTS/CONTENT/</span>
              </div>
            </div>
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 />
            <Content6 />
            <Content7 />
            <Content8 />
            <Content9 />
            <Content10 />
            <Content11 />
            <Content12 />
            <Content13 />
            <Content14 />
            <Content15 />
          </div>
        )}

        {/* Navbar Section */}
        {isSectionVisible(activeCategory, 'navbar') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: NAVBARS] // 4 COMPONENTS</span>
                <span>SRC/COMPONENTS/NAVBAR/</span>
              </div>
            </div>
            <Navbar1 />
            <Navbar2 />
            <Navbar3 />
            <Navbar4 />
          </div>
        )}

        {/* Heroes Section */}
        {(activeCategory === 'all' || activeCategory === 'heroes') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: HEROES] // 5 COMPONENTS</span>
                <span>SRC/COMPONENTS/HEROES/</span>
              </div>
            </div>
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Hero5 />
          </div>
        )}

        {/* Feature Grids Section */}
        {(activeCategory === 'all' || activeCategory === 'feature-grids') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: FEATURE GRIDS] // 4 COMPONENTS</span>
                <span>SRC/COMPONENTS/FEATURE-GRIDS/</span>
              </div>
            </div>
            <FeatureGrid1 />
            <FeatureGrid2 />
            <FeatureGrid3 />
            <FeatureGrid4 />
          </div>
        )}

        {/* Pricing Section */}
        {(activeCategory === 'all' || activeCategory === 'pricing') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: PRICING] // 4 COMPONENTS</span>
                <span>SRC/COMPONENTS/PRICING/</span>
              </div>
            </div>
            <Pricing1 />
            <Pricing2 />
            <Pricing3 />
            <Pricing4 />
          </div>
        )}

        {/* Testimonials Section */}
        {(activeCategory === 'all' || activeCategory === 'testimonials') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: TESTIMONIALS] // 3 COMPONENTS</span>
                <span>SRC/COMPONENTS/TESTIMONIALS/</span>
              </div>
            </div>
            <Testimonial1 />
            <Testimonial2 />
            <Testimonial3 />
          </div>
        )}

        {/* Blog Cards Section */}
        {(activeCategory === 'all' || activeCategory === 'blog-cards') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: EDITORIAL / BLOG CARDS] // 4 COMPONENTS</span>
                <span>SRC/COMPONENTS/BLOG-CARDS/</span>
              </div>
            </div>
            <BlogCard1 />
            <BlogCard2 />
            <BlogCard3 />
            <BlogCard4 />
          </div>
        )}

        {/* Footers Section */}
        {(activeCategory === 'all' || activeCategory === 'footers') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: FOOTERS] // 4 COMPONENTS</span>
                <span>SRC/COMPONENTS/FOOTERS/</span>
              </div>
            </div>
            <Footer1 />
            <Footer2 />
            <Footer3 />
            <Footer4 />
          </div>
        )}

        {/* Contact Forms Section */}
        {(activeCategory === 'all' || activeCategory === 'contact-forms') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: CONTACT FORMS] // 3 COMPONENTS</span>
                <span>SRC/COMPONENTS/CONTACT-FORMS/</span>
              </div>
            </div>
            <ContactForm1 />
            <ContactForm2 />
            <ContactForm3 />
          </div>
        )}

        {/* Modals Section */}
        {(activeCategory === 'all' || activeCategory === 'modals') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: MODALS & DIALOGS] // 3 COMPONENTS</span>
                <span>SRC/COMPONENTS/MODALS/</span>
              </div>
            </div>
            <Modal1 />
            <Modal2 />
            <Modal3 />
          </div>
        )}

        {/* Media Section */}
        {(activeCategory === 'all' || activeCategory === 'media') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: MEDIA SECTIONS] // 3 COMPONENTS</span>
                <span>SRC/COMPONENTS/MEDIA/</span>
              </div>
            </div>
            <Media1 />
            <Media2 />
            <Media3 />
          </div>
        )}

        {/* FAQs Section */}
        {(activeCategory === 'all' || activeCategory === 'faqs') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: FAQS] // 3 COMPONENTS</span>
                <span>SRC/COMPONENTS/FAQS/</span>
              </div>
            </div>
            <Faq1 />
            <Faq2 />
            <Faq3 />
          </div>
        )}

        {/* CTAs Section */}
        {(activeCategory === 'all' || activeCategory === 'ctas') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: CTAS] // 3 COMPONENTS</span>
                <span>SRC/COMPONENTS/CTAS/</span>
              </div>
            </div>
            <Cta1 />
            <Cta2 />
            <Cta3 />
          </div>
        )}

        {/* Stats Section */}
        {(activeCategory === 'all' || activeCategory === 'stats') && (
          <div className="space-y-4">
            <div className="max-w-6xl mx-auto px-4">
              <div className="border-b-2 border-[#111] pb-2 text-xs font-black uppercase tracking-widest flex justify-between">
                <span>[FAMILY: STATS & DATA] // 4 COMPONENTS</span>
                <span>SRC/COMPONENTS/STATS/</span>
              </div>
            </div>
            <Stat1 />
            <Stat2 />
            <Stat3 />
            <Stat4 />
          </div>
        )}
      </main>

      {/* Bottom Specimen Register Footer */}
      <footer className="bg-[#111] text-[#e8e8e6] p-8 mt-16 border-t-2 border-[#111]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] space-y-4 md:space-y-0">
          <div>
            <span className="font-bold">KRAFTWERK HOMOLOGATION ARCHIVE // SYSTEM VGH-99</span>
            <p className="text-[#888] mt-1">{totalCount} COMPONENT SPECIMEN SHEET COMPLETED. STUTTGART-TOKYO.</p>
          </div>
          <div className="h-6 w-48 bg-[repeating-linear-gradient(90deg,#e8e8e6,#e8e8e6_2px,#111_2px,#111_5px)] border border-[#e8e8e6]" />
        </div>
      </footer>
    </div>
  );
}
