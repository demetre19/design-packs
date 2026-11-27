import React, { useState } from 'react';
import { 
  Layers, Search, Eye, Code, ArrowUpRight, Check, Moon, Sun, 
  Menu, X, Sparkles, BookOpen, ChevronRight, Terminal 
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All 44 Components', count: 44 },
    { id: 'navbar', name: 'Navbars', count: 4 },
    { id: 'heroes', name: 'Heroes', count: 5 },
    { id: 'feature-grids', name: 'Feature Grids', count: 4 },
    { id: 'pricing', name: 'Pricing & Tiers', count: 4 },
    { id: 'testimonials', name: 'Testimonials', count: 3 },
    { id: 'blog-cards', name: 'Blog & Articles', count: 4 },
    { id: 'footers', name: 'Footers', count: 4 },
    { id: 'contact-forms', name: 'Contact Forms', count: 3 },
    { id: 'modals', name: 'Modals', count: 3 },
    { id: 'media', name: 'Media & Plates', count: 3 },
    { id: 'faqs', name: 'FAQs', count: 3 },
    { id: 'ctas', name: 'Call to Actions', count: 3 },
    { id: 'stats', name: 'Statistics', count: 3 },
  ];

  const allComponents = [
    { id: 'Navbar1', name: 'Navbar 1 // Masthead', category: 'navbar', component: <Navbar1 /> },
    { id: 'Navbar2', name: 'Navbar 2 // Inverted Black Bar', category: 'navbar', component: <Navbar2 /> },
    { id: 'Navbar3', name: 'Navbar 3 // Minimal Issue Number', category: 'navbar', component: <Navbar3 /> },
    { id: 'Navbar4', name: 'Navbar 4 // Asterisk Split', category: 'navbar', component: <Navbar4 /> },

    { id: 'Hero1', name: 'Hero 1 // Cover Story', category: 'heroes', component: <Hero1 /> },
    { id: 'Hero2', name: 'Hero 2 // Split Black & White', category: 'heroes', component: <Hero2 /> },
    { id: 'Hero3', name: 'Hero 3 // Oversized Numeral & Strips', category: 'heroes', component: <Hero3 /> },
    { id: 'Hero4', name: 'Hero 4 // Editorial Spread', category: 'heroes', component: <Hero4 /> },
    { id: 'Hero5', name: 'Hero 5 // Overlapping Plates', category: 'heroes', component: <Hero5 /> },

    { id: 'FeatureGrid1', name: 'Feature Grid 1 // Trend Cards', category: 'feature-grids', component: <FeatureGrid1 /> },
    { id: 'FeatureGrid2', name: 'Feature Grid 2 // Collection Margins', category: 'feature-grids', component: <FeatureGrid2 /> },
    { id: 'FeatureGrid3', name: 'Feature Grid 3 // Editorial Essays', category: 'feature-grids', component: <FeatureGrid3 /> },
    { id: 'FeatureGrid4', name: 'Feature Grid 4 // Asymmetric Lookbook', category: 'feature-grids', component: <FeatureGrid4 /> },

    { id: 'Pricing1', name: 'Pricing 1 // Editorial Plates', category: 'pricing', component: <Pricing1 /> },
    { id: 'Pricing2', name: 'Pricing 2 // Inverted Table', category: 'pricing', component: <Pricing2 /> },
    { id: 'Pricing3', name: 'Pricing 3 // Spotlight Annual', category: 'pricing', component: <Pricing3 /> },
    { id: 'Pricing4', name: 'Pricing 4 // Archive Cards', category: 'pricing', component: <Pricing4 /> },

    { id: 'Testimonial1', name: 'Testimonial 1 // Grotesque Quote', category: 'testimonials', component: <Testimonial1 /> },
    { id: 'Testimonial2', name: 'Testimonial 2 // Press Wall', category: 'testimonials', component: <Testimonial2 /> },
    { id: 'Testimonial3', name: 'Testimonial 3 // Black Panel Quote', category: 'testimonials', component: <Testimonial3 /> },

    { id: 'BlogCard1', name: 'Blog Card 1 // Standard Article', category: 'blog-cards', component: <BlogCard1 /> },
    { id: 'BlogCard2', name: 'Blog Card 2 // Index List Numerals', category: 'blog-cards', component: <BlogCard2 /> },
    { id: 'BlogCard3', name: 'Blog Card 3 // Mixed Scale Grid', category: 'blog-cards', component: <BlogCard3 /> },
    { id: 'BlogCard4', name: 'Blog Card 4 // Overlapping Story', category: 'blog-cards', component: <BlogCard4 /> },

    { id: 'Footer1', name: 'Footer 1 // Masthead Colophon', category: 'footers', component: <Footer1 /> },
    { id: 'Footer2', name: 'Footer 2 // Inverted Black Footer', category: 'footers', component: <Footer2 /> },
    { id: 'Footer3', name: 'Footer 3 // Dense Small Copy Grid', category: 'footers', component: <Footer3 /> },
    { id: 'Footer4', name: 'Footer 4 // Newsletter Huge Bold', category: 'footers', component: <Footer4 /> },

    { id: 'ContactForm1', name: 'Contact Form 1 // Editorial Inquiry', category: 'contact-forms', component: <ContactForm1 /> },
    { id: 'ContactForm2', name: 'Contact Form 2 // Split Black & Form', category: 'contact-forms', component: <ContactForm2 /> },
    { id: 'ContactForm3', name: 'Contact Form 3 // Minimal Numeral', category: 'contact-forms', component: <ContactForm3 /> },

    { id: 'Modal1', name: 'Modal 1 // Article Preview', category: 'modals', component: <Modal1 /> },
    { id: 'Modal2', name: 'Modal 2 // Subscription Panel', category: 'modals', component: <Modal2 /> },
    { id: 'Modal3', name: 'Modal 3 // Image Zoom Caption', category: 'modals', component: <Modal3 /> },

    { id: 'Media1', name: 'Media 1 // Lookbook Plate', category: 'media', component: <Media1 /> },
    { id: 'Media2', name: 'Media 2 // Mixed-Ratio Gallery', category: 'media', component: <Media2 /> },
    { id: 'Media3', name: 'Media 3 // Feature Plate Numeral', category: 'media', component: <Media3 /> },

    { id: 'Faq1', name: 'Faq 1 // Grotesque Accordion', category: 'faqs', component: <Faq1 /> },
    { id: 'Faq2', name: 'Faq 2 // Dense Two-Column', category: 'faqs', component: <Faq2 /> },
    { id: 'Faq3', name: 'Faq 3 // Asterisk Markers', category: 'faqs', component: <Faq3 /> },

    { id: 'Cta1', name: 'Cta 1 // Black Panel Phrase', category: 'ctas', component: <Cta1 /> },
    { id: 'Cta2', name: 'Cta 2 // Editorial Spread', category: 'ctas', component: <Cta2 /> },
    { id: 'Cta3', name: 'Cta 3 // Centered Decorative', category: 'ctas', component: <Cta3 /> },

    { id: 'Stat1', name: 'Stat 1 // Circulation Numerals', category: 'stats', component: <Stat1 /> },
    { id: 'Stat2', name: 'Stat 2 // Alternating Strip', category: 'stats', component: <Stat2 /> },
    { id: 'Stat3', name: 'Stat 3 // Spotlight Half-Panel', category: 'stats', component: <Stat3 /> },
  ];

  const filteredComponents = allComponents.filter(c => {
    const matchesCat = activeCategory === 'all' || c.category === activeCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const copyImport = (id: string) => {
    navigator.clipboard.writeText(`import { ${id} } from '@/components/${getFolder(id)}/${id}';`);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const getFolder = (id: string) => {
    if (id.startsWith('Navbar')) return 'navbar';
    if (id.startsWith('Hero')) return 'heroes';
    if (id.startsWith('FeatureGrid')) return 'feature-grids';
    if (id.startsWith('Pricing')) return 'pricing';
    if (id.startsWith('Testimonial')) return 'testimonials';
    if (id.startsWith('BlogCard')) return 'blog-cards';
    if (id.startsWith('Footer')) return 'footers';
    if (id.startsWith('ContactForm')) return 'contact-forms';
    if (id.startsWith('Modal')) return 'modals';
    if (id.startsWith('Media')) return 'media';
    if (id.startsWith('Faq')) return 'faqs';
    if (id.startsWith('Cta')) return 'ctas';
    if (id.startsWith('Stat')) return 'stats';
    return '';
  };

  return (
    <div className="min-h-screen bg-white text-black font-['Space_Grotesk',sans-serif] selection:bg-black selection:text-white">
      {/* Top Meta Bar */}
      <div className="flex justify-between items-center px-4 py-1 text-[9px] uppercase tracking-widest bg-black text-white font-mono border-b border-white/20">
        <span>VAULT* DESIGN SYSTEM // 44 COMPONENTS</span>
        <span>BLACKLETTER EDITORIAL v1.0</span>
        <span>PARIS // TOKYO</span>
      </div>

      {/* Main Header */}
      <header className="border-b border-black py-12 px-4 bg-white text-black text-center">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-500 block mb-3">PRINT-NATIVE EDITORIAL SYSTEM</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter font-serif-editorial mb-6">
            VAULT<span className="text-zinc-400">*</span>
          </h1>
          <p className="text-xs md:text-sm font-mono text-zinc-700 max-w-2xl mx-auto uppercase tracking-wider mb-8">
            A comprehensive 44-component website design system in stark black-and-white high contrast grotesque typography, designed for independent fashion editorial and creative studios.
          </p>
          <div className="flex flex-wrap justify-center gap-3 font-mono text-xs">
            <span className="border border-black px-3 py-1 bg-zinc-50">44 Self-Contained Components</span>
            <span className="border border-black px-3 py-1 bg-zinc-50">13 Organized Folders</span>
            <span className="border border-black px-3 py-1 bg-zinc-50">Zero Lorem Ipsum</span>
          </div>
        </div>
      </header>

      {/* Navigation Filter Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 whitespace-nowrap transition-colors border ${
                  activeCategory === cat.id 
                    ? 'bg-black text-white border-black font-bold' 
                    : 'bg-white text-black border-black/20 hover:border-black'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="SEARCH COMPONENTS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-black pl-9 pr-4 py-2 text-xs font-mono uppercase outline-none focus:bg-zinc-50"
            />
          </div>
        </div>
      </div>

      {/* Component Showcase Stream */}
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {filteredComponents.length === 0 ? (
          <div className="text-center py-20 border border-black bg-zinc-50">
            <p className="text-sm font-mono uppercase text-zinc-600 mb-2">No components matched your query.</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="text-xs font-mono uppercase underline font-bold">
              Reset Filters*
            </button>
          </div>
        ) : (
          filteredComponents.map((item, idx) => (
            <div key={item.id} className="border-2 border-black bg-white shadow-xl overflow-hidden">
              {/* Component Bar */}
              <div className="bg-black text-white px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs uppercase tracking-widest border-b border-black">
                <div className="flex items-center gap-3">
                  <span className="bg-white text-black px-2 py-0.5 font-bold text-[10px]">[{idx + 1}]</span>
                  <span className="font-bold">{item.name}</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-400 text-[10px]">
                  <span>src/components/{getFolder(item.id)}/{item.id}.tsx</span>
                  <button 
                    onClick={() => copyImport(item.id)}
                    className="flex items-center gap-1 bg-zinc-900 border border-zinc-700 text-white px-3 py-1 hover:bg-zinc-800 transition-colors"
                  >
                    {copied === item.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Code className="w-3.5 h-3.5" />}
                    {copied === item.id ? 'Copied' : 'Copy Import'}
                  </button>
                </div>
              </div>

              {/* Component Render Canvas */}
              <div className="w-full overflow-x-auto bg-white">
                {item.component}
              </div>
            </div>
          ))
        )}
      </main>

      {/* Footer Colophon */}
      <footer className="bg-black text-white border-t border-white/20 py-16 px-4 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-3xl font-black uppercase tracking-tighter block mb-4 font-serif-editorial">VAULT*</span>
            <p className="text-xs font-mono text-zinc-400 leading-relaxed">
              Complete 44-component blackletter editorial design system. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 font-bold">Directory Structure</h4>
            <ul className="space-y-1 text-xs font-mono text-zinc-300">
              <li>/src/components/navbar/ (4)</li>
              <li>/src/components/heroes/ (5)</li>
              <li>/src/components/feature-grids/ (4)</li>
              <li>/src/components/pricing/ (4)</li>
              <li>/src/components/testimonials/ (3)</li>
              <li>/src/components/blog-cards/ (4)</li>
              <li>/src/components/footers/ (4)</li>
              <li>/src/components/contact-forms/ (3)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 font-bold">Metadata</h4>
            <p className="text-xs font-mono text-zinc-300 mb-2">ISSN 2940-1029</p>
            <p className="text-xs font-mono text-zinc-400">Paris // Tokyo // New York</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-zinc-800 mt-12 pt-6 flex justify-between items-center text-[10px] font-mono uppercase text-zinc-500">
          <span>VAULT EDITORIAL DESIGN SYSTEM</span>
          <span>&copy; 2026 ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  );
}
