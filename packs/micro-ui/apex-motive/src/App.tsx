import React, { useState } from 'react';
import { Zap, Cpu, Shield, ArrowRight, Layers, Eye, Code2, Check, RefreshCw } from 'lucide-react';

// Navbar imports
import { Navbar1 } from './components/navbar/Navbar1';
import { Navbar2 } from './components/navbar/Navbar2';
import { Navbar3 } from './components/navbar/Navbar3';
import { Navbar4 } from './components/navbar/Navbar4';

// Heroes imports
import { Hero1 } from './components/heroes/Hero1';
import { Hero2 } from './components/heroes/Hero2';
import { Hero3 } from './components/heroes/Hero3';
import { Hero4 } from './components/heroes/Hero4';
import { Hero5 } from './components/heroes/Hero5';

// Feature Grids imports
import { FeatureGrid1 } from './components/feature-grids/FeatureGrid1';
import { FeatureGrid2 } from './components/feature-grids/FeatureGrid2';
import { FeatureGrid3 } from './components/feature-grids/FeatureGrid3';
import { FeatureGrid4 } from './components/feature-grids/FeatureGrid4';

// Pricing imports
import { Pricing1 } from './components/pricing/Pricing1';
import { Pricing2 } from './components/pricing/Pricing2';
import { Pricing3 } from './components/pricing/Pricing3';
import { Pricing4 } from './components/pricing/Pricing4';

// Testimonials imports
import { Testimonial1 } from './components/testimonials/Testimonial1';
import { Testimonial2 } from './components/testimonials/Testimonial2';
import { Testimonial3 } from './components/testimonials/Testimonial3';

// Blog Cards imports
import { BlogCard1 } from './components/blog-cards/BlogCard1';
import { BlogCard2 } from './components/blog-cards/BlogCard2';
import { BlogCard3 } from './components/blog-cards/BlogCard3';
import { BlogCard4 } from './components/blog-cards/BlogCard4';

// Footers imports
import { Footer1 } from './components/footers/Footer1';
import { Footer2 } from './components/footers/Footer2';
import { Footer3 } from './components/footers/Footer3';
import { Footer4 } from './components/footers/Footer4';

// Contact Forms imports
import { ContactForm1 } from './components/contact-forms/ContactForm1';
import { ContactForm2 } from './components/contact-forms/ContactForm2';
import { ContactForm3 } from './components/contact-forms/ContactForm3';

// Modals imports
import { Modal1 } from './components/modals/Modal1';
import { Modal2 } from './components/modals/Modal2';
import { Modal3 } from './components/modals/Modal3';

// Media imports
import { Media1 } from './components/media/Media1';
import { Media2 } from './components/media/Media2';
import { Media3 } from './components/media/Media3';

// FAQs imports
import { Faq1 } from './components/faqs/Faq1';
import { Faq2 } from './components/faqs/Faq2';
import { Faq3 } from './components/faqs/Faq3';

// CTAs imports
import { Cta1 } from './components/ctas/Cta1';
import { Cta2 } from './components/ctas/Cta2';
import { Cta3 } from './components/ctas/Cta3';

// Stats imports
import { Stat1 } from './components/stats/Stat1';
import { Stat2 } from './components/stats/Stat2';
import { Stat3 } from './components/stats/Stat3';
import { Stat4 } from './components/stats/Stat4';

