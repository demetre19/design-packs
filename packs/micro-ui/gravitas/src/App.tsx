import React, { useState } from 'react';
import { Layers, Disc, ArrowUpRight, Sliders, Terminal, Check, ChevronRight, Eye, Code2 } from 'lucide-react';

import { Navbar1, Navbar2, Navbar3, Navbar4 } from './components/navbar/Navbar1';
import { Hero1, Hero2, Hero3, Hero4, Hero5 } from './components/heroes/Hero1';
import { FeatureGrid1, FeatureGrid2, FeatureGrid3, FeatureGrid4 } from './components/feature-grids/FeatureGrid1';
import { Pricing1, Pricing2, Pricing3, Pricing4 } from './components/pricing/Pricing1';
import { Testimonial1, Testimonial2, Testimonial3 } from './components/testimonials/Testimonial1';
import { BlogCard1, BlogCard2, BlogCard3, BlogCard4 } from './components/blog-cards/BlogCard1';
import { Footer1, Footer2, Footer3, Footer4 } from './components/footers/Footer1';
import { ContactForm1, ContactForm2, ContactForm3 } from './components/contact-forms/ContactForm1';
import { Modal1, Modal2, Modal3 } from './components/modals/Modal1';
import { Media1, Media2, Media3 } from './components/media/Media1';
import { Faq1, Faq2, Faq3 } from './components/faqs/Faq1';
import { Cta1, Cta2, Cta3 } from './components/ctas/Cta1';
import { Stat1, Stat2, Stat3 } from './components/stats/Stat1';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedComponent, setSelectedComponent] = useState<{ name: string; category: string; component: React.ReactNode } | null>(null);

  const categories = [
    { id: 'all', name: 'All 44 Components', count: 44 },
    { id: 'navbar', name: 'Navbar', count: 4, items: [
      { name: 'Navbar 1: Foundry Wordmark & Links', comp: <Navbar1 /> },
      { name: 'Navbar 2: Weight-Spectrum Links', comp: <Navbar2 /> },
      { name: 'Navbar 3: Top Bar & Details', comp: <Navbar3 /> },
      { name: 'Navbar 4: Specimen Menu Dropdown', comp: <Navbar4 /> },
    ]},
    { id: 'heroes', name: 'Heroes', count: 5, items: [
      { name: 'Hero 1: Cascading Weight Stack', comp: <Hero1 /> },
      { name: 'Hero 2: Monolithic Display Master', comp: <Hero2 /> },
      { name: 'Hero 3: Alphabet Matrix Grid', comp: <Hero3 /> },
      { name: 'Hero 4: Split Weight Cascade', comp: <Hero4 /> },
      { name: 'Hero 5: Overlay Gradient BOLD', comp: <Hero5 /> },
    ]},
    { id: 'feature-grids', name: 'Feature Grids', count: 4, items: [
      { name: 'Grid 1: Six Optical Weights', comp: <FeatureGrid1 /> },
      { name: 'Grid 2: Font Family Tree', comp: <FeatureGrid2 /> },
      { name: 'Grid 3: Glyph Set Showcase', comp: <FeatureGrid3 /> },
      { name: 'Grid 4: Weighted Feature List', comp: <FeatureGrid4 /> },
    ]},
    { id: 'pricing', name: 'Pricing', count: 4, items: [
      { name: 'Pricing 1: Weight Specimen Tiers', comp: <Pricing1 /> },
      { name: 'Pricing 2: Hairline Specimen Table', comp: <Pricing2 /> },
      { name: 'Pricing 3: Single Spotlight Master', comp: <Pricing3 /> },
      { name: 'Pricing 4: Horizontal Tier Scroll', comp: <Pricing4 /> },
    ]},
    { id: 'testimonials', name: 'Testimonials', count: 3, items: [
      { name: 'Testimonial 1: Weight-Matched Quote', comp: <Testimonial1 /> },
      { name: 'Testimonial 2: Greyscale Quote Wall', comp: <Testimonial2 /> },
      { name: 'Testimonial 3: Press Cluster ACCLAIM', comp: <Testimonial3 /> },
    ]},
    { id: 'blog-cards', name: 'Blog Cards', count: 4, items: [
      { name: 'Blog 1: Specimen Journal Cards', comp: <BlogCard1 /> },
      { name: 'Blog 2: Index List with Numerals', comp: <BlogCard2 /> },
      { name: 'Blog 3: Asymmetric Magazine Grid', comp: <BlogCard3 /> },
      { name: 'Blog 4: Cascading Title Post', comp: <BlogCard4 /> },
    ]},
    { id: 'footers', name: 'Footers', count: 4, items: [
      { name: 'Footer 1: Giant Weight-Cascade', comp: <Footer1 /> },
      { name: 'Footer 2: Specimen-Info Columns', comp: <Footer2 /> },
      { name: 'Footer 3: Minimal Legal Line & Glyphs', comp: <Footer3 /> },
      { name: 'Footer 4: Specimen Order Newsletter', comp: <Footer4 /> },
    ]},
    { id: 'contact-forms', name: 'Contact Forms', count: 3, items: [
      { name: 'Contact 1: Specimen Order Slip', comp: <ContactForm1 /> },
      { name: 'Contact 2: Split Weight Cascade', comp: <ContactForm2 /> },
      { name: 'Contact 3: Wide-Tracked Labels', comp: <ContactForm3 /> },
    ]},
    { id: 'modals', name: 'Modals', count: 3, items: [
      { name: 'Modal 1: Weight Detail Specimen', comp: <Modal1 /> },
      { name: 'Modal 2: License Comparison', comp: <Modal2 /> },
      { name: 'Modal 3: Specimen Receipt', comp: <Modal3 /> },
    ]},
    { id: 'media', name: 'Media', count: 3, items: [
      { name: 'Media 1: Specimen Video Plate', comp: <Media1 /> },
      { name: 'Media 2: Glyph Plates Gallery', comp: <Media2 /> },
      { name: 'Media 3: Feature Plate & Overhang', comp: <Media3 /> },
    ]},
    { id: 'faqs', name: 'FAQs', count: 3, items: [
      { name: 'FAQ 1: Weight-Indexed Accordion', comp: <Faq1 /> },
      { name: 'FAQ 2: Dense Two-Column Notes', comp: <Faq2 /> },
      { name: 'FAQ 3: Single-Column Hairline', comp: <Faq3 /> },
    ]},
    { id: 'ctas', name: 'CTAs', count: 3, items: [
      { name: 'CTA 1: Cascading TRY IT Stack', comp: <Cta1 /> },
      { name: 'CTA 2: Centered Specimen Energy', comp: <Cta2 /> },
      { name: 'CTA 3: Split Vertical Weight List', comp: <Cta3 /> },
    ]},
    { id: 'stats', name: 'Stats', count: 3, items: [
      { name: 'Stats 1: Weight Monuments', comp: <Stat1 /> },
      { name: 'Stats 2: Hairline Separator Row', comp: <Stat2 /> },
      { name: 'Stats 3: Single Spotlight Monument', comp: <Stat3 /> },
    ]},
  ];

  const allItems = categories.filter(c => c.id !== 'all').flatMap(c => c.items || []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Top Banner */}
      <header className="border-b border-neutral-800 bg-black sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Disc className="w-6 h-6 text-white animate-spin-slow" />
            <div>
              <span className="font-black text-xl tracking-tighter text-white">GRAVITAS TYPE FOUNDRY</span>
              <span className="text-[10px] font-mono text-neutral-400 block tracking-widest uppercase">44-Component Design System Specimen</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-xs font-mono text-neutral-400">
            <span className="hidden sm:inline">WEIGHT SPECTRUM: 200–900</span>
            <button 
              onClick={() => setSelectedComponent(null)}
              className="bg-white text-black px-4 py-2 uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
            >
              Browse All 44
            </button>
          </div>
        </div>
        <div className="border-t border-neutral-900 bg-neutral-950 px-6 py-2 overflow-x-auto whitespace-nowrap">
          <div className="max-w-6xl mx-auto flex items-center space-x-4 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSelectedComponent(null); }}
                className={`px-3 py-1 uppercase tracking-wider transition-colors ${
                  activeCategory === cat.id 
                    ? 'bg-white text-black font-bold' 
                    : 'text-neutral-400 hover:text-white bg-neutral-900'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {selectedComponent ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">ISOLATED COMPONENT VIEW</span>
                <h2 className="text-2xl font-bold text-white mt-1">{selectedComponent.name}</h2>
              </div>
              <button 
                onClick={() => setSelectedComponent(null)}
                className="border border-neutral-700 px-4 py-2 text-xs font-mono text-white hover:bg-neutral-900"
              >
                ← Back to Library
              </button>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              {selectedComponent.component}
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {categories.filter(c => c.id !== 'all').map((cat) => {
              if (activeCategory !== 'all' && activeCategory !== cat.id) return null;
              return (
                <div key={cat.id} className="space-y-6">
                  <div className="border-b border-neutral-800 pb-4 flex justify-between items-end">
                    <div>
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">FAMILY // {cat.id.toUpperCase()}</span>
                      <h2 className="text-3xl font-black text-white tracking-tight uppercase mt-1">{cat.name}</h2>
                    </div>
                    <span className="text-xs font-mono text-neutral-400">{cat.items?.length} VARIATIONS</span>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    {cat.items?.map((item, idx) => (
                      <div key={idx} className="border border-neutral-800 bg-neutral-950 rounded-none overflow-hidden group">
                        <div className="bg-neutral-900 px-6 py-3 border-b border-neutral-800 flex justify-between items-center text-xs font-mono">
                          <span className="text-white font-bold">{item.name}</span>
                          <button
                            onClick={() => setSelectedComponent({ name: item.name, category: cat.id, component: item.comp })}
                            className="text-neutral-400 hover:text-white flex items-center space-x-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Isolate View</span>
                          </button>
                        </div>
                        <div className="p-0">
                          {item.comp}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-xs font-mono text-neutral-400">
          <span>GRAVITAS TYPE FOUNDRY // 44 COMPONENT SPECIMEN SYSTEM</span>
          <span>EST. 1924 ZURICH</span>
          <span>ALL RIGHTS RESERVED © 2026</span>
        </div>
      </footer>
    </div>
  );
}
