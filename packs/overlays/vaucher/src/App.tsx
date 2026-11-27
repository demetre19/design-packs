import React, { useState } from 'react';
import { Compass, Watch, Sliders, Shield, Layers, Eye, Code, Check, ChevronRight } from 'lucide-react';

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

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  ref: string;
  component: React.ComponentType;
  path: string;
}

const ALL_COMPONENTS: ComponentItem[] = [
  // Navbar
  { id: 'navbar1', name: 'Navbar 1: Hairline Bar & CTA', category: 'navbar', ref: 'REF. NAV-01', component: Navbar1, path: 'src/components/navbar/Navbar1.tsx' },
  { id: 'navbar2', name: 'Navbar 2: Tick-Mark Ruler Bottom', category: 'navbar', ref: 'REF. NAV-02', component: Navbar2, path: 'src/components/navbar/Navbar2.tsx' },
  { id: 'navbar3', name: 'Navbar 3: Centered Masthead', category: 'navbar', ref: 'REF. NAV-03', component: Navbar3, path: 'src/components/navbar/Navbar3.tsx' },
  { id: 'navbar4', name: 'Navbar 4: Screw-Corner Dropdown', category: 'navbar', ref: 'REF. NAV-04', component: Navbar4, path: 'src/components/navbar/Navbar4.tsx' },

  // Heroes
  { id: 'hero1', name: 'Hero 1: Display & Caseback Plate', category: 'heroes', ref: 'REF. HERO-01', component: Hero1, path: 'src/components/heroes/Hero1.tsx' },
  { id: 'hero2', name: 'Hero 2: Left Headline & Spec Dossier', category: 'heroes', ref: 'REF. HERO-02', component: Hero2, path: 'src/components/heroes/Hero2.tsx' },
  { id: 'hero3', name: 'Hero 3: Crosshair Asymmetric', category: 'heroes', ref: 'REF. HERO-03', component: Hero3, path: 'src/components/heroes/Hero3.tsx' },
  { id: 'hero4', name: 'Hero 4: Full-Width Instrument Photo', category: 'heroes', ref: 'REF. HERO-04', component: Hero4, path: 'src/components/heroes/Hero4.tsx' },
  { id: 'hero5', name: 'Hero 5: Split Hero & Stat Indices', category: 'heroes', ref: 'REF. HERO-05', component: Hero5, path: 'src/components/heroes/Hero5.tsx' },

  // Feature Grids
  { id: 'feature-grid1', name: 'Feature Grid 1: Applied Bullets', category: 'feature-grids', ref: 'REF. FEAT-01', component: FeatureGrid1, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
  { id: 'feature-grid2', name: 'Feature Grid 2: Mono Reference Cards', category: 'feature-grids', ref: 'REF. FEAT-02', component: FeatureGrid2, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
  { id: 'feature-grid3', name: 'Feature Grid 3: Geneva-Stripe Rows', category: 'feature-grids', ref: 'REF. FEAT-03', component: FeatureGrid3, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
  { id: 'feature-grid4', name: 'Feature Grid 4: Double-Hairline 2x2', category: 'feature-grids', ref: 'REF. FEAT-04', component: FeatureGrid4, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

  // Pricing
  { id: 'pricing1', name: 'Pricing 1: 3-Tier Blued-Steel Ring', category: 'pricing', ref: 'REF. PRIC-01', component: Pricing1, path: 'src/components/pricing/Pricing1.tsx' },
  { id: 'pricing2', name: 'Pricing 2: Bezel Segmented Selector', category: 'pricing', ref: 'REF. PRIC-02', component: Pricing2, path: 'src/components/pricing/Pricing2.tsx' },
  { id: 'pricing3', name: 'Pricing 3: Certificate Price Card', category: 'pricing', ref: 'REF. PRIC-03', component: Pricing3, path: 'src/components/pricing/Pricing3.tsx' },
  { id: 'pricing4', name: 'Pricing 4: Ledger Comparison Table', category: 'pricing', ref: 'REF. PRIC-04', component: Pricing4, path: 'src/components/pricing/Pricing4.tsx' },

  // Testimonials
  { id: 'testimonial1', name: 'Testimonial 1: Medallion Quote', category: 'testimonials', ref: 'REF. TEST-01', component: Testimonial1, path: 'src/components/testimonials/Testimonial1.tsx' },
  { id: 'testimonial2', name: 'Testimonial 2: Quote Slider', category: 'testimonials', ref: 'REF. TEST-02', component: Testimonial2, path: 'src/components/testimonials/Testimonial2.tsx' },
  { id: 'testimonial3', name: 'Testimonial 3: 3-Column Panels', category: 'testimonials', ref: 'REF. TEST-03', component: Testimonial3, path: 'src/components/testimonials/Testimonial3.tsx' },

  // Blog Cards
  { id: 'blog-card1', name: 'Blog Card 1: 3-Column Monograph', category: 'blog-cards', ref: 'REF. BLOG-01', component: BlogCard1, path: 'src/components/blog-cards/BlogCard1.tsx' },
  { id: 'blog-card2', name: 'Blog Card 2: Featured + Register', category: 'blog-cards', ref: 'REF. BLOG-02', component: BlogCard2, path: 'src/components/blog-cards/BlogCard2.tsx' },
  { id: 'blog-card3', name: 'Blog Card 3: Tick Divider Archive', category: 'blog-cards', ref: 'REF. BLOG-03', component: BlogCard3, path: 'src/components/blog-cards/BlogCard3.tsx' },
  { id: 'blog-card4', name: 'Blog Card 4: Certificate Monograph', category: 'blog-cards', ref: 'REF. BLOG-04', component: BlogCard4, path: 'src/components/blog-cards/BlogCard4.tsx' },

  // Footers
  { id: 'footer1', name: 'Footer 1: Charcoal & Blued Band', category: 'footers', ref: 'REF. FOOT-01', component: Footer1, path: 'src/components/footers/Footer1.tsx' },
  { id: 'footer2', name: 'Footer 2: Ruled Multi-Column', category: 'footers', ref: 'REF. FOOT-02', component: Footer2, path: 'src/components/footers/Footer2.tsx' },
  { id: 'footer3', name: 'Footer 3: Minimal Colophon', category: 'footers', ref: 'REF. FOOT-03', component: Footer3, path: 'src/components/footers/Footer3.tsx' },
  { id: 'footer4', name: 'Footer 4: Certificate Seal Footer', category: 'footers', ref: 'REF. FOOT-04', component: Footer4, path: 'src/components/footers/Footer4.tsx' },

  // Contact Forms
  { id: 'contact-form1', name: 'Contact Form 1: Split & Spec Panel', category: 'contact-forms', ref: 'REF. CONT-01', component: ContactForm1, path: 'src/components/contact-forms/ContactForm1.tsx' },
  { id: 'contact-form2', name: 'Contact Form 2: Hairline Input Form', category: 'contact-forms', ref: 'REF. CONT-02', component: ContactForm2, path: 'src/components/contact-forms/ContactForm2.tsx' },
  { id: 'contact-form3', name: 'Contact Form 3: Newsletter Underline', category: 'contact-forms', ref: 'REF. CONT-03', component: ContactForm3, path: 'src/components/contact-forms/ContactForm3.tsx' },

  // Modals
  { id: 'modal1', name: 'Modal 1: Screw-Corner Dialog', category: 'modals', ref: 'REF. MOD-01', component: Modal1, path: 'src/components/modals/Modal1.tsx' },
  { id: 'modal2', name: 'Modal 2: Two Quiet Actions', category: 'modals', ref: 'REF. MOD-02', component: Modal2, path: 'src/components/modals/Modal2.tsx' },
  { id: 'modal3', name: 'Modal 3: Slide-Over Specs', category: 'modals', ref: 'REF. MOD-03', component: Modal3, path: 'src/components/modals/Modal3.tsx' },

  // Media
  { id: 'media1', name: 'Media 1: Cased Photo Exhibit', category: 'media', ref: 'REF. MED-01', component: Media1, path: 'src/components/media/Media1.tsx' },
  { id: 'media2', name: 'Media 2: Strict Case Grid', category: 'media', ref: 'REF. MED-02', component: Media2, path: 'src/components/media/Media2.tsx' },
  { id: 'media3', name: 'Media 3: Video Plate & Play', category: 'media', ref: 'REF. MED-03', component: Media3, path: 'src/components/media/Media3.tsx' },

  // FAQs
  { id: 'faq1', name: 'FAQ 1: Ruled Plus Mark Rows', category: 'faqs', ref: 'REF. FAQ-01', component: Faq1, path: 'src/components/faqs/Faq1.tsx' },
  { id: 'faq2', name: 'FAQ 2: Two-Column FAQ Grid', category: 'faqs', ref: 'REF. FAQ-02', component: Faq2, path: 'src/components/faqs/Faq2.tsx' },
  { id: 'faq3', name: 'FAQ 3: Reference-Numbered FAQ', category: 'faqs', ref: 'REF. FAQ-03', component: Faq3, path: 'src/components/faqs/Faq3.tsx' },

  // CTAs
  { id: 'cta1', name: 'CTA 1: Centered Statement & Pill', category: 'ctas', ref: 'REF. CTA-01', component: Cta1, path: 'src/components/ctas/Cta1.tsx' },
  { id: 'cta2', name: 'CTA 2: Split Cased Image CTA', category: 'ctas', ref: 'REF. CTA-02', component: Cta2, path: 'src/components/ctas/Cta2.tsx' },
  { id: 'cta3', name: 'CTA 3: Minimal Micro-Label CTA', category: 'ctas', ref: 'REF. CTA-03', component: Cta3, path: 'src/components/ctas/Cta3.tsx' },

  // Stats
  { id: 'stat1', name: 'Stat 1: Numerals & Tick Rulers', category: 'stats', ref: 'REF. STAT-01', component: Stat1, path: 'src/components/stats/Stat1.tsx' },
  { id: 'stat2', name: 'Stat 2: Specification-Sheet Stats', category: 'stats', ref: 'REF. STAT-02', component: Stat2, path: 'src/components/stats/Stat2.tsx' },
  { id: 'stat3', name: 'Stat 3: Mono Readout Rows', category: 'stats', ref: 'REF. STAT-03', component: Stat3, path: 'src/components/stats/Stat3.tsx' },
  { id: 'stat4', name: 'Stat 4: Certificate Metric Panels', category: 'stats', ref: 'REF. STAT-04', component: Stat4, path: 'src/components/stats/Stat4.tsx' },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'gallery' | 'showcase'>('gallery');
  const [activeComponentId, setActiveComponentId] = useState<string>(ALL_COMPONENTS[0].id);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All 44 Components' },
    { id: 'navbar', name: 'navbar/' },
    { id: 'heroes', name: 'heroes/' },
    { id: 'feature-grids', name: 'feature-grids/' },
    { id: 'pricing', name: 'pricing/' },
    { id: 'testimonials', name: 'testimonials/' },
    { id: 'blog-cards', name: 'blog-cards/' },
    { id: 'footers', name: 'footers/' },
    { id: 'contact-forms', name: 'contact-forms/' },
    { id: 'modals', name: 'modals/' },
    { id: 'media', name: 'media/' },
    { id: 'faqs', name: 'faqs/' },
    { id: 'ctas', name: 'ctas/' },
    { id: 'stats', name: 'stats/' },
  ];

  const filteredComponents = selectedCategory === 'all'
    ? ALL_COMPONENTS
    : ALL_COMPONENTS.filter(c => c.category === selectedCategory);

  const activeComp = ALL_COMPONENTS.find(c => c.id === activeComponentId) || ALL_COMPONENTS[0];
  const ActiveComponentRenderer = activeComp.component;

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f2] text-[#232a30] selection:bg-[#2e5e8e] selection:text-white flex flex-col font-sans">
      {/* Top Horological Instrument Header */}
      <header className="bg-[#1c2128] text-white border-b border-[#2e5e8e] sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 border border-[#2e5e8e] bg-[#232a30] flex items-center justify-center screw-corner">
              <Compass className="w-5 h-5 text-[#2e5e8e]" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">ATELIER HAUTE PRÉCISION</div>
              <h1 className="font-mono text-sm uppercase tracking-[0.3em] font-medium">Vaucher & Fils · 44 Component Design System</h1>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block font-mono text-[10px] text-white/50 tracking-[0.25em]">
              REF. 1924-SYS · CAL. 8800
            </div>
            <div className="flex p-1 bg-white/5 border border-white/10">
              <button
                onClick={() => setViewMode('gallery')}
                className={`font-mono text-[11px] tracking-[0.2em] px-4 py-2 transition-colors ${
                  viewMode === 'gallery' ? 'bg-[#2e5e8e] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                GALLERY (44)
              </button>
              <button
                onClick={() => setViewMode('showcase')}
                className={`font-mono text-[11px] tracking-[0.2em] px-4 py-2 transition-colors ${
                  viewMode === 'showcase' ? 'bg-[#2e5e8e] text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                SINGLE VIEWER
              </button>
            </div>
          </div>
        </div>

        {/* Tick-mark ruler bottom */}
        <div className="w-full h-1.5 bg-[#232a30] flex justify-between px-2 opacity-60">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className={`w-[1px] ${i % 5 === 0 ? 'h-1.5 bg-[#2e5e8e]' : 'h-1 bg-white/20'}`} />
          ))}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Category Filter Bar */}
        <div className="mb-10 flex items-center space-x-3 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`font-mono text-[11px] tracking-[0.2em] px-4 py-2 whitespace-nowrap transition-colors border ${
                selectedCategory === cat.id
                  ? 'bg-[#1c2128] text-white border-[#1c2128]'
                  : 'bg-white text-[#232a30] border-[#d0d0cc] hover:border-[#2e5e8e]'
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {viewMode === 'gallery' ? (
          <div className="space-y-16">
            <div className="border-b border-[#d0d0cc] pb-6 flex justify-between items-end">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#2e5e8e]">SYSTEM CATALOGUE</span>
                <h2 className="text-3xl font-light tracking-[0.06em] text-[#232a30] mt-1">
                  {selectedCategory === 'all' ? 'All 44 Design System Elements' : `${selectedCategory}/ Category`}
                </h2>
              </div>
              <div className="font-mono text-xs text-[#232a30]/60 tracking-widest">
                SHOWING {filteredComponents.length} COMPONENTS
              </div>
            </div>

            {/* Grid of Components rendered live */}
            <div className="space-y-20">
              {filteredComponents.map((item) => {
                const ComponentComp = item.component;
                return (
                  <div key={item.id} className="border-2 border-[#d0d0cc] bg-white shadow-sm relative group">
                    {/* Header bar for each component in gallery */}
                    <div className="bg-[#1c2128] text-white px-6 py-3 flex items-center justify-between border-b border-[#2e5e8e]">
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.25em]">{item.ref}</span>
                        <span className="font-mono text-xs uppercase tracking-[0.2em] font-medium">{item.name}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleCopyPath(item.path)}
                          className="font-mono text-[10px] text-white/70 hover:text-white tracking-widest flex items-center space-x-1.5"
                        >
                          {copiedPath === item.path ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#2e5e8e]" />
                              <span className="text-[#2e5e8e]">COPIED PATH</span>
                            </>
                          ) : (
                            <>
                              <Code className="w-3.5 h-3.5" />
                              <span>{item.path}</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => {
                            setActiveComponentId(item.id);
                            setViewMode('showcase');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="font-mono text-[10px] text-[#2e5e8e] hover:text-white tracking-widest flex items-center space-x-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>INSPECT</span>
                        </button>
                      </div>
                    </div>

                    {/* Live Rendered Component */}
                    <div className="p-4 bg-[#f4f4f2]/50 overflow-x-auto">
                      <ComponentComp />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Single Viewer Showcase Mode */
          <div className="space-y-8">
            <div className="bg-white border-2 border-[#232a30] p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="font-mono text-[10px] text-[#2e5e8e] tracking-[0.3em]">{activeComp.ref} · {activeComp.category.toUpperCase()}</div>
                <h2 className="text-2xl font-light tracking-wide text-[#232a30] mt-1">{activeComp.name}</h2>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleCopyPath(activeComp.path)}
                  className="bg-[#1c2128] text-white font-mono text-xs tracking-[0.2em] px-4 py-2 hover:bg-[#2e5e8e] transition-colors flex items-center space-x-2"
                >
                  {copiedPath === activeComp.path ? (
                    <>
                      <Check className="w-4 h-4 text-[#2e5e8e]" />
                      <span>COPIED PATH</span>
                    </>
                  ) : (
                    <>
                      <Code className="w-4 h-4" />
                      <span>COPY {activeComp.path}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Selector Dropdown / List for Single Viewer */}
            <div className="bg-white border border-[#d0d0cc] p-4 flex flex-wrap gap-2">
              {ALL_COMPONENTS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveComponentId(c.id)}
                  className={`font-mono text-[10px] tracking-wider px-3 py-1.5 border transition-colors ${
                    activeComponentId === c.id
                      ? 'bg-[#2e5e8e] text-white border-[#2e5e8e]'
                      : 'bg-[#f4f4f2] text-[#232a30] border-[#d0d0cc] hover:border-[#2e5e8e]'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Active Component Live Render */}
            <div className="border-2 border-[#232a30] bg-white shadow-md p-6">
              <ActiveComponentRenderer />
            </div>
          </div>
        )}
      </main>

      {/* Horological Footer */}
      <footer className="bg-[#1c2128] text-white border-t border-[#2e5e8e] py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/50 tracking-[0.25em]">
          <div>VAUCHER & FILS · HOROLOGICAL INSTRUMENT PRECISION DESIGN SYSTEM</div>
          <div>REF. 44-COMPONENTS · GENÈVE SWITZERLAND</div>
        </div>
      </footer>
    </div>
  );
}
