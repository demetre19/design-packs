/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Terminal, Cpu, Activity, Layers, ArrowRight, Shield, Zap } from 'lucide-react';

import * as Navbars from './components/navbar';
import * as Heroes from './components/heroes';
import * as FeatureGrids from './components/feature-grids';
import * as Pricings from './components/pricing';
import * as Testimonials from './components/testimonials';
import * as BlogCards from './components/blog-cards';
import * as Footers from './components/footers';
import * as ContactForms from './components/contact-forms';
import * as Modals from './components/modals';
import * as Medias from './components/media';
import * as Faqs from './components/faqs';
import * as Ctas from './components/ctas';
import * as Stats from './components/stats';
import * as ContentSections from './components/content';

const CATEGORIES = [
  {
    id: 'content',
    label: 'Content Sections',
    count: 15,
    components: [
      ContentSections.Content1,
      ContentSections.Content2,
      ContentSections.Content3,
      ContentSections.Content4,
      ContentSections.Content5,
      ContentSections.Content6,
      ContentSections.Content7,
      ContentSections.Content8,
      ContentSections.Content9,
      ContentSections.Content10,
      ContentSections.Content11,
      ContentSections.Content12,
      ContentSections.Content13,
      ContentSections.Content14,
      ContentSections.Content15,
    ],
  },
  { id: 'navbar', label: 'Navbar / Headers', count: 4, components: [Navbars.Navbar1, Navbars.Navbar2, Navbars.Navbar3, Navbars.Navbar4] },
  { id: 'heroes', label: 'Heroes', count: 5, components: [Heroes.Hero1, Heroes.Hero2, Heroes.Hero3, Heroes.Hero4, Heroes.Hero5] },
  { id: 'feature-grids', label: 'Feature Grids', count: 4, components: [FeatureGrids.FeatureGrid1, FeatureGrids.FeatureGrid2, FeatureGrids.FeatureGrid3, FeatureGrids.FeatureGrid4] },
  { id: 'pricing', label: 'Pricing Programs', count: 4, components: [Pricings.Pricing1, Pricings.Pricing2, Pricings.Pricing3, Pricings.Pricing4] },
  { id: 'testimonials', label: 'Testimonials', count: 3, components: [Testimonials.Testimonial1, Testimonials.Testimonial2, Testimonials.Testimonial3] },
  { id: 'blog-cards', label: 'Test Logs & Editorial', count: 4, components: [BlogCards.BlogCard1, BlogCards.BlogCard2, BlogCards.BlogCard3, BlogCards.BlogCard4] },
  { id: 'footers', label: 'Footers', count: 4, components: [Footers.Footer1, Footers.Footer2, Footers.Footer3, Footers.Footer4] },
  { id: 'contact-forms', label: 'Contact & Inquiry', count: 3, components: [ContactForms.Contact1, ContactForms.Contact2, ContactForms.Contact3] },
  { id: 'modals', label: 'Modals & Dialogs', count: 3, components: [Modals.Modal1, Modals.Modal2, Modals.Modal3] },
  { id: 'media', label: 'Media & Stage Plates', count: 3, components: [Medias.Media1, Medias.Media2, Medias.Media3] },
  { id: 'faqs', label: 'Technical FAQs', count: 3, components: [Faqs.Faq1, Faqs.Faq2, Faqs.Faq3] },
  { id: 'ctas', label: 'Call to Actions', count: 3, components: [Ctas.Cta1, Ctas.Cta2, Ctas.Cta3] },
  { id: 'stats', label: 'Telemetry Stats', count: 4, components: [Stats.Stats1, Stats.Stats2, Stats.Stats3, Stats.Stats4] },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('content');
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const [showAllInCategory, setShowAllInCategory] = useState(false);

  const currentCat = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];
  const ActiveComponent = currentCat.components[activeComponentIndex] || currentCat.components[0];

  return (
    <div className="min-h-screen bg-[#0c0d0f] text-white font-mono selection:bg-[#ffd500] selection:text-black">
      {/* Top Banner Bar */}
      <header className="border-b border-[#22262f] bg-[#0c0d0f]/90 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#ffd500] rotate-45" />
          <span className="font-extrabold tracking-widest text-sm">KERSHAW DYNAMICS // DYNO CELL TELEMETRY LAB</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
          <span>RUN: <strong className="text-[#ffd500]">07/40</strong></span>
          <span>RPM: <strong className="text-white">8,400</strong></span>
          <span>TORQUE: <strong className="text-[#ffd500]">612 NM</strong></span>
          <span>STATUS: <strong className="text-white">NOMINAL</strong></span>
        </div>
      </header>

      {/* Hero Showcase Introduction */}
      <section className="border-b border-[#22262f] py-16 px-6 bg-gradient-to-b from-[#14161a]/40 to-[#0c0d0f]">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#14161a] border border-[#262c36] px-3 py-1 text-xs text-[#ffd500] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>DESIGN SYSTEM // 59 SELF-CONTAINED REACT COMPONENTS</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-4">
            DYNO CELL <span className="text-[#ffd500]">TELEMETRY LAB.</span>
          </h1>
          <p className="text-zinc-400 font-sans text-sm md:text-base max-w-2xl mb-8">
            Complete high-performance motorsport engineering design system. Instrument-black aesthetics, anodized gunmetal panels, phosphor-yellow sensor accents, and live mono telemetry readouts.
          </p>

          {/* Category Navigation Tabs */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#22262f]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveComponentIndex(0);
                }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors border ${
                  activeCategory === cat.id
                    ? 'bg-[#ffd500] text-black border-[#ffd500]'
                    : 'bg-[#14161a] text-zinc-300 border-[#262c36] hover:border-[#ffd500]'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Component Index Bar */}
      <section className="bg-[#14161a] border-b border-[#22262f] px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-[#ffd500]" />
            <span className="text-xs font-bold text-zinc-300 uppercase">
              SELECT {currentCat.label.toUpperCase()} COMPONENT:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {currentCat.components.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setShowAllInCategory(false);
                  setActiveComponentIndex(idx);
                }}
                className={`w-8 h-8 text-xs font-bold border transition-colors ${
                  !showAllInCategory && activeComponentIndex === idx
                    ? 'bg-[#ffd500] text-black border-[#ffd500]'
                    : 'bg-[#0c0d0f] text-zinc-400 border-[#262c36] hover:border-[#ffd500]'
                }`}
              >
                {String(idx + 1).padStart(2, '0')}
              </button>
            ))}
            <button
              onClick={() => setShowAllInCategory((prev) => !prev)}
              className={`px-3 h-8 text-xs font-bold border transition-colors uppercase ${
                showAllInCategory
                  ? 'bg-[#ffd500] text-black border-[#ffd500]'
                  : 'bg-[#0c0d0f] text-zinc-300 border-[#262c36] hover:border-[#ffd500]'
              }`}
            >
              {showAllInCategory ? 'SINGLE VIEW' : `STACK ALL (${currentCat.count})`}
            </button>
          </div>
        </div>
      </section>

      {/* Live Component Preview Frame */}
      <main className="py-8 bg-[#0c0d0f] min-h-[600px]">
        <div className="max-w-6xl mx-auto px-6 mb-4 flex items-center justify-between text-xs text-zinc-500">
          <span>
            PREVIEWING: {currentCat.label.toUpperCase()} //{' '}
            {showAllInCategory ? `ALL ${currentCat.count} VARIANTS` : `VARIANT ${String(activeComponentIndex + 1).padStart(2, '0')}`}
          </span>
          <span className="text-[#ffd500]">ACTIVE RENDER</span>
        </div>
        {showAllInCategory ? (
          <div className="space-y-8">
            {currentCat.components.map((Comp, idx) => (
              <div key={idx} className="border border-[#262c36] bg-[#0c0d0f] overflow-hidden">
                <div className="bg-[#14161a] border-b border-[#22262f] px-6 py-2 text-[10px] tracking-[0.25em] text-[#ffd500] uppercase">
                  COMPONENT {String(idx + 1).padStart(2, '0')} / {String(currentCat.count).padStart(2, '0')}
                </div>
                <Comp />
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-[#262c36] bg-[#0c0d0f] shadow-2xl overflow-hidden">
            <ActiveComponent />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#22262f] bg-[#0c0d0f] py-12 px-6 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>KERSHAW DYNAMICS // CELL 04 TELEMETRY LAB</span>
          <span>59 SELF-CONTAINED COMPONENTS RENDERED</span>
          <span className="text-[#ffd500]">SYSTEM NOMINAL</span>
        </div>
      </footer>
    </div>
  );
}
