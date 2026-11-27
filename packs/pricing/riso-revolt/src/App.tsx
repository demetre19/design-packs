import React, { useState } from 'react';
import { Sparkles, Code, Eye, Layers, Copy, Check, Terminal, ExternalLink, ArrowRight, Grid, Layout } from 'lucide-react';

// Import all 44 components
import Navbar1 from './components/navbar/Navbar1';
import Navbar2 from './components/navbar/Navbar2';
import Navbar3 from './components/navbar/Navbar3';
import Navbar4 from './components/navbar/Navbar4';

import Hero1 from './components/heroes/Hero1';
import Hero2 from './components/heroes/Hero2';
import Hero3 from './components/heroes/Hero3';
import Hero4 from './components/heroes/Hero4';
import Hero5 from './components/heroes/Hero5';

import FeatureGrid1 from './components/feature-grids/FeatureGrid1';
import FeatureGrid2 from './components/feature-grids/FeatureGrid2';
import FeatureGrid3 from './components/feature-grids/FeatureGrid3';
import FeatureGrid4 from './components/feature-grids/FeatureGrid4';

import Pricing1 from './components/pricing/Pricing1';
import Pricing2 from './components/pricing/Pricing2';
import Pricing3 from './components/pricing/Pricing3';
import Pricing4 from './components/pricing/Pricing4';

import Testimonial1 from './components/testimonials/Testimonial1';
import Testimonial2 from './components/testimonials/Testimonial2';
import Testimonial3 from './components/testimonials/Testimonial3';

import BlogCard1 from './components/blog-cards/BlogCard1';
import BlogCard2 from './components/blog-cards/BlogCard2';
import BlogCard3 from './components/blog-cards/BlogCard3';
import BlogCard4 from './components/blog-cards/BlogCard4';

import Footer1 from './components/footers/Footer1';
import Footer2 from './components/footers/Footer2';
import Footer3 from './components/footers/Footer3';
import Footer4 from './components/footers/Footer4';

import ContactForm1 from './components/contact-forms/ContactForm1';
import ContactForm2 from './components/contact-forms/ContactForm2';
import ContactForm3 from './components/contact-forms/ContactForm3';

import Modal1 from './components/modals/Modal1';
import Modal2 from './components/modals/Modal2';
import Modal3 from './components/modals/Modal3';

import Media1 from './components/media/Media1';
import Media2 from './components/media/Media2';
import Media3 from './components/media/Media3';

import Faq1 from './components/faqs/Faq1';
import Faq2 from './components/faqs/Faq2';
import Faq3 from './components/faqs/Faq3';

import Cta1 from './components/ctas/Cta1';
import Cta2 from './components/ctas/Cta2';
import Cta3 from './components/ctas/Cta3';

import Stat1 from './components/stats/Stat1';
import Stat2 from './components/stats/Stat2';
import Stat3 from './components/stats/Stat3';
import Stat4 from './components/stats/Stat4';

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  path: string;
  component: React.ComponentType;
}