// Content Section imports
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

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('content');
  const [activeComponent, setActiveComponent] = useState<{ cat: string; id: number } | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'content', label: 'CONTENT SECTIONS', count: 15 },
    { id: 'all', label: 'ALL 59 COMPONENTS', count: 59 },
    { id: 'navbar', label: 'NAVBARS', count: 4 },
    { id: 'heroes', label: 'HEROES', count: 5 },
    { id: 'feature-grids', label: 'FEATURE GRIDS', count: 4 },
    { id: 'pricing', label: 'PRICING', count: 4 },
    { id: 'testimonials', label: 'TESTIMONIALS', count: 3 },
    { id: 'blog-cards', label: 'BLOG CARDS', count: 4 },
    { id: 'footers', label: 'FOOTERS', count: 4 },
    { id: 'contact-forms', label: 'CONTACT FORMS', count: 3 },
    { id: 'modals', label: 'MODALS', count: 3 },
    { id: 'media', label: 'MEDIA', count: 3 },
    { id: 'faqs', label: 'FAQS', count: 3 },
    { id: 'ctas', label: 'CTAS', count: 3 },
    { id: 'stats', label: 'STATS', count: 4 },
  ];

  const handleCopyCode = (name: string) => {
    navigator.clipboard.writeText(`// APEX MOTIVE DESIGN SYSTEM // Component: ${name}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#101114] text-white selection:bg-[#ff5a1f] selection:text-black">
      {/* Top Banner Header */}
      <header className="border-b border-[#272a33] bg-[#16181d] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ff5a1f] clip-corner flex items-center justify-center font-bold text-black text-xl">
              A
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tighter text-white block">APEX MOTIVE</span>
              <span className="font-mono-spec text-[10px] text-[#ff5a1f] tracking-widest block">APEX MACHINE PERFORMANCE // 59 COMPONENTS</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block font-mono-spec text-xs text-neutral-400">
              SYSTEM STATUS: <span className="text-[#ff5a1f]">ONLINE // v4.8</span>
            </div>
            <button 
              onClick={() => setActiveCategory('all')}
              className="bg-[#ff5a1f] text-black font-extrabold text-xs px-5 py-2.5 clip-corner hover:bg-white transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>VIEW ALL 59</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Intro Banner */}
      <section className="py-16 bg-carbon border-b border-[#272a33] relative overflow-hidden text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-extrabold text-[15vw] text-white/[0.02] uppercase tracking-tighter">
            APEX-SYSTEM
          </span>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="font-mono-spec text-xs text-[#ff5a1f] tracking-widest block mb-2">// COMPLETE WEBSITE DESIGN SYSTEM</span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            APEX MACHINE PERFORMANCE
          </h1>
          <p className="font-mono-spec text-xs md:text-sm text-neutral-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            59 fully self-contained React + Tailwind components (44 core UI + 15 editorial &amp; technical content architectures) in one consistent visual language.
          </p>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <div className="border-b border-[#272a33] bg-[#16181d] sticky top-20 z-40 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 py-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setActiveComponent(null); }}
              className={`font-mono-spec text-xs px-4 py-2 clip-corner transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${activeCategory === cat.id ? 'bg-[#ff5a1f] text-black font-bold shadow-[0_0_15px_rgba(255,90,31,0.2)]' : 'bg-[#101114] text-neutral-300 border border-[#272a33] hover:border-[#ff5a1f]'}`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 clip-corner ${activeCategory === cat.id ? 'bg-black text-[#ff5a1f]' : 'bg-[#16181d] text-neutral-500'}`}>{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Component Browser View */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {(activeCategory === 'all' || activeCategory === 'navbar') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 01</span>
                <h2 className="font-display font-extrabold text-3xl text-white">NAVBARS (4)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/navbar/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Navbar1.tsx (Minimal bar with wordmark + links + CTA)</div><Navbar1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Navbar2.tsx (Model selector dropdown in clipped panel)</div><Navbar2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Navbar3.tsx (Split header with vertical text accent)</div><Navbar3 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Navbar4.tsx (Hamburger opening full-screen grid menu)</div><Navbar4 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'heroes') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 02</span>
                <h2 className="font-display font-extrabold text-3xl text-white">HEROES (5)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/heroes/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Hero1.tsx (Cinematic centered product stage + watermark + spec strip)</div><Hero1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Hero2.tsx (Left-aligned headline + clipped CTA + docked spec panel)</div><Hero2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Hero3.tsx (Full-bleed dark stage with corner data readouts)</div><Hero3 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Hero4.tsx (Hero with bottom control bar cells)</div><Hero4 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Hero5.tsx (Split hero with vertical margin index)</div><Hero5 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'feature-grids') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 03</span>
                <h2 className="font-display font-extrabold text-3xl text-white">FEATURE GRIDS (4)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/feature-grids/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">FeatureGrid1.tsx (3-column panels with hexagonal chips)</div><FeatureGrid1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">FeatureGrid2.tsx (Numbered feature rows with oversized faint numerals)</div><FeatureGrid2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">FeatureGrid3.tsx (Alternating media-spec rows with clipped panels)</div><FeatureGrid3 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">FeatureGrid4.tsx (2x2 grid with crosshair dividers)</div><FeatureGrid4 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'pricing') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 04</span>
                <h2 className="font-display font-extrabold text-3xl text-white">PRICING SECTIONS (4)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/pricing/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Pricing1.tsx (3-tier dark panels with popular orange ring)</div><Pricing1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Pricing2.tsx (Configurator-style pricing with option rows)</div><Pricing2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Pricing3.tsx (Single centered price readout panel)</div><Pricing3 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Pricing4.tsx (Comparison table in mono rows)</div><Pricing4 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'testimonials') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 05</span>
                <h2 className="font-display font-extrabold text-3xl text-white">TESTIMONIALS (3)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/testimonials/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Testimonial1.tsx (Large condensed quote with orange index)</div><Testimonial1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Testimonial2.tsx (Quote panels in grid with readouts)</div><Testimonial2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Testimonial3.tsx (Single featured quote with watermark numeral)</div><Testimonial3 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'blog-cards') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 06</span>
                <h2 className="font-display font-extrabold text-3xl text-white">BLOG CARDS (4)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/blog-cards/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">BlogCard1.tsx (3-column articles with mono dates)</div><BlogCard1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">BlogCard2.tsx (Featured story + technical rows)</div><BlogCard2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">BlogCard3.tsx (Archive as indexed register)</div><BlogCard3 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">BlogCard4.tsx (Article header with watermark title treatment)</div><BlogCard4 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'footers') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 07</span>
                <h2 className="font-display font-extrabold text-3xl text-white">FOOTERS (4)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/footers/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Footer1.tsx (Deep black band with condensed links)</div><Footer1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Footer2.tsx (Spec-sheet footer with readout columns)</div><Footer2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Footer3.tsx (Minimal indexed footer)</div><Footer3 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Footer4.tsx (Big watermark wordmark footer)</div><Footer4 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'contact-forms') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 08</span>
                <h2 className="font-display font-extrabold text-3xl text-white">CONTACT FORMS (3)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/contact-forms/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">ContactForm1.tsx (Split form + dealer locator spec panel)</div><ContactForm1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">ContactForm2.tsx (Centered dark form with mono input labels)</div><ContactForm2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">ContactForm3.tsx (Newsletter strip with clipped input + orange CTA)</div><ContactForm3 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'modals') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 09</span>
                <h2 className="font-display font-extrabold text-3xl text-white">MODALS & DIALOGS (3)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/modals/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Modal1.tsx (Centered clipped-corner dialog)</div><Modal1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Modal2.tsx (Confirm as control-bar choice)</div><Modal2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner relative overflow-hidden min-h-[540px] transform-gpu"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Modal3.tsx (Slide-over configurator panel with option rows)</div><Modal3 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'media') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 10</span>
                <h2 className="font-display font-extrabold text-3xl text-white">MEDIA SECTIONS (3)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/media/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Media1.tsx (Full-width cinematic plate with corner readouts)</div><Media1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Media2.tsx (Gallery grid with index numbers)</div><Media2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Media3.tsx (Video plate with angular play control)</div><Media3 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'faqs') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 11</span>
                <h2 className="font-display font-extrabold text-3xl text-white">FAQ ACCORDIONS (3)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/faqs/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Faq1.tsx (Mono rows with triangular toggles)</div><Faq1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Faq2.tsx (Two-column technical FAQ)</div><Faq2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Faq3.tsx (Numbered FAQ with faint oversized indices)</div><Faq3 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'ctas') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 12</span>
                <h2 className="font-display font-extrabold text-3xl text-white">CALL TO ACTIONS (3)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/ctas/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Cta1.tsx (Huge condensed statement + orange CTA on black)</div><Cta1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Cta2.tsx (Split CTA with product stage)</div><Cta2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Cta3.tsx (Minimal index + single action band)</div><Cta3 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'stats') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 13</span>
                <h2 className="font-display font-extrabold text-3xl text-white">STAT SECTIONS (4)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/stats/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Stat1.tsx (Mono readout rows with unit annotations)</div><Stat1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Stat2.tsx (Performance numbers with faint watermark numerals)</div><Stat2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Stat3.tsx (Spec table stats)</div><Stat3 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Stat4.tsx (Control-bar stat strip)</div><Stat4 /></div>
            </div>
          </div>
        )}

        {(activeCategory === 'all' || activeCategory === 'content') && (
          <div className="mb-20 space-y-12">
            <div className="border-b border-[#272a33] pb-4 flex justify-between items-end">
              <div>
                <span className="font-mono-spec text-xs text-[#ff5a1f]">CATEGORY // 14</span>
                <h2 className="font-display font-extrabold text-3xl text-white">CONTENT SECTIONS (15)</h2>
              </div>
              <span className="font-mono-spec text-xs text-neutral-500">src/components/content/</span>
            </div>
            <div className="space-y-16">
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content1.tsx — THE LEDGER</div><Content1 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content2.tsx — THE SPIRAL STAIRCASE</div><Content2 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content3.tsx — THE INTERLOCK</div><Content3 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content4.tsx — THE EXPLODED DIAGRAM</div><Content4 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content5.tsx — THE SPLIT SCREEN ARGUMENT</div><Content5 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content6.tsx — THE MARGIN BOOK</div><Content6 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content7.tsx — THE FILM STRIP</div><Content7 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content8.tsx — THE PINBOARD</div><Content8 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content9.tsx — THE INDEX</div><Content9 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content10.tsx — THE INTERRUPTION</div><Content10 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content11.tsx — THE SPECIMEN GRID</div><Content11 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content12.tsx — THE THREADED NARRATIVE</div><Content12 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content13.tsx — THE COLOPHON</div><Content13 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content14.tsx — THE CASCADE</div><Content14 /></div>
              <div className="border border-[#272a33] p-4 bg-[#16181d] clip-corner"><div className="text-[10px] font-mono-spec text-[#ff5a1f] mb-2">Content15.tsx — THE INVERTED VAULT</div><Content15 /></div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#272a33] bg-[#16181d] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center font-mono-spec text-xs text-neutral-400">
          <div>APEX MOTIVE DESIGN SYSTEM // 59 COMPONENTS COMPLETED</div>
          <div className="text-[#ff5a1f] mt-2 md:mt-0">SYSTEM READY // ALL CHANNELS NOMINAL</div>
        </div>
      </footer>
    </div>
  );
}
