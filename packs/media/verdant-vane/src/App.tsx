import React, { useState } from 'react';
import { Leaf, Sparkles, Layers, ArrowRight, Check, Eye, Code, Compass, BookOpen } from 'lucide-react';

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

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copied, setCopied] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All 44 Components', count: 44 },
    { id: 'navbars', name: 'Navbars', count: 4 },
    { id: 'heroes', name: 'Heroes', count: 5 },
    { id: 'features', name: 'Feature Grids', count: 4 },
    { id: 'pricing', name: 'Pricing', count: 4 },
    { id: 'testimonials', name: 'Testimonials', count: 3 },
    { id: 'blog', name: 'Blog Cards', count: 4 },
    { id: 'footers', name: 'Footers', count: 4 },
    { id: 'contact', name: 'Contact Forms', count: 3 },
    { id: 'modals', name: 'Modals', count: 3 },
    { id: 'media', name: 'Media', count: 3 },
    { id: 'faqs', name: 'FAQs', count: 3 },
    { id: 'ctas', name: 'CTAs', count: 3 },
    { id: 'stats', name: 'Stats', count: 3 },
  ];

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopied(path);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#122420] flex flex-col font-sans selection:bg-[#2a7a6d] selection:text-[#faf6f0]">
      {/* Master Header */}
      <header className="w-full bg-[#faf6f0] border-b border-[#122420]/15 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1d4f47] flex items-center justify-center text-[#faf6f0]">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl tracking-tight text-[#122420] font-semibold">Verdant & Vane</span>
              <span className="text-xs uppercase tracking-widest text-[#2a7a6d] block font-semibold">Design System — 44 Components</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="hidden md:inline-block text-xs uppercase tracking-widest text-[#122420]/70 bg-[#e8f0ec] px-3 py-1.5 rounded-full">
              Warm Boutique Editorial Style
            </span>
            <a
              href="#catalog"
              className="px-5 py-2.5 rounded-full bg-[#1d4f47] text-[#faf6f0] hover:bg-[#153b34] transition-all shadow-sm flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              <span>Explore Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Intro */}
      <section className="w-full bg-[#e8f0ec] py-16 px-6 border-b border-[#122420]/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faf6f0] text-[#2a7a6d] text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Component System</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#122420] tracking-tight mb-4">
            Boutique Wellness & Clinical Strategy
          </h1>
          <p className="text-lg text-[#122420]/80 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            All 44 self-contained React and Tailwind components rendered in their final editorial state, sharing the same warm cream (#faf6f0), pale sage (#e8f0ec), and deep forest-teal (#1d4f47) visual language.
          </p>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1d4f47] text-[#faf6f0] shadow-md'
                    : 'bg-[#faf6f0] text-[#122420] hover:bg-[#faf6f0]/80 border border-[#122420]/10'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Component Catalog */}
      <main id="catalog" className="flex-1 max-w-7xl w-full mx-auto px-6 py-16 space-y-24">

        {/* NAVBARS */}
        {(activeCategory === 'all' || activeCategory === 'navbars') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 01</span>
                <h2 className="font-serif text-3xl text-[#122420]">Navbars (4 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/navbar/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Navbar1.tsx — Minimal centered links + pill CTA</span>
                  <button onClick={() => handleCopyPath('/src/components/navbar/Navbar1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/navbar/Navbar1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Navbar1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Navbar2.tsx — Split logo-left links-right with hairline divider</span>
                  <button onClick={() => handleCopyPath('/src/components/navbar/Navbar2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/navbar/Navbar2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Navbar2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Navbar3.tsx — Stacked wordmark over full-width link row</span>
                  <button onClick={() => handleCopyPath('/src/components/navbar/Navbar3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/navbar/Navbar3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Navbar3 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Navbar4.tsx — Header with integrated dropdown menu panel</span>
                  <button onClick={() => handleCopyPath('/src/components/navbar/Navbar4.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/navbar/Navbar4.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Navbar4 />
              </div>
            </div>
          </div>
        )}

        {/* HEROES */}
        {(activeCategory === 'all' || activeCategory === 'heroes') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 02</span>
                <h2 className="font-serif text-3xl text-[#122420]">Heroes (5 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/heroes/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Hero1.tsx — Centered micro-label + serif heading + team photo plate</span>
                  <button onClick={() => handleCopyPath('/src/components/heroes/Hero1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/heroes/Hero1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Hero1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Hero2.tsx — Left-aligned headline with founder photo right + two pill CTAs</span>
                  <button onClick={() => handleCopyPath('/src/components/heroes/Hero2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/heroes/Hero2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Hero2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Hero3.tsx — Editorial asymmetric with oversized serif typography</span>
                  <button onClick={() => handleCopyPath('/src/components/heroes/Hero3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/heroes/Hero3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Hero3 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Hero4.tsx — Hero with photo collage under headline</span>
                  <button onClick={() => handleCopyPath('/src/components/heroes/Hero4.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/heroes/Hero4.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Hero4 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Hero5.tsx — Split hero text left, tall warm photo right, client stat strip bottom</span>
                  <button onClick={() => handleCopyPath('/src/components/heroes/Hero5.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/heroes/Hero5.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Hero5 />
              </div>
            </div>
          </div>
        )}

        {/* FEATURE GRIDS */}
        {(activeCategory === 'all' || activeCategory === 'features') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 03</span>
                <h2 className="font-serif text-3xl text-[#122420]">Feature Grids (4 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/feature-grids/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>FeatureGrid1.tsx — 3-column rounded cards with icon and serif title</span>
                  <button onClick={() => handleCopyPath('/src/components/feature-grids/FeatureGrid1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/feature-grids/FeatureGrid1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <FeatureGrid1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>FeatureGrid2.tsx — Alternating zigzag media-text rows with rounded photos</span>
                  <button onClick={() => handleCopyPath('/src/components/feature-grids/FeatureGrid2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/feature-grids/FeatureGrid2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <FeatureGrid2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>FeatureGrid3.tsx — 2x2 grid with teal micro-labels and arrow links</span>
                  <button onClick={() => handleCopyPath('/src/components/feature-grids/FeatureGrid3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/feature-grids/FeatureGrid3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <FeatureGrid3 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>FeatureGrid4.tsx — Numbered 01/02/03 process cards</span>
                  <button onClick={() => handleCopyPath('/src/components/feature-grids/FeatureGrid4.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/feature-grids/FeatureGrid4.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <FeatureGrid4 />
              </div>
            </div>
          </div>
        )}

        {/* PRICING */}
        {(activeCategory === 'all' || activeCategory === 'pricing') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 04</span>
                <h2 className="font-serif text-3xl text-[#122420]">Pricing (4 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/pricing/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Pricing1.tsx — 3-tier rounded cards with popular-highlight ring</span>
                  <button onClick={() => handleCopyPath('/src/components/pricing/Pricing1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/pricing/Pricing1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Pricing1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Pricing2.tsx — Monthly/yearly toggle with two cards</span>
                  <button onClick={() => handleCopyPath('/src/components/pricing/Pricing2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/pricing/Pricing2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Pricing2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Pricing3.tsx — Single centered plan with feature list</span>
                  <button onClick={() => handleCopyPath('/src/components/pricing/Pricing3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/pricing/Pricing3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Pricing3 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Pricing4.tsx — Comparison rows with soft dividers</span>
                  <button onClick={() => handleCopyPath('/src/components/pricing/Pricing4.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/pricing/Pricing4.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Pricing4 />
              </div>
            </div>
          </div>
        )}

        {/* TESTIMONIALS */}
        {(activeCategory === 'all' || activeCategory === 'testimonials') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 05</span>
                <h2 className="font-serif text-3xl text-[#122420]">Testimonials (3 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/testimonials/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Testimonial1.tsx — Large centered serif quote with client photo</span>
                  <button onClick={() => handleCopyPath('/src/components/testimonials/Testimonial1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/testimonials/Testimonial1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Testimonial1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Testimonial2.tsx — Big rounded testimonial cards in a row</span>
                  <button onClick={() => handleCopyPath('/src/components/testimonials/Testimonial2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/testimonials/Testimonial2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Testimonial2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Testimonial3.tsx — 3-column quote cards grid</span>
                  <button onClick={() => handleCopyPath('/src/components/testimonials/Testimonial3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/testimonials/Testimonial3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Testimonial3 />
              </div>
            </div>
          </div>
        )}

        {/* BLOG CARDS */}
        {(activeCategory === 'all' || activeCategory === 'blog') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 06</span>
                <h2 className="font-serif text-3xl text-[#122420]">Blog & Editorial Cards (4 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/blog-cards/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>BlogCard1.tsx — 3-column article cards with rounded image, tag, date</span>
                  <button onClick={() => handleCopyPath('/src/components/blog-cards/BlogCard1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/blog-cards/BlogCard1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <BlogCard1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>BlogCard2.tsx — Featured article large + list of small rows</span>
                  <button onClick={() => handleCopyPath('/src/components/blog-cards/BlogCard2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/blog-cards/BlogCard2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <BlogCard2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>BlogCard3.tsx — Blog archive index with row entries</span>
                  <button onClick={() => handleCopyPath('/src/components/blog-cards/BlogCard3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/blog-cards/BlogCard3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <BlogCard3 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>BlogCard4.tsx — Article reader header with meta row</span>
                  <button onClick={() => handleCopyPath('/src/components/blog-cards/BlogCard4.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/blog-cards/BlogCard4.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <BlogCard4 />
              </div>
            </div>
          </div>
        )}

        {/* FOOTERS */}
        {(activeCategory === 'all' || activeCategory === 'footers') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 07</span>
                <h2 className="font-serif text-3xl text-[#122420]">Footers (4 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/footers/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Footer1.tsx — Multi-column link grid on deep forest-teal dark band</span>
                  <button onClick={() => handleCopyPath('/src/components/footers/Footer1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/footers/Footer1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Footer1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Footer2.tsx — Minimal centered footer</span>
                  <button onClick={() => handleCopyPath('/src/components/footers/Footer2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/footers/Footer2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Footer2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Footer3.tsx — Footer with newsletter signup row</span>
                  <button onClick={() => handleCopyPath('/src/components/footers/Footer3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/footers/Footer3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Footer3 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Footer4.tsx — Big-wordmark footer with contact details</span>
                  <button onClick={() => handleCopyPath('/src/components/footers/Footer4.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/footers/Footer4.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Footer4 />
              </div>
            </div>
          </div>
        )}

        {/* CONTACT FORMS */}
        {(activeCategory === 'all' || activeCategory === 'contact') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 08</span>
                <h2 className="font-serif text-3xl text-[#122420]">Contact Forms (3 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/contact-forms/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>ContactForm1.tsx — Split form + contact details panel with photo</span>
                  <button onClick={() => handleCopyPath('/src/components/contact-forms/ContactForm1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/contact-forms/ContactForm1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <ContactForm1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>ContactForm2.tsx — Centered narrow form card on sage band</span>
                  <button onClick={() => handleCopyPath('/src/components/contact-forms/ContactForm2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/contact-forms/ContactForm2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <ContactForm2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>ContactForm3.tsx — Newsletter signup band with single input + pill button</span>
                  <button onClick={() => handleCopyPath('/src/components/contact-forms/ContactForm3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/contact-forms/ContactForm3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <ContactForm3 />
              </div>
            </div>
          </div>
        )}

        {/* MODALS */}
        {(activeCategory === 'all' || activeCategory === 'modals') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 09</span>
                <h2 className="font-serif text-3xl text-[#122420]">Modals & Dialogs (3 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/modals/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Modal1.tsx — Centered dialog with form, large rounded corners</span>
                  <button onClick={() => handleCopyPath('/src/components/modals/Modal1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/modals/Modal1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Modal1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Modal2.tsx — Confirm dialog with two actions</span>
                  <button onClick={() => handleCopyPath('/src/components/modals/Modal2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/modals/Modal2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Modal2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Modal3.tsx — Slide-over panel from right with detail rows</span>
                  <button onClick={() => handleCopyPath('/src/components/modals/Modal3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/modals/Modal3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Modal3 />
              </div>
            </div>
          </div>
        )}

        {/* MEDIA */}
        {(activeCategory === 'all' || activeCategory === 'media') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 10</span>
                <h2 className="font-serif text-3xl text-[#122420]">Media (3 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/media/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Media1.tsx — Full-width rounded photo with micro-label caption</span>
                  <button onClick={() => handleCopyPath('/src/components/media/Media1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/media/Media1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Media1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Media2.tsx — Photo collage grid with mixed rounded sizes</span>
                  <button onClick={() => handleCopyPath('/src/components/media/Media2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/media/Media2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Media2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Media3.tsx — Video-player style plate with play button</span>
                  <button onClick={() => handleCopyPath('/src/components/media/Media3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/media/Media3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Media3 />
              </div>
            </div>
          </div>
        )}

        {/* FAQS */}
        {(activeCategory === 'all' || activeCategory === 'faqs') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 11</span>
                <h2 className="font-serif text-3xl text-[#122420]">FAQs (3 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/faqs/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Faq1.tsx — Soft-divided question rows with plus icon</span>
                  <button onClick={() => handleCopyPath('/src/components/faqs/Faq1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/faqs/Faq1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Faq1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Faq2.tsx — Two-column FAQ</span>
                  <button onClick={() => handleCopyPath('/src/components/faqs/Faq2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/faqs/Faq2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Faq2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Faq3.tsx — Numbered FAQ list</span>
                  <button onClick={() => handleCopyPath('/src/components/faqs/Faq3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/faqs/Faq3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Faq3 />
              </div>
            </div>
          </div>
        )}

        {/* CTAS */}
        {(activeCategory === 'all' || activeCategory === 'ctas') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 12</span>
                <h2 className="font-serif text-3xl text-[#122420]">Call to Actions (3 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/ctas/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Cta1.tsx — Deep forest-teal full-width band with cream serif heading</span>
                  <button onClick={() => handleCopyPath('/src/components/ctas/Cta1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/ctas/Cta1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Cta1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Cta2.tsx — Split CTA with rounded photo</span>
                  <button onClick={() => handleCopyPath('/src/components/ctas/Cta2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/ctas/Cta2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Cta2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Cta3.tsx — Minimal micro-label + single button band on sage</span>
                  <button onClick={() => handleCopyPath('/src/components/ctas/Cta3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/ctas/Cta3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Cta3 />
              </div>
            </div>
          </div>
        )}

        {/* STATS */}
        {(activeCategory === 'all' || activeCategory === 'stats') && (
          <div className="space-y-8">
            <div className="border-b border-[#122420]/15 pb-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#2a7a6d] font-semibold">Category 13</span>
                <h2 className="font-serif text-3xl text-[#122420]">Stats & Metrics (3 components)</h2>
              </div>
              <span className="text-xs text-[#122420]/60 font-mono">src/components/stats/</span>
            </div>

            <div className="space-y-12">
              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Stat1.tsx — 4-column big-number row with soft dividers</span>
                  <button onClick={() => handleCopyPath('/src/components/stats/Stat1.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/stats/Stat1.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Stat1 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Stat2.tsx — Numbers in rounded cards</span>
                  <button onClick={() => handleCopyPath('/src/components/stats/Stat2.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/stats/Stat2.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Stat2 />
              </div>

              <div className="border border-[#122420]/15 rounded-[32px] overflow-hidden bg-[#faf6f0] shadow-sm">
                <div className="bg-[#e8f0ec] px-6 py-3 border-b border-[#122420]/10 flex justify-between items-center text-xs font-mono text-[#122420]/70">
                  <span>Stat3.tsx — Stats strip inside a sage panel</span>
                  <button onClick={() => handleCopyPath('/src/components/stats/Stat3.tsx')} className="hover:text-[#1d4f47] font-semibold">
                    {copied === '/src/components/stats/Stat3.tsx' ? 'Copied path!' : 'Copy path'}
                  </button>
                </div>
                <Stat3 />
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1d4f47] text-[#faf6f0] py-12 px-6 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#faf6f0] flex items-center justify-center text-[#1d4f47]">
              <Leaf className="w-4 h-4" />
            </div>
            <span className="font-serif text-lg">Verdant & Vane Design System</span>
          </div>
          <p className="text-xs uppercase tracking-widest text-[#faf6f0]/70">
            44 Self-Contained React & Tailwind Components — Warm Boutique Editorial
          </p>
        </div>
      </footer>
    </div>
  );
}