const COMPONENTS_REGISTRY: ComponentItem[] = [
  // Navbars
  { id: 'navbar-1', name: 'Navbar 1', category: 'navbar', path: 'src/components/navbar/Navbar1.tsx', component: Navbar1 },
  { id: 'navbar-2', name: 'Navbar 2', category: 'navbar', path: 'src/components/navbar/Navbar2.tsx', component: Navbar2 },
  { id: 'navbar-3', name: 'Navbar 3', category: 'navbar', path: 'src/components/navbar/Navbar3.tsx', component: Navbar3 },
  { id: 'navbar-4', name: 'Navbar 4', category: 'navbar', path: 'src/components/navbar/Navbar4.tsx', component: Navbar4 },

  // Heroes
  { id: 'hero-1', name: 'Hero 1', category: 'heroes', path: 'src/components/heroes/Hero1.tsx', component: Hero1 },
  { id: 'hero-2', name: 'Hero 2', category: 'heroes', path: 'src/components/heroes/Hero2.tsx', component: Hero2 },
  { id: 'hero-3', name: 'Hero 3', category: 'heroes', path: 'src/components/heroes/Hero3.tsx', component: Hero3 },
  { id: 'hero-4', name: 'Hero 4', category: 'heroes', path: 'src/components/heroes/Hero4.tsx', component: Hero4 },
  { id: 'hero-5', name: 'Hero 5', category: 'heroes', path: 'src/components/heroes/Hero5.tsx', component: Hero5 },

  // Feature Grids
  { id: 'feature-1', name: 'Feature Grid 1', category: 'feature-grids', path: 'src/components/feature-grids/FeatureGrid1.tsx', component: FeatureGrid1 },
  { id: 'feature-2', name: 'Feature Grid 2', category: 'feature-grids', path: 'src/components/feature-grids/FeatureGrid2.tsx', component: FeatureGrid2 },
  { id: 'feature-3', name: 'Feature Grid 3', category: 'feature-grids', path: 'src/components/feature-grids/FeatureGrid3.tsx', component: FeatureGrid3 },
  { id: 'feature-4', name: 'Feature Grid 4', category: 'feature-grids', path: 'src/components/feature-grids/FeatureGrid4.tsx', component: FeatureGrid4 },

  // Pricing
  { id: 'pricing-1', name: 'Pricing 1', category: 'pricing', path: 'src/components/pricing/Pricing1.tsx', component: Pricing1 },
  { id: 'pricing-2', name: 'Pricing 2', category: 'pricing', path: 'src/components/pricing/Pricing2.tsx', component: Pricing2 },
  { id: 'pricing-3', name: 'Pricing 3', category: 'pricing', path: 'src/components/pricing/Pricing3.tsx', component: Pricing3 },
  { id: 'pricing-4', name: 'Pricing 4', category: 'pricing', path: 'src/components/pricing/Pricing4.tsx', component: Pricing4 },

  // Testimonials
  { id: 'testimonial-1', name: 'Testimonial 1', category: 'testimonials', path: 'src/components/testimonials/Testimonial1.tsx', component: Testimonial1 },
  { id: 'testimonial-2', name: 'Testimonial 2', category: 'testimonials', path: 'src/components/testimonials/Testimonial2.tsx', component: Testimonial2 },
  { id: 'testimonial-3', name: 'Testimonial 3', category: 'testimonials', path: 'src/components/testimonials/Testimonial3.tsx', component: Testimonial3 },

  // Blog Cards
  { id: 'blog-1', name: 'Blog Card 1', category: 'blog-cards', path: 'src/components/blog-cards/BlogCard1.tsx', component: BlogCard1 },
  { id: 'blog-2', name: 'Blog Card 2', category: 'blog-cards', path: 'src/components/blog-cards/BlogCard2.tsx', component: BlogCard2 },
  { id: 'blog-3', name: 'Blog Card 3', category: 'blog-cards', path: 'src/components/blog-cards/BlogCard3.tsx', component: BlogCard3 },
  { id: 'blog-4', name: 'Blog Card 4', category: 'blog-cards', path: 'src/components/blog-cards/BlogCard4.tsx', component: BlogCard4 },

  // Footers
  { id: 'footer-1', name: 'Footer 1', category: 'footers', path: 'src/components/footers/Footer1.tsx', component: Footer1 },
  { id: 'footer-2', name: 'Footer 2', category: 'footers', path: 'src/components/footers/Footer2.tsx', component: Footer2 },
  { id: 'footer-3', name: 'Footer 3', category: 'footers', path: 'src/components/footers/Footer3.tsx', component: Footer3 },
  { id: 'footer-4', name: 'Footer 4', category: 'footers', path: 'src/components/footers/Footer4.tsx', component: Footer4 },

  // Contact Forms
  { id: 'contact-1', name: 'Contact Form 1', category: 'contact-forms', path: 'src/components/contact-forms/ContactForm1.tsx', component: ContactForm1 },
  { id: 'contact-2', name: 'Contact Form 2', category: 'contact-forms', path: 'src/components/contact-forms/ContactForm2.tsx', component: ContactForm2 },
  { id: 'contact-3', name: 'Contact Form 3', category: 'contact-forms', path: 'src/components/contact-forms/ContactForm3.tsx', component: ContactForm3 },

  // Modals
  { id: 'modal-1', name: 'Modal 1', category: 'modals', path: 'src/components/modals/Modal1.tsx', component: Modal1 },
  { id: 'modal-2', name: 'Modal 2', category: 'modals', path: 'src/components/modals/Modal2.tsx', component: Modal2 },
  { id: 'modal-3', name: 'Modal 3', category: 'modals', path: 'src/components/modals/Modal3.tsx', component: Modal3 },

  // Media
  { id: 'media-1', name: 'Media 1', category: 'media', path: 'src/components/media/Media1.tsx', component: Media1 },
  { id: 'media-2', name: 'Media 2', category: 'media', path: 'src/components/media/Media2.tsx', component: Media2 },
  { id: 'media-3', name: 'Media 3', category: 'media', path: 'src/components/media/Media3.tsx', component: Media3 },

  // FAQs
  { id: 'faq-1', name: 'FAQ 1', category: 'faqs', path: 'src/components/faqs/Faq1.tsx', component: Faq1 },
  { id: 'faq-2', name: 'FAQ 2', category: 'faqs', path: 'src/components/faqs/Faq2.tsx', component: Faq2 },
  { id: 'faq-3', name: 'FAQ 3', category: 'faqs', path: 'src/components/faqs/Faq3.tsx', component: Faq3 },

  // CTAs
  { id: 'cta-1', name: 'CTA 1', category: 'ctas', path: 'src/components/ctas/Cta1.tsx', component: Cta1 },
  { id: 'cta-2', name: 'CTA 2', category: 'ctas', path: 'src/components/ctas/Cta2.tsx', component: Cta2 },
  { id: 'cta-3', name: 'CTA 3', category: 'ctas', path: 'src/components/ctas/Cta3.tsx', component: Cta3 },

  // Stats
  { id: 'stat-1', name: 'Stat 1', category: 'stats', path: 'src/components/stats/Stat1.tsx', component: Stat1 },
  { id: 'stat-2', name: 'Stat 2', category: 'stats', path: 'src/components/stats/Stat2.tsx', component: Stat2 },
  { id: 'stat-3', name: 'Stat 3', category: 'stats', path: 'src/components/stats/Stat3.tsx', component: Stat3 },
  { id: 'stat-4', name: 'Stat 4', category: 'stats', path: 'src/components/stats/Stat4.tsx', component: Stat4 },
];

