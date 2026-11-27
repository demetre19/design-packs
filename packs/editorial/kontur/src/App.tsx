/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Search, Copy, Check } from 'lucide-react';
import {
  CATALOG_CATEGORIES,
  filterCatalogEntries,
  type CatalogEntry,
} from './utils/componentCatalog';

// Content (15)
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

interface ComponentItem extends CatalogEntry {
  component: React.ReactNode;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const componentsList: ComponentItem[] = [
    // Content (15)
    { id: 'content-1', name: 'Content 1 // The Ledger', category: 'content', component: <Content1 />, path: 'src/components/content/Content1.tsx' },
    { id: 'content-2', name: 'Content 2 // The Spiral Staircase', category: 'content', component: <Content2 />, path: 'src/components/content/Content2.tsx' },
    { id: 'content-3', name: 'Content 3 // The Interlock', category: 'content', component: <Content3 />, path: 'src/components/content/Content3.tsx' },
    { id: 'content-4', name: 'Content 4 // The Exploded Diagram', category: 'content', component: <Content4 />, path: 'src/components/content/Content4.tsx' },
    { id: 'content-5', name: 'Content 5 // The Split Screen Argument', category: 'content', component: <Content5 />, path: 'src/components/content/Content5.tsx' },
    { id: 'content-6', name: 'Content 6 // The Margin Book', category: 'content', component: <Content6 />, path: 'src/components/content/Content6.tsx' },
    { id: 'content-7', name: 'Content 7 // The Film Strip', category: 'content', component: <Content7 />, path: 'src/components/content/Content7.tsx' },
    { id: 'content-8', name: 'Content 8 // The Pinboard', category: 'content', component: <Content8 />, path: 'src/components/content/Content8.tsx' },
    { id: 'content-9', name: 'Content 9 // The Index', category: 'content', component: <Content9 />, path: 'src/components/content/Content9.tsx' },
    { id: 'content-10', name: 'Content 10 // The Interruption', category: 'content', component: <Content10 />, path: 'src/components/content/Content10.tsx' },
    { id: 'content-11', name: 'Content 11 // The Specimen Grid', category: 'content', component: <Content11 />, path: 'src/components/content/Content11.tsx' },
    { id: 'content-12', name: 'Content 12 // The Threaded Narrative', category: 'content', component: <Content12 />, path: 'src/components/content/Content12.tsx' },
    { id: 'content-13', name: 'Content 13 // The Colophon', category: 'content', component: <Content13 />, path: 'src/components/content/Content13.tsx' },
    { id: 'content-14', name: 'Content 14 // The Cascade', category: 'content', component: <Content14 />, path: 'src/components/content/Content14.tsx' },
    { id: 'content-15', name: 'Content 15 // The Inverted Vault', category: 'content', component: <Content15 />, path: 'src/components/content/Content15.tsx' },
    // Navbar
    { id: 'navbar-1', name: 'Navbar 1 // Standard Wordmark & Links', category: 'navbar', component: <Navbar1 />, path: 'src/components/navbar/Navbar1.tsx' },
    { id: 'navbar-2', name: 'Navbar 2 // Full-Bleed Cropped Wordmark', category: 'navbar', component: <Navbar2 />, path: 'src/components/navbar/Navbar2.tsx' },
    { id: 'navbar-3', name: 'Navbar 3 // Minimal Mono Top-Line', category: 'navbar', component: <Navbar3 />, path: 'src/components/navbar/Navbar3.tsx' },
    { id: 'navbar-4', name: 'Navbar 4 // Split Nav with Giant Background Title', category: 'navbar', component: <Navbar4 />, path: 'src/components/navbar/Navbar4.tsx' },

    // Heroes
    { id: 'hero-1', name: 'Hero 1 // Full-Bleed Four-Edge Crop', category: 'heroes', component: <Hero1 />, path: 'src/components/heroes/Hero1.tsx' },
    { id: 'hero-2', name: 'Hero 2 // Three Stacked Offset Lines', category: 'heroes', component: <Hero2 />, path: 'src/components/heroes/Hero2.tsx' },
    { id: 'hero-3', name: 'Hero 3 // Left/Right Crop with Centered Details', category: 'heroes', component: <Hero3 />, path: 'src/components/heroes/Hero3.tsx' },
    { id: 'hero-4', name: 'Hero 4 // Split Type & Dense Small-Copy Columns', category: 'heroes', component: <Hero4 />, path: 'src/components/heroes/Hero4.tsx' },
    { id: 'hero-5', name: 'Hero 5 // Vertical Cropped Word Down Right Edge', category: 'heroes', component: <Hero5 />, path: 'src/components/heroes/Hero5.tsx' },

    // Feature Grids
    { id: 'feature-grid-1', name: 'Feature Grid 1 // Numbered Program Schedule', category: 'feature-grids', component: <FeatureGrid1 />, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
    { id: 'feature-grid-2', name: 'Feature Grid 2 // 2x2 Cards with Mini Bleed Words', category: 'feature-grids', component: <FeatureGrid2 />, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
    { id: 'feature-grid-3', name: 'Feature Grid 3 // Speaker Index (Huge Names)', category: 'feature-grids', component: <FeatureGrid3 />, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
    { id: 'feature-grid-4', name: 'Feature Grid 4 // Asymmetric Grid with Void Cell', category: 'feature-grids', component: <FeatureGrid4 />, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

    // Pricing
    { id: 'pricing-1', name: 'Pricing 1 // Ticket Tiers as Type Specimens', category: 'pricing', component: <Pricing1 />, path: 'src/components/pricing/Pricing1.tsx' },
    { id: 'pricing-2', name: 'Pricing 2 // Table Passes with Hairline Dividers', category: 'pricing', component: <Pricing2 />, path: 'src/components/pricing/Pricing2.tsx' },
    { id: 'pricing-3', name: 'Pricing 3 // Single Spotlight Fellowship Tier', category: 'pricing', component: <Pricing3 />, path: 'src/components/pricing/Pricing3.tsx' },
    { id: 'pricing-4', name: 'Pricing 4 // Horizontal Scroll Tiers', category: 'pricing', component: <Pricing4 />, path: 'src/components/pricing/Pricing4.tsx' },

    // Testimonials
    { id: 'testimonial-1', name: 'Testimonial 1 // Giant Cropped Quote Fragment', category: 'testimonials', component: <Testimonial1 />, path: 'src/components/testimonials/Testimonial1.tsx' },
    { id: 'testimonial-2', name: 'Testimonial 2 // Quote Wall (Single Cropped Words)', category: 'testimonials', component: <Testimonial2 />, path: 'src/components/testimonials/Testimonial2.tsx' },
    { id: 'testimonial-3', name: 'Testimonial 3 // Press Quotes in Dense Columns', category: 'testimonials', component: <Testimonial3 />, path: 'src/components/testimonials/Testimonial3.tsx' },

    // Blog Cards
    { id: 'blog-card-1', name: 'Blog Card 1 // Headlines Bleed Off Edge', category: 'blog-cards', component: <BlogCard1 />, path: 'src/components/blog-cards/BlogCard1.tsx' },
    { id: 'blog-card-2', name: 'Blog Card 2 // Indexed List with Huge Numbers', category: 'blog-cards', component: <BlogCard2 />, path: 'src/components/blog-cards/BlogCard2.tsx' },
    { id: 'blog-card-3', name: 'Blog Card 3 // Magazine Grid Mixed-Scale', category: 'blog-cards', component: <BlogCard3 />, path: 'src/components/blog-cards/BlogCard3.tsx' },
    { id: 'blog-card-4', name: 'Blog Card 4 // Featured Article Bleed Band', category: 'blog-cards', component: <BlogCard4 />, path: 'src/components/blog-cards/BlogCard4.tsx' },

    // Footers
    { id: 'footer-1', name: 'Footer 1 // Giant Cropped Brand Word', category: 'footers', component: <Footer1 />, path: 'src/components/footers/Footer1.tsx' },
    { id: 'footer-2', name: 'Footer 2 // Venue & Contact Directory Clusters', category: 'footers', component: <Footer2 />, path: 'src/components/footers/Footer2.tsx' },
    { id: 'footer-3', name: 'Footer 3 // Minimal Legal Line + Cropped Wordmark', category: 'footers', component: <Footer3 />, path: 'src/components/footers/Footer3.tsx' },
    { id: 'footer-4', name: 'Footer 4 // Newsletter with Huge SUBSCRIBE', category: 'footers', component: <Footer4 />, path: 'src/components/footers/Footer4.tsx' },

    // Contact Forms
    { id: 'contact-form-1', name: 'Contact Form 1 // Lecture Booking Slip', category: 'contact-forms', component: <ContactForm1 />, path: 'src/components/contact-forms/ContactForm1.tsx' },
    { id: 'contact-form-2', name: 'Contact Form 2 // Split REGISTER Form', category: 'contact-forms', component: <ContactForm2 />, path: 'src/components/contact-forms/ContactForm2.tsx' },
    { id: 'contact-form-3', name: 'Contact Form 3 // Minimal Single-Column', category: 'contact-forms', component: <ContactForm3 />, path: 'src/components/contact-forms/ContactForm3.tsx' },

    // Modals
    { id: 'modal-1', name: 'Modal 1 // Ticket Detail Modal', category: 'modals', component: <Modal1 />, path: 'src/components/modals/Modal1.tsx' },
    { id: 'modal-2', name: 'Modal 2 // Speaker Bio Modal with Surname Crop', category: 'modals', component: <Modal2 />, path: 'src/components/modals/Modal2.tsx' },
    { id: 'modal-3', name: 'Modal 3 // Confirmation Stub', category: 'modals', component: <Modal3 />, path: 'src/components/modals/Modal3.tsx' },

    // Media
    { id: 'media-1', name: 'Media 1 // Video Plate Void with Play Word', category: 'media', component: <Media1 />, path: 'src/components/media/Media1.tsx' },
    { id: 'media-2', name: 'Media 2 // Gallery Plates Grid', category: 'media', component: <Media2 />, path: 'src/components/media/Media2.tsx' },
    { id: 'media-3', name: 'Media 3 // Single Feature Plate with Corner Details', category: 'media', component: <Media3 />, path: 'src/components/media/Media3.tsx' },

    // FAQs
    { id: 'faq-1', name: 'Faq 1 // Indexed Accordion', category: 'faqs', component: <Faq1 />, path: 'src/components/faqs/Faq1.tsx' },
    { id: 'faq-2', name: 'Faq 2 // Dense Q&A under QUESTIONS Header', category: 'faqs', component: <Faq2 />, path: 'src/components/faqs/Faq2.tsx' },
    { id: 'faq-3', name: 'Faq 3 // Hairline Single-Column Q&A', category: 'faqs', component: <Faq3 />, path: 'src/components/faqs/Faq3.tsx' },

    // CTAs
    { id: 'cta-1', name: 'Cta 1 // Full-Bleed SECURE Action Word', category: 'ctas', component: <Cta1 />, path: 'src/components/ctas/Cta1.tsx' },
    { id: 'cta-2', name: 'Cta 2 // Centered REGISTER Cluster', category: 'ctas', component: <Cta2 />, path: 'src/components/ctas/Cta2.tsx' },
    { id: 'cta-3', name: 'Cta 3 // Vertical Split Archive CTA', category: 'ctas', component: <Cta3 />, path: 'src/components/ctas/Cta3.tsx' },

    // Stats
    { id: 'stat-1', name: 'Stat 1 // Monumental Edition Numerals', category: 'stats', component: <Stat1 />, path: 'src/components/stats/Stat1.tsx' },
    { id: 'stat-2', name: 'Stat 2 // Stat Row with Hairline Dividers', category: 'stats', component: <Stat2 />, path: 'src/components/stats/Stat2.tsx' },
    { id: 'stat-3', name: 'Stat 3 // Spotlight 1962 Stat', category: 'stats', component: <Stat3 />, path: 'src/components/stats/Stat3.tsx' },
  ];

  const filteredComponents = filterCatalogEntries(
    componentsList,
    activeCategory,
    searchQuery
  );

  const handleCopyPath = (id: string, path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Top Banner / Header */}
      <header className="border-b border-white/20 px-6 py-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="text-[11px] font-mono tracking-widest opacity-70 mb-2">
              KONTUR SYMPOSIUM '26 // DESIGN SYSTEM
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              BLEED TYPE ARCHITECTURE
            </h1>
          </div>
          <div className="text-right font-mono text-xs opacity-70 space-y-1">
            <div>61 SELF-CONTAINED REACT COMPONENTS</div>
            <div>STYLE: SWISS GROTESQUE POSTER</div>
            <div>PALETTE: PURE BLACK &amp; WHITE</div>
          </div>
        </div>
      </header>

      {/* Controls & Category Bar */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-white/20 px-6 py-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Categories */}
        <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CATALOG_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono tracking-widest whitespace-nowrap border transition-colors ${
                activeCategory === cat.id
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-black text-white/70 border-white/20 hover:border-white/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-2.5 w-4 h-4 opacity-50" aria-hidden="true" />
          <input
            type="text"
            aria-label="Search components"
            placeholder="SEARCH COMPONENTS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black border border-white/30 pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-white"
          />
        </div>
      </div>

      {/* Main Component Showcase Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <div className="text-xs font-mono tracking-widest opacity-60">
          SHOWING {filteredComponents.length} OF {componentsList.length} COMPONENTS
        </div>

        <div className="space-y-16">
          {filteredComponents.map((item) => (
            <div key={item.id} className="border border-white/20 bg-black group">
              {/* Component Bar */}
              <div className="border-b border-white/20 px-6 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-black">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono tracking-widest text-white/50">[{item.category.toUpperCase()}]</span>
                  <h3 className="text-sm font-mono tracking-wider font-bold uppercase">{item.name}</h3>
                </div>
                <div className="flex items-center space-x-4 text-xs font-mono">
                  <span className="opacity-50 hidden md:inline">{item.path}</span>
                  <button
                    onClick={() => handleCopyPath(item.id, item.path)}
                    className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity border border-white/20 px-2.5 py-1"
                  >
                    {copiedId === item.id ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === item.id ? 'COPIED PATH' : 'COPY PATH'}</span>
                  </button>
                </div>
              </div>

              {/* Render Component */}
              <div className="w-full bg-black overflow-hidden">
                {item.component}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Master Footer */}
      <footer className="border-t border-white/20 px-6 py-12 md:px-12 text-center text-xs font-mono tracking-widest opacity-60 space-y-2">
        <div>KONTUR SYMPOSIUM '26 — 61 ELEMENT SWISS DESIGN SYSTEM</div>
        <div>ALL COMPONENTS SELF-CONTAINED IN TSX WITH PURE BLACK &amp; WHITE BLEED TYPOGRAPHY</div>
      </footer>
    </div>
  );
}
