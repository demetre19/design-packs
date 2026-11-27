/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Shield, Layers, Search, Code, Eye, ExternalLink, ArrowRight, 
  Check, Sliders, Cpu, Activity, Clock, Compass, AlertCircle, Play, ChevronDown, ChevronLeft, ChevronRight, X, Minus, Plus
} from 'lucide-react';

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

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  component: React.ReactNode;
  path: string;
  desc: string;
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePreview, setActivePreview] = useState<ComponentItem | null>(null);

  const componentsList: ComponentItem[] = [
    // Navbar (4)
    { id: 'navbar-1', name: 'Navbar 1: Minimal Centered', category: 'navbar', component: <Navbar1 />, path: 'src/components/navbar/Navbar1.tsx', desc: 'Minimal centered links + pill CTA' },
    { id: 'navbar-2', name: 'Navbar 2: Split Logo-Left', category: 'navbar', component: <Navbar2 />, path: 'src/components/navbar/Navbar2.tsx', desc: 'Split logo-left links-right with hairline divider' },
    { id: 'navbar-3', name: 'Navbar 3: Stacked Wordmark', category: 'navbar', component: <Navbar3 />, path: 'src/components/navbar/Navbar3.tsx', desc: 'Stacked wordmark over full-width link row' },
    { id: 'navbar-4', name: 'Navbar 4: Dropdown Panel', category: 'navbar', component: <Navbar4 />, path: 'src/components/navbar/Navbar4.tsx', desc: 'Header with integrated dropdown menu panel' },

    // Heroes (5)
    { id: 'hero-1', name: 'Hero 1: Centered Display', category: 'heroes', component: <Hero1 />, path: 'src/components/heroes/Hero1.tsx', desc: 'Centered micro-label + huge display heading + wide media plate' },
    { id: 'hero-2', name: 'Hero 2: Spec-Card Panel', category: 'heroes', component: <Hero2 />, path: 'src/components/heroes/Hero2.tsx', desc: 'Left-aligned headline with spec-card panel right' },
    { id: 'hero-3', name: 'Hero 3: Editorial Asymmetric', category: 'heroes', component: <Hero3 />, path: 'src/components/heroes/Hero3.tsx', desc: 'Editorial asymmetric with oversized typography' },
    { id: 'hero-4', name: 'Hero 4: Full-Width Image Band', category: 'heroes', component: <Hero4 />, path: 'src/components/heroes/Hero4.tsx', desc: 'Hero with full-width image band and overlaid micro-label' },
    { id: 'hero-5', name: 'Hero 5: Split Hero & Stats', category: 'heroes', component: <Hero5 />, path: 'src/components/heroes/Hero5.tsx', desc: 'Split hero — text left, tall image right, stat strip bottom' },

    // Feature Grids (4)
    { id: 'feature-1', name: 'Feature Grid 1: 3-Column Cards', category: 'feature-grids', component: <FeatureGrid1 />, path: 'src/components/feature-grids/FeatureGrid1.tsx', desc: '3-column hairline-bordered cards with icon, title, text' },
    { id: 'feature-2', name: 'Feature Grid 2: Numbered Items', category: 'feature-grids', component: <FeatureGrid2 />, path: 'src/components/feature-grids/FeatureGrid2.tsx', desc: 'Numbered items 01/02/03 grid' },
    { id: 'feature-3', name: 'Feature Grid 3: Alternating Rows', category: 'feature-grids', component: <FeatureGrid3 />, path: 'src/components/feature-grids/FeatureGrid3.tsx', desc: 'Alternating media-text rows' },
    { id: 'feature-4', name: 'Feature Grid 4: 2x2 Micro-Labels', category: 'feature-grids', component: <FeatureGrid4 />, path: 'src/components/feature-grids/FeatureGrid4.tsx', desc: '2x2 grid with micro-labels and arrow links' },

    // Pricing (4)
    { id: 'pricing-1', name: 'Pricing 1: 3-Tier Popular Ring', category: 'pricing', component: <Pricing1 />, path: 'src/components/pricing/Pricing1.tsx', desc: '3-tier cards with popular-highlight hairline ring' },
    { id: 'pricing-2', name: 'Pricing 2: Monthly/Yearly Toggle', category: 'pricing', component: <Pricing2 />, path: 'src/components/pricing/Pricing2.tsx', desc: 'Monthly/yearly toggle with two cards' },
    { id: 'pricing-3', name: 'Pricing 3: Single Centered Plan', category: 'pricing', component: <Pricing3 />, path: 'src/components/pricing/Pricing3.tsx', desc: 'Single centered plan with feature list' },
    { id: 'pricing-4', name: 'Pricing 4: Comparison Table', category: 'pricing', component: <Pricing4 />, path: 'src/components/pricing/Pricing4.tsx', desc: 'Comparison table style with hairline rows' },

    // Testimonials (3)
    { id: 'testimonial-1', name: 'Testimonial 1: Centered Quote', category: 'testimonials', component: <Testimonial1 />, path: 'src/components/testimonials/Testimonial1.tsx', desc: 'Large centered quote with attribution' },
    { id: 'testimonial-2', name: 'Testimonial 2: Quote Slider', category: 'testimonials', component: <Testimonial2 />, path: 'src/components/testimonials/Testimonial2.tsx', desc: 'Quote slider with paging arrows' },
    { id: 'testimonial-3', name: 'Testimonial 3: 3-Column Grid', category: 'testimonials', component: <Testimonial3 />, path: 'src/components/testimonials/Testimonial3.tsx', desc: '3-column quote cards grid' },

    // Blog Cards (4)
    { id: 'blog-1', name: 'Blog 1: 3-Column Article Cards', category: 'blog-cards', component: <Blog1 />, path: 'src/components/blog-cards/Blog1.tsx', desc: '3-column article cards with image, tag, date' },
    { id: 'blog-2', name: 'Blog 2: Featured + List Rows', category: 'blog-cards', component: <Blog2 />, path: 'src/components/blog-cards/Blog2.tsx', desc: 'Featured article large + list of small rows' },
    { id: 'blog-3', name: 'Blog 3: Archive Index Rows', category: 'blog-cards', component: <Blog3 />, path: 'src/components/blog-cards/Blog3.tsx', desc: 'Blog archive index with hairline row entries' },
    { id: 'blog-4', name: 'Blog 4: Reader Header Meta', category: 'blog-cards', component: <Blog4 />, path: 'src/components/blog-cards/Blog4.tsx', desc: 'Article reader header with meta row' },

    // Footers (4)
    { id: 'footer-1', name: 'Footer 1: Multi-Column Links', category: 'footers', component: <Footer1 />, path: 'src/components/footers/Footer1.tsx', desc: 'Multi-column link grid with brand and hairline top border' },
    { id: 'footer-2', name: 'Footer 2: Minimal Centered', category: 'footers', component: <Footer2 />, path: 'src/components/footers/Footer2.tsx', desc: 'Minimal centered footer' },
    { id: 'footer-3', name: 'Footer 3: Newsletter Row', category: 'footers', component: <Footer3 />, path: 'src/components/footers/Footer3.tsx', desc: 'Footer with newsletter signup row' },
    { id: 'footer-4', name: 'Footer 4: Big Wordmark Contact', category: 'footers', component: <Footer4 />, path: 'src/components/footers/Footer4.tsx', desc: 'Big-wordmark footer with contact details' },

    // Contact Forms (3)
    { id: 'contact-1', name: 'Contact 1: Split Form + Details', category: 'contact-forms', component: <Contact1 />, path: 'src/components/contact-forms/Contact1.tsx', desc: 'Split form + contact details panel' },
    { id: 'contact-2', name: 'Contact 2: Centered Narrow Card', category: 'contact-forms', component: <Contact2 />, path: 'src/components/contact-forms/Contact2.tsx', desc: 'Centered narrow form card' },
    { id: 'contact-3', name: 'Contact 3: Newsletter Band', category: 'contact-forms', component: <Contact3 />, path: 'src/components/contact-forms/Contact3.tsx', desc: 'Newsletter signup band with single input + pill button' },

    // Modals (3)
    { id: 'modal-1', name: 'Modal 1: Centered Dialog Form', category: 'modals', component: <Modal1 />, path: 'src/components/modals/Modal1.tsx', desc: 'Centered dialog with form' },
    { id: 'modal-2', name: 'Modal 2: Confirm Two Actions', category: 'modals', component: <Modal2 />, path: 'src/components/modals/Modal2.tsx', desc: 'Confirm dialog with two actions' },
    { id: 'modal-3', name: 'Modal 3: Slide-Over Panel', category: 'modals', component: <Modal3 />, path: 'src/components/modals/Modal3.tsx', desc: 'Slide-over panel from right with detail rows' },

    // Media (3)
    { id: 'media-1', name: 'Media 1: Full-Width Caption', category: 'media', component: <Media1 />, path: 'src/components/media/Media1.tsx', desc: 'Full-width image with micro-label caption' },
    { id: 'media-2', name: 'Media 2: 2x2 Image Grid', category: 'media', component: <Media2 />, path: 'src/components/media/Media2.tsx', desc: '2x2 image grid' },
    { id: 'media-3', name: 'Media 3: Video Player Plate', category: 'media', component: <Media3 />, path: 'src/components/media/Media3.tsx', desc: 'Video-player style plate with play button' },

    // FAQs (3)
    { id: 'faq-1', name: 'Faq 1: Hairline Divided Rows', category: 'faqs', component: <Faq1 />, path: 'src/components/faqs/Faq1.tsx', desc: 'Hairline-divided question rows with plus icon' },
    { id: 'faq-2', name: 'Faq 2: Two-Column FAQ', category: 'faqs', component: <Faq2 />, path: 'src/components/faqs/Faq2.tsx', desc: 'Two-column FAQ' },
    { id: 'faq-3', name: 'Faq 3: Numbered List', category: 'faqs', component: <Faq3 />, path: 'src/components/faqs/Faq3.tsx', desc: 'Numbered FAQ list' },

    // CTAs (3)
    { id: 'cta-1', name: 'Cta 1: Centered Big Heading', category: 'ctas', component: <Cta1 />, path: 'src/components/ctas/Cta1.tsx', desc: 'Centered big heading + pill button' },
    { id: 'cta-2', name: 'Cta 2: Split CTA Band', category: 'ctas', component: <Cta2 />, path: 'src/components/ctas/Cta2.tsx', desc: 'Split CTA with image' },
    { id: 'cta-3', name: 'Cta 3: Minimal Micro-Label', category: 'ctas', component: <Cta3 />, path: 'src/components/ctas/Cta3.tsx', desc: 'Minimal micro-label + single button band' },

    // Stats (3)
    { id: 'stat-1', name: 'Stat 1: 4-Column Big Number', category: 'stats', component: <Stat1 />, path: 'src/components/stats/Stat1.tsx', desc: '4-column big-number row with hairline dividers' },
    { id: 'stat-2', name: 'Stat 2: Progress Hairlines', category: 'stats', component: <Stat2 />, path: 'src/components/stats/Stat2.tsx', desc: 'Numbers with progress hairlines' },
    { id: 'stat-3', name: 'Stat 3: Bordered Panel Strip', category: 'stats', component: <Stat3 />, path: 'src/components/stats/Stat3.tsx', desc: 'Stats strip inside a bordered panel' },
  ];

  const categories = [
    'All',
    'navbar',
    'heroes',
    'feature-grids',
    'pricing',
    'testimonials',
    'blog-cards',
    'footers',
    'contact-forms',
    'modals',
    'media',
    'faqs',
    'ctas',
    'stats'
  ];

  const filteredComponents = componentsList.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.path.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f6f8fa] text-[#0a0e12] font-sans antialiased selection:bg-[#0f4c45] selection:text-white">
      {/* Top Header */}
      <header className="border-b border-[#e2e8f0] bg-[#f6f8fa]/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0a0e12] flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-[#0a0e12]">VERITAS</span>
              <span className="text-[11px] text-[#5b6b76] block tracking-widest uppercase">Institutional Design System (44 Elements)</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-block font-mono text-[#5b6b76]">STYLE: QUIET INSTITUTIONAL PRECISION</span>
            <div className="px-3 py-1.5 rounded-full bg-[#0f4c45] text-white font-medium">
              44 / 44 Components Ready
            </div>
          </div>
        </div>
      </header>

      {/* Hero Intro */}
      <section className="py-16 px-6 border-b border-[#e2e8f0] bg-white">
        <div className="max-w-6xl mx-auto text-center max-w-3xl">
          <span className="text-xs font-medium tracking-[0.25em] text-[#5b6b76] uppercase mb-4 block">
            VERITAS INSTRUMENTS // DESIGN SYSTEM ARCHIVE
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0a0e12] mb-6 leading-[1.1]">
            44 modular components in quiet institutional precision.
          </h1>
          <p className="text-[#5b6b76] text-sm md:text-base leading-relaxed mb-8">
            Swiss design meets high-end audio instrumentation and private banking. Light off-white backgrounds (`#f6f8fa`), near-black ink (`#0a0e12`), one deep teal-green accent (`#0f4c45`), and precise 1px hairline borders.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5b6b76]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search components by name or file path (e.g. Hero1, Pricing, Navbar)..."
              className="w-full bg-[#f6f8fa] border border-[#e2e8f0] rounded-full pl-11 pr-4 py-3 text-xs text-[#0a0e12] focus:outline-none focus:border-[#0f4c45] shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="sticky top-[73px] z-30 bg-[#f6f8fa]/90 backdrop-blur-md border-b border-[#e2e8f0] py-3 px-6 overflow-x-auto">
        <div className="max-w-6xl mx-auto flex items-center gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0f4c45] text-white'
                  : 'bg-white border border-[#e2e8f0] text-[#5b6b76] hover:text-[#0a0e12]'
              }`}
            >
              {cat.toUpperCase()} {cat === 'All' ? `(${componentsList.length})` : `(${componentsList.filter(c => c.category === cat).length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Component Gallery Grid */}
      <main className="max-w-6xl mx-auto py-12 px-6 space-y-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-[#0a0e12]">
              {selectedCategory === 'All' ? 'All 44 Components' : `${selectedCategory.toUpperCase()} Components`}
            </h2>
            <p className="text-xs text-[#5b6b76] mt-0.5">Showing {filteredComponents.length} self-contained modules</p>
          </div>
        </div>

        <div className="space-y-12">
          {filteredComponents.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-sm"
            >
              {/* Card Header */}
              <div className="px-6 py-4 bg-[#f6f8fa] border-b border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#0f4c45] uppercase">{item.path}</span>
                  <h3 className="text-base font-medium text-[#0a0e12]">{item.name}</h3>
                  <p className="text-xs text-[#5b6b76]">{item.desc}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActivePreview(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#e2e8f0] text-xs font-medium text-[#0a0e12] hover:bg-[#f1f4f8] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#0f4c45]" />
                    <span>Inspect / Full View</span>
                  </button>
                </div>
              </div>

              {/* Rendered Live Component */}
              <div className="p-4 md:p-8 overflow-x-auto bg-[#f6f8fa]/50">
                <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden shadow-sm">
                  {item.component}
                </div>
              </div>
            </div>
          ))}

          {filteredComponents.length === 0 && (
            <div className="text-center py-20 bg-white border border-[#e2e8f0] rounded-2xl p-8">
              <p className="text-sm text-[#5b6b76] mb-2">No components found matching "{searchQuery}" in category "{selectedCategory}".</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-4 py-2 rounded-full bg-[#0f4c45] text-white text-xs font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Full Inspection Modal / Drawer */}
      {activePreview && (
        <div className="fixed inset-0 z-50 bg-[#0a0e12]/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
          <div className="bg-white border border-[#e2e8f0] rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-[#f6f8fa] border-b border-[#e2e8f0] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#0f4c45] font-semibold">{activePreview.path}</span>
                <h3 className="text-lg font-medium text-[#0a0e12]">{activePreview.name}</h3>
              </div>
              <button
                onClick={() => setActivePreview(null)}
                className="w-8 h-8 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-[#5b6b76] hover:text-[#0a0e12]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-[#f6f8fa]/50 space-y-6">
              <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden p-4">
                <div className="text-xs font-mono text-[#5b6b76] mb-3 uppercase tracking-wider">Live Rendered View</div>
                {activePreview.component}
              </div>

              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 space-y-3">
                <div className="text-xs font-mono text-[#5b6b76] uppercase tracking-wider">Component Metadata</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-[#f6f8fa] rounded-lg border border-[#e2e8f0]">
                    <span className="text-[#5b6b76] block mb-1">File Location</span>
                    <span className="font-mono text-[#0a0e12] font-semibold">{activePreview.path}</span>
                  </div>
                  <div className="p-3 bg-[#f6f8fa] rounded-lg border border-[#e2e8f0]">
                    <span className="text-[#5b6b76] block mb-1">Category</span>
                    <span className="font-mono text-[#0f4c45] font-semibold uppercase">{activePreview.category}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-[#f6f8fa] border-t border-[#e2e8f0] flex items-center justify-between">
              <span className="text-xs text-[#5b6b76]">Veritas Design System // Self-Contained Module</span>
              <button
                onClick={() => setActivePreview(null)}
                className="px-5 py-2 rounded-full bg-[#0f4c45] text-white text-xs font-medium hover:bg-[#0c3d37]"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#f6f8fa] border-t border-[#e2e8f0] py-12 px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-3 text-xs text-[#5b6b76]">
          <div className="font-medium text-[#0a0e12]">VERITAS INSTRUMENTS AG — INSTITUTIONAL DESIGN SYSTEM</div>
          <p>44 unique self-contained React + Tailwind components adhering to quiet institutional precision.</p>
          <div>&copy; {new Date().getFullYear()} Veritas Instruments. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