const CATEGORIES = [
  { id: 'all', label: 'All 44 Elements' },
  { id: 'navbar', label: 'Navbar (4)' },
  { id: 'heroes', label: 'Heroes (5)' },
  { id: 'feature-grids', label: 'Feature Grids (4)' },
  { id: 'pricing', label: 'Pricing (4)' },
  { id: 'testimonials', label: 'Testimonials (3)' },
  { id: 'blog-cards', label: 'Blog Cards (4)' },
  { id: 'footers', label: 'Footers (4)' },
  { id: 'contact-forms', label: 'Contact Forms (3)' },
  { id: 'modals', label: 'Modals (3)' },
  { id: 'media', label: 'Media (3)' },
  { id: 'faqs', label: 'FAQs (3)' },
  { id: 'ctas', label: 'CTAs (3)' },
  { id: 'stats', label: 'Stats (4)' },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'explorer' | 'assembled'>('explorer');
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const filteredComponents = selectedCategory === 'all' 
    ? COMPONENTS_REGISTRY 
    : COMPONENTS_REGISTRY.filter(c => c.category === selectedCategory);

  const selectedComponent = COMPONENTS_REGISTRY.find(c => c.id === selectedComponentId);

  const copyPathText = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] text-[#111111] flex flex-col font-grotesk">
      
      {/* Top Banner Header */}
      <header className="bg-[#111111] text-[#fffdf5] border-b-3 border-[#111111] py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#ffd92e] text-[#111111] font-grotesk font-black text-xl px-3 py-1 shadow-hard-sm">
              R&R 44
            </div>
            <div>
              <h1 className="font-grotesk font-black text-xl tracking-tight uppercase">RISO & REVOLT DESIGN SYSTEM</h1>
              <p className="font-mono text-[10px] text-[#ffd92e] tracking-widest">44 SELF-CONTAINED NEO-BRUTALIST REACT COMPONENTS</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setViewMode('explorer')}
              className={`btn-brutal px-4 py-2 font-mono text-xs font-bold uppercase flex items-center gap-2 ${viewMode === 'explorer' ? 'bg-[#ffd92e] text-[#111111]' : 'bg-[#222222] text-[#fffdf5]'}`}
            >
              <Grid size={14} />
              <span>COMPONENT EXPLORER</span>
            </button>
            <button 
              onClick={() => setViewMode('assembled')}
              className={`btn-brutal px-4 py-2 font-mono text-xs font-bold uppercase flex items-center gap-2 ${viewMode === 'assembled' ? 'bg-[#ffd92e] text-[#111111]' : 'bg-[#222222] text-[#fffdf5]'}`}
            >
              <Layout size={14} />
              <span>FULL ASSEMBLED PREVIEW</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {viewMode === 'assembled' ? (
        <div className="flex-1 flex flex-col">
          <div className="bg-[#ffd92e] border-b-3 border-[#111111] p-4 text-center font-mono text-xs font-black uppercase">
            ⚡ ASSEMBLED STUDIO HOMEPAGE PREVIEW (USING R&R 44 COMPONENTS)
          </div>
          <Navbar2 />
          <Hero1 />
          <FeatureGrid1 />
          <Pricing1 />
          <Testimonial1 />
          <BlogCard1 />
          <ContactForm1 />
          <Faq1 />
          <Cta1 />
          <Stat1 />
          <Footer1 />
        </div>
      ) : (
        <div className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Category Filter */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white border-3 border-[#111111] shadow-hard-lg p-4">
              <div className="font-mono text-xs font-black text-[#ff6b5e] mb-3 uppercase tracking-wider">
                // ELEMENT CATEGORIES (44)
              </div>
              <div className="space-y-1.5 font-mono text-xs font-bold">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.id); setSelectedComponentId(null); }}
                    className={`w-full text-left px-3 py-2 border-2 transition-all flex items-center justify-between ${selectedCategory === cat.id ? 'bg-[#ffd92e] border-[#111111] shadow-hard-sm font-black' : 'bg-white border-transparent hover:border-[#111111]'}`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] text-[#111111]/60">→</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#ffd92e] border-3 border-[#111111] shadow-hard-lg p-4 font-mono text-xs">
              <div className="font-black uppercase mb-1">DESIGN CONSTITUTION</div>
              <p className="text-[#111111]/80 text-[11px] leading-relaxed">
                Neo-brutalist engineered joy: paper-white backgrounds (#fffdf5), pure black ink (#111111), thick 2.5px borders, hard offset shadows, condensed grotesque headings, and mono metadata chips.
              </p>
            </div>
          </aside>

          {/* Component Grid / Single View */}
          <main className="lg:col-span-9 space-y-6">
            
            {selectedComponent ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-white border-3 border-[#111111] shadow-hard-lg p-4">
                  <div>
                    <div className="font-mono text-xs text-[#ff6b5e] font-bold uppercase">// {selectedComponent.category}</div>
                    <h2 className="font-grotesk font-black text-2xl uppercase">{selectedComponent.name}</h2>
                    <span className="font-mono text-[10px] text-[#111111]/60">{selectedComponent.path}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => copyPathText(selectedComponent.path)}
                      className="btn-brutal bg-[#ffd92e] px-3 py-2 font-mono text-xs font-bold flex items-center gap-1.5"
                    >
                      {copiedPath === selectedComponent.path ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedPath === selectedComponent.path ? 'COPIED PATH' : 'COPY PATH'}</span>
                    </button>
                    <button 
                      onClick={() => setSelectedComponentId(null)}
                      className="btn-brutal bg-white px-3 py-2 font-mono text-xs font-bold"
                    >
                      ← BACK TO GRID
                    </button>
                  </div>
                </div>

                {/* Render Selected Component */}
                <div className="bg-white border-3 border-[#111111] shadow-hard-xl overflow-hidden">
                  <div className="bg-[#111111] text-white px-4 py-2 font-mono text-xs flex justify-between items-center">
                    <span>LIVE PREVIEW: {selectedComponent.name}</span>
                    <span className="text-[#ffd92e]">● INTERACTIVE</span>
                  </div>
                  <div className="p-4 sm:p-8 bg-[#fffdf5]">
                    <selectedComponent.component />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white border-3 border-[#111111] shadow-hard-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-xs font-black text-[#ff6b5e] mb-1">// EXPLORING REGISTRY</div>
                    <h2 className="font-grotesk font-black text-3xl uppercase">
                      {selectedCategory === 'all' ? 'ALL 44 COMPONENTS' : `${selectedCategory.toUpperCase()} (${filteredComponents.length})`}
                    </h2>
                  </div>
                  <div className="font-mono text-xs font-bold bg-[#ffd92e] px-3 py-1.5 border-2 border-[#111111] shadow-hard-sm">
                    CLICK ANY CARD TO INSPECT
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredComponents.map((item) => {
                    const Comp = item.component;
                    return (
                      <div 
                        key={item.id}
                        onClick={() => setSelectedComponentId(item.id)}
                        className="bg-white border-3 border-[#111111] shadow-hard-lg overflow-hidden cursor-pointer hover:translate-y-[-2px] transition-transform group"
                      >
                        <div className="bg-[#111111] text-[#fffdf5] px-4 py-2 font-mono text-xs font-bold flex justify-between items-center border-b-2 border-[#111111]">
                          <span>{item.name}</span>
                          <span className="text-[#ffd92e] group-hover:underline">INSPECT →</span>
                        </div>
                        <div className="p-4 bg-[#fffdf5] pointer-events-none max-h-64 overflow-hidden relative border-b-2 border-[#111111]">
                          <div className="scale-75 origin-top-left w-[133%]">
                            <Comp />
                          </div>
                          <div className="absolute inset-0 bg-transparent"></div>
                        </div>
                        <div className="p-3 bg-white font-mono text-[10px] text-[#111111]/70 flex justify-between items-center">
                          <span>{item.path}</span>
                          <span className="font-bold text-[#ff6b5e]">CLICK TO EXPAND</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </main>

        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#111111] text-[#fffdf5] border-t-3 border-[#111111] py-6 px-6 mt-16 text-center font-mono text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>RISO & REVOLT DESIGN SYSTEM // 44 COMPONENTS V1.0</div>
          <div className="text-[#ffd92e]">NEO-BRUTALIST ENGINEERED JOY</div>
        </div>
      </footer>

    </div>
  );
}
