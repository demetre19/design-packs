import React, { useState } from 'react';
import { Radio, Code, Eye, Copy, Check, ChevronRight, Layers } from 'lucide-react';
import {
  CATALOG_CATEGORIES,
  filterCatalogItems,
  type CatalogMetaItem,
} from './utils/catalogFilter';

// Original 44 components
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

import { Blog1 } from './components/blog-cards/Blog1';
import { Blog2 } from './components/blog-cards/Blog2';
import { Blog3 } from './components/blog-cards/Blog3';
import { Blog4 } from './components/blog-cards/Blog4';

import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

import { Contact1 } from './components/contact-forms/Contact1';
import { Contact2 } from './components/contact-forms/Contact2';
import { Contact3 } from './components/contact-forms/Contact3';

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

// New 15 Content Components (Content1..Content15)
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

interface ComponentItem extends CatalogMetaItem {
  component: React.ComponentType;
}

const componentsList: ComponentItem[] = [
  // Content Sections (15)
  { id: 'content-1', name: 'Content 1 — The Ledger', category: 'content', component: Content1, path: 'src/components/content/Content1.tsx' },
  { id: 'content-2', name: 'Content 2 — The Spiral Staircase', category: 'content', component: Content2, path: 'src/components/content/Content2.tsx' },
  { id: 'content-3', name: 'Content 3 — The Interlock', category: 'content', component: Content3, path: 'src/components/content/Content3.tsx' },
  { id: 'content-4', name: 'Content 4 — The Exploded Diagram', category: 'content', component: Content4, path: 'src/components/content/Content4.tsx' },
  { id: 'content-5', name: 'Content 5 — The Split Screen Argument', category: 'content', component: Content5, path: 'src/components/content/Content5.tsx' },
  { id: 'content-6', name: 'Content 6 — The Margin Book', category: 'content', component: Content6, path: 'src/components/content/Content6.tsx' },
  { id: 'content-7', name: 'Content 7 — The Film Strip', category: 'content', component: Content7, path: 'src/components/content/Content7.tsx' },
  { id: 'content-8', name: 'Content 8 — The Pinboard', category: 'content', component: Content8, path: 'src/components/content/Content8.tsx' },
  { id: 'content-9', name: 'Content 9 — The Index', category: 'content', component: Content9, path: 'src/components/content/Content9.tsx' },
  { id: 'content-10', name: 'Content 10 — The Interruption', category: 'content', component: Content10, path: 'src/components/content/Content10.tsx' },
  { id: 'content-11', name: 'Content 11 — The Specimen Grid', category: 'content', component: Content11, path: 'src/components/content/Content11.tsx' },
  { id: 'content-12', name: 'Content 12 — The Threaded Narrative', category: 'content', component: Content12, path: 'src/components/content/Content12.tsx' },
  { id: 'content-13', name: 'Content 13 — The Colophon', category: 'content', component: Content13, path: 'src/components/content/Content13.tsx' },
  { id: 'content-14', name: 'Content 14 — The Cascade', category: 'content', component: Content14, path: 'src/components/content/Content14.tsx' },
  { id: 'content-15', name: 'Content 15 — The Inverted Vault', category: 'content', component: Content15, path: 'src/components/content/Content15.tsx' },

  // Navbar (4)
  { id: 'navbar-1', name: 'Navbar 1 (Minimal Bar)', category: 'navbar', component: Navbar1, path: 'src/components/navbar/Navbar1.tsx' },
  { id: 'navbar-2', name: 'Navbar 2 (Dropdown Panel)', category: 'navbar', component: Navbar2, path: 'src/components/navbar/Navbar2.tsx' },
  { id: 'navbar-3', name: 'Navbar 3 (Split Vertical)', category: 'navbar', component: Navbar3, path: 'src/components/navbar/Navbar3.tsx' },
  { id: 'navbar-4', name: 'Navbar 4 (Telemetry Menu)', category: 'navbar', component: Navbar4, path: 'src/components/navbar/Navbar4.tsx' },

  // Heroes (5)
  { id: 'hero-1', name: 'Hero 1 (Cinematic Stage)', category: 'heroes', component: Hero1, path: 'src/components/heroes/Hero1.tsx' },
  { id: 'hero-2', name: 'Hero 2 (Envelope Panel)', category: 'heroes', component: Hero2, path: 'src/components/heroes/Hero2.tsx' },
  { id: 'hero-3', name: 'Hero 3 (HUD Brackets)', category: 'heroes', component: Hero3, path: 'src/components/heroes/Hero3.tsx' },
  { id: 'hero-4', name: 'Hero 4 (Telemetry Cells)', category: 'heroes', component: Hero4, path: 'src/components/heroes/Hero4.tsx' },
  { id: 'hero-5', name: 'Hero 5 (Split Stencil Index)', category: 'heroes', component: Hero5, path: 'src/components/heroes/Hero5.tsx' },

  // Feature Grids (4)
  { id: 'feature-1', name: 'FeatureGrid 1 (Carbon Panels)', category: 'feature-grids', component: FeatureGrid1, path: 'src/components/feature-grids/FeatureGrid1.tsx' },
  { id: 'feature-2', name: 'FeatureGrid 2 (Numbered Rows)', category: 'feature-grids', component: FeatureGrid2, path: 'src/components/feature-grids/FeatureGrid2.tsx' },
  { id: 'feature-3', name: 'FeatureGrid 3 (Media Spec Rows)', category: 'feature-grids', component: FeatureGrid3, path: 'src/components/feature-grids/FeatureGrid3.tsx' },
  { id: 'feature-4', name: 'FeatureGrid 4 (HUD Crosshair)', category: 'feature-grids', component: FeatureGrid4, path: 'src/components/feature-grids/FeatureGrid4.tsx' },

  // Pricing (4)
  { id: 'pricing-1', name: 'Pricing 1 (3-Tier Dark)', category: 'pricing', component: Pricing1, path: 'src/components/pricing/Pricing1.tsx' },
  { id: 'pricing-2', name: 'Pricing 2 (Configurator)', category: 'pricing', component: Pricing2, path: 'src/components/pricing/Pricing2.tsx' },
  { id: 'pricing-3', name: 'Pricing 3 (Single Readout)', category: 'pricing', component: Pricing3, path: 'src/components/pricing/Pricing3.tsx' },
  { id: 'pricing-4', name: 'Pricing 4 (Comparison Matrix)', category: 'pricing', component: Pricing4, path: 'src/components/pricing/Pricing4.tsx' },

  // Testimonials (3)
  { id: 'testimonial-1', name: 'Testimonial 1 (Condensed Quote)', category: 'testimonials', component: Testimonial1, path: 'src/components/testimonials/Testimonial1.tsx' },
  { id: 'testimonial-2', name: 'Testimonial 2 (Grid Pilot Attrib)', category: 'testimonials', component: Testimonial2, path: 'src/components/testimonials/Testimonial2.tsx' },
  { id: 'testimonial-3', name: 'Testimonial 3 (Watermark Numeral)', category: 'testimonials', component: Testimonial3, path: 'src/components/testimonials/Testimonial3.tsx' },

  // Blog Cards (4)
  { id: 'blog-1', name: 'Blog 1 (Flight Logs)', category: 'blog-cards', component: Blog1, path: 'src/components/blog-cards/Blog1.tsx' },
  { id: 'blog-2', name: 'Blog 2 (Featured Test Report)', category: 'blog-cards', component: Blog2, path: 'src/components/blog-cards/Blog2.tsx' },
  { id: 'blog-3', name: 'Blog 3 (Sortie Register)', category: 'blog-cards', component: Blog3, path: 'src/components/blog-cards/Blog3.tsx' },
  { id: 'blog-4', name: 'Blog 4 (Watermark Header)', category: 'blog-cards', component: Blog4, path: 'src/components/blog-cards/Blog4.tsx' },

  // Footers (4)
  { id: 'footer-1', name: 'Footer 1 (Deep Black Band)', category: 'footers', component: Footer1, path: 'src/components/footers/Footer1.tsx' },
  { id: 'footer-2', name: 'Footer 2 (Telemetry Columns)', category: 'footers', component: Footer2, path: 'src/components/footers/Footer2.tsx' },
  { id: 'footer-3', name: 'Footer 3 (Minimal Indexed)', category: 'footers', component: Footer3, path: 'src/components/footers/Footer3.tsx' },
  { id: 'footer-4', name: 'Footer 4 (Big Watermark)', category: 'footers', component: Footer4, path: 'src/components/footers/Footer4.tsx' },

  // Contact Forms (3)
  { id: 'contact-1', name: 'Contact 1 (Split Form & Spec)', category: 'contact-forms', component: Contact1, path: 'src/components/contact-forms/Contact1.tsx' },
  { id: 'contact-2', name: 'Contact 2 (Centered Dark)', category: 'contact-forms', component: Contact2, path: 'src/components/contact-forms/Contact2.tsx' },
  { id: 'contact-3', name: 'Contact 3 (Newsletter Strip)', category: 'contact-forms', component: Contact3, path: 'src/components/contact-forms/Contact3.tsx' },

  // Modals (3)
  { id: 'modal-1', name: 'Modal 1 (Clipped Dialog)', category: 'modals', component: Modal1, path: 'src/components/modals/Modal1.tsx' },
  { id: 'modal-2', name: 'Modal 2 (Control-Bar Choice)', category: 'modals', component: Modal2, path: 'src/components/modals/Modal2.tsx' },
  { id: 'modal-3', name: 'Modal 3 (Slide-Over Panel)', category: 'modals', component: Modal3, path: 'src/components/modals/Modal3.tsx' },

  // Media (3)
  { id: 'media-1', name: 'Media 1 (HUD Cinematic Plate)', category: 'media', component: Media1, path: 'src/components/media/Media1.tsx' },
  { id: 'media-2', name: 'Media 2 (Sortie Gallery Grid)', category: 'media', component: Media2, path: 'src/components/media/Media2.tsx' },
  { id: 'media-3', name: 'Media 3 (Video Plate & Play)', category: 'media', component: Media3, path: 'src/components/media/Media3.tsx' },

  // FAQs (3)
  { id: 'faq-1', name: 'FAQ 1 (Mono Accordion)', category: 'faqs', component: Faq1, path: 'src/components/faqs/Faq1.tsx' },
  { id: 'faq-2', name: 'FAQ 2 (Two-Column Tech)', category: 'faqs', component: Faq2, path: 'src/components/faqs/Faq2.tsx' },
  { id: 'faq-3', name: 'FAQ 3 (Numbered Indices)', category: 'faqs', component: Faq3, path: 'src/components/faqs/Faq3.tsx' },

  // CTAs (3)
  { id: 'cta-1', name: 'Cta 1 (Huge Condensed Statement)', category: 'ctas', component: Cta1, path: 'src/components/ctas/Cta1.tsx' },
  { id: 'cta-2', name: 'Cta 2 (Split CTA & Stage)', category: 'ctas', component: Cta2, path: 'src/components/ctas/Cta2.tsx' },
  { id: 'cta-3', name: 'Cta 3 (Minimal Index Band)', category: 'ctas', component: Cta3, path: 'src/components/ctas/Cta3.tsx' },

  // Stats (4)
  { id: 'stat-1', name: 'Stat 1 (Instrument Readout Rows)', category: 'stats', component: Stat1, path: 'src/components/stats/Stat1.tsx' },
  { id: 'stat-2', name: 'Stat 2 (Watermark Numerals)', category: 'stats', component: Stat2, path: 'src/components/stats/Stat2.tsx' },
  { id: 'stat-3', name: 'Stat 3 (Spec Table Stats)', category: 'stats', component: Stat3, path: 'src/components/stats/Stat3.tsx' },
  { id: 'stat-4', name: 'Stat 4 (Telemetry Stat Strip)', category: 'stats', component: Stat4, path: 'src/components/stats/Stat4.tsx' },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('content');
  const [activeComponentId, setActiveComponentId] = useState<string>('content-1');
  const [viewMode, setViewMode] = useState<'preview' | 'stack' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComponents = filterCatalogItems(componentsList, selectedCategory, searchQuery);

  const activeItem = componentsList.find((c) => c.id === activeComponentId) || componentsList[0];
  const ActiveComp = activeItem.component;

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const matching = filterCatalogItems(componentsList, catId, searchQuery);
    if (matching.length > 0 && !matching.some((m) => m.id === activeComponentId)) {
      setActiveComponentId(matching[0].id);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(
      `// Component: ${activeItem.name}\n// Path: ${activeItem.path}\n// Vanguard Hypersonics Flight Test System`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#111318] text-white font-mono selection:bg-[#ff3d00] selection:text-black">
      {/* Top Header Telemetry Bar */}
      <header className="bg-[#16181d] border-b border-[#2a2d35] px-4 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4 select-none">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#ff3d00]/10 border border-[#ff3d00]/40 flex items-center justify-center [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
            <Radio className="w-4 h-4 text-[#ff3d00]" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-tighter uppercase font-sans">
              VANGUARD HYPERSONICS <span className="text-[#ff3d00]">//</span> FLIGHT TEST SYSTEM
            </h1>
            <p className="text-[10px] text-zinc-400 tracking-widest">
              62 VECTOR AEROSPACE COMPONENTS // 47 CORE + 15 CONTENT SECTIONS
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-xs">
          <div className="hidden md:flex items-center space-x-2 text-zinc-400 tabular-nums">
            <span>MACH 4.84 // FL650 // G: +5.8</span>
          </div>
          <div className="bg-[#20232a] border border-[#3a3e4c] px-3 py-1.5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] text-[#ff3d00] font-extrabold tabular-nums">
            TOTAL ELEMENTS: {componentsList.length}
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-65px)]">
        {/* Sidebar Navigation & Catalog */}
        <aside className="lg:col-span-3 bg-[#16181d] border-r border-[#2a2d35] p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="catalog-search" className="text-[10px] text-zinc-400 uppercase tracking-widest block">
              FILTER CATALOG
            </label>
            <input
              id="catalog-search"
              type="text"
              placeholder="SEARCH COMPONENTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#20232a] border border-[#3a3e4c] px-3 py-2 text-xs text-white focus:border-[#ff3d00] outline-none [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]"
            />
          </div>

          <nav aria-label="Component Categories" className="space-y-1.5">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">
              CATEGORIES
            </span>
            {CATALOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                className={`w-full text-left px-3 py-2 text-xs font-bold tracking-wider transition-colors flex items-center justify-between ${
                  selectedCategory === cat.id
                    ? 'bg-[#ff3d00] text-white [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]'
                    : 'text-zinc-400 hover:text-white hover:bg-[#20232a]'
                }`}
              >
                <span>{cat.label}</span>
                <ChevronRight className="w-3 h-3 opacity-60" />
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#2a2d35]">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-2">
              COMPONENT SELECTOR ({filteredComponents.length})
            </span>
            <div className="space-y-1 max-h-[420px] overflow-y-auto pr-2">
              {filteredComponents.length === 0 ? (
                <div className="text-xs text-zinc-500 p-3 border border-[#2a2d35] bg-[#111318]">
                  NO MATCHING COMPONENTS FOUND
                </div>
              ) : (
                filteredComponents.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveComponentId(item.id);
                      if (viewMode === 'stack') setViewMode('preview');
                    }}
                    className={`w-full text-left px-3 py-2.5 text-xs transition-all border ${
                      activeComponentId === item.id
                        ? 'bg-[#ff3d00]/10 border-[#ff3d00] text-[#ff3d00] font-extrabold [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]'
                        : 'bg-[#20232a] border-[#3a3e4c] text-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate">{item.name}</span>
                      <span className="text-[9px] text-zinc-500 uppercase shrink-0">{item.category}</span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </aside>

        {/* Main Content / Active Component Preview Area */}
        <main className="lg:col-span-9 p-6 lg:p-10 space-y-8 bg-[#111318] min-w-0">
          {/* Active Component Header Info */}
          <div className="bg-[#16181d] border border-[#2a2d35] p-6 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs text-[#ff3d00] font-bold mb-1">
                <span className="w-2 h-2 bg-[#ff3d00]" />
                <span className="uppercase">
                  {viewMode === 'stack'
                    ? `CATEGORY STACK // ${selectedCategory.toUpperCase()} (${filteredComponents.length})`
                    : `ACTIVE ELEMENT // ${activeItem.category}`}
                </span>
              </div>
              <h2 className="text-2xl font-black uppercase font-sans tracking-tight">
                {viewMode === 'stack'
                  ? `ALL ${filteredComponents.length} MATCHING SECTIONS`
                  : activeItem.name}
              </h2>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                PATH: <span className="text-zinc-200">{activeItem.path}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-[#20232a] border border-[#3a3e4c] p-1 flex [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
                <button
                  type="button"
                  onClick={() => setViewMode('preview')}
                  className={`px-3.5 py-2 text-xs font-bold flex items-center space-x-1.5 transition-colors whitespace-nowrap ${
                    viewMode === 'preview' ? 'bg-[#ff3d00] text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>PREVIEW</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('stack')}
                  className={`px-3.5 py-2 text-xs font-bold flex items-center space-x-1.5 transition-colors whitespace-nowrap ${
                    viewMode === 'stack' ? 'bg-[#ff3d00] text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>STACK VIEW</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('code')}
                  className={`px-3.5 py-2 text-xs font-bold flex items-center space-x-1.5 transition-colors whitespace-nowrap ${
                    viewMode === 'code' ? 'bg-[#ff3d00] text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>CODE INFO</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleCopyCode}
                className="bg-[#20232a] hover:bg-[#282c35] border border-[#3a3e4c] px-4 py-2.5 text-xs font-bold text-zinc-200 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] flex items-center space-x-2 whitespace-nowrap"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#ff3d00]" />}
                <span>{copied ? 'COPIED' : 'COPY PATH'}</span>
              </button>
            </div>
          </div>

          {/* Component Render / Stack / Code View Box */}
          <div className="bg-[#16181d] border border-[#2a2d35] [clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] overflow-hidden">
            {viewMode === 'preview' && (
              <div className="bg-[#16181d] min-h-[400px] relative">
                <ActiveComp />
              </div>
            )}

            {viewMode === 'stack' && (
              <div className="divide-y-4 divide-[#0b0c10]">
                {filteredComponents.map((item) => {
                  const Comp = item.component;
                  return (
                    <div key={item.id}>
                      <div className="bg-[#111318] px-4 py-2 border-b border-[#2a2d35] flex items-center justify-between text-[10px]">
                        <span className="text-[#ff3d00] font-bold">{item.name}</span>
                        <span className="text-zinc-500">{item.path}</span>
                      </div>
                      <Comp />
                    </div>
                  );
                })}
              </div>
            )}

            {viewMode === 'code' && (
              <div className="p-6 bg-[#0f1115] font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#2a2d35] pb-4 text-zinc-400">
                  <span>FILE: {activeItem.path}</span>
                  <span className="text-[#ff3d00] font-bold">TYPESCRIPT + TAILWIND</span>
                </div>
                <div className="bg-[#16181d] p-4 border border-[#2a2d35] overflow-x-auto text-zinc-300 space-y-2">
                  <p className="text-zinc-500">// Self-contained component module in {activeItem.path}</p>
                  <p className="text-zinc-500">// Vector aerospace flight-test theme (#16181d titanium ghost-grey, #ff3d00 afterburner orange-red).</p>
                  <pre className="text-[#ff3d00] font-mono text-sm pt-2">
                    {`import { ${activeItem.component.name} } from './${activeItem.path.replace(/^src\//, '').replace(/\.tsx$/, '')}';\n\nexport function SectionPreview() {\n  return <${activeItem.component.name} />;\n}`}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Quick Component Grid Section for current category */}
          <div className="space-y-4 pt-6 border-t border-[#2a2d35]">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              QUICK SELECT IN ({activeItem.category.toUpperCase()})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {componentsList
                .filter((c) => c.category === activeItem.category)
                .map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setActiveComponentId(c.id);
                      if (viewMode === 'stack') setViewMode('preview');
                    }}
                    className={`p-3.5 text-left border transition-all ${
                      activeComponentId === c.id
                        ? 'bg-[#ff3d00]/10 border-[#ff3d00] text-[#ff3d00] font-extrabold [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]'
                        : 'bg-[#20232a] border-[#3a3e4c] text-zinc-300 hover:border-zinc-500'
                    }`}
                  >
                    <div className="text-xs uppercase font-sans truncate">{c.name}</div>
                  </button>
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
